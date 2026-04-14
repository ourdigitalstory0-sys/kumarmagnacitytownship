import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';
import registry from "@/data/seo-registry.json";

/**
 * Sovereign Google Indexing Bridge
 * 
 * Allows programmatic notification to Google Indexing API for 
 * real-time crawl requests of NA Bungalow Plot content.
 */

export const runtime = 'nodejs';

// SHARED AUTH LOGIC
async function notifyGoogle(url: string, type: string) {
  const accounts = [
    {
      name: "Eminent Bond (Primary)",
      email: process.env.GOOGLE_CLIENT_EMAIL || "magnacity@eminent-bond-433313-m2.iam.gserviceaccount.com",
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    {
      name: "Gen Lang Client (Secondary)",
      email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL || "magnacity-email@gen-lang-client-0496116049.iam.gserviceaccount.com",
      key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    }
  ];

  let lastError = null;
  for (const account of accounts) {
    if (!account.key) continue;
    try {
      const jwtClient = new google.auth.JWT({
        email: account.email,
        key: account.key,
        scopes: ['https://www.googleapis.com/auth/indexing']
      });
      const indexing = google.indexing({ version: 'v3', auth: jwtClient });
      await indexing.urlNotifications.publish({
        requestBody: { url, type: type as any },
      });
      return { success: true, account: account.name };
    } catch (error: any) {
      lastError = error.message;
      if (error.code !== 429) break; // If not a quota error, stop trying this URL
    }
  }
  return { success: false, error: lastError };
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const passkey = searchParams.get('passkey');
  const VAULT_PASSKEY = process.env.VAULT_PASSKEY || "MAGNA9295";

  if (passkey !== VAULT_PASSKEY) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const DOMAIN = "https://kumarmagnacitytownship.com";
  const urlsToSubmit = Object.keys(registry).map(route => `${DOMAIN}/${route}`);
  
  const results = {
    total: urlsToSubmit.length,
    submitted: 0,
    failed: 0,
    details: [] as any[]
  };

  // We only do 50 at a time via GET to avoid timeout
  const batch = urlsToSubmit.slice(0, 50);

  for (const url of batch) {
    const res = await notifyGoogle(url, "URL_UPDATED");
    if (res.success) {
      results.submitted++;
    } else {
      results.failed++;
    }
  }

  return NextResponse.json(results);
}

export async function POST(req: NextRequest) {
  try {
    const { url, type = "URL_UPDATED" } = await req.json();
    if (!url) return NextResponse.json({ error: "URL is required" }, { status: 400 });

    const authHeader = req.headers.get('authorization');
    const VAULT_PASSKEY = process.env.VAULT_PASSKEY || "MAGNA9295";
    
    if (process.env.NODE_ENV === 'production' && authHeader !== `Bearer ${VAULT_PASSKEY}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const res = await notifyGoogle(url, type);
    if (res.success) {
      return NextResponse.json({ success: true, url, account: res.account });
    }

    return NextResponse.json({ success: false, error: res.error }, { status: 500 });

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
