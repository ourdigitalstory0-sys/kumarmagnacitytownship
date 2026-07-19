import type { Metadata } from 'next';
import Link from 'next/link';
import PillarTemplate from '@/components/PillarTemplate';
import AdvancedEnquiryForm from '@/components/AdvancedEnquiryForm';
import FloorPlanViewer from '@/components/FloorPlanViewer';

export const metadata: Metadata = {
  title: 'Kumar Magnacity Floor Plan | 2BHK 757 sqft & 3BHK 1053 sqft Layout',
  description: 'View the official floor plans of Kumar Magnacity. Explore optimal space utilization with our 2BHK (757 sqft) and 3BHK (1053 sqft) apartment layouts.',
  keywords: 'Kumar Magnacity floor plan, 2BHK layout Pune, 3BHK floor plan Manjari, apartment layouts Hadapsar',
};

export default function FloorPlansPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Kumar Magnacity Floor Plans',
    description: 'Detailed floor plans and layouts for 2BHK and 3BHK apartments at Kumar Magnacity.'
  };

  return (
    <PillarTemplate 
      title="Kumar Magnacity Floor Plans"
      subtitle="Intelligently designed layouts for maximum space and comfort"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="py-12 glass-obsidian my-8 rounded-[2.5rem] p-8">
        <h2 className="text-4xl font-bold mb-6 var(--font-heading) text-accent">Thoughtful Layouts for Modern Living</h2>
        <p className="mb-4 text-lg">
          At Kumar Magnacity, every square foot is meticulously planned to enhance your living experience. 
          Our <strong>2BHK (757 sqft)</strong> and <strong>3BHK (1053 sqft) layouts</strong> are optimized for natural light, ventilation, and privacy.
        </p>
        <p className="mb-4 text-lg">
          Explore the detailed room-by-room breakdown below to see how our spaces are designed to accommodate your family&apos;s needs flawlessly.
        </p>
      </section>

      <FloorPlanViewer />

      <section className="py-12 glass-white my-8 rounded-[2.5rem] p-8 dark:glass-obsidian">
        <h3 className="text-3xl font-bold mb-4 var(--font-heading)">Explore Configurations</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><Link href="/kumar-magnacity-2bhk-flats-hadapsar-pune-price" className="text-accent hover:underline">2BHK Pricing & Details</Link></li>
          <li><Link href="/kumar-magnacity-3bhk-apartments-manjari-pune-price" className="text-accent hover:underline">3BHK Pricing & Details</Link></li>
          <li><Link href="/kumar-magnacity-specifications-apartments" className="text-accent hover:underline">View Building Specifications</Link></li>
        </ul>
      </section>

      <section className="mt-16">
        <AdvancedEnquiryForm />
      </section>
    </PillarTemplate>
  );
}
