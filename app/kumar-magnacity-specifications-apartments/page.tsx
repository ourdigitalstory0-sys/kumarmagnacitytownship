import type { Metadata } from 'next';
import Link from 'next/link';
import PillarTemplate from '@/components/PillarTemplate';
import AdvancedEnquiryForm from '@/components/AdvancedEnquiryForm';
import SpecificationGrid from '@/components/SpecificationGrid';

export const metadata: Metadata = {
  title: 'Kumar Magnacity Apartment Specifications | Premium Quality Construction',
  description: 'Discover the uncompromising quality and premium specifications of Kumar Magnacity apartments in Manjari, Pune. Top-tier fittings and finishes in every home.',
  keywords: 'Kumar Magnacity specifications, apartment amenities, premium construction quality Pune, luxury fittings',
};

export default function SpecificationsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Kumar Magnacity Apartment Specifications',
    description: 'Detailed specifications and construction quality of Kumar Magnacity apartments.'
  };

  return (
    <PillarTemplate 
      title="Premium Apartment Specifications"
      subtitle="Uncompromising quality and top-tier finishes"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="py-12 glass-obsidian my-8 rounded-[2.5rem] p-8">
        <h2 className="text-4xl font-bold mb-6 var(--font-heading) text-accent">Built with Excellence</h2>
        <p className="mb-4 text-lg">
          Kumar Magnacity stands as a testament to exceptional craftsmanship and <strong>premium quality construction</strong>. 
          We source the finest materials to ensure your home is not only beautiful but also enduring.
        </p>
        <p className="mb-4 text-lg">
          From vitrified flooring and designer bathroom fittings to earthquake-resistant RCC structures, every detail has been carefully selected to offer you a superior lifestyle.
        </p>
      </section>

      <SpecificationGrid />

      <section className="py-12 glass-white my-8 rounded-[2.5rem] p-8 dark:glass-obsidian">
        <h3 className="text-3xl font-bold mb-4 var(--font-heading)">Continue Exploring</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><Link href="/kumar-magnacity-floor-plan-2bhk-3bhk" className="text-accent hover:underline">View Floor Plans</Link></li>
          <li><Link href="/kumar-magnacity-2bhk-3bhk-apartments-manjari-pune" className="text-accent hover:underline">Back to Main Apartments Page</Link></li>
        </ul>
      </section>

      <section className="mt-16">
        <AdvancedEnquiryForm />
      </section>
    </PillarTemplate>
  );
}
