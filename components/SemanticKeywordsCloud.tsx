"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";
import Link from "next/link";

const KEYWORD_CLUSTERS = [
  {
    category: "Premium Configurations",
    keywords: [
      "2BHK Flats in Hadapsar Pune",
      "3BHK Apartments in Manjari",
      "Luxury 2 BHK in Pune East",
      "Spacious 3 BHK Flats near Kharadi",
      "Kumar Magnacity 2BHK Price",
      "Kumar Magnacity 3BHK Floor Plan",
      "New Launch 2BHK Manjri BK",
      "Premium 3BHK Homes Pune",
      "G+30 High-Rise Apartments Pune",
      "Under Construction Flats in Hadapsar",
      "Ready to Move Flats alternative Manjari"
    ]
  },
  {
    category: "IT Hub Connectivity",
    keywords: [
      "Flats near Magarpatta City",
      "Apartments near EON IT Park",
      "Properties near World Trade Center Pune",
      "Flats near SP Infocity Fursungi",
      "Homes near Kharadi IT Park",
      "Real Estate near Pune Solapur Highway",
      "Residential Projects near Hadapsar Link Road",
      "IT Professional Housing Pune East"
    ]
  },
  {
    category: "Investment & Real Estate",
    keywords: [
      "Real Estate Investment in Pune East",
      "Best ROI Properties in Manjari",
      "New Township Projects in Pune",
      "Kumar Properties New Launch",
      "150 Acre Township Pune",
      "MahaRERA Approved Projects Pune",
      "Property Rates in Manjari 2026",
      "Flats with Best Amenities in Pune",
      "Capital Appreciation Pune Real Estate",
      "Gated Community Flats Pune"
    ]
  },
  {
    category: "Locality & Lifestyle",
    keywords: [
      "Luxury Township Living Pune",
      "Flats with Clubhouse in Hadapsar",
      "Apartments with Swimming Pool Manjari",
      "Top Builders in Pune East",
      "Kumar Magnacity Township Reviews",
      "Kumar Magnacity Location Map",
      "Upcoming Infrastructure Pune East",
      "Ring Road Pune Real Estate Impact"
    ]
  }
];

export default function SemanticKeywordsCloud() {
  return (
    <section className="py-16 bg-[#050505] border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C9A227]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex items-center gap-3 mb-10 opacity-70">
          <Search size={20} className="text-[#C9A227]" />
          <h3 className="text-sm font-bold uppercase tracking-widest text-white">Popular Searches & Related Markets</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {KEYWORD_CLUSTERS.map((cluster, idx) => (
            <div key={idx} className="space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A227]/80 pb-2 border-b border-white/10">
                {cluster.category}
              </h4>
              <ul className="space-y-3">
                {cluster.keywords.map((keyword, kIdx) => (
                  <li key={kIdx}>
                    <Link 
                      href="/kumar-magnacity-2bhk-3bhk-apartments-manjari-pune"
                      className="text-[11px] text-white/40 hover:text-white transition-colors duration-300 block leading-snug hover:translate-x-1 transform"
                    >
                      {keyword}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
