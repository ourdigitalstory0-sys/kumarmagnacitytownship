import { NextRequest, NextResponse } from "next/server";
import React from "react";
import fs from "fs";
import path from "path";
import { Resend } from "resend";
import { sendWhatsAppBrochure } from "@/lib/whatsapp";
import { renderToBuffer } from "@react-pdf/renderer";
import { BrochurePDF } from "@/components/BrochurePDF";
import { google } from "googleapis";

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;
const SALES_EMAIL = 'propsmartrealty@gmail.com';

export const runtime = "nodejs";

const LEDGER_PATH = path.join(process.cwd(), "data", "leads-ledger.json");

export async function GET(request: NextRequest) {
  try {
    // 1. PRIMARY SOURCE: Local Ledger (Secured Hub)
    let allLeads = [];
    if (fs.existsSync(LEDGER_PATH)) {
      try {
        const data = fs.readFileSync(LEDGER_PATH, "utf8");
        allLeads = JSON.parse(data);
      } catch (err) {
        console.error("Local ledger parsing failed:", err);
      }
    }

    // Filter out rows that don't have a name and return newest first
    const filteredLeads = allLeads.filter((l: any) => l.name);

    return NextResponse.json(filteredLeads.reverse());
  } catch (error) {
    console.error("Failed to read leads source:", error);
    return NextResponse.json({ error: "Vault Synchronisation Error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const leadData = { ...data, timestamp: new Date().toISOString() };

    // 0. Cloudflare Turnstile Bot Protection
    const turnstileToken = req.headers.get('cf-turnstile-response');
    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
    
    if (turnstileSecret) {
      if (!turnstileToken) {
        return NextResponse.json({ success: false, error: "Bot verification failed: No token." }, { status: 403 });
      }
      const verifyRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${turnstileSecret}&response=${turnstileToken}`,
      });
      const verifyOutcome = await verifyRes.json();
      if (!verifyOutcome.success) {
        return NextResponse.json({ success: false, error: "Bot verification failed: Invalid token." }, { status: 403 });
      }
    }

    // 1. Save to Local Ledger
    if (fs.existsSync(LEDGER_PATH)) {
      try {
        const fileData = fs.readFileSync(LEDGER_PATH, "utf8");
        const allLeads = JSON.parse(fileData);
        allLeads.push(leadData);
        fs.writeFileSync(LEDGER_PATH, JSON.stringify(allLeads, null, 2));
      } catch (err) {
        console.error("Failed to append to ledger:", err);
      }
    }

    // 2. Dispatch Email via Resend
    if (resend) {
      const emailSubject = data._subject || `🚨 NEW LEAD: ${data.name} | ${data.phone}`;
      const htmlContent = `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eaeaec; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #0A0A0A; padding: 24px; text-align: center;">
            <h2 style="color: #C9A227; margin: 0; letter-spacing: 2px; text-transform: uppercase;">Kumar Magnacity</h2>
            <p style="color: #ffffff; margin-top: 8px; font-size: 14px;">New Priority Lead Generated</p>
          </div>
          <div style="padding: 32px; background-color: #ffffff;">
            <table style="width: 100%; border-collapse: collapse;">
              ${Object.entries(data)
                .filter(([key]) => !key.startsWith('_'))
                .map(([key, value]) => `
                <tr style="border-bottom: 1px solid #f0f0f0;">
                  <td style="padding: 12px 0; color: #666; font-size: 12px; text-transform: uppercase; font-weight: bold; width: 40%;">${key}</td>
                  <td style="padding: 12px 0; color: #111; font-size: 14px; font-weight: 500;">${value || 'N/A'}</td>
                </tr>
              `).join('')}
            </table>
          </div>
        </div>
      `;

      const { error: salesError } = await resend.emails.send({
        from: 'Kumar Magnacity Leads <onboarding@resend.dev>',
        to: SALES_EMAIL,
        subject: emailSubject,
        html: htmlContent,
      });

      if (salesError) {
        console.error('Resend Sales Notification Error:', salesError);
      }

      // 3. Automated Welcome Email to Buyer (Instant Autoresponder)
      if (data.email) {
        const buyerHtmlContent = `
          <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; background-color: #FAFAFA;">
            <div style="background-color: #111111; padding: 40px; text-align: center; border-radius: 12px 12px 0 0;">
              <h1 style="color: #C9A227; margin: 0; font-size: 28px; letter-spacing: 4px; text-transform: uppercase; font-weight: 300;">Kumar Magnacity</h1>
              <p style="color: #FFFFFF; margin-top: 10px; font-size: 14px; letter-spacing: 2px;">THE SOVEREIGN LIVING</p>
            </div>
            <div style="background-color: #FFFFFF; padding: 40px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
              <h2 style="color: #111111; font-size: 24px; margin-top: 0;">Welcome, ${data.name.split(' ')[0]}</h2>
              <p style="color: #666666; line-height: 1.6; font-size: 16px;">
                Thank you for your interest in Kumar Magnacity, Manjari's most prestigious 150-acre township. We have received your inquiry.
              </p>
              <p style="color: #666666; line-height: 1.6; font-size: 16px;">
                Our official presentation, including detailed floor plans, master layouts, and investment models, is available for your review.
              </p>
              <div style="text-align: center; margin: 40px 0;">
                <a href="https://kumarmagnacitytownship.com/nri-investment" style="background-color: #C9A227; color: #111111; padding: 16px 32px; text-decoration: none; font-weight: bold; border-radius: 4px; letter-spacing: 1px; display: inline-block;">DOWNLOAD BROCHURE</a>
              </div>
              <p style="color: #666666; line-height: 1.6; font-size: 16px; border-top: 1px solid #EEEEEE; padding-top: 24px;">
                Your dedicated Relationship Manager will contact you shortly on <strong>${data.phone}</strong> to assist with priority allocation.
              </p>
            </div>
          </div>
        `;
        
        // 3b. Generate Personalized PDF Brochure
        const pdfBuffer = await renderToBuffer(React.createElement(BrochurePDF, { clientName: data.name || "Valued Client" }) as any);

        // Note: For this to work in production, you must verify your domain in Resend and change the 'from' address.
        await resend.emails.send({
          from: 'Kumar Magnacity <onboarding@resend.dev>', // Change to 'info@kumarmagnacitytownship.com' after domain verification
          to: data.email,
          subject: 'Your Official Brochure - Kumar Magnacity',
          html: buyerHtmlContent,
          attachments: [
            {
              filename: `Kumar-Magnacity-Portfolio-${data.name.replace(/\s+/g, '-')}.pdf`,
              content: pdfBuffer,
            }
          ]
        }).catch(e => console.error("Buyer Email Dispatch Failed:", e));
      }
    }

    // 4. CRM Webhook Integration (Enterprise Scaling)
    const webhookUrl = process.env.CRM_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(leadData)
        });
      } catch (webhookError) {
        console.error("CRM Webhook Dispatch Failed:", webhookError);
        // Do not fail the request if webhook fails
      }
    }
    
    // 4b. Google Sheets CRM Integration
    const googleSheetId = process.env.GOOGLE_SHEET_ID;
    const googleEmail = process.env.GOOGLE_CLIENT_EMAIL;
    const googleKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');

    if (googleSheetId && googleEmail && googleKey) {
      try {
        const jwtClient = new google.auth.JWT({
          email: googleEmail,
          key: googleKey,
          scopes: ['https://www.googleapis.com/auth/spreadsheets']
        });
        const sheets = google.sheets({ version: 'v4', auth: jwtClient });
        await sheets.spreadsheets.values.append({
          spreadsheetId: googleSheetId,
          range: 'Leads!A:H',
          valueInputOption: 'USER_ENTERED',
          requestBody: {
            values: [[
              leadData.timestamp, 
              data.name, 
              data.phone, 
              data.email || 'N/A', 
              data.timing || 'N/A', 
              data.intent || 'N/A', 
              data.source_url || 'N/A', 
              data.form_id || 'N/A'
            ]]
          }
        });
      } catch (sheetErr) {
        console.error("Google Sheets Sync Failed:", sheetErr);
      }
    }

    // 5. WhatsApp Automated Brochure Delivery
    // Fire-and-forget: we don't await this to ensure the API responds instantly to the frontend
    sendWhatsAppBrochure(data.phone, data.name).catch(console.error);

    return NextResponse.json({ 
      success: true, 
      message: 'Lead captured securely via Sovereign Hub.' 
    });
  } catch (error: any) {
    console.error("Lead API Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
