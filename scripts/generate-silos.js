const fs = require('fs');
const path = require('path');

const keywords = [
  "Pune Real Estate", "Pune Property Market", "Pune Property", "Pune Real Estate Market", "Pune Residential Projects", "Pune Commercial Property", "Pune Luxury Apartments", "Pune Flats", "Apartments in Pune", "Property in Pune", "Pune Housing Market", "Buy Property in Pune", "Invest in Pune Real Estate", "Pune Property Investment", "New Projects in Pune", "Upcoming Projects Pune", "Ready Possession Flats Pune", "Under Construction Projects Pune", "Premium Homes Pune", "Township Projects Pune",
  "Hadapsar Real Estate", "Hadapsar Property Market", "Flats in Hadapsar", "Apartments in Hadapsar", "Luxury Flats Hadapsar", "New Projects in Hadapsar", "Ready Possession Flats Hadapsar", "Under Construction Projects Hadapsar", "Hadapsar Residential Projects", "Hadapsar Investment", "Hadapsar Property Rates", "Hadapsar Price Trends", "Hadapsar Real Estate News", "Best Projects in Hadapsar", "Gated Community Hadapsar", "Township Hadapsar",
  "Manjari Real Estate", "Manjari Property", "Flats in Manjari", "Apartments in Manjari", "Luxury Apartments Manjari", "Residential Projects Manjari", "Township in Manjari", "Property Investment Manjari", "New Launch Manjari", "Premium Homes Manjari", "Affordable Housing Manjari", "Villas in Manjari", "Property Rates Manjari", "Manjari East Pune", "Best Builders Manjari",
  "Kharadi Real Estate", "Flats in Kharadi", "Luxury Apartments Kharadi", "Kharadi Property Investment", "Kharadi Property Rates", "Commercial Property Kharadi", "Township Kharadi", "Riverfront Property Kharadi", "Premium Projects Kharadi", "Kharadi IT Corridor",
  "Wagholi Property Market", "Flats in Wagholi", "Apartments in Wagholi", "Affordable Flats Wagholi", "Wagholi Investment", "Township Wagholi", "Wagholi New Projects", "Property Rates Wagholi", "Luxury Homes Wagholi",
  "Mundhwa Property Market", "Flats in Mundhwa", "Luxury Apartments Mundhwa", "Mundhwa Township", "Mundhwa Investment", "Mundhwa Residential Projects",
  "Keshav Nagar Flats", "Keshav Nagar Real Estate", "Apartments in Keshav Nagar", "Luxury Flats Keshav Nagar", "Keshav Nagar Investment",
  "Magarpatta Property", "Flats Near Magarpatta", "Apartments Near Magarpatta City", "Luxury Homes Magarpatta", "Magarpatta Investment", "Property Near Magarpatta",
  "Amanora Property", "Flats Near Amanora", "Apartments Near Amanora Mall", "Luxury Apartments Amanora", "Amanora Township",
  "Baner Real Estate", "Baner Property", "Flats in Baner", "Luxury Apartments Baner", "Baner Property Investment", "Baner Commercial Property", "Balewadi Flats", "Balewadi Apartments", "Balewadi Investment", "Luxury Homes Balewadi", "Aundh Real Estate", "Flats in Aundh", "Apartments in Aundh", "Premium Homes Aundh", "Bavdhan Property", "Bavdhan Real Estate", "Bavdhan Apartments", "Bavdhan Luxury Flats", "Sus Property", "Flats in Sus", "Apartments Sus", "Sus Investment", "Mahalunge Real Estate", "Mahalunge Township", "Mahalunge Flats", "Mahalunge Investment",
  "Kondhwa Real Estate", "NIBM Road Property", "Undri Flats", "Mohammadwadi Property", "Pisoli Apartments", "Bibwewadi Flats", "Katraj Property", "Ambegaon Real Estate", "Dhankawadi Apartments",
  "Viman Nagar Property", "Kalyani Nagar Apartments", "Yerawada Property", "Dhanori Flats", "Lohegaon Apartments", "Vishrantwadi Property", "Tingre Nagar Flats", "Charholi Real Estate",
  "Hinjawadi Property Market", "Wakad Flats", "Tathawade Property", "Punawale Apartments", "Ravet Flats", "Moshi Property", "Chikhali Apartments", "Nigdi Property", "Akurdi Flats", "Chinchwad Real Estate", "Pimple Saudagar Property", "Pimple Nilakh Apartments", "Talawade Property", "Bhosari Real Estate", "Mamurdi Property",
  "Kumar Properties Pune", "Godrej Properties Pune", "Kolte Patil Pune", "VTP Realty Pune", "Lodha Pune", "Gera Developments Pune", "Shapoorji Pallonji Pune", "Mahindra Lifespaces Pune", "Pride Group Pune", "Nyati Group Pune", "Vilas Javdekar Pune", "Kohinoor Group Pune", "Kumar World Pune", "Kumar Magnacity", "Kumar Paradise", "Kumar Prospera", "Kumar Primus", "Kumar Purab", "Kumar Pebble Park", "Kumar Princetown", "Kumar Princeville",
  "Integrated Township Pune", "Township Projects Pune", "Premium Township Pune", "Smart Township Pune", "Self-Sustained Township Pune", "Gated Township Pune", "Family Township Pune", "Township with School Pune", "Township with Clubhouse Pune", "Township Near IT Park Pune", "Township Near Metro Pune",
  "1 BHK Pune", "2 BHK Pune", "2.5 BHK Pune", "3 BHK Pune", "3.5 BHK Pune", "4 BHK Pune", "Duplex Pune", "Penthouse Pune", "Studio Apartment Pune", "Luxury Apartment Pune", "Affordable Apartment Pune", "Premium Apartment Pune",
  "Buy Flat Pune", "Buy Apartment Pune", "Buy House Pune", "Buy Property Hadapsar", "Buy Property Manjari", "Buy Property Kharadi", "Buy Luxury Apartment Pune", "Book Flat Pune", "Residential Property Pune", "Investment Property Pune", "Property for Sale Pune", "Flats for Sale Pune", "Apartments for Sale Pune", "Ready to Move Flats Pune",
  "Best Investment Areas Pune", "High ROI Property Pune", "Rental Yield Pune", "Capital Appreciation Pune", "Best Property Investment Pune", "Pune Growth Corridors", "Pune Emerging Localities", "Pune Future Growth Areas", "Property Appreciation Pune", "Long Term Investment Pune",
  "Pune Metro Real Estate", "Metro Connected Property Pune", "Ring Road Pune Property", "Pune Airport Property", "IT Corridor Pune", "Pune Smart City", "PMRDA Development", "Pune Infrastructure Projects", "Metro Impact on Property Prices", "Ring Road Investment",
  "Family-Friendly Apartments Pune", "Child-Friendly Township Pune", "Senior Citizen Friendly Apartments", "Pet-Friendly Apartments Pune", "Eco-Friendly Homes Pune", "Green Township Pune", "Smart Homes Pune", "Homes with Clubhouse Pune", "Swimming Pool Apartments Pune", "Gym Apartments Pune", "Sky Lounge Apartments Pune", "Garden Facing Flats Pune",
  "Office Space Pune", "Commercial Property Pune", "Shops for Sale Pune", "Retail Space Pune", "Warehouse Pune", "Industrial Property Pune", "Co-working Space Pune", "IT Office Pune", "Commercial Investment Pune",
  "Property Near Magarpatta City", "Property Near SP Infocity", "Property Near EON IT Park", "Property Near World Trade Center Pune", "Property Near Kharadi IT Park", "Flats Near Amanora Mall", "Flats Near Seasons Mall", "Flats Near Pune Railway Station", "Flats Near Pune Airport", "Property Near MIT Pune", "Property Near Symbiosis", "Property Near Bharati Vidyapeeth",
  "Pune Property Guide", "Pune Home Buying Guide", "Pune Real Estate Guide", "Pune Property Tax Guide", "Stamp Duty Pune", "Registration Charges Pune", "Home Loan Pune", "RERA Pune", "PMRDA Projects", "Property Documentation Pune", "Best Time to Buy Property in Pune", "How to Buy a Flat in Pune", "Ready Possession vs Under Construction", "Rental Income from Pune Property", "Pune Real Estate Forecast", "Pune Property Market Analysis", "Pune Property Price Trends", "Real Estate News Pune",
  "Kumar Magnacity Manjari", "Kumar Magnacity Hadapsar", "Kumar Magnacity Pune", "Flats Near Manjari Road", "Flats Near Hadapsar Railway Station", "Flats Near Solapur Highway", "Apartments Near SP Infocity", "Apartments Near Magarpatta City", "Property Near Amanora Town Centre", "Flats Near Seasons Mall", "Homes Near Kharadi", "Gated Community Manjari", "Premium Township Hadapsar", "Investment Property East Pune", "Luxury Apartments Near Hadapsar", "Property Near IT Parks Pune", "Homes Near Pune Metro Corridor", "Flats Near Pune Ring Road Alignment"
];

