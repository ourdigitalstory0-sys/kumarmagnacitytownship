import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const runtime = "nodejs";

const LEDGER_PATH = path.join(process.cwd(), "data", "leads-ledger.json");

export async function GET(request: NextRequest) {
  try {
    // Basic security: Check for a simple header or token if needed
    // For now, we assume this is a hidden internal route
    
    if (!fs.existsSync(LEDGER_PATH)) {
      return NextResponse.json([]);
    }

    const data = fs.readFileSync(LEDGER_PATH, "utf8");
    const leads = JSON.parse(data);

    // Return leads sorted by NEWEST first
    return NextResponse.json(leads.reverse());
  } catch (error) {
    console.error("Failed to read leads ledger:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
