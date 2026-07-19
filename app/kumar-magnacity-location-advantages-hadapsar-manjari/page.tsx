import type { Metadata } from 'next';
import Link from 'next/link';
import PillarTemplate from '@/components/PillarTemplate';
import AdvancedEnquiryForm from '@/components/AdvancedEnquiryForm';
import LocationAdvantageMap from '@/components/LocationAdvantageMap';

export const metadata: Metadata = {
  title: 'Kumar Magnacity Location Map | Near Hadapsar, Magarpatta & EON IT Park Pune',
  description: 'Explore the prime location of Kumar Magnacity in Manjari, Pune. Enjoy seamless connectivity to Hadapsar, Magarpatta, EON IT Park, schools, and hospitals.',
  keywords: 'Kumar Magnacity location, Manjari Pune map, near Hadapsar, close to Magarpatta, EON IT park apartments',
};

export default function LocationAdvantagesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: 'Kumar Magnacity',
    hasMap: 'https://kumarmagnacity.com/kumar-magnacity-location-advantages-hadapsar-manjari',
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '18.5204',
      longitude: '73.8567'
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Manjari Road',
      addressLocality: 'Pune',
      addressRegion: 'Maharashtra',
      postalCode: '412307',
      addressCountry: 'IN'
    }
  };

  return (
    <PillarTemplate 
      title="Strategic Location Advantages"
      subtitle="Seamless connectivity to Pune's major IT hubs and essential landmarks"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="py-12 glass-obsidian my-8 rounded-[2.5rem] p-8">
        <h2 className="text-4xl font-bold mb-6 var(--font-heading) text-accent">The Perfect Address in Manjari</h2>
        <p className="mb-4 text-lg">
          Strategically situated in Manjari, Kumar Magnacity offers unparalleled connectivity to Pune&apos;s most prominent business and lifestyle destinations. 
          Living here means you are just minutes away from <strong>Hadapsar, Magarpatta City, and EON IT Park</strong>.
        </p>
        <p className="mb-4 text-lg">
          Enjoy the convenience of having top-tier schools, multi-specialty hospitals, shopping malls, and entertainment centers within a short drive. 
          The robust infrastructure ensures that your daily commute is hassle-free.
        </p>
      </section>

      <LocationAdvantageMap />

      <section className="py-12 glass-white my-8 rounded-[2.5rem] p-8 dark:glass-obsidian">
        <h3 className="text-3xl font-bold mb-4 var(--font-heading)">Learn More</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><Link href="/kumar-magnacity-2bhk-3bhk-apartments-manjari-pune" className="text-accent hover:underline">Explore Apartments</Link></li>
          <li><Link href="/kumar-magnacity-investment-manjari-pune" className="text-accent hover:underline">Why Invest in Manjari?</Link></li>
        </ul>
      </section>

      <section className="mt-16">
        <AdvancedEnquiryForm />
      </section>
    </PillarTemplate>
  );
}
