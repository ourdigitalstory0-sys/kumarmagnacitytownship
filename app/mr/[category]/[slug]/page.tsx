import { Metadata } from "next";
import { notFound } from "next/navigation";
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

export const runtime = 'edge';



const getPageData = (category: string, slug: string): SEOPageData | null => {
  const key = `mr/${category}/${slug}`;
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
  if (!data) return { title: "माहिती आढळली नाही" };
  
  return {
    title: data.title,
    description: data.description,
    alternates: {
       canonical: `https://kumarmagnacitytownship.com/mr/${category}/${slug}/`,
       languages: {
          'en-IN': `https://kumarmagnacitytownship.com/${category}/${slug}/`,
       }
    }
  };
}

export default async function SEONodePageMR({ params }: PageProps) {
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
      "url": `https://kumarmagnacitytownship.com/mr/${category}/${slug}`,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "कुमार मॅग्नासिटी, मांजरी खुर्द, हडपसर अ‍ॅनेक्सी",
        "addressLocality": "पुणे",
        "addressRegion": "महाराष्ट्र",
        "postalCode": "४१२३०७",
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
        "url": `https://kumarmagnacitytownship.com/mr/${category}/${slug}`
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "मुख्यपृष्ठ",
          "item": "https://kumarmagnacitytownship.com/mr"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "पुणे रिअल इस्टेट",
          "item": `https://kumarmagnacitytownship.com/mr/${category}`
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": data.hero_title,
          "item": `https://kumarmagnacitytownship.com/mr/${category}/${slug}`
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
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden bg-dark">
        {/* Background elements - Cinematic Layer */}
        <div className="absolute inset-0">
           <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-dark/20 to-dark z-10" />
           <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/20 blur-[150px] rounded-full opacity-30 -translate-y-1/2 translate-x-1/2" />
        </div>
        
        <div className="container mx-auto max-w-7xl px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-10 animate-reveal-up text-center md:text-left">
              <div className="space-y-6">
                <InventoryBadge />
                <h1 className="text-4xl md:text-7xl lg:text-[5.5rem] font-heading font-bold text-white leading-[1.1] tracking-tight">
                  {data.hero_title}
                </h1>
                <p className="text-xl md:text-2xl text-white/50 leading-relaxed font-light max-w-2xl">
                  {data.hero_subtitle}
                </p>
              </div>

              {/* Dynamic Amenities Matrix */}
              <AmenitiesGrid />

              <div className="flex flex-wrap gap-8 pt-4 justify-center md:justify-start">
                 <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-dark transition-all">
                       <ShieldCheck size={24} />
                    </div>
                    <div className="flex flex-col">
                       <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">नोंदणी</span>
                       <span className="text-sm text-white font-medium">RERA नोंदणीकृत</span>
                    </div>
                 </div>
                 <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-dark transition-all">
                       <TrendingUp size={24} />
                    </div>
                    <div className="flex flex-col">
                       <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">परतावा</span>
                       <span className="text-sm text-white font-medium">१२.५% वार्षिक वाढ</span>
                    </div>
                 </div>
              </div>

              <div className="hidden lg:block pt-10">
                 <div className="p-10 rounded-[3rem] bg-white/[0.03] border border-white/10 backdrop-blur-3xl space-y-4">
                    <h4 className="text-accent font-heading font-bold text-2xl italic">एक्झिक्युटिव्ह इनसाइट (Insight)</h4>
                    <p className="text-white/50 leading-relaxed text-base italic line-clamp-3">
                       पुणे पूर्व हे पुढील रिअल इस्टेट तेजीचे केंद्र आहे. आगामी <span className="text-white font-bold">रिंग रोड</span> आणि <span className="text-white font-bold">मेट्रो विस्तारामुळे</span>, २०२८ पर्यंत मांजरी-हडपसरमधील जमिनीच्या किमती लक्षणीय वाढण्याची शक्यता आहे.
                    </p>
                 </div>
              </div>
            </div>
            
            <div className="lg:col-span-5 relative animate-reveal-up [animation-delay:200ms]">
               <EnquiryForm 
                title="Sovereign Access" 
                subtitle="या क्लस्टरसाठी थेट किंमत पत्रक आणि इन्व्हेंटरी डेटा मिळवा."
                buttonText="प्लॅन्स आणि दर मिळवा"
               />
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Intelligence Section */}
      <section className="py-24 md:py-40 bg-white relative overflow-hidden">
        <div className="container mx-auto max-w-7xl px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
               <div className="space-y-6">
                <h2 className="text-4xl md:text-6xl font-heading font-bold text-dark leading-tight">
                  पुण्यातील स्मार्ट गुंतवणूकदार <br /> 
                  <span className="text-primary italic font-light underline decoration-primary/20 underline-offset-[12px]">कुमार मॅग्नासिटी</span> का निवडतात?
                </h2>
                <p className="text-xl text-dark/60 leading-relaxed font-light">
                  असंस्थागत लेआउट्सच्या तुलनेत, कुमार मॅग्नासिटी तुम्हाला टायर-१ बिल्डरच्या सुरक्षिततेसह स्वतःच्या बंगल्याचा मालक बनण्याची संधी देते. हा तुमच्या पिढ्यान् पिढ्यांच्या समृद्धीचा पाया आहे.
                </p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    "स्वतंत्र ७/१२ उतारा",
                    "RERA नोंदणीकृत जमीन",
                    "भूमिगत युटिलिटी ग्रीड्स",
                    "भव्य क्लबहाऊस सुविधा"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-light border border-dark/5">
                       <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          <CheckIcon size={16} />
                       </div>
                       <span className="text-dark/80 font-bold text-sm tracking-tight">{item}</span>
                    </div>
                  ))}
               </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
               <div className="space-y-8">
                  <div className="p-10 rounded-[3rem] bg-light border border-dark/5 space-y-6 hover:shadow-2xl transition-all group cursor-pointer relative overflow-hidden">
                     <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg text-primary group-hover:bg-primary group-hover:text-white transition-all">
                        <Download size={32} />
                     </div>
                     <div className="space-y-2">
                        <h4 className="font-heading font-bold text-2xl">लीगल किट</h4>
                        <p className="text-xs text-dark/40 leading-relaxed uppercase tracking-widest font-bold">७/१२ उतारा नमुना</p>
                     </div>
                  </div>
                  <div className="p-10 rounded-[3rem] bg-dark text-white space-y-6 hover:shadow-2xl transition-all group cursor-pointer relative overflow-hidden">
                     <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-dark transition-all">
                        <TrendingUp size={32} />
                     </div>
                     <div className="space-y-2">
                        <h4 className="font-heading font-bold text-2xl text-accent">ROI विश्लेषण</h4>
                        <p className="text-xs text-white/30 leading-relaxed uppercase tracking-widest font-bold">२०२४-२०२८ प्रोजेक्शन</p>
                     </div>
                  </div>
               </div>
               <div className="sm:pt-16">
                  <div 
                    onClick={() => {}}
                    className="p-10 rounded-[3rem] bg-primary text-white space-y-6 hover:shadow-2xl transition-all group cursor-pointer h-full flex flex-col justify-center"
                  >
                     <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-accent group-hover:bg-white group-hover:text-primary transition-all shadow-xl">
                        <ArrowRight size={32} />
                     </div>
                     <div className="space-y-4">
                        <h4 className="font-heading font-bold text-2xl tracking-tight leading-tight">साइट व्हिजिट बुक करा</h4>
                        <p className="text-sm text-white/60 leading-relaxed font-light">आजच मास्टर-प्लॅन्ड टाउनशिपचा प्रत्यक्ष अनुभव घ्या.</p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>


      {/* FAQ Section with Context */}
      <FAQSection faqJson={data.faq_json || null} />
      
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

