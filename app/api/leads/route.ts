import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const runtime = "nodejs";

const LEDGER_PATH = path.join(process.cwd(), "data", "leads-ledger.json");

export async function GET(request: NextRequest) {
  try {
    // 1. PRIMARY SOURCE: Local Ledger (Secured Hub)
    let allLeads = [];
    if (fs.existsSync(LEDGER_PATH)) {
      try {
        const data = fs.readFileSync(LEDGER_PATH, "utf8");
        allLeads = JSON.parse(data);
      } catch (err) {
        console.error("Local ledger parsing failed:", err);
      }
    }

    // Filter out rows that don't have a name and return newest first
    const filteredLeads = allLeads.filter((l: any) => l.name);

    return NextResponse.json(filteredLeads.reverse());
  } catch (error) {
    console.error("Failed to read leads source:", error);
    return NextResponse.json({ error: "Vault Synchronisation Error" }, { status: 500 });
  }
}
