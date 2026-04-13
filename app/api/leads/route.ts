import { NextRequest, NextResponse } from "next/server";
import { getSheetData } from "@/lib/google-sheets";
import fs from "fs";
import path from "path";

export const runtime = "nodejs";

const LEDGER_PATH = path.join(process.cwd(), "data", "leads-ledger.json");

export async function GET(request: NextRequest) {
  try {
    // 1. PRIMARY SOURCE: Google Sheets (Professional Cloud Data)
    const sheetsLeads = await getSheetData();

    // 2. FALLBACK SOURCE: Local Ledger (For local development/Mac only)
    let localLeads = [];
    if (fs.existsSync(LEDGER_PATH)) {
      try {
        const data = fs.readFileSync(LEDGER_PATH, "utf8");
        localLeads = JSON.parse(data);
      } catch (err) {
        console.error("Local ledger parsing failed:", err);
      }
    }

    // Combine both sources (De-duplicate if needed, but for now we just merge)
    // Filter out rows that don't have a name
    const allLeads = [...sheetsLeads, ...localLeads].filter(l => l.name);

    // Return leads sorted by NEWEST first
    return NextResponse.json(allLeads.reverse());
  } catch (error) {
    console.error("Failed to read leads source:", error);
    return NextResponse.json({ error: "Vault Synchronisation Error" }, { status: 500 });
  }
}
