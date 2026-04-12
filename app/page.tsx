"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SovereignBar from "@/components/SovereignBar";
import EnquiryForm from "@/components/EnquiryForm";
import { useModal } from "@/lib/modal-context";
import Link from "next/link";
import { ArrowRight, LandPlot, MapPin, TrendingUp, Download, Play, ShieldCheck, Gem } from "lucide-react";

export default function Home() {
  const { openModal } = useModal();
  return (
    <main className="min-h-screen bg-light">
      <Header />
      
      {/* Sovereign Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-dark">
        {/* Cinematic Media Layer */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-[url('/assets/hero-bg.jpg')] bg-cover bg-center opacity-40 scale-105 animate-pulse-slow" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/20 to-dark" />
          {/* Advanced Light Leak */}
          <div className="absolute -top-1/4 -right-1/4 w-full h-full bg-primary/20 blur-[150px] rounded-full opacity-30" />
        </div>

        <div className="container mx-auto max-w-7xl px-4 relative z-10 text-center">
          <div className="space-y-12 reveal-luxury">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass-obsidian border border-accent/30 text-accent font-bold text-[10px] md:text-[11px] uppercase tracking-[0.3em] backdrop-blur-2xl">
               <Gem size={14} className="animate-pulse" />
               RERA REGISTERED: P52100052096
            </div>
            
            <div className="space-y-6">
              <h1 className="text-6xl md:text-[9rem] font-heading font-bold text-white leading-[0.9] tracking-tighter">
                Absolute <br />
                <span className="text-accent italic font-light">Premium</span> Living
              </h1>
              
              <p className="max-w-2xl mx-auto text-lg md:text-2xl text-white/50 font-light leading-relaxed">
                Discover genuine Branded NA Bungalow Plots at <span className="text-white font-medium">Manjari near Hadapsar</span>. 
                The ultimate destination for generational wealth in Pune East&apos;s 150-acre sanctuary.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <Link 
                href="/availability" 
                className="group bg-primary text-white px-12 py-6 rounded-full font-bold uppercase tracking-widest text-[13px] shadow-[0_20px_50px_rgba(10,77,60,0.5)] hover:bg-primary-light transition-all flex items-center gap-3 shine-effect"
              >
                EXPLORE PLOTS
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <button 
                onClick={() => openModal({ title: "Request High-Res Brochure", subtitle: "Receive the complete 150-acre master-plan and floor plans instantly.", source: "Hero Brochure" })}
                className="bg-accent text-dark px-12 py-6 rounded-full font-bold uppercase tracking-widest text-[13px] hover:bg-accent-hover transition-all flex items-center gap-3 shadow-[0_20px_50px_rgba(197,160,89,0.3)]"
              >
                3D BROCHURE
                <Download size={18} />
              </button>
              <button 
                onClick={() => openModal({ title: "Sovereign Portal Enquiry", source: "Hero Enquire" })}
                className="hidden md:flex bg-white/5 backdrop-blur-xl text-white border border-white/10 px-12 py-6 rounded-full font-bold uppercase tracking-widest text-[13px] hover:bg-white/10 transition-all items-center gap-3"
              >
                ENQUIRE NOW
                <Play size={16} fill="white" />
              </button>
            </div>
          </div>
        </div>

        {/* Floating Metrics Bar */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full max-w-5xl px-4 z-20 reveal-luxury" style={{ animationDelay: '0.6s' }}>
           <div className="grid grid-cols-3 gap-4 md:gap-12 py-10 px-8 rounded-[3rem] glass-obsidian border border-white/5 shadow-2xl backdrop-blur-3xl">
              <div className="text-center md:text-left space-y-1">
                 <div className="text-2xl md:text-5xl font-heading font-bold text-accent">150+</div>
                 <div className="text-[8px] md:text-[10px] text-white/40 uppercase tracking-widest font-bold">Acre Township</div>
              </div>
              <div className="text-center md:text-left space-y-1 border-x border-white/10 px-4 md:px-12">
                 <div className="text-2xl md:text-5xl font-heading font-bold text-accent">1700+</div>
                 <div className="text-[8px] md:text-[10px] text-white/40 uppercase tracking-widest font-bold">Sq.ft NA Plots</div>
              </div>
              <div className="text-center md:text-left space-y-1">
                 <div className="text-2xl md:text-5xl font-heading font-bold text-accent text-nowrap">₹1.49 Cr*</div>
                 <div className="text-[8px] md:text-[10px] text-white/40 uppercase tracking-widest font-bold">Starting Price</div>
              </div>
           </div>
        </div>
      </section>

      {/* Trust & Legacy Orchestration */}
      <section className="py-32 bg-light relative overflow-hidden">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <div className="space-y-6">
                 <h2 className="text-4xl md:text-6xl font-heading font-bold text-dark leading-tight tracking-tight">
                   Legacy of Trust. <br />
                   <span className="text-primary italic">Generations of Wealth.</span>
                 </h2>
                 <p className="text-lg text-dark/60 font-light leading-relaxed">
                   Kumar Magnacity NA Bungalow Plots at Manjari near Hadapsar represents the ultimate convergence of 
                   strategic location and established legacy. Integrated within Pune East&apos;s most successful township.
                 </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 rounded-3xl bg-white border border-dark/5 shadow-xl hover:shadow-2xl transition-all group">
                   <ShieldCheck className="text-primary mb-6 group-hover:scale-110 transition-transform" size={40} />
                   <h4 className="text-xl font-bold mb-3">100% Legal Title</h4>
                   <p className="text-sm text-dark/40">Individual 7/12 extracts and RERA registered peace of mind.</p>
                </div>
                <div className="p-8 rounded-3xl bg-white border border-dark/5 shadow-xl hover:shadow-2xl transition-all group">
                   <TrendingUp className="text-primary mb-6 group-hover:scale-110 transition-transform" size={40} />
                   <h4 className="text-xl font-bold mb-3">High ROI Hub</h4>
                   <p className="text-sm text-dark/40">Surging appreciation at the junction of Pune-Solapur Highway.</p>
                </div>
              </div>
            </div>

            <div className="relative">
               <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-all duration-700">
                  <img src="/assets/plot-layout.jpg" alt="Kumar Magnacity Plot Layout" className="w-full h-auto" />
               </div>
               <div className="absolute -top-12 -right-12 w-48 h-48 bg-accent/20 blur-[80px] rounded-full" />
               <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-primary/20 blur-[80px] rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Connectivity & Growth Analysis */}
      <section className="py-32 bg-dark text-white relative">
        <div className="container mx-auto max-w-7xl px-4 text-center space-y-20">
          <div className="max-w-3xl mx-auto space-y-6">
             <div className="text-accent font-bold text-[11px] uppercase tracking-[0.4em]">Location Advantage</div>
             <h2 className="text-4xl md:text-7xl font-heading font-bold text-white">The Pulse of Pune East</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {[
               { icon: <MapPin />, title: "Manjari Excellence", desc: "Prime location connecting Hadapsar, Magarpatta, and Kharadi Hubs." },
               { icon: <ShieldCheck />, title: "City Within a City", desc: "Featuring a ~1 Lakh sq.ft. grand clubhouse and 25-26 acres of landscaped greens." },
               { icon: <ArrowRight />, title: "Upcoming Infrastructure", desc: "Positioned directly on the massive Pune Outer Ring Road intersection." }
             ].map((item, i) => (
               <div key={i} className="p-12 rounded-[2.5rem] glass-obsidian border border-white/5 text-left space-y-6 group hover:border-accent/40 transition-all">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-dark transition-all">
                     {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <p className="text-white/40 font-light text-sm">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Global Conversion Engine */}
      <section id="contact" className="py-32 bg-light">
        <div className="container mx-auto max-w-4xl px-4">
           <EnquiryForm 
             title="Secure Your Sovereign Plot" 
             subtitle="Request the detailed price list and inventory for Phase 1 Bungalow Plots at Manjari."
             buttonText="DOWNLOAD BROCHURE"
           />
        </div>
      </section>

      <Footer />
      <SovereignBar />
    </main>
  );
}
