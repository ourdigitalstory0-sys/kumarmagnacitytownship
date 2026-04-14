import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

/**
 * Sovereign Google Indexing Bridge
 * 
 * Allows programmatic notification to Google Indexing API for 
 * real-time crawl requests of NA Bungalow Plot content.
 */

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  try {
    const { url, type = "URL_UPDATED" } = await req.json();

    if (!url) {
      return NextResponse.json({ error: "URL is required" }, { status: 400 });
    }

    // Security Verification - Token based auth for internal bridge
    const authHeader = req.headers.get('authorization');
    const VAULT_PASSKEY = process.env.VAULT_PASSKEY || "MAGNA9295";
    
    if (process.env.NODE_ENV === 'production' && authHeader !== `Bearer ${VAULT_PASSKEY}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Multi-Account Credential Stack
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
    let successfulAccount = null;
    let googleResponse = null;

    for (const account of accounts) {
      if (!account.key) {
        console.warn(`Indexing Bridge: Skipping ${account.name} (Key Missing)`);
        continue;
      }

      try {
        console.log(`Indexing Bridge: Attempting with ${account.name}...`);
        
        const jwtClient = new google.auth.JWT({
          email: account.email,
          key: account.key,
          scopes: ['https://www.googleapis.com/auth/indexing']
        });

        const indexing = google.indexing({
          version: 'v3',
          auth: jwtClient,
        });

        await jwtClient.authorize();

        const response = await indexing.urlNotifications.publish({
          requestBody: {
            url: url,
            type: type as "URL_UPDATED" | "URL_DELETED",
          },
        });

        successfulAccount = account.name;
        googleResponse = response.data;
        break; // Exit loop on success

      } catch (error: any) {
        console.error(`Indexing Bridge: ${account.name} Failed | ${error.message}`);
        lastError = error.message;

        // If error is NOT a quota issue, we might want to fail fast?
        // But for maximum deliverability, we try the next account anyway.
        if (error.code === 429) {
          console.warn(`${account.name} Quota Exceeded. Rotating...`);
        }
      }
    }

    if (successfulAccount) {
      return NextResponse.json({
        success: true,
        message: `Indexing request for ${url} sent to Google.`,
        account_used: successfulAccount,
        google_response: googleResponse
      });
    }

    return NextResponse.json({ 
      success: false,
      error: "All Google Indexing accounts failed or reached quota.",
      last_error: lastError
    }, { status: 500 });

  } catch (error: any) {
    console.error("Indexing API Error:", error.message);
    return NextResponse.json({ 
      error: "Google API Communication Failure", 
      details: error.message 
    }, { status: 500 });
  }
}
