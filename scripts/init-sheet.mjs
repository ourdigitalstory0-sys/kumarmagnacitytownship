/**
 * Sovereign Google Sheet Initializer
 * Sets up professional headers for the KUMAR MAGNACITY lead ledger.
 */

import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const envPath = path.join(__dirname, '../.env.local');

// Manual .env.local parser to avoid extra dependencies
const envContent = fs.existsSync(envPath) ? fs.readFileSync(envPath, 'utf8') : '';
const env = Object.fromEntries(
  envContent.split('\n')
    .filter(line => line && !line.startsWith('#'))
    .map(line => {
      const [key, ...val] = line.split('=');
      return [key.trim(), val.join('=').trim().replace(/^"(.*)"$/, '$1')];
    })
);

const CLIENT_EMAIL = env.GOOGLE_SHEETS_CLIENT_EMAIL;
const PRIVATE_KEY = env.GOOGLE_SHEETS_PRIVATE_KEY;
const SPREADSHEET_ID = env.GOOGLE_SHEETS_SPREADSHEET_ID;

const HEADERS = [
  "Timestamp", 
  "Full Name", 
  "Mobile Number", 
  "Email Address", 
  "Source URL", 
  "Plot/Interest", 
  "Meta Info"
];

async function init() {
  console.log('--- Sovereign Sheet Initializer ---');

  if (!CLIENT_EMAIL || !PRIVATE_KEY || !SPREADSHEET_ID) {
    console.error('❌ ERROR: Missing credentials in .env.local');
    console.log('Ensure you have:');
    console.log('  GOOGLE_SHEETS_CLIENT_EMAIL');
    console.log('  GOOGLE_SHEETS_PRIVATE_KEY');
    console.log('  GOOGLE_SHEETS_SPREADSHEET_ID');
    process.exit(1);
  }


  const auth = new google.auth.JWT(
    CLIENT_EMAIL,
    undefined,
    PRIVATE_KEY.replace(/\\n/g, '\n'),
    ['https://www.googleapis.com/auth/spreadsheets']
  );

  const sheets = google.sheets({ version: 'v4', auth });

  try {
    console.log(`Checking Spreadsheet: ${SPREADSHEET_ID}...`);
    
    await sheets.spreadsheets.values.update({
      spreadsheetId: SPREADSHEET_ID,
      range: 'Sheet1!A1',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [HEADERS],
      },
    });

    console.log('✅ SUCCESS: Headers initialized successfully.');
    console.log('The lead capture pipeline is now ready for production.');
  } catch (error) {
    console.error('❌ ERROR:', error.message);
    if (error.message.includes('403')) {
      console.log('\nTIP: Ensure you have shared the spreadsheet with your Service Account email:');
      console.log(`👉 ${CLIENT_EMAIL}`);
    }
  }
}

init();
