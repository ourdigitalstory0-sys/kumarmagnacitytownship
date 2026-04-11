import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";

export const runtime = "edge";


const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Kumar Magnacity NA Bungalow Plots at Manjari near Hadapsar | Pune East Dominance",
  description: "Secure your legacy with premium NA bungalow plots at Kumar Magnacity, Manjari near Hadapsar. A world-class 150-acre township with RERA-registered plots and master-planned infrastructure by Kumar Properties.",
  keywords: "kumar magnacity na bungalow plots, plots in manjari, plots near hadapsar, na plots pune east, kumar properties manjari, investment plots pune",
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
        {children}
      </body>
    </html>
  );
}
