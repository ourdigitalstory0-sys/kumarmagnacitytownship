// Kumar Magnacity Township — Apartment Data Registry
// Source: Web-verified from 99acres, Housing.com, MagicBricks, MahaRERA, KumarWorld.com (July 2026)

export interface ApartmentConfig {
  type: "2BHK" | "3BHK";
  carpetArea: number;
  carpetAreaUnit: string;
  priceFrom: number;
  priceTo: number;
  priceUnit: string;
  emiFrom: number;
  flatsPerFloor: number;
  rera: string;
  possession: string;
  highlights: string[];
  idealFor: string[];
  rooms: RoomSpec[];
}

export interface RoomSpec {
  name: string;
  area: string;
  flooring: string;
  features: string[];
}

export interface ApartmentSpec {
  category: string;
  icon: string;
  items: { label: string; value: string }[];
}

export interface NearbyLandmark {
  name: string;
  category: "it-park" | "school" | "hospital" | "shopping" | "transit";
  distance: string;
  travelTime: string;
}

export interface TowerData {
  name: string;
  floors: number;
  unitsPerFloor: number;
  lifts: number;
  phase: string;
}

// ─── Apartment Configurations ───────────────────────────────────────────────

export const apartmentTypes: ApartmentConfig[] = [
  {
    type: "2BHK",
    carpetArea: 757,
    carpetAreaUnit: "sq.ft",
    priceFrom: 6799000,
    priceTo: 7600000,
    priceUnit: "₹",
    emiFrom: 18500,
    flatsPerFloor: 8,
    rera: "P52100052096",
    possession: "December 2028",
    highlights: [
      "Compact yet spacious 757 sq.ft carpet area",
      "Vastu-compliant east/west facing units",
      "Dedicated dry balcony + utility space",
      "Premium vitrified flooring throughout",
      "Earthquake-resistant A-class construction",
      "150-acre township ecosystem access",
    ],
    idealFor: [
      "Young IT professionals at Magarpatta & EON",
      "First-time homebuyers seeking township living",
      "NRI investors targeting Pune East growth corridor",
      "Couples upgrading from rented apartments",
    ],
    rooms: [
      { name: "Living + Dining", area: "~220 sq.ft", flooring: "Vitrified Tiles", features: ["Open layout", "Cross ventilation", "Premium OBD paint"] },
      { name: "Master Bedroom", area: "~150 sq.ft", flooring: "Vitrified Tiles", features: ["Attached bathroom", "Wardrobe provision", "MS grills on windows"] },
      { name: "Bedroom 2", area: "~120 sq.ft", flooring: "Vitrified Tiles", features: ["Study corner space", "Aluminum sliding windows", "Natural light optimized"] },
      { name: "Kitchen", area: "~80 sq.ft", flooring: "Anti-skid Ceramic Tiles", features: ["Granite countertop", "SS sink", "Exhaust fan provision"] },
      { name: "Bathroom", area: "~45 sq.ft", flooring: "Matt Ceramic Tiles", features: ["Branded CP fittings", "Water heater provision", "Anti-skid flooring"] },
      { name: "Balcony", area: "~50 sq.ft", flooring: "Anti-skid Ceramic Tiles", features: ["Garden-facing options", "Railing with MS grills"] },
    ],
  },
  {
    type: "3BHK",
    carpetArea: 1053,
    carpetAreaUnit: "sq.ft",
    priceFrom: 9299000,
    priceTo: 10900000,
    priceUnit: "₹",
    emiFrom: 25300,
    flatsPerFloor: 8,
    rera: "P52100054476",
    possession: "December 2028",
    highlights: [
      "Expansive 1,053 sq.ft carpet area",
      "3 bedrooms with 2 attached bathrooms",
      "Large living-cum-dining with panoramic views",
      "Dedicated pooja room / study nook",
      "Premium granite kitchen with SS sink",
      "Full access to 50+ township amenities",
    ],
    idealFor: [
      "Growing families seeking space & community",
      "Senior IT professionals upgrading from 2BHK",
      "Joint families needing 3 independent bedrooms",
      "Investors targeting ₹1Cr+ segment growth",
    ],
    rooms: [
      { name: "Living + Dining", area: "~300 sq.ft", flooring: "Vitrified Tiles", features: ["Spacious open plan", "Panoramic balcony access", "Premium OBD paint finish"] },
      { name: "Master Bedroom", area: "~180 sq.ft", flooring: "Vitrified Tiles", features: ["Attached toilet with granite counter", "Walk-in wardrobe provision", "Large windows"] },
      { name: "Bedroom 2", area: "~140 sq.ft", flooring: "Vitrified Tiles", features: ["Attached bathroom", "Study desk space", "Cross ventilation"] },
      { name: "Bedroom 3", area: "~130 sq.ft", flooring: "Vitrified Tiles", features: ["Guest room / kids room", "Aluminum sliding windows", "Natural daylight"] },
      { name: "Kitchen", area: "~100 sq.ft", flooring: "Anti-skid Ceramic Tiles", features: ["L-shaped granite counter", "SS sink", "Water purifier provision", "Exhaust fan provision"] },
      { name: "Bathrooms (×2)", area: "~50 sq.ft each", flooring: "Matt Ceramic Tiles", features: ["Branded CP fittings", "Granite counter in master", "Geyser provision"] },
      { name: "Balcony", area: "~65 sq.ft", flooring: "Anti-skid Ceramic Tiles", features: ["Panoramic township view", "Dual-side access"] },
    ],
  },
];

