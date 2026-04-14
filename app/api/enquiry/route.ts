import fs from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { EnquirySchema } from "@/types/enquiry";

// Switch to Node.js runtime to allow filesystem access
export const runtime = "nodejs";

const LEDGER_PATH = path.join(process.cwd(), "data", "leads-ledger.json");
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
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

    // --- STRATEGY: DUAL REDUNDANCY (Google Sheets Scrapped) ---
    
    // Tier 1: Resend Email Integration (Primary)
    let emailStatus = "Not Sent";
    if (process.env.RESEND_API_KEY) {
      try {
        const { data: resendData, error: resendError } = await resend.emails.send({
          from: "Kumar Magnacity Leads <onboarding@resend.dev>", // Replace with verified domain in production
          to: ["propsmartrealty@gmail.com"],
          subject: `🚨 NEW LEAD: ${leadEntry.name} (${leadEntry.intent})`,
          html: `
            <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
              <h2 style="color: #C9A227;">New Sovereign Enquiry</h2>
              <p><strong>Name:</strong> ${leadEntry.name}</p>
              <p><strong>Phone:</strong> ${leadEntry.phone}</p>
              <p><strong>Email:</strong> ${leadEntry.email || 'N/A'}</p>
              <p><strong>Goal:</strong> ${leadEntry.intent}</p>
              <p><strong>Visit:</strong> ${leadEntry.timing}</p>
              <hr/>
              <p style="font-size: 12px; color: #666;">Source: ${leadEntry.source_url}</p>
              <p style="font-size: 12px; color: #666;">Timestamp: ${leadEntry.timestamp}</p>
            </div>
          `,
        });

        if (resendError) throw resendError;
        emailStatus = "Delivered via Resend";
      } catch (err: any) {
        console.error("Resend Error:", err.message);
        emailStatus = `Resend Failure: ${err.message}`;
      }
    } else {
      // Fallback to Formspree if Resend is not configured
      try {
        const FORMSPREE_ENDPOINT = process.env.FORMSPREE_ENDPOINT || "https://formspree.io/f/mqakqkqy";
        await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...leadEntry, _subject: `🚨 LEAD: ${leadEntry.name}` }),
        });
        emailStatus = "Delivered via Formspree Fallback";
      } catch (err) {
        emailStatus = "All mail relays failed";
      }
    }

    // Tier 2: Local JSON Ledger (Failsafe for developer Mac only)
    const isVercel = process.env.VERCEL === "1";
    let localLedger = "Skipped (Cloud)";
    if (!isVercel) {
      try {
        if (!fs.existsSync(LEDGER_PATH)) {
          fs.writeFileSync(LEDGER_PATH, JSON.stringify([], null, 2));
        }
        const currentData = JSON.parse(fs.readFileSync(LEDGER_PATH, "utf8"));
        currentData.push(leadEntry);
        fs.writeFileSync(LEDGER_PATH, JSON.stringify(currentData, null, 2));
        localLedger = "Secured Locally";
      } catch (fsErr) {
        localLedger = "Local Write Failure";
      }
    }

    return NextResponse.json({ 
      success: true, 
      vault: "secured",
      telemetry: {
        local_ledger: localLedger,
        email: emailStatus
      }
    });

  } catch (error) {
    console.error("Critical API error:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}

