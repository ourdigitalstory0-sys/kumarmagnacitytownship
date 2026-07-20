// lib/whatsapp.ts
// Scaffold for Twilio / Meta WhatsApp Business API Integration

export async function sendWhatsAppBrochure(phoneNumber: string, name: string) {
  try {
    // 1. Sanitize Phone Number (Assume Indian +91 if no country code provided)
    let sanitizedPhone = phoneNumber.replace(/\D/g, '');
    if (sanitizedPhone.length === 10) {
      sanitizedPhone = `91${sanitizedPhone}`;
    }
    
    // TWILIO/META API INTEGRATION SCAFFOLD
    // The user must provide these in .env.local:
    // WHATSAPP_API_URL, WHATSAPP_ACCESS_TOKEN, WHATSAPP_PHONE_ID
    const apiUrl = process.env.WHATSAPP_API_URL;
    const token = process.env.WHATSAPP_ACCESS_TOKEN;

    if (!apiUrl || !token) {
      console.warn("WhatsApp API credentials not found. Bypassing automated brochure delivery.");
      return { success: true, bypassed: true };
    }

    const payload = {
      messaging_product: "whatsapp",
      to: sanitizedPhone,
      type: "template",
      template: {
        name: "kumar_magnacity_brochure", // The approved template name in Meta Business Manager
        language: {
          code: "en"
        },
        components: [
          {
            type: "header",
            parameters: [
              {
                type: "document",
                document: {
                  link: "https://kumarmagnacity.com/assets/brochure.pdf",
                  filename: "Kumar_Magnacity_Brochure.pdf"
                }
              }
            ]
          },
          {
            type: "body",
            parameters: [
              {
                type: "text",
                text: name // Personalizes the message: "Hi [Name],"
              }
            ]
          }
        ]
      }
    };

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("WhatsApp API Error:", errorData);
      return { success: false, error: errorData };
    }

    return { success: true };
  } catch (error) {
    console.error("WhatsApp Delivery Exception:", error);
    return { success: false, error };
  }
}
