const fs = require('fs');
const path = require('path');
const { google } = require('googleapis');

// -------------------------------------------------------------
// SECURE GOOGLE INDEXING API TRIGGER
// -------------------------------------------------------------

// Path to your Google Service Account JSON key
// Keep this safe and DO NOT commit the actual key to Github!
const KEY_PATH = path.join(__dirname, 'google-service-account.json');
const REGISTRY_PATH = path.join(__dirname, '../data/seo-registry.json');
const DOMAIN = 'https://kumarmagnacitytownship.com';

async function triggerIndexing() {
  console.log('Initiating Google Indexing API Execution...');

  if (!fs.existsSync(KEY_PATH)) {
    console.error('❌ CRITICAL ERROR: Google Service Account Key not found.');
    console.error(`Please place your JSON key file at: ${KEY_PATH}`);
    process.exit(1);
  }

  // Load SEO Registry
  if (!fs.existsSync(REGISTRY_PATH)) {
    console.error('❌ CRITICAL ERROR: SEO Registry not found.');
    process.exit(1);
  }
  
  const registry = JSON.parse(fs.readFileSync(REGISTRY_PATH, 'utf8'));
  const urlsToSubmit = Object.keys(registry).map(route => `${DOMAIN}/${route}`);
  
  console.log(`Found ${urlsToSubmit.length} Programmatic SEO routes.`);

  // Authenticate
  const jwtClient = new google.auth.JWT({
    keyFile: KEY_PATH,
    scopes: ['https://www.googleapis.com/auth/indexing'],
  });

  try {
    await jwtClient.authorize();
    console.log('✅ Successfully authenticated with Google API.');
  } catch (error) {
    console.error('❌ Authentication failed:', error.message);
    process.exit(1);
  }

  const indexing = google.indexing({
    version: 'v3',
    auth: jwtClient,
  });

  let successCount = 0;
  let errorCount = 0;

  console.log('Sending URL_UPDATED requests to Google Search Console...');

  // Batches usually restricted. Real-world prod use batching.
  // For safety, slicing to prevent rate limiting in demo.
  for (const url of urlsToSubmit.slice(0, 50)) {
    try {
      await indexing.urlNotifications.publish({
        requestBody: {
          url: url,
          type: 'URL_UPDATED',
        },
      });
      successCount++;
      console.log(`[Indexed ✓] ${url}`);
    } catch (error) {
      errorCount++;
      console.error(`[Error ✗] ${url} | ${error.message}`);
    }
    
    // Add 100ms delay to respect API quotas
    await new Promise(resolve => setTimeout(resolve, 100));
  }

  console.log(`\n================================`);
  console.log(`INDEX COMMAND COMPLETE`);
  console.log(`Successful: ${successCount}`);
  console.log(`Failed: ${errorCount}`);
  console.log(`Note: Displaying first 50 nodes to stay within quota limits.`);
  console.log(`================================\n`);
}

triggerIndexing();
