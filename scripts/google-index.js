/* eslint-disable @typescript-eslint/no-require-imports */

const fs = require('fs');
const path = require('path');
const { google } = require('googleapis');

// -------------------------------------------------------------
// SECURE GOOGLE INDEXING API TRIGGER
// -------------------------------------------------------------

// Path to your Google Service Account JSON key
// Keep this safe and DO NOT commit the actual key to Github!
// Path to your Google Service Account JSON key
const KEY_PATH = path.join(__dirname, 'google-service-account.json');
const REGISTRY_PATH = path.join(__dirname, '../data/seo-registry.json');
const DOMAIN = 'https://kumarmagnacitytownship.com';

async function triggerIndexing() {
  console.log('--- Sovereign Indexing Engine Triggered ---');
  
  if (!fs.existsSync(KEY_PATH)) {
    console.error(`❌ ERROR: Key not found at ${KEY_PATH}`);
    process.exit(1);
  }

  const registry = JSON.parse(fs.readFileSync(REGISTRY_PATH, 'utf8'));
  const urlsToSubmit = Object.keys(registry).map(route => `${DOMAIN}/${route}`);
  
  console.log(`📡 TARGET: ${urlsToSubmit.length} Programmatic SEO Nodes identified.`);

  const jwtClient = new google.auth.JWT({
    keyFile: KEY_PATH,
    scopes: ['https://www.googleapis.com/auth/indexing'],
  });

  const indexing = google.indexing({ version: 'v3', auth: jwtClient });

  let count = 0;
  for (const url of urlsToSubmit) {
    try {
      await indexing.urlNotifications.publish({
        requestBody: { url, type: 'URL_UPDATED' },
      });
      console.log(`[Indexed ✓] ${url}`);
      count++;
      
      // Safety throttle: 200 URLs per day is standard for new accounts
      if (count >= 200) {
        console.log('⚠️ Reached daily safe submission limit (200). Stopping sweep.');
        break;
      }

      await new Promise(r => setTimeout(r, 200)); // 200ms delay
    } catch (error) {
      console.error(`[Error ✗] ${url}: ${error.message}`);
      if (error.message.includes('403')) {
        console.error('❌ PERMISSION DENIED: Ensure service account is added as OWNER in Search Console.');
        break;
      }
    }
  }

  console.log(`\n✅ Sweep Complete. Submitted ${count} URLs to Google.`);
}

triggerIndexing();
