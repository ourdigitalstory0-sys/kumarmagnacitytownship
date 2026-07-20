'use server';

import fs from 'fs';
import path from 'path';

// Define the absolute path to the local JSON ledger
const LEDGER_PATH = path.join(process.cwd(), 'data', 'leads.json');

// Hardcoded Passcode for MVP Admin Security
const MASTER_PASSCODE = process.env.ADMIN_PASSCODE || 'SOVEREIGN2026';

export async function fetchLeads(passcode: string) {
  try {
    if (passcode !== MASTER_PASSCODE) {
      return { success: false, error: 'Unauthorized: Invalid Passcode.' };
    }

    if (!fs.existsSync(LEDGER_PATH)) {
      return { success: true, data: [] };
    }

    const fileData = fs.readFileSync(LEDGER_PATH, 'utf8');
    const leads = JSON.parse(fileData);
    
    // Reverse to show newest first
    return { success: true, data: leads.reverse() };
  } catch (error) {
    console.error("Failed to read ledger:", error);
    return { success: false, error: 'Internal Server Error while reading ledger.' };
  }
}
