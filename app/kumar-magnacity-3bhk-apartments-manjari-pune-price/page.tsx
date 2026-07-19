import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SovereignBar from '@/components/SovereignBar';
import AdvancedEnquiryForm from '@/components/AdvancedEnquiryForm';
import ApartmentPriceMatrix from '@/components/ApartmentPriceMatrix';
import FloorPlanViewer from '@/components/FloorPlanViewer';
import ParallaxHero from '@/components/ParallaxHero';
import PersonaDeepDive from '@/components/PersonaDeepDive';
import { Users, Expand, Shield, Trees } from 'lucide-react';

export const metadata: Metadata = {
  title: '3BHK Apartments in Manjari Pune | Kumar Magnacity 1053 sqft @ ₹92.99L',
  description: 'Experience grandeur with premium 3BHK apartments at Kumar Magnacity in Manjari, Pune. Expansive 1053 sqft layouts priced from ₹92.99L. Ideal for growing families.',
  keywords: '3BHK apartments Manjari Pune, Kumar Magnacity 3BHK, luxury 3BHK flats Pune, 1053 sqft apartments',
  openGraph: {
    title: '3BHK Apartments in Manjari Pune | Kumar Magnacity',
    description: 'Expansive 1053 sqft 3BHK apartments starting at ₹92.99L in Manjari, Pune. Ideal for growing families.',
    url: 'https://kumarmagnacitytownship.com/kumar-magnacity-3bhk-apartments-manjari-pune-price',
  },
  alternates: {
    canonical: 'https://kumarmagnacitytownship.com/kumar-magnacity-3bhk-apartments-manjari-pune-price',
    languages: {
      'en-IN': 'https://kumarmagnacitytownship.com/kumar-magnacity-3bhk-apartments-manjari-pune-price',
      'mr-IN': 'https://kumarmagnacitytownship.com/mr/kumar-magnacity-3bhk-apartments-manjari-pune-price'
    }
  }
};

export default function ThreeBHKPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: 'Luxury 3BHK Apartments at Kumar Magnacity',
    description: 'Expansive 1053 sqft 3BHK apartments starting at ₹92.99L in Manjari, Pune.',
    offers: {
      '@type': 'Offer',
      price: '9299000',
      priceCurrency: 'INR'
    }
  };

  const personaFeatures = [
    {
      title: "Expansive 1053 sq.ft. Canvas",
      description: "Generously sized rooms ensure that everyone in the family has their own private sanctuary, without compromising on grand communal spaces for family gatherings.",
      icon: <Expand size={24} />
    },
    {
      title: "Multi-Generational Living",
      description: "Designed with 3 spacious bedrooms and 2 attached baths, it provides the perfect layout for joint families or couples accommodating elderly parents with privacy and dignity.",
      icon: <Users size={24} />
    },
    {
      title: "Secure, Gated Ecosystem",
      description: "Let your children roam free. With 24/7 multi-tier security, video door phones, and pedestrian-friendly zones, it's a sanctuary where families thrive safely.",
      icon: <Shield size={24} />
    },
    {
      title: "Nature at Your Doorstep",
      description: "Panoramic balconies overlooking 26 acres of lush greens and botanical trails ensure your family breathes clean air and stays connected to nature.",
      icon: <Trees size={24} />
    }
  ];

  return (
    <main className="bg-dark min-h-screen text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <Header />
      
      <ParallaxHero 
        title="Premium 3BHK Apartments"
        subtitle="Expansive 1053 sq.ft. layouts starting at ₹92.99L"
        badge="TOWNSHIP LIVING"
        accentColor="green"
      />

      <PersonaDeepDive 
        personaTitle="The Growing Family's Sanctuary."
        personaSubtitle="Where space, security, and world-class amenities converge to create the perfect environment for your loved ones."
        features={personaFeatures}
        accentColor="green"
      />

      <div className="bg-dark py-12 relative z-20">
        <div className="container mx-auto px-4 max-w-7xl space-y-24">
          <ApartmentPriceMatrix />
          <FloorPlanViewer />
          
          <section className="glass-obsidian rounded-[2.5rem] p-8 md:p-12 border border-white/10">
            <h3 className="text-3xl font-bold mb-6 font-heading text-primary">Discover More</h3>
            <ul className="list-disc pl-6 space-y-4 text-white/70">
              <li><Link href="/kumar-magnacity-2bhk-3bhk-apartments-manjari-pune" className="hover:text-primary transition-colors">Return to Main Apartments Showcase</Link></li>
              <li><Link href="/kumar-magnacity-2bhk-flats-hadapsar-pune-price" className="hover:text-primary transition-colors">Seeking something compact? View our 2BHKs</Link></li>
              <li><Link href="/kumar-magnacity-specifications-apartments" className="hover:text-primary transition-colors">Review Detailed Specifications</Link></li>
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
