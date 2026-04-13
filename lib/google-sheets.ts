import { google } from "googleapis";

// Configuration for Google Sheets Integration
const CLIENT_EMAIL = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
const PRIVATE_KEY = process.env.GOOGLE_SHEETS_PRIVATE_KEY;
const SPREADSHEET_ID = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;

if (!CLIENT_EMAIL || !PRIVATE_KEY) {
  console.warn("Google Sheets credentials missing. leads will not be synced to spreadsheet.");
}

// Format the private key (handles both escaped \n and raw newlines)
const formattedKey = PRIVATE_KEY?.replace(/\\n/g, "\n");

const auth = new google.auth.JWT(
  CLIENT_EMAIL,
  undefined,
  formattedKey,
  ["https://www.googleapis.com/auth/spreadsheets"]
);

const sheets = google.sheets({ version: "v4", auth });

export async function appendToSheet(data: any[]) {
  if (!SPREADSHEET_ID || !CLIENT_EMAIL || !PRIVATE_KEY) return;

  try {
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: "A1", // Starts at top, Google automatically finds the next empty row
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [data],
      },
    });
    return response.data;
  } catch (error) {
    console.error("Google Sheets Sync Error:", error);
    throw error;
  }
}

/**
 * Reads all rows from the specified spreadsheet.
 */
export async function getSheetData() {
  if (!SPREADSHEET_ID || !CLIENT_EMAIL || !PRIVATE_KEY) return [];

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: "A:Z", // Get all columns
    });

    const rows = response.data.values;
    if (!rows || rows.length <= 1) return [];

    // Map headers to objects
    const headers = rows[0];
    return rows.slice(1).map((row) => {
      const entry: any = {};
      headers.forEach((header, index) => {
        entry[header.toLowerCase().replace(/\s+/g, "_")] = row[index];
      });
      return entry;
    });
  } catch (error) {
    console.error("Google Sheets Read Error:", error);
    return [];
  }
}
