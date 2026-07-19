import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/lib/modal-context";
import EnquiryModal from "@/components/EnquiryModal";

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
    "kumar magnacity apartments", "2bhk flats hadapsar pune", "3bhk apartments manjri pune", 
    "kumar magnacity price", "na bungalow plots manjari", "kumar properties pune", 
    "2bhk 3bhk flats near magarpatta", "apartments pune east", "kumar magnacity township",
    "Pune Real Estate Market", "Flats in Hadapsar", "Apartments near Kharadi IT Park",
    "Flats near Fursungi SP Infocity", "Pune East Property", "Kumar Magnacity Manjari",
    "2BHK near EON IT Park", "3BHK near World Trade Center Pune", "Real Estate Investment Pune East"
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${outfit.variable} antialiased`}>
        {/* Deployment V2.3.1 - Restoration Fix */}
        <ModalProvider>
          {children}
          <EnquiryModal />
        </ModalProvider>
      </body>
    </html>
  );
}