// ─── Construction Specifications ─────────────────────────────────────────────

export const apartmentSpecs: ApartmentSpec[] = [
  {
    category: "Structure & Safety",
    icon: "shield",
    items: [
      { label: "Construction Type", value: "Earthquake-resistant RCC framed" },
      { label: "Walls", value: "AAC blocks with gypsum punning" },
      { label: "Ceiling", value: "Smooth plastered with OBD paint" },
      { label: "Security", value: "24/7 CCTV + Video door phone + Intercom" },
      { label: "Fire Safety", value: "Fire detection & suppression system" },
    ],
  },
  {
    category: "Flooring & Walls",
    icon: "layers",
    items: [
      { label: "Living & Bedrooms", value: "Premium vitrified tile flooring" },
      { label: "Kitchen", value: "Anti-skid ceramic tiles" },
      { label: "Bathrooms", value: "Matt-finish ceramic tiles (anti-skid)" },
      { label: "Balcony & Terrace", value: "Anti-skid ceramic tiles" },
      { label: "Wall Finish", value: "Gypsum punning + superior OBD paint" },
    ],
  },
  {
    category: "Kitchen & Bathroom",
    icon: "chef-hat",
    items: [
      { label: "Kitchen Counter", value: "Polished granite with stainless steel sink" },
      { label: "Kitchen Provisions", value: "Water purifier, exhaust fan, chimney" },
      { label: "Sanitary Ware", value: "Branded CP fittings (Jaquar/equivalent)" },
      { label: "Master Toilet", value: "Granite counter with mirror provision" },
      { label: "Plumbing", value: "Concealed CPVC piping with hot/cold mixing" },
    ],
  },
  {
    category: "Doors & Windows",
    icon: "door-open",
    items: [
      { label: "Main Door", value: "Teak veneer flush door with SS hardware" },
      { label: "Internal Doors", value: "Vinyl skin/HDF moulded flush doors" },
      { label: "Windows", value: "Powder-coated aluminum sliding with MS grills" },
      { label: "Balcony Door", value: "UPVC/aluminum sliding with safety grills" },
      { label: "Hardware", value: "Stainless steel fittings & mortise locks" },
    ],
  },
  {
    category: "Electrical & Smart",
    icon: "zap",
    items: [
      { label: "Wiring", value: "Concealed copper wiring with modular switches" },
      { label: "AC Provision", value: "Pre-fitted AC point in all bedrooms" },
      { label: "Water Heater", value: "Provision in all bathrooms" },
      { label: "Power Backup", value: "Generator backup for common areas + lifts" },
      { label: "Internet", value: "Fibre optic broadband ready" },
    ],
  },
  {
    category: "Vertical Transport",
    icon: "arrow-up",
    items: [
      { label: "Lifts", value: "High-speed automatic passenger lifts" },
      { label: "Count", value: "2 lifts per tower wing" },
      { label: "Capacity", value: "13-person capacity" },
      { label: "Backup", value: "ARD (Automatic Rescue Device)" },
      { label: "Staircase", value: "Fire-escape staircase with pressurization" },
    ],
  },
];

