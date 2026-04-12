import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SovereignBar from "@/components/SovereignBar";
import Link from "next/link";
import { ArrowRight, ShieldCheck, LandPlot, TrendingUp } from "lucide-react";
import { useModal } from "@/lib/modal-context";

export const runtime = "edge";


export const metadata: Metadata = {
  title: "पुण्याचे उदयोन्मुख केंद्र | कुमार मॅग्नासिटी",
  description: "पुण्यातील सर्वात सुरक्षित, RERA-नोंदणीकृत १५०-एकर टाउनशिपमध्ये गुंतवणूक करा. कुमार प्रॉपर्टीजद्वारे शून्य अतिक्रमण जोखीम आणि उच्च-परतावा NA प्लॉट्स.",
};

export default function Home() {
  const { openModal } = useModal();
  return (
    <main className="min-h-screen" lang="mr">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image / Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10s] hover:scale-105"
          style={{ backgroundImage: "url('/assets/hero-bg.jpg')" }} 
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-primary/60 via-dark/40 to-dark/90" />
        
        <div className="container mx-auto max-w-7xl px-4 relative z-20 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 border border-accent/40 text-accent font-bold text-[10px] uppercase tracking-widest animate-fade-in">
             <LandPlot size={14} />
             150-Acre Sovereign Landed Estate
          </div>
          
          <h1 className="text-5xl md:text-8xl font-heading font-bold text-white leading-[1.1] tracking-tight">
            पुण्यातील <br />
            <span className="text-accent italic">प्रगतीचे नवे केंद्र</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/80 font-light leading-relaxed">
            कुमार मॅग्नासिटीमध्ये तुमचा वारसा सुरक्षित करा. पुण्यातील उच्चभ्रू लोकांसाठी तयार केलेले नियोजित NA बंगलो प्लॉट्स.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
            <button 
              onClick={() => openModal({ title: "प्लॉट सुरक्षित करा", subtitle: "प्राधान्याने इन्व्हेंटरी आणि किमतीची माहिती मिळवा.", source: "Hero MR" })}
              className="group bg-primary text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-[13px] shadow-2xl hover:bg-primary-light transition-all flex items-center gap-3 shine-effect"
            >
              प्लॉट सुरक्षित करा
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <Link 
              href="/availability" 
              className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-full font-bold uppercase tracking-widest text-[13px] hover:bg-white/20 transition-all"
            >
              View Inventory
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
           <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-white to-transparent" />
        </div>
      </section>

      {/* Trust Highlights */}
      <section className="bg-light py-24 border-b">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group space-y-6 text-center md:text-left">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-xl text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-2xl font-heading font-bold">100% Legal Title</h3>
              <p className="text-dark/60 leading-relaxed">
                RERA registered (P52100052096) with individual 7/12 extracts. Transparency that lasts generations.
              </p>
            </div>
            <div className="group space-y-6 text-center md:text-left">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-xl text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                <LandPlot size={32} />
              </div>
              <h3 className="text-2xl font-heading font-bold">Township Mastery</h3>
              <p className="text-dark/60 leading-relaxed">
                Integrated within a 150-acre master-planned city with grand clubhouses, wide internal roads, and underground utility grids.
              </p>
            </div>
            <div className="group space-y-6 text-center md:text-left">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-xl text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                <TrendingUp size={32} />
              </div>
              <h3 className="text-2xl font-heading font-bold">Appreciation Hub</h3>
              <p className="text-dark/60 leading-relaxed">
                Exponential growth potential at the junction of Pune-Solapur Highway and the upcoming Ring Road.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Redirection notice for verification */}
      <section className="bg-white py-10">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <p className="text-[10px] text-dark/20 uppercase tracking-[5px]">
             Modern Architecture v2.0 | Next.js Engine Engaged
          </p>
        </div>
      </section>

      <Footer />
      <SovereignBar />
    </main>
  );
}
