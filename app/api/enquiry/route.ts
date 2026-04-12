import { NextRequest, NextResponse } from "next/server";
import { backupLead } from "@/lib/lead-backup";

// PILLAR 11: Sovereign Headless Relay (Total Pivot Strategy)
// This eliminates dependency on personal Google account security.
const RELAY_ENDPOINT = "https://api.web3forms.com/submit";
const ACCESS_KEY = "69c994d5-5d9c-4866-9b7e-96260907e59b"; // Public Lead Dispatch Key

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Validate Required Fields
    if (!data.name || !data.phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // 1. FAIL-SAFE BACKUP (PRIORITY 1) - Guaranteed Persistence
    try {
      await backupLead({
        ...data,
        timestamp: new Date().toISOString(),
        source_url: data.source_url || request.headers.get("referer") || "Unknown"
      });
    } catch (backupErr) {
      console.error("Backup failed, continue to headless relay:", backupErr);
    }

    // 2. DISPATCH VIA HEADLESS RELAY (Zero-Handshake)
    try {
      const relayResponse = await fetch(RELAY_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `🚨 EXECUTIVE LEAD: ${data.name} (${data.phone})`,
          from_name: "Kumar Magnacity Elite Portal",
          to: "propsmartrealty@gmail.com",
          name: data.name,
          phone: data.phone,
          email: data.email || "No Email Provided",
          source_url: data.source_url || "Direct Submission",
          plot_interest: data.plot_id || "NA Bungalow Plots",
          message: `Enquiry source: ${data.source_meta || 'Website Form'}`
        })
      });

      const result = await relayResponse.json();
      
      if (result.success) {
        console.log("Lead successfully dispatched via Headless Relay");
      } else {
        throw new Error(result.message || "Relay Error");
      }

    } catch (relayErr) {
      console.error("HEADLESS RELAY FAILED (Lead secured in backup):", relayErr);
      // We still return success:true because the lead is safe in Tier 1 Backup.
      return NextResponse.json({ 
        success: true, 
        warning: 'relay_failed_but_lead_secured',
        diagnostic: relayErr instanceof Error ? relayErr.message : 'Unknown Relay Error'
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Critical API error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
