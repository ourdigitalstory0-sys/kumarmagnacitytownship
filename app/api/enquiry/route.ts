import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { EnquirySchema } from "@/types/enquiry";

// Switch to Node.js runtime to allow filesystem access
export const runtime = "nodejs";

const LEDGER_PATH = path.join(process.cwd(), "data", "leads-ledger.json");

export async function POST(request: NextRequest) {
  const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
  
  try {
    const body = await request.json();
    
    // 1. Validate Schema with Zod
    const validation = EnquirySchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json({ 
        success: false, 
        error: "Validation failed", 
        details: validation.error.format() 
      }, { status: 400 });
    }

    const data = validation.data;
    const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    // 2. Prep Entry
    const leadEntry = {
      ...data,
      timestamp,
      source_url: data.source_url || request.headers.get("referer") || "Direct Portal"
    };

    // --- STRATEGY: TRIPLE-TIER REDUNDANCY (Resend -> Formspree -> SMTP) ---
    
    // Tier 1: Resend Email Integration (Primary)
    let emailStatus = "Not Attempted";
    let resendErrorDetail = null;

    if (resend) {
      try {
        const { data: resendData, error: resendError } = await resend.emails.send({
          from: "Kumar Magnacity <onboarding@resend.dev>", 
          to: ["vikas.yewle@gmail.com"],
          replyTo: leadEntry.email || undefined,
          subject: `🚨 NEW LEAD: ${leadEntry.name} (${leadEntry.intent})`,
          html: `
            <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
              <h2 style="color: #C9A227;">New Sovereign Enquiry</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0;"><strong>Name:</strong></td><td>${leadEntry.name}</td></tr>
                <tr><td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0;"><strong>Phone:</strong></td><td>${leadEntry.phone}</td></tr>
                <tr><td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0;"><strong>Email:</strong></td><td>${leadEntry.email || 'N/A'}</td></tr>
                <tr><td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0;"><strong>Goal:</strong></td><td>${leadEntry.intent}</td></tr>
                <tr><td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0;"><strong>Visit:</strong></td><td>${leadEntry.timing}</td></tr>
              </table>
              <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;"/>
              <p style="font-size: 11px; color: #999;">Source: ${leadEntry.source_url} | ID: ${leadEntry.form_id}</p>
              <p style="font-size: 11px; color: #999;">Timestamp: ${leadEntry.timestamp}</p>
            </div>
          `,
        });

        if (resendError) {
          resendErrorDetail = resendError;
          throw new Error(resendError.message);
        }
        emailStatus = "Delivered (Resend)";
      } catch (err: any) {
        console.error("Resend Pipeline Failed:", err.message);
        emailStatus = `Resend Failure: ${err.message}`;
        resendErrorDetail = err;
      }
    } else {
      emailStatus = "Skipped (No Resend Key)";
    }

    // Tier 2: Dual-Relay Delivery (Redundant Fallback)
    let relayStatus = "Not Attempted";
    
    if (emailStatus.includes("Failure") || emailStatus === "Skipped (No Resend Key)") {
      try {
        const TARGET_EMAIL = "vikas.yewle@gmail.com";
        
        // Parallel Delivery Attempt
        const [fsResponse, fSubmitResponse] = await Promise.allSettled([
           // Attempt 1: Formspree Direct
           fetch(`https://formspree.io/f/${TARGET_EMAIL}`, {
              method: "POST",
              headers: { "Content-Type": "application/json", "Accept": "application/json" },
              body: JSON.stringify({ ...leadEntry, _subject: `🚨 K-MAGNA LEAD (Formspree): ${leadEntry.name}` }),
           }),
           // Attempt 2: FormSubmit Direct
           fetch(`https://formsubmit.co/ajax/${TARGET_EMAIL}`, {
              method: "POST",
              headers: { "Content-Type": "application/json", "Accept": "application/json" },
              body: JSON.stringify({ 
                ...leadEntry, 
                _subject: `🚨 K-MAGNA LEAD (FormSubmit): ${leadEntry.name}`,
                _captcha: "false",
                _template: "table"
              }),
           })
        ]);

        const formsspreeSuccess = fsResponse.status === "fulfilled" && fsResponse.value.ok;
        const formSubmitSuccess = fSubmitResponse.status === "fulfilled" && fSubmitResponse.value.ok;

        if (formsspreeSuccess || formSubmitSuccess) {
           relayStatus = `Delivered (${formsspreeSuccess ? 'Formspree' : ''}${formsspreeSuccess && formSubmitSuccess ? '+' : ''}${formSubmitSuccess ? 'FormSubmit' : ''})`;
        } else {
           relayStatus = "Relay Failed (Check Verification)";
        }
      } catch (err: any) {
        relayStatus = `Relay Error: ${err.message}`;
      }
    }

    // Tier 3: Nodemailer SMTP (Tertiary Technical Fallback)
    let smtpStatus = "Not Attempted";
    let smtpErrorDetail = null;

    if ((relayStatus.includes("Rejected") || relayStatus === "Not Attempted") && process.env.SMTP_HOST) {
       try {
          const transporter = nodemailer.createTransport({
             host: process.env.SMTP_HOST,
             port: Number(process.env.SMTP_PORT) || 465,
             secure: true,
             auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
             },
          });

          await transporter.sendMail({
             from: `"Kumar Magnacity Vault" <${process.env.SMTP_USER}>`,
             to: "vikas.yewle@gmail.com",
             subject: `🚨 BACKUP LEAD: ${leadEntry.name}`,
             text: `New Lead: ${leadEntry.name}\nPhone: ${leadEntry.phone}\nEmail: ${leadEntry.email || 'N/A'}\nIntent: ${leadEntry.intent}\nVisit: ${leadEntry.timing}`,
             html: `<b>New Lead Captured via SMTP Backup</b><br/><br/>Name: ${leadEntry.name}<br/>Phone: ${leadEntry.phone}<br/>Email: ${leadEntry.email || 'N/A'}<br/>Intent: ${leadEntry.intent}<br/>Visit: ${leadEntry.timing}`,
          });
          smtpStatus = "Delivered (SMTP)";
       } catch (err: any) {
          smtpStatus = `SMTP Error: ${err.message}`;
          smtpErrorDetail = err;
       }
    }

    // Tier 4: Local JSON Ledger (Failsafe)
    const isVercel = process.env.VERCEL === "1";
    let localLedgerStatus = "Skipped (Cloud)";
    if (!isVercel) {
      try {
        if (!fs.existsSync(LEDGER_PATH)) {
          fs.writeFileSync(LEDGER_PATH, JSON.stringify([], null, 2));
        }
        const currentData = JSON.parse(fs.readFileSync(LEDGER_PATH, "utf8"));
        currentData.push(leadEntry);
        fs.writeFileSync(LEDGER_PATH, JSON.stringify(currentData, null, 2));
        localLedgerStatus = "Secured Locally";
      } catch (fsErr) {
        localLedgerStatus = "Local Write Failure";
      }
    }

    return NextResponse.json({ 
      success: true, 
      vault: "secured",
      telemetry: {
        email: emailStatus,
        email_error: resendErrorDetail,
        relay: relayStatus,
        relay_error: relayErrorDetail,
        smtp: smtpStatus,
        smtp_error: smtpErrorDetail,
        ledger: localLedgerStatus
      }
    });

  } catch (error: any) {
    console.error("Critical API error:", error);
    return NextResponse.json({ 
      success: false, 
      error: error.message || "Internal Server Error",
      trace: process.env.NODE_ENV === 'development' ? error.stack : undefined
    }, { status: 500 });
  }
}



