import { google } from "googleapis";

// Configuration for Google Sheets Integration
const CLIENT_EMAIL = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
const PRIVATE_KEY = process.env.GOOGLE_SHEETS_PRIVATE_KEY;
const SPREADSHEET_ID = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;

const auth = (CLIENT_EMAIL && PRIVATE_KEY) 
  ? new google.auth.JWT(
      CLIENT_EMAIL,
      undefined,
      PRIVATE_KEY.replace(/\\n/g, "\n"),
      ["https://www.googleapis.com/auth/spreadsheets"]
    )
  : null;

const sheets = auth ? google.sheets({ version: "v4", auth }) : null;

/**
 * Appends a new row of lead data to the spreadsheet.
 */
export async function appendToSheet(data: any[]) {
  if (!sheets || !SPREADSHEET_ID) {
    console.warn("⚠️ Google Sheets Sync Forbidden: Credentials or Spreadsheet ID missing.");
    return { success: false, error: "Missing Config" };
  }

  try {
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: "Sheet1!A1", // Default to Sheet1
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [data],
      },
    });
    
    console.log("📊 Google Sheets: Row appended successfully", response.status);
    return { success: true, entry: response.data };
  } catch (error: any) {
    // Extensive Error Telemetry
    const status = error.response?.status || "Unknown";
    const message = error.response?.data?.error?.message || error.message;
    console.error(`❌ Google Sheets Sync FAILED [Status ${status}]:`, message);
    
    if (status === 403) {
      console.error("💡 TIP: Ensure the sheet is SHARED with the Service Account email.");
    }
    
    if (status === 404) {
      console.error("💡 TIP: Check if SPREADSHEET_ID is correct or if 'Sheet1' exists.");
    }

    throw { status, message, raw: error.response?.data };
  }
}

/**
 * Initializes the spreadsheet with professional headers if it's currently empty.
 */
export async function initializeSheet() {
  if (!sheets || !SPREADSHEET_ID) {
    console.warn("Google Sheets initialization skipped: Credentials missing.");
    return false;
  }

  const headers = [
    "Timestamp", 
    "Full Name", 
    "Mobile Number", 
    "Email Address", 
    "Expected Visit", 
    "Investment Goal",
    "Source URL", 
    "Plot/Interest", 
    "Meta Info"
  ];

  try {
    // Check if sheet has data
    const check = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: "A1:A1",
    });

    if (!check.data.values || check.data.values.length === 0) {
      await sheets.spreadsheets.values.update({
        spreadsheetId: SPREADSHEET_ID,
        range: "A1",
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [headers],
        },
      });
      console.log("✅ Google Sheet initialized with headers.");
      return true;
    }
    return false;
  } catch (error) {
    console.error("Sheet Initialization Error:", error);
    return false;
  }
}

/**
 * Reads all rows from the specified spreadsheet.
 */
export async function getSheetData() {
  if (!sheets || !SPREADSHEET_ID) return [];

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: "A:Z",
    });

    const rows = response.data.values;
    if (!rows || rows.length <= 1) return [];

    const headers = rows[0];
    return rows.slice(1).map((row) => {
      const entry: any = {};
      headers.forEach((header, index) => {
        if (header) {
          entry[header.toLowerCase().replace(/\s+/g, "_")] = row[index];
        }
      });
      return entry;
    });
  } catch (error) {
    console.error("Google Sheets Read Error:", error);
    return [];
  }
}
