import { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SovereignBar from "@/components/SovereignBar";
import EnquiryForm from "@/components/EnquiryForm";
import FAQSection from "@/components/FAQSection";
import InventoryBadge from "@/components/InventoryBadge";
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

  // Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": data.hero_title,
    "description": data.description,
    "brand": {
      "@type": "Brand",
      "name": "कुमार प्रॉपर्टीज"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "INR",
      "price": "14900000"
    }
  };

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
        
        <div className="container mx-auto max-w-7xl px-4 relative z-10 font-[family-name:var(--font-body)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7 space-y-8 animate-fade-in text-right md:text-left">
              <div className="space-y-4">
                <InventoryBadge />
                <h1 className="text-4xl md:text-7xl font-heading font-bold text-white leading-[1.3] tracking-tight">
                  {data.hero_title}
                </h1>
                <p className="text-xl md:text-2xl text-white/60 leading-relaxed font-light max-w-2xl">
                  {data.hero_subtitle}
                </p>
              </div>

              <div className="flex flex-wrap gap-6 pt-4 justify-end md:justify-start">
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-accent">
                       <ShieldCheck size={20} />
                    </div>
                    <div className="flex flex-col">
                       <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">नोंदणी</span>
                       <span className="text-sm text-white font-medium">RERA नोंदणीकृत जमीन</span>
                    </div>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-accent">
                       <TrendingUp size={20} />
                    </div>
                    <div className="flex flex-col">
                       <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">परतावा</span>
                       <span className="text-sm text-white font-medium">१२.५% ऐतिहासिक वाढ (CAGR)</span>
                    </div>
                 </div>
              </div>

              <div className="hidden lg:block pt-8 text-left">
                 <div className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 backdrop-blur-xl space-y-4">
                    <h4 className="text-white font-heading font-bold text-xl italic text-accent">गुंतवणूक माहिती (Insight)</h4>
                    <p className="text-white/50 leading-relaxed text-sm">
                       पुणे पूर्व हे पुढील रिअल इस्टेट तेजीचे केंद्र आहे. आगामी <span className="text-white font-bold">रिंग रोड</span> आणि <span className="text-white font-bold">मेट्रो विस्तारामुळे</span>, २०२८ पर्यंत मांजरी-हडपसरमधील जमिनीच्या किमती २२% नी वाढण्याची शक्यता आहे.
                    </p>
                 </div>
              </div>
            </div>
            
            <div className="lg:col-span-5 relative animate-fade-in [animation-delay:200ms]">
               <EnquiryForm 
                title="VIP प्रवेश मिळवा" 
                subtitle="या क्लस्टरसाठी थेट किंमत पत्रक आणि इन्व्हेंटरी मॅप डाऊनलोड करा."
                buttonText="प्लॅन्स आणि दर मिळवा"
               />
               
               {/* Quick stats below form */}
               <div className="mt-8 flex items-center justify-center gap-8 opacity-40">
                  <div className="text-center">
                     <p className="text-2xl font-heading font-bold text-white tracking-widest">१५०</p>
                     <p className="text-[8px] uppercase tracking-widest text-white/50">एकर</p>
                  </div>
                  <div className="w-[1px] h-8 bg-white/20" />
                  <div className="text-center">
                     <p className="text-2xl font-heading font-bold text-white tracking-widest">५९</p>
                     <p className="text-[8px] uppercase tracking-widest text-white/50">वर्षांचा वारसा</p>
                  </div>
                  <div className="w-[1px] h-8 bg-white/20" />
                  <div className="text-center">
                     <p className="text-2xl font-heading font-bold text-white tracking-widest">३ स्तरीय</p>
                     <p className="text-[8px] uppercase tracking-widest text-white/50">सुरक्षा</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Intelligence Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
               <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark leading-tight">
                 पुण्यातील स्मार्ट गुंतवणूकदार <br /> <span className="text-accent underline decoration-accent/30 underline-offset-8 italic">कुमार मॅग्नासिटी</span> का निवडतात?
               </h2>
               <p className="text-lg text-dark/60 leading-relaxed font-light">
                 असंघटित लोकल लेआउट्सच्या तुलनेत, कुमार मॅग्नासिटी तुम्हाला टायर-१ बिल्डरच्या सुरक्षिततेसह स्वतःच्या बंगल्याचा मालक बनण्याची संधी देते. हा तुमच्या विश्वासाचा पाया आहे.
               </p>
               <div className="space-y-4">
                  {[
                    "प्रत्येक प्लॉटसाठी स्वतंत्र ७/१२ उतारा",
                    "PMRDA मंजूर आणि RERA नोंदणीकृत",
                    "भूमिगत युटिलिटी ग्रीड्स (पाणी, वीज, इंटरनेट)",
                    "भव्य क्लबहाऊस आणि १२+ प्रीमियम सुविधा"
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
                     <h4 className="font-heading font-bold text-xl text-right md:text-left">लीगल किट</h4>
                     <p className="text-xs text-dark/50 leading-relaxed italic text-right md:text-left">७/१२ उतारा नमुना आणि RERA कागदपत्रे डाऊनलोड करा.</p>
                  </div>
                  <div className="p-8 rounded-[2.5rem] bg-dark text-white space-y-4 hover:shadow-2xl transition-all hover:-translate-y-2">
                     <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-accent">
                        <TrendingUp size={24} />
                     </div>
                     <h4 className="font-heading font-bold text-xl text-right md:text-left">ROI मार्गदर्शक</h4>
                     <p className="text-xs text-white/40 leading-relaxed italic text-right md:text-left">मांजरी-हडपसर जमिनीच्या वाढीचे सविस्तर विश्लेषण २०२६.</p>
                  </div>
               </div>
               <div className="space-y-6 pt-12">
                  <div className="p-8 rounded-[2.5rem] bg-accent text-dark space-y-4 hover:shadow-2xl transition-all hover:-translate-y-2 font-bold">
                     <div className="w-12 h-12 bg-dark rounded-2xl flex items-center justify-center text-accent shadow-xl">
                        <ArrowRight size={24} />
                     </div>
                     <h4 className="font-heading text-xl text-right md:text-left">साइट व्हिजिट</h4>
                     <p className="text-xs text-dark/70 leading-relaxed italic text-right md:text-left">आजच मास्टर-प्लॅन्ड टाउनशिपचा प्रत्यक्ष अनुभव घ्या.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section with Context */}
      <FAQSection faqJson={data.faq_json} />
      
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

