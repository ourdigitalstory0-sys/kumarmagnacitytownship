import type { Metadata } from 'next';
import Link from 'next/link';
import PillarTemplate from '@/components/PillarTemplate';
import AdvancedEnquiryForm from '@/components/AdvancedEnquiryForm';
import ApartmentPriceMatrix from '@/components/ApartmentPriceMatrix';
import FloorPlanViewer from '@/components/FloorPlanViewer';

export const metadata: Metadata = {
  title: '3BHK Apartments in Manjari Pune | Kumar Magnacity 1053 sqft @ ₹92.99L',
  description: 'Experience grandeur with premium 3BHK apartments at Kumar Magnacity in Manjari, Pune. Expansive 1053 sqft layouts priced from ₹92.99L. Ideal for growing families.',
  keywords: '3BHK apartments Manjari Pune, Kumar Magnacity 3BHK, luxury 3BHK flats Pune, 1053 sqft apartments',
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

  return (
    <PillarTemplate 
      title="Premium 3BHK Apartments in Manjari, Pune"
      subtitle="1053 sq.ft. of pure luxury starting at ₹92.99L"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="py-12 glass-obsidian my-8 rounded-[2.5rem] p-8">
        <h2 className="text-4xl font-bold mb-6 var(--font-heading) text-accent">Elevate Your Lifestyle with Our 3BHK Homes</h2>
        <p className="mb-4 text-lg">
          Designed for growing families who desire space and sophistication, our <strong>3BHK apartments in Manjari, Pune</strong> offer a sprawling 1053 sqft of carpet area. 
          Priced from ₹92.99L, these residences represent the pinnacle of luxury living in East Pune.
        </p>
        <p className="mb-4 text-lg">
          Each 3BHK unit features a grand master bedroom, expansive living areas, and premium finishes that reflect your success. 
          Experience a lifestyle upgrade at Kumar Magnacity.
        </p>
      </section>

      <ApartmentPriceMatrix />
      <FloorPlanViewer />

      <section className="py-12 glass-white my-8 rounded-[2.5rem] p-8 dark:glass-obsidian">
        <h3 className="text-3xl font-bold mb-4 var(--font-heading)">Related Pages</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><Link href="/kumar-magnacity-2bhk-3bhk-apartments-manjari-pune" className="text-accent hover:underline">View All Apartments</Link></li>
          <li><Link href="/kumar-magnacity-2bhk-flats-hadapsar-pune-price" className="text-accent hover:underline">Discover 2BHK Options</Link></li>
          <li><Link href="/kumar-magnacity-floor-plan-2bhk-3bhk" className="text-accent hover:underline">Detailed Floor Plans</Link></li>
        </ul>
      </section>

      <section className="mt-16">
        <AdvancedEnquiryForm />
      </section>
    </PillarTemplate>
  );
}
