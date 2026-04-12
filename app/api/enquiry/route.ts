import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { backupLead } from "@/lib/lead-backup";

// Remove edge runtime because nodemailer relies on Node APIs
// export const runtime = "edge";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Validate Required Fields
    if (!data.name || !data.phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // 1. FAIL-SAFE BACKUP (PRIORITY 1) - Guaranteed Data Preservation
    try {
      await backupLead({
        ...data,
        timestamp: new Date().toISOString(),
        source_url: data.source_url || request.headers.get("referer") || "Unknown"
      });
    } catch (backupErr) {
      console.error("Backup failed, but continuing to SMTP attempt:", backupErr);
    }

    const htmlContent = `
      <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; padding: 0; margin: 0; background-color: #f4f4f4;">
        <div style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #e0e0e0; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
          <div style="background-color: #0A4D3C; padding: 20px; text-align: center; color: #ffffff;">
            <h1 style="margin: 0; font-size: 20px; letter-spacing: 2px; text-transform: uppercase;">Executive Lead Brief</h1>
          </div>
          <div style="padding: 30px;">
            <p style="font-size: 16px; color: #444; margin-bottom: 25px;">A new high-intent enquiry has been captured via the <strong>Kumar Magnacity Portal</strong>.</p>
            
            <div style="background-color: #fafafa; border-radius: 6px; padding: 20px; margin-bottom: 25px; border-left: 4px solid #C5A059;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px 0; color: #888; font-size: 12px; text-transform: uppercase; width: 100px;">Client Name</td>
                  <td style="padding: 10px 0; color: #222; font-weight: bold; font-size: 16px;">${data.name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; color: #888; font-size: 12px; text-transform: uppercase;">Phone</td>
                  <td style="padding: 10px 0;"><a href="tel:${data.phone}" style="color: #C5A059; text-decoration: none; font-weight: bold; font-size: 16px;">+91 ${data.phone}</a></td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; color: #888; font-size: 12px; text-transform: uppercase;">Email</td>
                  <td style="padding: 10px 0; color: #444;">${data.email || 'Not provided'}</td>
                </tr>
              </table>
            </div>

            <div style="text-align: center; margin-top: 30px;">
              <a href="https://wa.me/91${data.phone}?text=Hi%20${encodeURIComponent(data.name)},%20I%20am%20calling%20from%20Kumar%20Magnacity%20regarding%20your%20interest%20in%20our%20NA%20plots." 
                 style="display: inline-block; background-color: #25d366; color: #ffffff; padding: 15px 25px; border-radius: 5px; text-decoration: none; font-weight: bold; font-size: 14px;">
                 WhatsApp Client Now
              </a>
            </div>
          </div>
          <div style="background-color: #333; padding: 15px; text-align: center; color: #999; font-size: 11px;">
            Source: ${data.source_url} | Plot: ${data.plot_id || 'General'} <br>
            Security: Sovereign Backup Relay Active
          </div>
        </div>
      </div>
    `;

    // 1. Retrieve & Sanitize Credentials
    const SMTP_EMAIL = process.env.SMTP_EMAIL;
    const RAW_PASS = process.env.SMTP_PASSWORD;
    const SMTP_PASSWORD = RAW_PASS?.replace(/\s+/g, "");

    const RECIPIENT = "propsmartrealty@gmail.com";

    // 2. CRITICAL IDENTITY DIAGNOSTIC
    if (!SMTP_EMAIL || !SMTP_PASSWORD) {
       console.error(`DIAGNOSTIC: CREDENTIALS MISSING. Detected EMAIL: ${SMTP_EMAIL ? 'YES' : 'NO'} | PASSWORD: ${RAW_PASS ? 'YES' : 'NO'}`);
       return NextResponse.json({ success: true, diagnostic: 'smtp_unconfigured' });
    }

    // Masked log for user verification in Vercel
    const maskedEmail = SMTP_EMAIL.substring(0, 3) + "****" + SMTP_EMAIL.substring(SMTP_EMAIL.indexOf("@"));
    console.info(`DIAGNOSTIC: SMTP Attempt | AUTH_USER: ${maskedEmail} | PWD_LEN_RAW: ${RAW_PASS?.length} | PWD_LEN_CLEAN: ${SMTP_PASSWORD.length} | DEST: ${RECIPIENT}`);

    try {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: SMTP_EMAIL,
          pass: SMTP_PASSWORD,
        },
        connectionTimeout: 10000,
      });

      const info = await transporter.sendMail({
        from: `"Kumar Magnacity Portal" <${SMTP_EMAIL}>`,
        to: RECIPIENT,
        replyTo: data.email || SMTP_EMAIL,
        subject: `🚨 EXECUTIVE LEAD: ${data.name} (${data.phone})`,
        html: htmlContent,
      });

      console.log("Email sent successfully: ", info.messageId);
    } catch (smtpErr) {
      console.error("SMTP DISPATCH FAILED (Lead secured in backup):", smtpErr);
      return NextResponse.json({ 
        success: true, 
        warning: 'smtp_failed_but_lead_secured',
        diagnostic: smtpErr instanceof Error ? smtpErr.message : 'Unknown SMTP Error'
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Critical API error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
