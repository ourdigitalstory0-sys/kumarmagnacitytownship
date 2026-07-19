import type { Metadata } from 'next';
import Link from 'next/link';
import PillarTemplate from '@/components/PillarTemplate';
import ApartmentShowcase from '@/components/ApartmentShowcase';
import SpecificationGrid from '@/components/SpecificationGrid';
import LocationAdvantageMap from '@/components/LocationAdvantageMap';
import ApartmentPriceMatrix from '@/components/ApartmentPriceMatrix';
import AdvancedEnquiryForm from '@/components/AdvancedEnquiryForm';
import { apartmentsData } from '@/data/apartments';

export const metadata: Metadata = {
  title: 'Kumar Magnacity 2BHK & 3BHK Apartments in Manjari Pune | ₹67.99L Onwards',
  description: 'Explore premium 2BHK and 3BHK apartments at Kumar Magnacity, Manjari, Pune. Experience luxury living with prices starting from ₹67.99L. View floor plans, pricing, and amenities.',
  keywords: 'Kumar Magnacity apartments, 2BHK flats in Manjari, 3BHK flats in Pune, new launch apartments Hadapsar, luxury flats Manjari Pune',
};

export default function PrimaryApartmentLandingPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ApartmentComplex',
    name: 'Kumar Magnacity',
    url: 'https://kumarmagnacity.com/kumar-magnacity-2bhk-3bhk-apartments-manjari-pune',
    description: 'Premium 2BHK & 3BHK Apartments in Manjari, Pune by Kumar Properties.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Manjari Road',
      addressLocality: 'Pune',
      addressRegion: 'Maharashtra',
      postalCode: '412307',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '18.5204',
      longitude: '73.8567'
    },
    telephone: '+91-XXXXXXXXXX'
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What are the configurations available at Kumar Magnacity?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Kumar Magnacity offers premium 2BHK and 3BHK apartments with modern amenities.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is the starting price of 2BHK flats?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The 2BHK flats at Kumar Magnacity start from ₹67.99 Lakhs onwards.'
        }
      },
      {
        '@type': 'Question',
        name: 'Where is Kumar Magnacity located?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It is located in Manjari, Pune, near major IT hubs like Magarpatta and EON IT Park.'
        }
      }
    ]
  };

  return (
    <PillarTemplate 
      title="Premium 2BHK & 3BHK Apartments in Manjari, Pune"
      subtitle="Discover the perfect blend of luxury and comfort at Kumar Magnacity"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="py-12 glass-obsidian my-8 rounded-[2.5rem] p-8">
        <h2 className="text-4xl font-bold mb-6 var(--font-heading) text-accent">Luxury Living Redefined</h2>
        <p className="mb-4 text-lg">
          Welcome to Kumar Magnacity, where elegance meets convenience. Our meticulously designed 
          <strong> 2BHK and 3BHK apartments in Manjari, Pune</strong> offer a lifestyle that is both lavish and practical. 
          Situated close to key locations like Hadapsar and major IT parks, these homes are ideal for modern families.
        </p>
        <p className="mb-4 text-lg">
          Explore our range of residences, featuring high-quality specifications, smart layouts, and a host of world-class amenities. 
          Whether you are looking for your first home or upgrading to a more spacious abode, Kumar Magnacity has something for everyone.
        </p>
      </section>

      <ApartmentShowcase />
      <ApartmentPriceMatrix />
      
      <section className="py-12 glass-white my-8 rounded-[2.5rem] p-8 dark:glass-obsidian">
        <h3 className="text-3xl font-bold mb-4 var(--font-heading)">Explore More</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><Link href="/kumar-magnacity-2bhk-flats-hadapsar-pune-price" className="text-accent hover:underline">Detailed 2BHK Pricing & Layouts</Link></li>
          <li><Link href="/kumar-magnacity-3bhk-apartments-manjari-pune-price" className="text-accent hover:underline">Spacious 3BHK Apartments</Link></li>
          <li><Link href="/kumar-magnacity-floor-plan-2bhk-3bhk" className="text-accent hover:underline">View All Floor Plans</Link></li>
          <li><Link href="/kumar-magnacity-specifications-apartments" className="text-accent hover:underline">Apartment Specifications</Link></li>
          <li><Link href="/kumar-magnacity-location-advantages-hadapsar-manjari" className="text-accent hover:underline">Location Advantages & Map</Link></li>
        </ul>
      </section>

      <LocationAdvantageMap />
      <SpecificationGrid />

      <section className="py-12">
        <h3 className="text-3xl font-bold mb-6 text-center var(--font-heading)">Frequently Asked Questions</h3>
        <div className="space-y-4">
          <details className="glass-obsidian p-4 rounded-xl cursor-pointer">
            <summary className="font-semibold text-lg">What are the configurations available at Kumar Magnacity?</summary>
            <p className="mt-2 text-gray-300">Kumar Magnacity offers premium 2BHK and 3BHK apartments with modern amenities.</p>
          </details>
          <details className="glass-obsidian p-4 rounded-xl cursor-pointer">
            <summary className="font-semibold text-lg">What is the starting price of 2BHK flats?</summary>
            <p className="mt-2 text-gray-300">The 2BHK flats at Kumar Magnacity start from ₹67.99 Lakhs onwards.</p>
          </details>
          <details className="glass-obsidian p-4 rounded-xl cursor-pointer">
            <summary className="font-semibold text-lg">Where is Kumar Magnacity located?</summary>
            <p className="mt-2 text-gray-300">It is located in Manjari, Pune, near major IT hubs like Magarpatta and EON IT Park.</p>
          </details>
        </div>
      </section>

      <section className="mt-16">
        <AdvancedEnquiryForm />
      </section>
    </PillarTemplate>
  );
}