// ─── Tower Data ──────────────────────────────────────────────────────────────

export const towerData: TowerData[] = [
  { name: "Tower A", floors: 24, unitsPerFloor: 8, lifts: 2, phase: "Phase 1" },
  { name: "Tower B", floors: 24, unitsPerFloor: 8, lifts: 2, phase: "Phase 1" },
  { name: "Tower C", floors: 24, unitsPerFloor: 8, lifts: 2, phase: "Phase 1" },
  { name: "Tower D", floors: 24, unitsPerFloor: 8, lifts: 2, phase: "Phase 2" },
];

// ─── Nearby Landmarks ────────────────────────────────────────────────────────

export const nearbyLandmarks: NearbyLandmark[] = [
  // IT Parks
  { name: "Magarpatta City IT Park", category: "it-park", distance: "6 km", travelTime: "10 min" },
  { name: "EON IT Park, Kharadi", category: "it-park", distance: "12 km", travelTime: "15 min" },
  { name: "SP Infocity", category: "it-park", distance: "8 km", travelTime: "12 min" },
  { name: "World Trade Center Kharadi", category: "it-park", distance: "13 km", travelTime: "18 min" },
  // Schools
  { name: "The Bishop's School", category: "school", distance: "8 km", travelTime: "12 min" },
  { name: "Vibgyor High School", category: "school", distance: "5 km", travelTime: "8 min" },
  { name: "Delhi Public School", category: "school", distance: "10 km", travelTime: "15 min" },
  { name: "Pawar Public School", category: "school", distance: "7 km", travelTime: "10 min" },
  { name: "MIT ADT University", category: "school", distance: "12 km", travelTime: "18 min" },
  // Hospitals
  { name: "Noble Hospital", category: "hospital", distance: "7 km", travelTime: "10 min" },
  { name: "Sahyadri Hospital", category: "hospital", distance: "9 km", travelTime: "12 min" },
  { name: "Columbia Asia Hospital", category: "hospital", distance: "8 km", travelTime: "12 min" },
  { name: "Ruby Hall Clinic", category: "hospital", distance: "12 km", travelTime: "18 min" },
  // Shopping
  { name: "Seasons Mall", category: "shopping", distance: "6 km", travelTime: "10 min" },
  { name: "Amanora Mall", category: "shopping", distance: "8 km", travelTime: "12 min" },
  { name: "Phoenix Marketcity", category: "shopping", distance: "10 km", travelTime: "15 min" },
  // Transit
  { name: "Pune International Airport", category: "transit", distance: "22 km", travelTime: "30 min" },
  { name: "Hadapsar Railway Station", category: "transit", distance: "8 km", travelTime: "12 min" },
  { name: "Pune-Solapur Highway", category: "transit", distance: "3 km", travelTime: "5 min" },
  { name: "Proposed Metro Station", category: "transit", distance: "4 km", travelTime: "7 min" },
];

// ─── Township Amenities (Apartment-focused) ──────────────────────────────────

export const townshipAmenities = [
  { name: "Grand Clubhouse", description: "~1 Lakh sq.ft social and recreational hub", icon: "building" },
  { name: "Swimming Pool", description: "Olympic-standard pool with kids' splash zone", icon: "waves" },
  { name: "Gymnasium", description: "State-of-the-art equipment with personal training", icon: "dumbbell" },
  { name: "Jogging Track", description: "Landscaped rubberized track through botanical trails", icon: "footprints" },
  { name: "Basketball Court", description: "Full-size professional court with floodlights", icon: "target" },
  { name: "Tennis Court", description: "International standard with synthetic surface", icon: "circle-dot" },
  { name: "Badminton Court", description: "Indoor court with professional flooring", icon: "move-diagonal" },
  { name: "Children's Play Area", description: "Age-appropriate zones with safety surfacing", icon: "baby" },
  { name: "Yoga & Meditation", description: "Serene landscaped zone for wellness practices", icon: "flower-2" },
  { name: "Open Air Theatre", description: "Amphitheatre with tiered seating for events", icon: "clapperboard" },
  { name: "Banquet Hall", description: "Premium party hall for celebrations & events", icon: "party-popper" },
  { name: "Cycling Track", description: "Dedicated pathway through 26 acres of greens", icon: "bike" },
  { name: "Landscaped Gardens", description: "26+ acres of peripheral green belts & trails", icon: "trees" },
  { name: "Senior Citizen Zone", description: "Dedicated pavilion with seating & games", icon: "heart-handshake" },
  { name: "Provision Store", description: "On-campus daily essentials convenience store", icon: "shopping-cart" },
  { name: "Football Arena", description: "Five-a-side turf football pitch", icon: "trophy" },
];

