# Kumar Magnacity: Sovereign Architecture 
**Pune East's Premier Real Estate Lead-Generation Engine**

This repository contains the Absolute Singularity architecture for **Kumar Magnacity Township** (Manjari, Pune). It is designed strictly to monopolize Google SERP rankings and automate CRM lead captures at 0ms latency.

---

## 🏗️ Architectural Specs
- **Framework:** Next.js 15 (App Router)
- **Runtime:** Edge Network (Vercel)
- **Language:** TypeScript 
- **Styling:** Tailwind CSS + Framer Motion
- **Core Web Vitals Strategy:** Sub-180KB First Load JS payload. Aggressive dynamic loading (`next/dynamic`) for all below-the-fold components to enforce a 100/100 Lighthouse score.

## 🚀 The Enterprise SEO Engine
This application is weaponized for search engine domination:
1. **Semantic Topic Clusters (Silos):** Automated `<SiloInterlinkMatrix />` dynamically maps URLs to parent hubs (`/investment-pune-east`, `/luxury-apartments-pune`) to trap Google bots in relevant closed loops.
2. **Programmatic SEO (pSEO):** Mass-generation of localized micro-markets (e.g. `/flats-near-magarpatta-city`) via dynamic routing.
3. **Automated Indexing Bridge:** A post-build CI/CD script (`scripts/ping-search-engines.js`) automatically pings the Google Indexing API the second a new build is deployed to Vercel.
4. **Schema DOM Injection:** Forced `FAQPage`, `RealEstateListing`, and `BreadcrumbList` JSON-LD schemas explicitly telling Google the exact pricing, location, and RERA numbers.

## ⚙️ The CRM & Conversion Pipeline
When a user submits the `<AdvancedEnquiryForm />`:
1. **Google Ads Algorithmic Hook:** `sendGAEvent('conversion')` is fired instantly, training the Google ML model to lower your Cost Per Acquisition.
2. **Node.js/Edge Route API:** The data hits `/api/leads/route.ts`.
3. **Google Sheets API:** The lead is securely appended to a private Google Sheet using a JWT Service Account via `googleapis`.
4. **Resend Email Bridge:** An automated HTML email containing a dynamically generated `BrochurePDF` is instantly emailed to the client.
5. **WhatsApp API:** A WhatsApp notification is fired via Gupshup/Twilio Webhook.

## 🧠 Psychological Conversion Loops
- **Scarcity Engine:** `<ScarcityToasts />` runs globally, injecting randomized FOMO notifications (e.g. *"Only 3 NA Plots remaining in Sector A"*) to manipulate urgency.
- **Exit Intent:** Moving the mouse off-screen triggers a final-attempt modal capturing lost traffic.

## 🛠️ Local Development

1. Clone the repository and install dependencies:
```bash
npm install
```

2. Create a `.env.local` file with the following keys:
```env
# CRM Pipeline
RESEND_API_KEY=your_resend_key

# Google Sheets Integration
GOOGLE_SHEET_ID=your_sheet_id
GOOGLE_CLIENT_EMAIL=your_service_account_email
GOOGLE_PRIVATE_KEY=your_service_account_private_key

# Bot Protection
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_cloudflare_site_key
TURNSTILE_SECRET_KEY=your_cloudflare_secret_key

# Admin Vault
VAULT_PASSKEY=MAGNA9295
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## 📡 Deployment
Push to the `main` branch. Vercel will automatically compile the Edge functions, execute the SEO Indexing Ping, and deploy to the global CDN in under 45 seconds.
