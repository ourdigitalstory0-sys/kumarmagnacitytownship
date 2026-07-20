import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;
const SALES_EMAIL = 'enquiry.kumarmagnacity@gmail.com';

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

    // 1. Save to Local Ledger
    if (fs.existsSync(LEDGER_PATH)) {
      try {
        const fileData = fs.readFileSync(LEDGER_PATH, "utf8");
        const allLeads = JSON.parse(fileData);
        allLeads.push({
          ...data,
          timestamp: new Date().toISOString()
        });
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

      const { error } = await resend.emails.send({
        from: 'Kumar Magnacity Leads <onboarding@resend.dev>',
        to: SALES_EMAIL,
        subject: emailSubject,
        html: htmlContent,
      });

      if (error) {
        console.error('Resend Error:', error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
      }
    }

    return NextResponse.json({ success: true, method: resend ? 'resend' : 'ledger_only' });
  } catch (error: any) {
    console.error("Lead API Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
