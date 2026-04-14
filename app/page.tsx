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
      <section className="relative min-h-[90vh] md:h-screen flex flex-col items-center justify-center overflow-hidden bg-dark pt-20">
        {/* Cinematic Media Layer */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-[url('/assets/hero-bg.jpg')] bg-cover bg-center opacity-40 scale-105 animate-pulse-slow" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/90 via-dark/40 to-dark" />
          <div className="absolute -top-1/4 -right-1/4 w-full h-full bg-primary/20 blur-[150px] rounded-full opacity-30" />
        </div>
        
        {/* Main Hero Focus */}
        <div className="container mx-auto max-w-7xl px-6 relative z-10 text-center flex-1 flex flex-col justify-center">
          <div className="space-y-8 md:space-y-12 reveal-luxury">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-obsidian border border-accent/40 text-accent font-bold text-[10px] md:text-[11px] uppercase tracking-[0.3em] backdrop-blur-3xl shadow-2xl mx-auto">
               <Gem size={14} className="animate-pulse" />
               RERA REGISTERED: P52100052096
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-heading font-bold text-white leading-[0.95] tracking-tighter">
                Absolute <br />
                <span className="text-accent italic font-light">Premium</span> Living
              </h1>
              
              <p className="max-w-2xl mx-auto text-base md:text-xl lg:text-2xl text-white/50 font-light leading-relaxed px-4">
                Discover genuine Branded NA Bungalow Plots at <span className="text-white font-medium">Manjari near Hadapsar</span>. 
                The ultimate destination for generational wealth in Pune East&apos;s 150-acre sanctuary.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 pt-8 animate-reveal-up" style={{ animationDelay: '0.4s' }}>
              <button 
                onClick={() => openModal({ title: "Sovereign Plot Tour", source: "Hero Primary" })}
                className="w-full sm:w-auto group bg-primary text-white px-12 py-5 rounded-full font-bold uppercase tracking-[0.25em] text-[10px] md:text-[11px] shadow-[0_20px_50px_rgba(10,77,60,0.4)] hover:shadow-[0_20px_60px_rgba(10,77,60,0.6)] transition-all flex items-center justify-center gap-3 shine-effect"
              >
                EXPLORE PLOTS
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => openModal({ title: "High-Res Brochure", subtitle: "Receive the complete 150-acre master-plan instantly.", source: "Hero Brochure" })}
                className="w-full sm:w-auto bg-accent text-dark px-12 py-5 rounded-full font-bold uppercase tracking-[0.25em] text-[10px] md:text-[11px] hover:bg-accent-hover transition-all flex items-center justify-center gap-3 shadow-[0_20px_50px_rgba(197,160,89,0.2)]"
              >
                3D BROCHURE
                <Download size={16} />
              </button>
            </div>

          </div>
        </div>

        {/* Precision Metrics Bar */}
        <div className="relative md:absolute bottom-0 md:bottom-12 left-0 md:left-1/2 md:-translate-x-1/2 w-full max-w-5xl px-4 z-20 reveal-luxury py-12 md:py-0" style={{ animationDelay: '0.6s' }}>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 py-8 md:py-10 px-8 rounded-[2rem] md:rounded-[3rem] glass-obsidian border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.5)] backdrop-blur-3xl">
              <div className="text-center md:text-left space-y-1 hover:pl-2 transition-all duration-300">
                 <div className="text-3xl md:text-5xl font-heading font-bold text-accent">150+</div>
                 <div className="text-[9px] md:text-[10px] text-white/40 uppercase tracking-[0.3em] font-black">Acre Township</div>
              </div>
              <div className="text-center md:text-left space-y-1 md:border-x border-white/10 px-4 md:px-12 hover:scale-105 transition-all duration-300">
                 <div className="text-3xl md:text-5xl font-heading font-bold text-accent">1700+</div>
                 <div className="text-[9px] md:text-[10px] text-white/40 uppercase tracking-[0.3em] font-black underline underline-offset-4 decoration-accent/30">Sq.ft NA Plots</div>
              </div>
              <div className="text-center md:text-left space-y-1 hover:pr-2 transition-all duration-300">
                 <div className="text-3xl md:text-5xl font-heading font-bold text-accent text-nowrap">₹1.49 Cr* + taxes</div>
                 <div className="text-[9px] md:text-[10px] text-white/40 uppercase tracking-[0.3em] font-black">Starting Price</div>
              </div>
           </div>
        </div>
      </section>

      {/* Trust & Legacy Orchestration */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden border-y border-dark/5">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-32 items-center">
            <div className="space-y-12">
              <div className="space-y-6">
                 <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-dark leading-[1.1] tracking-tight">
                   Legacy of Trust. <br />
                   <span className="text-primary italic font-light">Generations of Wealth.</span>
                 </h2>
                 <p className="text-lg md:text-xl text-dark/60 font-light leading-relaxed max-w-xl border-l-2 border-primary/20 pl-8">
                   Kumar Magnacity NA Bungalow Plots at Manjari near Hadapsar represents the ultimate convergence of 
                   strategic location and established legacy. Integrated within Pune East&apos;s most successful township.
                 </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                <div className="p-10 rounded-[2.5rem] bg-light border border-dark/5 shadow-xl hover:shadow-2xl transition-all group relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                      <ShieldCheck size={100} />
                   </div>
                   <ShieldCheck className="text-primary mb-6 group-hover:scale-110 transition-transform relative z-10" size={40} />
                   <h4 className="text-xl font-bold mb-3 relative z-10">100% Legal Title</h4>
                   <p className="text-sm text-dark/40 relative z-10 leading-relaxed">Individual 7/12 extracts and RERA registered peace of mind.</p>
                </div>
                <div className="p-10 rounded-[2.5rem] bg-light border border-dark/5 shadow-xl hover:shadow-2xl transition-all group relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                      <TrendingUp size={100} />
                   </div>
                   <TrendingUp className="text-primary mb-6 group-hover:scale-110 transition-transform relative z-10" size={40} />
                   <h4 className="text-xl font-bold mb-3 relative z-10">High ROI Hub</h4>
                   <p className="text-sm text-dark/40 relative z-10 leading-relaxed">Surging appreciation at the junction of Pune-Solapur Highway.</p>
                </div>
              </div>
            </div>

            <div className="relative group">
               <div className="relative z-10 rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-2xl rotate-1 group-hover:rotate-0 transition-all duration-1000">
                  <img src="/assets/plot-layout.jpg" alt="Kumar Magnacity Plot Layout" className="w-full h-auto scale-105 group-hover:scale-100 transition-transform duration-[2s]" />
               </div>
               <div className="absolute -top-12 -right-12 w-64 h-64 bg-accent/20 blur-[100px] rounded-full animate-pulse" />
               <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-primary/20 blur-[100px] rounded-full animate-pulse-slow" />
            </div>
          </div>
        </div>
      </section>


      {/* Connectivity & Growth Analysis */}
      <section className="py-24 md:py-40 bg-dark text-white relative">
        <div className="container mx-auto max-w-7xl px-6 text-center space-y-24">
          <div className="max-w-3xl mx-auto space-y-6">
             <div className="text-accent font-bold text-[11px] uppercase tracking-[0.5em] mb-4">Location Intelligence</div>
             <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight">The Pulse of Pune East</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
             {[
               { icon: <MapPin size={24} />, title: "Manjari Excellence", desc: "Prime location connecting Hadapsar, Magarpatta, and Kharadi Hubs." },
               { icon: <ShieldCheck size={24} />, title: "City Within a City", desc: "Featuring a ~1 Lakh sq.ft. grand clubhouse and 25-26 acres of landscaped greens." },
               { icon: <ArrowRight size={24} />, title: "Infrastructure Boom", desc: "Positioned directly on the upcoming massive Pune Outer Ring Road junction." }
             ].map((item, i) => (
               <div key={i} className="p-10 md:p-12 rounded-[3.5rem] bg-white/[0.03] border border-white/5 text-left space-y-6 md:space-y-8 group hover:border-accent/40 transition-all relative overflow-hidden flex flex-col h-full">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-accent/10 rounded-2xl md:rounded-3xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-dark transition-all duration-500 shadow-xl shrink-0">
                     {item.icon}
                  </div>
                  <div className="space-y-4 flex-1">
                     <h3 className="text-2xl md:text-3xl font-bold italic tracking-tight">{item.title}</h3>
                     <p className="text-white/40 font-light text-sm md:text-base leading-relaxed">{item.desc}</p>
                  </div>
               </div>
             ))}
          </div>

        </div>
      </section>

      {/* Global Conversion Engine */}
      <section id="contact" className="py-24 md:py-40 bg-light">
        <div className="container mx-auto max-w-5xl px-6">
           <EnquiryForm 
             title="Secure Your Sovereign Plot" 
             subtitle="Request the detailed price list and inventory for Phase 1 Bungalow Plots at Manjari."
             buttonText="RECEIVE PRICE LIST"
           />
        </div>
      </section>

      <Footer />
      <SovereignBar />
    </main>
  );
}