const slugify = (text) => text.toString().toLowerCase().trim().replace(/[\s\W-]+/g, '-');

// Read existing registry
const registryPath = path.join(__dirname, '../data/seo-registry.json');
let registry = {};
if (fs.existsSync(registryPath)) {
  registry = JSON.parse(fs.readFileSync(registryPath, 'utf8'));
}

const generateFaq = (keyword) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `Is Kumar Magnacity a good option for ${keyword}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes, Kumar Magnacity Township at Manjari, Hadapsar is highly recommended for buyers looking into ${keyword}. It offers premium 2BHK, 3BHK apartments, and NA bungalow plots with world-class amenities.`
        }
      },
      {
        "@type": "Question",
        "name": `What is the price range at Kumar Magnacity?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `At Kumar Magnacity, premium 2BHK flats start from ₹67.99L, 3BHK flats from ₹92.99L, and NA Bungalow plots start from ₹1.49 Cr.`
        }
      }
    ]
  };
};

// Generate entries
keywords.forEach(kw => {
  const categorySlug = slugify(kw);
  
  // 1. Apartment Node
  const aptSlug = "kumar-magnacity-2bhk-3bhk-apartments";
  const aptKey = `${categorySlug}/${aptSlug}`;
  
  if (!registry[aptKey]) {
    registry[aptKey] = {
      title: `${kw} | 2BHK & 3BHK Apartments | Kumar Magnacity Township`,
      description: `Explore premium 2BHK and 3BHK apartments at Kumar Magnacity, the perfect choice for ${kw}. 150-acre township with 50+ amenities near Magarpatta and Kharadi.`,
      hero_title: `Premium Apartments for ${kw}`,
      hero_subtitle: `Elevate your lifestyle with Pune's most luxurious 150-acre township at Manjari. Discover 2BHK and 3BHK homes designed for modern royalty.`,
      hero_badge: `Top Choice for ${kw}`,
      faq_json: generateFaq(kw)
    };
  }

  // 2. NA Plot Node
  const plotSlug = "kumar-magnacity-na-bungalow-plots";
  const plotKey = `${categorySlug}/${plotSlug}`;
  
  if (!registry[plotKey]) {
    registry[plotKey] = {
      title: `${kw} | NA Bungalow Plots | Kumar Magnacity Township`,
      description: `Secure your RERA approved NA bungalow plot at Kumar Magnacity. The ultimate investment for ${kw} with individual 7/12 extracts.`,
      hero_title: `NA Bungalow Plots for ${kw}`,
      hero_subtitle: `Build your own legacy on Pune's most premium land. 1700+ sq.ft PMRDA sanctioned plots within a 150-acre branded township.`,
      hero_badge: `Premium Land Investment`,
      faq_json: generateFaq(kw)
    };
  }
});

// Write back
fs.writeFileSync(registryPath, JSON.stringify(registry, null, 2), 'utf8');
console.log(`Successfully generated and merged ${keywords.length * 2} SEO nodes. Total registry size: ${Object.keys(registry).length} nodes.`);
