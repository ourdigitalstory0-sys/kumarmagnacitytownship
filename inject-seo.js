const fs = require('fs');
const path = require('path');

const registryPath = path.join(__dirname, 'data', 'seo-registry.json');
const registry = JSON.parse(fs.readFileSync(registryPath, 'utf8'));

const newNodes = {
  // Hadapsar & Pune East Market Nodes
  "apartments-in-hadapsar-pune/kumar-magnacity": {
    "title": "Apartments in Hadapsar Pune | 2BHK & 3BHK Flats at Kumar Magnacity",
    "description": "Premium 2BHK and 3BHK apartments in Hadapsar, Pune. Kumar Magnacity offers a 150-acre township with world-class amenities just 10 mins from Magarpatta IT Park.",
    "hero_title": "Premium Apartments in Hadapsar",
    "hero_subtitle": "Experience the ultimate township lifestyle at Kumar Magnacity, Hadapsar Annexe.",
    "hero_badge": "Strategic Location: Hadapsar",
    "faq_json": {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why buy an apartment in Hadapsar, Pune?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hadapsar is a major IT and industrial hub with excellent connectivity to Magarpatta, Kharadi, and Fursungi, ensuring high rental yields and property appreciation."
          }
        }
      ]
    }
  },
  "pune-east-real-estate-market/2bhk-3bhk-flats-kumar-magnacity": {
    "title": "Pune East Real Estate Market 2026 | Invest in 2BHK & 3BHK Flats",
    "description": "Deep dive into the Pune East real estate market. Why 2BHK and 3BHK flats at Kumar Magnacity Manjari are the top investment choice for 2026.",
    "hero_title": "Pune East Real Estate Market Insights",
    "hero_subtitle": "Pune East is witnessing massive infrastructure growth including the Outer Ring Road and Metro Phase 2.",
    "hero_badge": "Market Leader 2026"
  },
  "flats-near-kharadi-it-park-pune/kumar-magnacity": {
    "title": "Flats near Kharadi IT Park Pune | 2BHK & 3BHK at Kumar Magnacity",
    "description": "Looking for flats near Kharadi IT Park? Kumar Magnacity offers luxury 2BHK & 3BHK apartments just a short drive from EON IT Park and WTC Pune.",
    "hero_title": "Luxury Flats Near Kharadi IT Park",
    "hero_subtitle": "Perfect for IT professionals working in Kharadi seeking a premium township lifestyle with 50+ amenities.",
    "hero_badge": "Ideal for IT Professionals"
  },
  "apartments-near-fursungi-sp-infocity/kumar-magnacity": {
    "title": "Apartments near Fursungi SP Infocity | Kumar Magnacity Pune",
    "description": "Premium 2BHK and 3BHK flats near Fursungi SP Infocity at Kumar Magnacity. Gated 150-acre township offering seamless connectivity.",
    "hero_title": "Apartments Near Fursungi SP Infocity",
    "hero_subtitle": "Live closer to work. Enjoy seamless connectivity to Fursungi while living in Pune's finest township.",
    "hero_badge": "Seamless Connectivity"
  },
  "manjari-real-estate-market/kumar-magnacity-apartments": {
    "title": "Manjari Pune Real Estate Market 2026 | Buy 2BHK 3BHK Apartments",
    "description": "Manjari is Pune's fastest-growing real estate micro-market. Discover 2BHK and 3BHK apartments at Kumar Magnacity with high appreciation potential.",
    "hero_title": "Manjari Real Estate Market 2026",
    "hero_subtitle": "Capitalize on the infrastructure boom in Manjari with Kumar Magnacity's premium apartments.",
    "hero_badge": "High Appreciation Zone"
  },
  "new-residential-projects-in-pune-east/kumar-magnacity": {
    "title": "New Residential Projects in Pune East | Kumar Magnacity 150-Acre Township",
    "description": "Explore one of the largest new residential projects in Pune East. Kumar Magnacity offers 2BHK, 3BHK, and NA Bungalow plots with 50+ amenities.",
    "hero_title": "New Residential Projects in Pune East",
    "hero_subtitle": "Discover the 150-acre mega township redefining luxury living in Pune East.",
    "hero_badge": "Mega Township Launch"
  }
};

// Merge new nodes
Object.assign(registry, newNodes);

// Write back to file
fs.writeFileSync(registryPath, JSON.stringify(registry, null, 2));
console.log("Successfully injected " + Object.keys(newNodes).length + " new geo-targeted SEO nodes into the registry.");
