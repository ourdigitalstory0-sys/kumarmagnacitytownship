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

    // Load Credentials from Environment
    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL || "magnacity@eminent-bond-433313-m2.iam.gserviceaccount.com";
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');

    console.log("Indexing Bridge: Authenticating as", clientEmail);
    console.log("Indexing Bridge: Private Key Present?", !!privateKey);

    if (!privateKey) {
      return NextResponse.json({ 
        success: false, 
        error: "Google Private Key missing in Environment",
        status: "PENDING_CREDENTIALS" 
      }, { status: 500 });
    }

    const jwtClient = new google.auth.JWT({
      email: clientEmail,
      key: privateKey,
      scopes: ['https://www.googleapis.com/auth/indexing']
    });

    const indexing = google.indexing({
      version: 'v3',
      auth: jwtClient,
    });

    // Explicitly authorize to ensure we have a valid token
    await jwtClient.authorize();

    const response = await indexing.urlNotifications.publish({
      requestBody: {
        url: url,
        type: type as "URL_UPDATED" | "URL_DELETED",
      },
    });

    return NextResponse.json({
      success: true,
      message: `Indexing request for ${url} sent to Google.`,
      google_response: response.data
    });

  } catch (error: any) {
    console.error("Indexing API Error:", error.message);
    return NextResponse.json({ 
      error: "Google API Communication Failure", 
      details: error.message 
    }, { status: 500 });
  }
}
