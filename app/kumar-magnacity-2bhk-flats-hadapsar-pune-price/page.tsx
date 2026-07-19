import type { Metadata } from 'next';
import Link from 'next/link';
import PillarTemplate from '@/components/PillarTemplate';
import AdvancedEnquiryForm from '@/components/AdvancedEnquiryForm';
import ApartmentPriceMatrix from '@/components/ApartmentPriceMatrix';
import FloorPlanViewer from '@/components/FloorPlanViewer';

export const metadata: Metadata = {
  title: '2BHK Flats in Hadapsar Pune | Kumar Magnacity 757 sqft @ ₹67.99L',
  description: 'Book your dream 2BHK flat in Hadapsar, Pune at Kumar Magnacity. Spacious 757 sqft layouts starting at just ₹67.99L. Perfect for young professionals and families.',
  keywords: '2BHK flats in Hadapsar Pune, Kumar Magnacity 2BHK price, 2BHK apartments near Magarpatta, 757 sqft flats Pune',
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

  return (
    <PillarTemplate 
      title="Luxurious 2BHK Flats in Hadapsar, Pune"
      subtitle="757 sq.ft. of thoughtfully designed space starting at ₹67.99L"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="py-12 glass-obsidian my-8 rounded-[2.5rem] p-8">
        <h2 className="text-4xl font-bold mb-6 var(--font-heading) text-accent">Why Choose a 2BHK at Kumar Magnacity?</h2>
        <p className="mb-4 text-lg">
          Our <strong>2BHK flats in Hadapsar, Pune</strong> are meticulously crafted for young IT professionals, couples, and first-time homebuyers. 
          With a carpet area of 757 sqft, these homes provide ample space for relaxation and entertainment.
        </p>
        <p className="mb-4 text-lg">
          Priced attractively at ₹67.99L onwards, our 2BHK apartments offer unbeatable value compared to nearby projects. Enjoy premium fittings, 
          intelligent space utilization, and zero dead space in your new home.
        </p>
      </section>

      <ApartmentPriceMatrix />
      <FloorPlanViewer />

      <section className="py-12 glass-white my-8 rounded-[2.5rem] p-8 dark:glass-obsidian">
        <h3 className="text-3xl font-bold mb-4 var(--font-heading)">Quick Links</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><Link href="/kumar-magnacity-2bhk-3bhk-apartments-manjari-pune" className="text-accent hover:underline">Main Apartments Page</Link></li>
          <li><Link href="/kumar-magnacity-3bhk-apartments-manjari-pune-price" className="text-accent hover:underline">Looking for more space? Check 3BHKs</Link></li>
          <li><Link href="/kumar-magnacity-floor-plan-2bhk-3bhk" className="text-accent hover:underline">Compare Floor Plans</Link></li>
        </ul>
      </section>

      <section className="mt-16">
        <AdvancedEnquiryForm />
      </section>
    </PillarTemplate>
  );
}
