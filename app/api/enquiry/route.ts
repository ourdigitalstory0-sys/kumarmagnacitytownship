import fs from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";
import { appendToSheet } from "@/lib/google-sheets";
import nodemailer from "nodemailer";

// Switch to Node.js runtime to allow filesystem and SMTP access
export const runtime = "nodejs";

const LEDGER_PATH = path.join(process.cwd(), "data", "leads-ledger.json");

// Configure the "Simple Sender" Transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.resend.com",
  port: Number(process.env.SMTP_PORT) || 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // 1. Validate Required Fields
    if (!data.name || !data.phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const leadEntry = {
      ...data,
      timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      source_url: data.source_url || request.headers.get("referer") || "Direct"
    };

    // Tier 1: Professional Google Sheets Ledger (PRIMARY)
    let sheetSync = { success: false, detail: "Not Attempted" };
    try {
      const sheetResult = await appendToSheet([
        leadEntry.timestamp,
        leadEntry.name,
        leadEntry.phone,
        data.email || "No Email",
        leadEntry.source_url,
        leadEntry.plot_id || "General",
        leadEntry.source_meta || "Direct Portal"
      ]);
      sheetSync = { success: true, detail: "Synced Successfully" };
    } catch (sheetErr: any) {
      console.error("Google Sheets Sync Failed:", sheetErr.message);
      sheetSync = { success: false, detail: sheetErr.message || "Unknown API Error" };
    }

    // Tier 2: Local Ledger (Failsafe for developer Mac only)
    const isVercel = process.env.VERCEL === "1";
    let localLedger = "Skipped (Cloud)";
    if (!isVercel) {
      try {
        if (fs.existsSync(path.dirname(LEDGER_PATH))) {
          const currentData = JSON.parse(fs.readFileSync(LEDGER_PATH, "utf8"));
          currentData.push(leadEntry);
          fs.writeFileSync(LEDGER_PATH, JSON.stringify(currentData, null, 2));
          localLedger = "Written Successfully";
        }
      } catch (fsErr) {
        console.error("Local Ledger Writing Failed:", fsErr);
        localLedger = "Write Failure";
      }
    }

    // Tier 3: Simple Server-Side Email Sender (Primary Path)
    let emailStatus = "Not Sent";
    try {
      if (process.env.SMTP_USER && process.env.SMTP_PASS) {
        await transporter.sendMail({
          from: `"Kumar Magnacity Vault" <${process.env.SMTP_USER}>`,
          to: "propsmartrealty@gmail.com",
          subject: `🚨 NEW LEAD: ${leadEntry.name}`,
          html: `
            <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px; max-width: 600px;">
              <h2 style="color: #6366f1; margin-bottom: 20px;">Sovereign Lead Alert</h2>
              <div style="background: #f8fafc; padding: 20px; border-radius: 12px; border: 1px solid #e2e8f0;">
                <p style="margin: 10px 0;"><strong>Name:</strong> ${leadEntry.name}</p>
                <p style="margin: 10px 0;"><strong>Phone:</strong> ${leadEntry.phone}</p>
                <p style="margin: 10px 0;"><strong>Source:</strong> ${leadEntry.source_url}</p>
                <p style="margin: 10px 0;"><strong>Meta:</strong> ${leadEntry.source_meta || "Direct Portal"}</p>
                <p style="margin: 10px 0;"><strong>Plot Interest:</strong> ${leadEntry.plot_id || "General Enquiry"}</p>
              </div>
              <p style="font-size: 11px; color: #64748b; margin-top: 25px; text-align: center;">Delivered via Sovereign Node Relay • ProSmart Realty Dashboard</p>
            </div>
          `,
        });
        emailStatus = "Delivered";
      } else {
        console.warn("SMTP Credentials missing.");
        emailStatus = "Credentials Missing";
      }
    } catch (mailErr: any) {
      console.error("Mail Relay Failure:", mailErr.message);
      emailStatus = `Relay Failure: ${mailErr.message}`;
    }

    return NextResponse.json({ 
      success: true, 
      vault: "secured",
      telemetry: {
        google_sheets: sheetSync,
        local_ledger: localLedger,
        email: emailStatus
      }
    });

  } catch (error) {
    console.error("Critical API error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
