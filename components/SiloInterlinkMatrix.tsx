"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Network } from "lucide-react";

// The Matrix: Defines which URLs belong to which Silo
const SILO_MAP = {
  investment: {
    hub: { title: "Pune East Investment Hub", url: "/investment-pune-east" },
    spokes: [
      { title: "NRI Investment Guide", url: "/insights/nri-investment-manjari" },
      { title: "Pune East Market Data", url: "/kumar-magnacity-market-data-pune-east" },
      { title: "ROI Calculator", url: "/roi-calculator" },
      { title: "Ring Road Impact", url: "/insights/pune-ring-road-impact" },
      { title: "Investment Matrix", url: "/kumar-magnacity-investment-plan-pune-east" }
    ],
    triggers: ["investment", "roi", "market-data", "ring-road", "insights"]
  },
  location: {
    hub: { title: "Pune East Location Hub", url: "/flats-in-pune-east" },
    spokes: [
      { title: "Magarpatta Proximity", url: "/flats-near-magarpatta-city" },
      { title: "Kharadi IT Park Flats", url: "/flats-near-kharadi-it-park" },
      { title: "Manjari Location Map", url: "/kumar-magnacity-manjari-location-map" },
      { title: "Location Advantages", url: "/kumar-magnacity-location-advantages-hadapsar-manjari" }
    ],
    triggers: ["near", "location", "map", "hadapsar", "manjari", "kharadi", "magarpatta"]
  },
  product: {
    hub: { title: "Luxury Apartments Hub", url: "/luxury-apartments-pune" },
    spokes: [
      { title: "2BHK Price & Details", url: "/kumar-magnacity-2bhk-flats-hadapsar-pune-price" },
      { title: "3BHK Price & Details", url: "/kumar-magnacity-3bhk-apartments-manjari-pune-price" },
      { title: "Floor Plans (2BHK & 3BHK)", url: "/kumar-magnacity-floor-plan-2bhk-3bhk" },
      { title: "NA Bungalow Plots", url: "/kumar-magnacity-na-bungalow-plots-concept" },
      { title: "Master Layout", url: "/kumar-magnacity-na-bungalow-plots-master-plan" }
    ],
    triggers: ["2bhk", "3bhk", "floor-plan", "plots", "concept", "master-plan"]
  }
};

export default function SiloInterlinkMatrix() {
  const pathname = usePathname();
  
  // Determine which silo we are in based on URL triggers
  let activeSilo = null;
  for (const [key, siloData] of Object.entries(SILO_MAP)) {
    if (siloData.triggers.some(trigger => pathname.includes(trigger))) {
      activeSilo = siloData;
      break;
    }
  }

  // If page doesn't belong to a specific silo, render the generic hub links (Homepage behavior)
  if (!activeSilo) {
    return (
      <div className="w-full py-12 border-t border-white/5 bg-[#0a0a0a]" aria-label="Explore Topic Clusters">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex items-center gap-3 mb-6 opacity-50">
             <Network size={16} className="text-accent" />
             <span className="text-[10px] uppercase font-bold tracking-widest text-white">Explore Real Estate Hubs</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
             {Object.values(SILO_MAP).map((silo, idx) => (
               <Link key={idx} href={silo.hub.url} className="group flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/50 transition-colors">
                 <span className="text-xs font-bold text-white group-hover:text-accent transition-colors">{silo.hub.title}</span>
                 <ArrowRight size={14} className="text-white/20 group-hover:text-accent group-hover:translate-x-1 transition-all" />
               </Link>
             ))}
          </div>
        </div>
      </div>
    );
  }

  // Render Silo-Specific Interlinks (Trapping the crawler in the topic cluster)
  return (
    <div className="w-full py-12 border-t border-white/5 bg-[#0a0a0a]" aria-label="Related Topics in this Cluster">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
           <div className="flex items-center gap-3 opacity-50">
              <Network size={16} className="text-accent" />
              <span className="text-[10px] uppercase font-bold tracking-widest text-white">Related in: {activeSilo.hub.title}</span>
           </div>
           <Link href={activeSilo.hub.url} className="text-[10px] uppercase font-bold tracking-widest text-accent hover:text-white transition-colors">
              View Master Hub &rarr;
           </Link>
        </div>
        
        <div className="flex flex-wrap gap-3">
           {activeSilo.spokes.map((spoke, idx) => {
             if (spoke.url === pathname) return null; // Don't link to self
             return (
               <Link 
                 key={idx} 
                 href={spoke.url} 
                 className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-accent/50 transition-colors"
               >
                 <span className="text-[11px] font-medium text-white/70 group-hover:text-white transition-colors">{spoke.title}</span>
               </Link>
             );
           })}
        </div>
      </div>
      
      {/* Dynamic JSON-LD Breadcrumb Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://kumarmagnacitytownship.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": activeSilo.hub.title,
                "item": `https://kumarmagnacitytownship.com${activeSilo.hub.url}`
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Current Page",
                "item": `https://kumarmagnacitytownship.com${pathname}`
              }
            ]
          })
        }}
      />
    </div>
  );
}
