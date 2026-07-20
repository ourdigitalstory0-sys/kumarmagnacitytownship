/* eslint-disable @typescript-eslint/no-require-imports */

const https = require('https');

const sitemapUrl = 'https://kumarmagnacitytownship.com/sitemap.xml';

const searchEngines = [
  { name: 'Google', url: `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}` },
  { name: 'Bing', url: `https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}` },
];

console.log('🚀 Triggering automated search engine pings...');

searchEngines.forEach(({ name, url }) => {
  https.get(url, (res) => {
    if (res.statusCode === 200) {
      console.log(`✅ Successfully pinged ${name} with updated sitemap.`);
    } else {
      console.log(`⚠️ Failed to ping ${name}. Status: ${res.statusCode}`);
    }
  }).on('error', (e) => {
    console.error(`❌ Error pinging ${name}: ${e.message}`);
  });
});
