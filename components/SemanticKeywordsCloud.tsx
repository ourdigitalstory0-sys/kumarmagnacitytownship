"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";
import Link from "next/link";

const KEYWORD_CLUSTERS = [
  {
    category: "Kumar Magnacity Township",
    keywords: [
      "Kumar Magnacity Township Pune",
      "Kumar Magnacity Hadapsar Manjari",
      "Kumar Magnacity Apartments & Flats",
      "Kumar Magnacity Residential Township",
      "Kumar Magnacity Premium Homes",
      "Kumar Magnacity New Launch 2 BHK",
      "Kumar Magnacity Luxury 3 BHK",
      "Kumar Magnacity investment",
      "Kumar Magnacity property price",
      "Kumar Magnacity floor plans",
      "Kumar Magnacity RERA & reviews"
    ]
  },
  {
    category: "Hadapsar Real Estate",
    keywords: [
      "Hadapsar Real Estate Market",
      "Hadapsar Residential Projects",
      "Luxury Flats in Hadapsar",
      "Ready Possession Flats Hadapsar",
      "Under Construction Projects Hadapsar",
      "Township Projects Hadapsar",
      "Hadapsar Property Investment",
      "Hadapsar Rental Yield",
      "Hadapsar Property Trends",
      "Best Residential Area Hadapsar",
      "Hadapsar Property Price Trends"
    ]
  },
  {
    category: "Manjari Real Estate",
    keywords: [
      "Manjari Property Market",
      "Flats & Apartments in Manjari",
      "New Projects in Manjari",
      "Luxury Homes Manjari",
      "Township in Manjari East Pune",
      "Manjari Investment ROI",
      "Why invest in Manjari",
      "Best township in Manjari",
      "Manjari property appreciation",
      "Manjari upcoming projects",
      "Manjari residential investment"
    ]
  },
  {
    category: "Pune East Corridor",
    keywords: [
      "East Pune Real Estate",
      "East Pune Residential Projects",
      "East Pune Luxury Apartments",
      "Best Township East Pune",
      "Premium Homes East Pune",
      "East Pune Property Appreciation",
      "New Launch Projects East Pune",
      "Pune East Property Market",
      "Property Near Magarpatta City",
      "Property Near SP Infocity",
      "Property Near EON IT Park"
    ]
  },
  {
    category: "Pune Market & Investment",
    keywords: [
      "Pune Real Estate Market",
      "Pune Property Investment",
      "Pune Luxury Apartments",
      "Pune Township Projects",
      "Pune Housing Market",
      "Invest in Pune Property",
      "Pune Investment Properties",
      "High ROI Property Pune",
      "Commercial Property Pune",
      "Rental Income Pune",
      "Smart Investment Pune"
    ]
  },
  {
    category: "Buyer Intent Searches",
    keywords: [
      "Buy Flat in Hadapsar",
      "Buy Flat in Manjari",
      "Buy Apartment Pune",
      "Buy Luxury Flat Pune",
      "Invest in Hadapsar",
      "Invest in Manjari",
      "Best Township Pune",
      "Best Flats Near Magarpatta",
      "Best Apartments Near SP Infocity",
      "Property Near World Trade Center Pune",
      "Property Near Kharadi"
    ]
  },
  {
    category: "Pune Micro Markets",
    keywords: [
      "Kharadi Real Estate",
      "Wagholi Property Market",
      "Magarpatta Luxury Homes",
      "Keshav Nagar New Projects",
      "Koregaon Park Annexe Flats",
      "PCMC Real Estate Market",
      "Wakad Property Investment",
      "Hinjawadi IT Corridor Flats",
      "Baner Luxury Apartments",
      "Balewadi Residential Projects",
      "Emerging Real Estate Markets Pune"
    ]
  },
  {
    category: "Infrastructure & Guides",
    keywords: [
      "Pune Metro Real Estate Impact",
      "Pune Ring Road Property Impact",
      "Pune IT Corridor Real Estate",
      "Pune Smart City Projects",
      "Pune Infrastructure Development",
      "Pune Real Estate Guide",
      "Pune Home Buying Tips",
      "Pune Property Market Analysis",
      "Pune Real Estate Forecast",
      "Pune Housing Demand",
      "Upcoming Residential Corridors Pune"
    ]
  }
];

export default function SemanticKeywordsCloud() {
  return (
    <section className="py-20 bg-[#020202] border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#C9A227]/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex items-center gap-3 mb-12 opacity-70">
          <Search size={20} className="text-[#C9A227]" />
          <h3 className="text-sm font-bold uppercase tracking-widest text-white">Pune Real Estate Market Directory</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {KEYWORD_CLUSTERS.map((cluster, idx) => (
            <div key={idx} className="space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A227]/90 pb-2 border-b border-white/10">
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
