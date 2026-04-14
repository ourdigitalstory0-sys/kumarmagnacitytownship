import { google } from "googleapis";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: ".env.local" });

const CLIENT_EMAIL = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
const PRIVATE_KEY = process.env.GOOGLE_SHEETS_PRIVATE_KEY;
const SPREADSHEET_ID = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;

console.log("Testing with email:", CLIENT_EMAIL);
console.log("Sheet ID:", SPREADSHEET_ID);

if (!CLIENT_EMAIL || !PRIVATE_KEY || !SPREADSHEET_ID) {
  console.error("❌ Missing required environment variables.");
  process.exit(1);
}

const auth = new google.auth.JWT(
  CLIENT_EMAIL,
  undefined,
  PRIVATE_KEY.replace(/\\n/g, "\n"),
  ["https://www.googleapis.com/auth/spreadsheets"]
);

const sheets = google.sheets({ version: "v4", auth });

async function test() {
  try {
    console.log("Attempting to read sheet...");
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: "A1:Z1",
    });
    console.log("✅ Connection Successful!");
    console.log("Header data:", response.data.values);
  } catch (error) {
    console.error("❌ Google Sheets Error:");
    if (error.response) {
      console.error("Status:", error.response.status);
      console.error("Data:", JSON.stringify(error.response.data, null, 2));
    } else {
      console.error(error.message);
    }
  }
}

test();
