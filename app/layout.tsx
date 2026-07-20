import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/lib/modal-context";
import EnquiryModal from "@/components/EnquiryModal";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import MetaPixel from "@/components/MetaPixel";
import GoogleConsent from "@/components/GoogleConsent";
import StructuredData from "@/components/StructuredData";
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import { Suspense } from "react";

export const runtime = "nodejs";


const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kumarmagnacitytownship.com"),
  title: {
    default: "Kumar Magnacity Township | 2BHK & 3BHK Apartments + NA Plots | Manjari Pune",
    template: "%s | Kumar Magnacity Township"
  },
  description: "Kumar Magnacity — Pune's premier 150-acre township at Manjari near Hadapsar. 2BHK apartments from ₹67.99L, 3BHK from ₹92.99L + RERA-approved NA bungalow plots. 50+ amenities, grand clubhouse, 26 acres greens. By Kumar Properties (60-year legacy).",
  keywords: [
    "Kumar Magnacity Township", "Kumar Magnacity Pune", "Kumar Magnacity Hadapsar", 
    "Kumar Magnacity Manjari", "Kumar Magnacity Apartments", "Kumar Magnacity Flats", 
    "Kumar Magnacity Property", "Kumar Magnacity New Launch", "Kumar Magnacity 2 BHK", 
    "Kumar Magnacity 3 BHK", "Kumar Magnacity property price", "Kumar Magnacity floor plans",
    "Hadapsar Real Estate", "Hadapsar Property Market", "Flats in Hadapsar", 
    "Luxury Flats Hadapsar", "Invest in Hadapsar", "Manjari Real Estate", 
    "Flats in Manjari", "New Projects in Manjari", "East Pune Real Estate", 
    "East Pune Residential Projects", "Best Township East Pune", "Pune Real Estate", 
    "Pune Property Market", "Pune Residential Projects", "Pune Township Projects", 
    "Buy Flat in Hadapsar", "Buy Flat in Manjari", "Buy Apartment Pune", 
    "Invest in Pune Property", "Best Flats Near Magarpatta", "Property Near EON IT Park", 
    "Pune Investment Property", "Real Estate Appreciation Pune", "Premium Township Pune",
    "Pune Metro Real Estate", "Pune Ring Road Real Estate"
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    alternateLocale: "mr_IN",
    url: "https://kumarmagnacitytownship.com",
    siteName: "Kumar Magnacity Township",
    title: "Kumar Magnacity Township | 2BHK & 3BHK Apartments",
    description: "Pune's premier 150-acre township at Manjari near Hadapsar. Premium 2BHK & 3BHK flats by Kumar Properties.",
    images: [
      {
        url: "/assets/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Kumar Magnacity Township Masterplan",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kumar Magnacity Township | Pune East",
    description: "Premium 2BHK & 3BHK flats at Manjari near Hadapsar.",
    images: ["/assets/hero-bg.jpg"],
  },
  alternates: {
    canonical: "https://kumarmagnacitytownship.com",
    languages: {
      'en-IN': "https://kumarmagnacitytownship.com",
      'mr-IN': "https://kumarmagnacitytownship.com/mr"
    }
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/assets/favicon.png",
    apple: "/assets/apple-touch-icon.png",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION_ID || "PLACEHOLDER_GOOGLE_VERIFICATION_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${outfit.variable} antialiased`}>
        <StructuredData />
        {/* Google Consent Mode V2 (Must be loaded FIRST) */}
        <GoogleConsent />
        {/* Google Tag Manager (Loads asynchronously without blocking rendering) */}
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID || 'GTM-XXXXXXX'} />
        {/* Google Analytics 4 */}
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX'} />
        {/* Google Ads Global Site Tag */}
        {process.env.NEXT_PUBLIC_GOOGLE_ADS_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ADS_ID} />
        )}
        
        {/* Deployment V2.3.1 - Restoration Fix */}
        <ModalProvider>
          {children}
          <EnquiryModal />
          <WhatsAppWidget />
          <Suspense fallback={null}>
            <MetaPixel />
          </Suspense>
        </ModalProvider>
      </body>
    </html>
  );
}
