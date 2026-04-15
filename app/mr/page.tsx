"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SovereignBar from "@/components/SovereignBar";
import { ArrowRight, ShieldCheck, LandPlot, TrendingUp, Gem } from "lucide-react";
import { useModal } from "@/lib/modal-context";
import { useEffect } from "react";

export default function Home() {
  const { openModal } = useModal();

  // AUTOMATIC SOVEREIGN POPUP (Timed Engagement - MR)
  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenPopup = sessionStorage.getItem("hasSeenSovereignPopup");
      if (!hasSeenPopup) {
        openModal({ 
          title: "सोव्हरेन इन्व्हिटेशन", 
          subtitle: "इन्व्हेन्टरी आणि किमतीची पूर्ण माहिती मिळवण्यासाठी आता चौकशी करा.",
          source: "Timed Auto-Popup (MR)" 
        });
        sessionStorage.setItem("hasSeenSovereignPopup", "true");
      }
    }, 15000); // 15 Seconds
    return () => clearTimeout(timer);
  }, [openModal]);

  return (
    <main className="min-h-screen bg-light" lang="mr">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-dark">
        {/* Cinematic Media Layer */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-[url('/assets/hero-bg.jpg')] bg-cover bg-center opacity-40 scale-105 animate-pulse-slow" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/20 to-dark" />
          <div className="absolute -top-1/4 -right-1/4 w-full h-full bg-primary/20 blur-[150px] rounded-full opacity-30" />
        </div>
        
        <div className="container mx-auto max-w-7xl px-4 relative z-20 text-center space-y-12 reveal-luxury">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass-obsidian border border-accent/30 text-accent font-bold text-[10px] uppercase tracking-[0.3em] backdrop-blur-2xl">
             <Gem size={14} className="animate-pulse" />
             RERA REGISTERED: P52100052096
          </div>
          
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-heading font-bold text-white leading-[1.1] tracking-tight">
              पुण्यातील <br />
              <span className="text-accent italic font-light">प्रगतीचे नवे केंद्र</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/50 font-light leading-relaxed">
              कुमार मॅग्नॅसिटीमध्ये तुमचा वारसा सुरक्षित करा. पुण्यातील उच्चभ्रू लोकांसाठी तयार केलेले नियोजित NA बंगलो प्लॉट्स.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
            <button 
              onClick={() => openModal({ title: "प्लॉट सुरक्षित करा", subtitle: "प्राधान्याने इन्व्हेंटरी आणि किमतीची माहिती मिळवा.", source: "Hero MR" })}
              className="group bg-primary text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-[13px] shadow-2xl hover:bg-primary-light transition-all flex items-center gap-3 shine-effect"
            >
              आता चौकशी करा
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

          </div>
        </div>

        {/* Floating Metrics Bar */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full max-w-5xl px-4 z-20 reveal-luxury" style={{ animationDelay: '0.6s' }}>
           <div className="grid grid-cols-3 gap-4 md:gap-12 py-10 px-8 rounded-[3rem] glass-obsidian border border-white/5 shadow-2xl backdrop-blur-3xl">
              <div className="text-center md:text-left space-y-1">
                 <div className="text-2xl md:text-5xl font-heading font-bold text-accent">१५०+</div>
                 <div className="text-[8px] md:text-[10px] text-white/40 uppercase tracking-widest font-bold">एकर टाउनशिप</div>
              </div>
              <div className="text-center md:text-left space-y-1 border-x border-white/10 px-4 md:px-12">
                 <div className="text-2xl md:text-5xl font-heading font-bold text-accent">१७००+</div>
                 <div className="text-[8px] md:text-[10px] text-white/40 uppercase tracking-widest font-bold">चौ.फूट NA प्लॉट्स</div>
              </div>
              <div className="text-center md:text-left space-y-1">
                 <div className="text-2xl md:text-5xl font-heading font-bold text-accent text-nowrap">₹१.४९ कोटी* + कर</div>
                 <div className="text-[8px] md:text-[10px] text-white/40 uppercase tracking-widest font-bold">किंमत सुरु होते</div>
              </div>
           </div>
        </div>
      </section>

      {/* Trust Highlights */}
      <section className="bg-light py-32 border-b">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group space-y-6 text-center md:text-left">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-xl text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-2xl font-heading font-bold">१००% लीगल टायटल</h3>
              <p className="text-dark/60 leading-relaxed font-light">
                रेरा नोंदणीकृत (P52100052096) आणि वैयक्तिक ७/१२ उतारा. पिढ्यानपिढ्या टिकणारी पारदर्शकता.
              </p>
            </div>
            <div className="group space-y-6 text-center md:text-left">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-xl text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                <LandPlot size={32} />
              </div>
              <h3 className="text-2xl font-heading font-bold">टाउनशिप मास्टर</h3>
              <p className="text-dark/60 leading-relaxed font-light">
                भव्य क्लबहाऊस, रुंद रस्ते आणि भूमिगत युटिलिटी ग्रिडसह १५०-एकर नियोजित शहरात एकात्मिक.
              </p>
            </div>
            <div className="group space-y-6 text-center md:text-left">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-xl text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                <TrendingUp size={32} />
              </div>
              <h3 className="text-2xl font-heading font-bold">गुंतवणूक हब</h3>
              <p className="text-dark/60 leading-relaxed font-light">
                पुणे-सोलापूर हायवे आणि आगामी रिंग रोडच्या जंक्शनवर झपाट्याने वाढणारे मूल्य.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <SovereignBar />
    </main>
  );
}
