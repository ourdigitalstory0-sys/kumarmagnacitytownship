import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SovereignBar from '@/components/SovereignBar';
import AdvancedEnquiryForm from '@/components/AdvancedEnquiryForm';
import ApartmentPriceMatrix from '@/components/ApartmentPriceMatrix';
import InteractiveLayoutViewer from '@/components/InteractiveLayoutViewer';
import ParallaxHero from '@/components/ParallaxHero';
import PersonaDeepDive from '@/components/PersonaDeepDive';
import { MapPin, Home, HeartHandshake, Briefcase } from 'lucide-react';

export const metadata: Metadata = {
  title: '2BHK Flats in Hadapsar Pune | Kumar Magnacity 757 sqft @ ₹67.99L',
  description: 'Book your dream 2BHK flat in Hadapsar, Pune at Kumar Magnacity. Spacious 757 sqft layouts starting at just ₹67.99L. Perfect for young professionals and families.',
  keywords: '2BHK flats in Hadapsar Pune, Kumar Magnacity 2BHK price, 2BHK apartments near Magarpatta, 757 sqft flats Pune',
  openGraph: {
    title: '2BHK Flats in Hadapsar Pune | Kumar Magnacity',
    description: 'Spacious 757 sqft layouts starting at just ₹67.99L. Perfect for young professionals and families.',
    url: 'https://kumarmagnacitytownship.com/kumar-magnacity-2bhk-flats-hadapsar-pune-price',
  },
  alternates: {
    canonical: 'https://kumarmagnacitytownship.com/kumar-magnacity-2bhk-flats-hadapsar-pune-price',
    languages: {
      'en-IN': 'https://kumarmagnacitytownship.com/kumar-magnacity-2bhk-flats-hadapsar-pune-price',
      'mr-IN': 'https://kumarmagnacitytownship.com/mr/kumar-magnacity-2bhk-flats-hadapsar-pune-price'
    }
  }
};

export default function TwoBHKPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: 'Premium 2BHK Flats at Kumar Magnacity',
    description: 'Spacious 757 sqft 2BHK flats starting at ₹67.99L in Manjari/Hadapsar, Pune.',
    offers: {
      '@type': 'Offer',
      price: '6799000',
      priceCurrency: 'INR'
    }
  };

  const personaFeatures = [
    {
      title: "15-Minute IT Hub Proximity",
      description: "Say goodbye to exhausting commutes. Located strategically, you are just a short drive away from Magarpatta City and EON IT Park, giving you back precious hours every day.",
      icon: <MapPin size={24} />
    },
    {
      title: "Optimized 757 sq.ft. Layout",
      description: "Every square foot is designed for maximum utility. From the dedicated work-from-home nook to the spacious master bedroom, it's crafted for modern urban living.",
      icon: <Home size={24} />
    },
    {
      title: "The Ultimate Work-Life Balance",
      description: "Step out of your door and into a 150-acre ecosystem featuring a 1 lakh sq.ft clubhouse, olympic-standard pools, and serene botanical trails to unwind after a long day.",
      icon: <HeartHandshake size={24} />
    },
    {
      title: "Premium Investment Value",
      description: "Priced perfectly at ₹67.99L, securing your footprint in Pune's fastest growing eastern corridor ensures high rental yields and robust capital appreciation.",
      icon: <Briefcase size={24} />
    }
  ];

  return (
    <main className="bg-dark min-h-screen text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <Header />
      
      <ParallaxHero 
        title="Luxurious 2BHK Flats"
        subtitle="757 sq.ft. of thoughtfully designed space starting at ₹67.99L"
        badge="PUNE EAST HUB"
        accentColor="gold"
      />

      <PersonaDeepDive 
        personaTitle="The IT Professional's Haven."
        personaSubtitle="Designed specifically for the ambitious, maximizing your time, comfort, and lifestyle quality."
        features={personaFeatures}
        accentColor="gold"
      />

      <div className="bg-dark py-12 relative z-20">
        <div className="container mx-auto px-4 max-w-7xl space-y-24">
          <ApartmentPriceMatrix />
          <InteractiveLayoutViewer />
          
          <section className="glass-obsidian rounded-[2.5rem] p-8 md:p-12 border border-white/10">
            <h3 className="text-3xl font-bold mb-6 font-heading text-accent">Expand Your Horizons</h3>
            <ul className="list-disc pl-6 space-y-4 text-white/70">
              <li><Link href="/kumar-magnacity-2bhk-3bhk-apartments-manjari-pune" className="hover:text-accent transition-colors">Return to Main Apartments Showcase</Link></li>
              <li><Link href="/kumar-magnacity-3bhk-apartments-manjari-pune-price" className="hover:text-accent transition-colors">Growing Family? Explore our Expansive 3BHKs</Link></li>
              <li><Link href="/kumar-magnacity-floor-plan-2bhk-3bhk" className="hover:text-accent transition-colors">Compare Detailed Floor Plans</Link></li>
            </ul>
          </section>
        </div>
      </div>

      <div className="relative z-20 bg-dark py-24">
         <AdvancedEnquiryForm />
      </div>

      <Footer />
      <SovereignBar />
    </main>
  );
}
