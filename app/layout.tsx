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
  title: "Kumar Magnacity Township | 2BHK & 3BHK Apartments + NA Plots | Manjari Pune",
  description: "Kumar Magnacity — Pune's premier 150-acre township at Manjari near Hadapsar. 2BHK apartments from ₹67.99L, 3BHK from ₹92.99L + RERA-approved NA bungalow plots. 50+ amenities, grand clubhouse, 26 acres greens. By Kumar Properties (60-year legacy).",
  keywords: "kumar magnacity apartments, 2bhk flats hadapsar pune, 3bhk apartments manjri pune, kumar magnacity price, na bungalow plots manjari, kumar properties pune, 2bhk 3bhk flats near magarpatta, apartments pune east, kumar magnacity township",
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
