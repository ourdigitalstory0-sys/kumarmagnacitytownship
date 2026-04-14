import fs from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";
import { appendToSheet } from "@/lib/google-sheets";
// Switch to Node.js runtime to allow filesystem access
export const runtime = "nodejs";

const LEDGER_PATH = path.join(process.cwd(), "data", "leads-ledger.json");
const FORMSPREE_ENDPOINT = process.env.FORMSPREE_ENDPOINT;

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

    // Tier 3: Robust Formspree Email Relay (New Strategy)
    let emailStatus = "Not Sent";
    try {
      if (FORMSPREE_ENDPOINT) {
        const formspreeResponse = await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: leadEntry.name,
            phone: leadEntry.phone,
            email: data.email || "No Email",
            source: leadEntry.source_url,
            plot: leadEntry.plot_id || "General",
            meta: leadEntry.source_meta || "Direct Portal",
            _subject: `🚨 NEW LEAD: ${leadEntry.name} (Kumar Magnacity)`
          }),
        });

        if (formspreeResponse.ok) {
          emailStatus = "Delivered via Formspree";
        } else {
          const fsError = await formspreeResponse.json();
          emailStatus = `Formspree Error: ${fsError.error || "Unknown"}`;
        }
      } else {
        console.warn("FORMSPREE_ENDPOINT missing.");
        emailStatus = "Config Missing";
      }
    } catch (mailErr: any) {
      console.error("Formspree Relay Failure:", mailErr.message);
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
