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
  title: "Kumar Magnacity NA Bungalow Plots at Manjari Pune | Plots near Hadapsar",
  description: "Secure your legacy at Kumar Magnacity, the premier 150-acre NA bungalow plot township at Manjari near Hadapsar. RERA-approved luxury plots with world-class amenities and Pune's best ROI potential.",
  keywords: "kumar magnacity na bungalow plots, plots in manjari pune, plots near hadapsar, na plots pune east, kumar properties manjari, luxury bungalow plots pune",
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
