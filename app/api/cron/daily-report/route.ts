import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;
const SALES_EMAIL = 'enquiry.kumarmagnacity@gmail.com'; // Adjust as needed
const LEDGER_PATH = path.join(process.cwd(), "data", "leads-ledger.json");

export const runtime = "nodejs"; // fs is used

export async function GET(req: NextRequest) {
  try {
    // 1. Verify Vercel Cron Secret for Authorization
    // Vercel Cron automatically sends this header
    const authHeader = req.headers.get('authorization');
    if (process.env.CRON_SECRET) {
      if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
        return new Response('Unauthorized', { status: 401 });
      }
    }

    // 2. Read and parse ledger
    let allLeads: any[] = [];
    if (fs.existsSync(LEDGER_PATH)) {
      const data = fs.readFileSync(LEDGER_PATH, "utf8");
      allLeads = JSON.parse(data);
    }

    // 3. Filter for leads generated in the last 24 hours
    const now = new Date();
    const twentyFourHoursAgo = new Date(now.getTime() - (24 * 60 * 60 * 1000));
    
    const todaysLeads = allLeads.filter(lead => {
      if (!lead.timestamp) return false;
      const leadDate = new Date(lead.timestamp);
      return leadDate >= twentyFourHoursAgo;
    });

    if (todaysLeads.length === 0) {
      return NextResponse.json({ success: true, message: "No leads today. Skipping email." });
    }

    // 4. Construct Executive Summary HTML
    if (resend) {
      const htmlContent = `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; background-color: #FAFAFA;">
          <div style="background-color: #111111; padding: 40px; text-align: center; border-radius: 12px 12px 0 0;">
            <h1 style="color: #C9A227; margin: 0; font-size: 24px; letter-spacing: 2px; text-transform: uppercase; font-weight: 300;">Kumar Magnacity</h1>
            <p style="color: #FFFFFF; margin-top: 10px; font-size: 12px; letter-spacing: 1px;">EXECUTIVE DAILY SUMMARY</p>
          </div>
          <div style="background-color: #FFFFFF; padding: 40px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
            <h2 style="color: #111111; font-size: 20px; margin-top: 0; border-bottom: 2px solid #C9A227; padding-bottom: 10px; display: inline-block;">Today's Lead Report</h2>
            <p style="color: #666666; font-size: 16px;">
              The system generated <strong>${todaysLeads.length}</strong> highly qualified leads in the last 24 hours.
            </p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 30px;">
              <thead>
                <tr style="background-color: #f5f5f5;">
                  <th style="padding: 12px; text-align: left; font-size: 12px; color: #333; border-bottom: 1px solid #ddd;">Name</th>
                  <th style="padding: 12px; text-align: left; font-size: 12px; color: #333; border-bottom: 1px solid #ddd;">Phone</th>
                  <th style="padding: 12px; text-align: left; font-size: 12px; color: #333; border-bottom: 1px solid #ddd;">Source</th>
                </tr>
              </thead>
              <tbody>
                ${todaysLeads.map((lead: any) => `
                  <tr>
                    <td style="padding: 12px; font-size: 14px; color: #111; border-bottom: 1px solid #eee;">${lead.name || 'N/A'}</td>
                    <td style="padding: 12px; font-size: 14px; color: #666; border-bottom: 1px solid #eee;">${lead.phone || 'N/A'}</td>
                    <td style="padding: 12px; font-size: 12px; color: #999; border-bottom: 1px solid #eee; text-transform: uppercase;">${lead.formId || 'N/A'}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
            
            <div style="text-align: center; margin-top: 40px;">
              <a href="https://kumarmagnacitytownship.com/admin" style="background-color: #111111; color: #C9A227; padding: 12px 24px; text-decoration: none; font-weight: bold; border-radius: 4px; letter-spacing: 1px; font-size: 12px; display: inline-block;">OPEN COMMAND CENTER</a>
            </div>
          </div>
        </div>
      `;

      await resend.emails.send({
        from: 'Kumar Magnacity Reports <onboarding@resend.dev>', // Update on production
        to: SALES_EMAIL,
        subject: `Daily Lead Summary: ${todaysLeads.length} Leads Generated`,
        html: htmlContent,
      });
    }

    return NextResponse.json({ success: true, count: todaysLeads.length });
  } catch (error: any) {
    console.error("Cron Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