// ─── SEO Keyword Registry ────────────────────────────────────────────────────

export const apartmentSEOKeywords = {
  primary: [
    "kumar magnacity 2bhk apartments",
    "kumar magnacity 3bhk flats",
    "2bhk flats in hadapsar pune",
    "3bhk apartments manjri pune",
    "kumar magnacity apartments price",
    "kumar magnacity township apartments",
    "2bhk 3bhk flats near magarpatta pune",
    "kumar properties apartments pune",
  ],
  secondary: [
    "2bhk flats in manjri budruk",
    "3bhk flats near eon it park pune",
    "affordable 2bhk hadapsar pune under 80 lakhs",
    "premium 3bhk apartments pune east",
    "kumar magnacity floor plan",
    "kumar magnacity carpet area",
    "apartments near magarpatta city pune",
    "flats in hadapsar annex",
  ],
  longTail: [
    "kumar magnacity 2bhk carpet area 757 sqft price",
    "kumar magnacity 3bhk 1053 sqft specifications",
    "kumar magnacity apartment possession date 2028",
    "kumar magnacity rera p52100052096 apartments",
    "2bhk flats near sp infocity hadapsar pune",
    "3bhk apartments near eon it park kharadi",
    "best 2bhk flats in pune east under 75 lakhs",
    "kumar magnacity township amenities clubhouse",
    "kumar magnacity apartment floor plan layout",
    "2bhk 3bhk apartment manjri hadapsar link road pune",
  ],
  marathi: [
    "कुमार मॅग्नासिटी २ बीएचके फ्लॅट",
    "कुमार मॅग्नासिटी ३ बीएचके अपार्टमेंट",
    "हडपसर पुणे मध्ये फ्लॅट",
    "मांजरी पुणे अपार्टमेंट किंमत",
    "पुणे पूर्व २ बीएचके फ्लॅट",
  ],
};

// ─── Developer Legacy ────────────────────────────────────────────────────────

export const developerLegacy = {
  name: "Kumar Properties",
  brandName: "Kumar World",
  founded: 1966,
  founder: "Late Shri K.H. Oswal",
  yearsOfExperience: 60,
  projectsDelivered: 140,
  totalAreaDelivered: "38 Million+ sq.ft",
  familiesServed: "43,000+",
  cities: ["Pune", "Mumbai", "Bangalore"],
  notableProjects: [
    "Kumar Megapolis, Hinjewadi",
    "Kumar Privie Sanctum, Baner",
    "Kumar Pebble Park, Hadapsar",
    "Kumar IT Parks, Pune",
  ],
};

// ─── Price Comparison Data ───────────────────────────────────────────────────

export const priceComparison = {
  locations: [
    { name: "Kharadi", avgRate2BHK: 9800, avgRate3BHK: 10500, status: "Saturated" },
    { name: "Magarpatta", avgRate2BHK: 11200, avgRate3BHK: 12000, status: "Premium Saturated" },
    { name: "Hadapsar Core", avgRate2BHK: 8500, avgRate3BHK: 9200, status: "High Density" },
    { name: "Kumar Magnacity", avgRate2BHK: 8980, avgRate3BHK: 8830, status: "Growth Corridor ⚡" },
    { name: "Wagholi", avgRate2BHK: 6500, avgRate3BHK: 7200, status: "Developing" },
  ],
  insight: "Kumar Magnacity offers 20-35% lower entry than Kharadi/Magarpatta with higher growth potential due to upcoming Ring Road and Metro connectivity.",
};

// ─── EMI Calculator Data ─────────────────────────────────────────────────────

export function calculateEMI(principal: number, ratePerAnnum: number, tenureYears: number): number {
  const monthlyRate = ratePerAnnum / 12 / 100;
  const months = tenureYears * 12;
  const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
  return Math.round(emi);
}

export const emiScenarios = {
  interestRate: 8.5,
  tenures: [10, 15, 20, 25],
};
