import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import ParallaxHero from '@/components/ParallaxHero';
import { ArrowRight, MapPin, Building2, ShieldCheck, Gem } from 'lucide-react';

import Footer from '@/components/Footer';
import SovereignBar from '@/components/SovereignBar';
import AdvancedEnquiryForm from '@/components/AdvancedEnquiryForm';

// The Data Engine for Programmatic SEO
const LOCATIONS = [
  { slug: 'magarpatta-city', name: 'Magarpatta City', distance: '10 Mins', type: 'IT Hub' },
  { slug: 'kharadi-it-park', name: 'Kharadi IT Park', distance: '15 Mins', type: 'Tech Corridor' },
  { slug: 'sp-infocity', name: 'SP Infocity', distance: '15 Mins', type: 'IT SEZ' },
  { slug: 'viman-nagar', name: 'Viman Nagar', distance: '25 Mins', type: 'Commercial Hub' },
  { slug: 'koregaon-park', name: 'Koregaon Park', distance: '20 Mins', type: 'Premium Hub' },
  { slug: 'pune-station', name: 'Pune Station', distance: '30 Mins', type: 'Transit Hub' },
];

export async function generateStaticParams() {
  return LOCATIONS.map((loc) => ({
    location: loc.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ location: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const locationData = LOCATIONS.find(l => l.slug === resolvedParams.location);
  
  if (!locationData) return { title: 'Not Found' };

  const cleanLocation = locationData.name;

  return {
    title: `Premium NA Bungalow Plots & Flats Near ${cleanLocation}, Pune | Kumar Magnacity`,
    description: `Looking for flats or plots near ${cleanLocation}? Kumar Magnacity offers 150 acres of premium living. Just minutes away from ${cleanLocation}. Explore pricing and floor plans.`,
    alternates: {
       canonical: `https://kumarmagnacitytownship.com/flats-near-${resolvedParams.location}/`,
    },
    openGraph: {
      title: `Flats Near ${cleanLocation} - Kumar Magnacity`,
      description: `Explore premium properties near ${cleanLocation}.`,
      images: [
        {
          url: `https://kumarmagnacitytownship.com/api/og?title=${encodeURIComponent(`Properties Near ${cleanLocation}`)}&subtitle=PREMIUM%20TOWNSHIP`,
          width: 1200,
          height: 630,
        }
      ],
    }
  };
}

export default async function LocationLandingPage({ params }: { params: Promise<{ location: string }> }) {
  const resolvedParams = await params;
  const locationData = LOCATIONS.find(l => l.slug === resolvedParams.location) || LOCATIONS[0];

  return (
    <main className="min-h-screen bg-dark text-white selection:bg-accent selection:text-dark">
      <Header />
      
      {/* Dynamic Hero Section */}
      <ParallaxHero 
        title={`Premium Flats near <span class="text-accent">${locationData.name}</span>`}
        subtitle={`Escape the traffic. Live in a 150-acre luxury township just ${locationData.distance} from ${locationData.name}. 2 & 3 BHK Apartments starting at ₹50 Lacs.`}
      />

      {/* Trust Badges */}
      <section className="py-12 bg-dark/50 border-y border-white/5 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: MapPin, text: `${locationData.distance} to ${locationData.name}` },
              { icon: Building2, text: "150-Acre Township" },
              { icon: ShieldCheck, text: "RERA Registered" },
              { icon: Gem, text: "Premium Amenities" }
            ].map((badge, i) => (
              <div key={i} className="flex flex-col items-center justify-center text-center p-4 rounded-2xl bg-white/5 border border-white/10">
                <badge.icon className="w-8 h-8 text-accent mb-3" />
                <span className="text-sm md:text-base font-medium">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic SEO Content Section */}
      <section className="py-24 bg-dark relative z-10">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-playfair mb-8">
            Why Choose Kumar Magnacity if you work in {locationData.name}?
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-12">
            Professionals working in the {locationData.name} {locationData.type} often face long commutes and cramped city living. 
            Kumar Magnacity in Manjari offers the perfect antidote: a sprawling 150-acre master-planned sanctuary. 
            You get to enjoy world-class amenities, expansive green spaces, and a massive integrated clubhouse, 
            while keeping your daily commute to {locationData.name} down to just {locationData.distance}.
          </p>
        </div>
      </section>

      {/* Lead Capture */}
      <section className="py-24 bg-dark relative z-10 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-playfair mb-4">Request Pricing & Floor Plans</h2>
            <p className="text-white/60">Unlock priority inventory for buyers targeting {locationData.name}.</p>
          </div>
          <AdvancedEnquiryForm formId={`pSEO_${locationData.slug}`} />
        </div>
      </section>

      <Footer />
      <SovereignBar />
    </main>
  );
}
