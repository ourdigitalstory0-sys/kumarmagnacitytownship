import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SovereignBar from "@/components/SovereignBar";
import EnquiryForm from "@/components/EnquiryForm";
import FAQSection from "@/components/FAQSection";
import InventoryBadge from "@/components/InventoryBadge";
import NearbyMarkets from "@/components/NearbyMarkets";
import AmenitiesGrid from "@/components/AmenitiesGrid";
import registry from "@/data/seo-registry.json";
import { ShieldCheck, TrendingUp, ArrowRight, Download } from "lucide-react";
import { SEOPageData, SEORegistry } from "@/types/seo";

export const runtime = 'nodejs';

const getPageData = (category: string, slug: string): SEOPageData | null => {
  const key = `${category}/${slug}`;
  return (registry as SEORegistry)[key] || null;
};

interface PageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const data = getPageData(category, slug);
  if (!data) return { title: "Page Not Found" };
  
  return {
    title: data.title,
    description: data.description,
    alternates: {
       canonical: `https://kumarmagnacitytownship.com/${category}/${slug}/`,
       languages: {
          'mr-IN': `https://kumarmagnacitytownship.com/mr/${category}/${slug}/`,
       }
    }
  };
}

export default async function SEONodePage({ params }: PageProps) {
  const { category, slug } = await params;
  const data = getPageData(category, slug);

  if (!data) notFound();

  // Advanced Real Estate Structured Data & Breadcrumbs
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "RealEstateListing",
      "name": data.title,
      "description": data.description,
      "image": "https://kumarmagnacitytownship.com/assets/hero-bg.jpg",
      "url": `https://kumarmagnacitytownship.com/${category}/${slug}`,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Kumar Magnacity, Manjari Khurd, Hadapsar Annexe",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "412307",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "18.5034",
        "longitude": "73.9664"
      },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "INR",
        "price": "6799000",
        "priceValidUntil": "2026-12-31",
        "availability": "https://schema.org/InStock",
        "url": `https://kumarmagnacitytownship.com/${category}/${slug}`
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://kumarmagnacitytownship.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Pune East Real Estate",
          "item": `https://kumarmagnacitytownship.com/${category}`
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": data.hero_title,
          "item": `https://kumarmagnacitytownship.com/${category}/${slug}`
        }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-light">
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Dynamic Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-primary">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 skew-x-12 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2" />
        
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7 space-y-8 animate-fade-in">
              <div className="space-y-4">
                <InventoryBadge />
                <h1 className="text-4xl md:text-7xl font-heading font-bold text-white leading-[1.1] tracking-tight">
                  {data.hero_title}
                </h1>
                <p className="text-xl md:text-2xl text-white/60 leading-relaxed font-light max-w-2xl">
                  {data.hero_subtitle}
                </p>
              </div>

              {/* Dynamic Amenities Matrix */}
              <AmenitiesGrid />

              <div className="flex flex-wrap gap-6 pt-4">
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-accent">
                       <ShieldCheck size={20} />
                    </div>
                    <div className="flex flex-col">
                       <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Registration</span>
                       <span className="text-sm text-white font-medium">RERA Verified Land</span>
                    </div>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-accent">
                       <TrendingUp size={20} />
                    </div>
                    <div className="flex flex-col">
                       <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Appreciation</span>
                       <span className="text-sm text-white font-medium">12.5% Historical CAGR</span>
                    </div>
                 </div>
              </div>

              <div className="hidden lg:block pt-8">
                 <div className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 backdrop-blur-xl space-y-4">
                    <h4 className="text-white font-heading font-bold text-xl italic text-accent">Investment Insight</h4>
                    <p className="text-white/50 leading-relaxed text-sm">
                       Pune East is the epicenter of the next real estate boom. With the upcoming <span className="text-white font-bold">Ring Road</span> and <span className="text-white font-bold">Metro expansion</span>, land values in Manjari-Hadapsar are projected to grow by 22% by 2028.
                    </p>
                 </div>
              </div>
            </div>
            
            <div className="lg:col-span-5 relative animate-fade-in [animation-delay:200ms]">
               <EnquiryForm 
                title="Sovereign Access" 
                subtitle="Download the direct pricing sheet and cluster inventory map."
                buttonText="Get Floor Plans & Rates"
               />
               
               {/* Quick stats below form */}
               <div className="mt-8 flex items-center justify-center gap-8 opacity-40">
                  <div className="text-center">
                     <p className="text-2xl font-heading font-bold text-white tracking-widest">150</p>
                     <p className="text-[8px] uppercase tracking-widest text-white/50">Acres</p>
                  </div>
                  <div className="w-[1px] h-8 bg-white/20" />
                  <div className="text-center">
                     <p className="text-2xl font-heading font-bold text-white tracking-widest">59</p>
                     <p className="text-[8px] uppercase tracking-widest text-white/50">Year Legacy</p>
                  </div>
                  <div className="w-[1px] h-8 bg-white/20" />
                  <div className="text-center">
                     <p className="text-2xl font-heading font-bold text-white tracking-widest">3T</p>
                     <p className="text-[8px] uppercase tracking-widest text-white/50">Security</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog/Market Analysis Content */}
      {data.blog_content && (
        <section className="py-24 bg-white">
          <div className="container mx-auto max-w-4xl px-4">
             <div className="space-y-16">
               {data.blog_content.map((item, i) => (
                 <div key={i} className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark">{item.heading}</h2>
                    <p className="text-lg text-dark/70 leading-relaxed font-light">{item.paragraph}</p>
                 </div>
               ))}
               
               {/* Fixed Trust Pillar in Blog */}
               <div className="pt-12 border-t border-dark/5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                     <div className="space-y-4">
                        <h3 className="text-xl font-bold text-dark uppercase tracking-widest">Legal Status</h3>
                        <p className="text-dark/50 text-sm italic">Every plot at Kumar Magnacity comes with a clear title, RERA registration, and an individual 7/12 extract ensuring absolute security for your generational asset.</p>
                     </div>
                     <div className="space-y-4">
                        <h3 className="text-xl font-bold text-dark uppercase tracking-widest">Connectivity</h3>
                        <p className="text-dark/50 text-sm italic">Strategically located near the Pune-Solapur Highway and current/upcoming Ring Road junctions, offering swift access to Magarpatta, Kharadi, and Swargate.</p>
                     </div>
                  </div>
               </div>
             </div>
          </div>
        </section>
      )}

      {/* Trust & Intelligence Section (Fallback if no blog content) */}
      {!data.blog_content && (
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto max-w-7xl px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark leading-tight">
                  Why Pune Smart Investors <br /> Choose <span className="text-accent underline decoration-accent/30 underline-offset-8 italic">Kumar Magnacity</span>
                </h2>
                <p className="text-lg text-dark/60 leading-relaxed font-light">
                  Unlike disorganized local layouts, Kumar Magnacity offers the security of a Tier-1 developer combined with the freedom of owning your own NA bungalow land. It&apos;s a legacy you build, on a foundation of trust.
                </p>
                <div className="space-y-4">
                    {[
                      "Individual 7/12 Extract for every plot",
                      "PMRDA Sanctioned & RERA Registered",
                      "Integrated Underground Utility Grids",
                      "Grand Clubhouse & 12+ Premium Amenities"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                            <CheckIcon size={12} />
                        </div>
                        <span className="text-dark/80 font-medium">{item}</span>
                      </div>
                    ))}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="p-8 rounded-[2.5rem] bg-light border border-dark/5 space-y-4 hover:shadow-2xl transition-all hover:-translate-y-2">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg text-primary">
                      <Download size={24} />
                    </div>
                    <h4 className="font-heading font-bold text-xl">Legal Kit</h4>
                    <p className="text-xs text-dark/50 leading-relaxed italic">Download the 7/12 Extract samples and RERA compliance docs.</p>
                  </div>
                  <div className="p-8 rounded-[2.5rem] bg-dark text-white space-y-4 hover:shadow-2xl transition-all hover:-translate-y-2">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-accent">
                      <TrendingUp size={24} />
                    </div>
                    <h4 className="font-heading font-bold text-xl">ROI Guide</h4>
                    <p className="text-xs text-white/40 leading-relaxed italic">Detailed analysis of Manjari-Hadapsar land appreciation 2026.</p>
                  </div>
                </div>
                <div className="space-y-6 pt-12">
                  <div className="p-8 rounded-[2.5rem] bg-accent text-dark space-y-4 hover:shadow-2xl transition-all hover:-translate-y-2 font-bold">
                    <div className="w-12 h-12 bg-dark rounded-2xl flex items-center justify-center text-accent shadow-xl">
                      <ArrowRight size={24} />
                    </div>
                    <h4 className="font-heading text-xl">Site Visit</h4>
                    <p className="text-xs text-dark/70 leading-relaxed italic">Experience the master-planned grandeur in person today.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section with Context */}
      <FAQSection faqJson={data.faq_json} />
      
      {/* Internal Link Siloing */}
      <NearbyMarkets />

      <Footer />
      <SovereignBar />
    </main>
  );
}

function CheckIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

