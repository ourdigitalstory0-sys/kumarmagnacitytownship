import { NextResponse } from 'next/server';
import crypto from 'crypto';

// Server-side SHA-256 Hashing for Enhanced Conversions
function hashData(data: string) {
  return crypto.createHash('sha256').update(data.trim().toLowerCase()).digest('hex');
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { event, lead_type, project, email, phone } = body;

    // We prepare the hashed user data payload
    const user_data: any = {};
    if (email) user_data.sha256_email_address = hashData(email);
    if (phone) {
        // Strip non-digits and add country code if missing (assumes India +91 for basic logic if len == 10)
        let cleanedPhone = phone.replace(/\D/g, '');
        if (cleanedPhone.length === 10) cleanedPhone = `91${cleanedPhone}`;
        else if (cleanedPhone.length > 10 && !cleanedPhone.startsWith('+')) cleanedPhone = `+${cleanedPhone}`;
        user_data.sha256_phone_number = hashData(cleanedPhone);
    }

    const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
    const apiSecret = process.env.GA_API_SECRET; // Must be set in Vercel

    if (!measurementId || !apiSecret) {
      // If no server-side secrets are configured, we gracefully degrade
      return NextResponse.json({ success: true, warning: 'Measurement ID or API Secret missing' }, { status: 200 });
    }

    // Google Analytics 4 Measurement Protocol Endpoint
    const gaEndpoint = `https://www.google-analytics.com/mp/collect?measurement_id=${measurementId}&api_secret=${apiSecret}`;

    const payload = {
      // client_id should ideally come from the GA cookie (_ga), but for server-side
      // postbacks a timestamp or UUID works if the exact client_id is unknown.
      client_id: crypto.randomUUID(),
      events: [{
        name: event,
        params: {
          lead_type: lead_type,
          project: project,
          // Injecting Enhanced Conversions Data
          user_data: Object.keys(user_data).length > 0 ? user_data : undefined
        }
      }]
    };

    const response = await fetch(gaEndpoint, {
      method: 'POST',
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
        console.error("GA4 MP Error:", await response.text());
    }

    return NextResponse.json({ success: true, hashed: Object.keys(user_data).length > 0 });
  } catch (error: any) {
    console.error("Server-Side Tracking Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
