"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SovereignBar from "@/components/SovereignBar";
import AdvancedEnquiryForm from "@/components/AdvancedEnquiryForm";
import SectionHeader from "@/components/SectionHeader";
import AmenityGrid from "@/components/AmenityGrid";
import InvestmentMatrix from "@/components/InvestmentMatrix";
import { useModal } from "@/lib/modal-context";
import { ArrowRight, Download, MapPin, ShieldCheck, Gem, Sparkles, Building2, Landmark } from "lucide-react";

export default function Home() {
  const { openModal } = useModal();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // AUTOMATIC SOVEREIGN POPUP (Timed Engagement)
  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenPopup = sessionStorage.getItem("hasSeenSovereignPopup");
      if (!hasSeenPopup) {
        openModal({ 
          title: "Sovereign Invitation", 
          subtitle: "Unlock the complete inventory suite and priority pricing for Phase 1.",
          source: "Timed Auto-Popup" 
        });
        sessionStorage.setItem("hasSeenSovereignPopup", "true");
      }
    }, 15000); // 15 Seconds
    return () => clearTimeout(timer);
  }, [openModal]);

  // MASS KEYWORD INJECTION VIA FAQ SCHEMA
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the price of 2BHK flats in Kumar Magnacity Hadapsar Pune?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The price for premium 2BHK flats in Kumar Magnacity (Manjari, near Hadapsar, Pune) starts from ₹67.99 Lakhs onwards for a spacious 757 sq.ft carpet area."
        }
      },
      {
        "@type": "Question",
        "name": "Are there luxury 3BHK apartments available near EON IT Park or Kharadi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Kumar Magnacity offers expansive 1053 sq.ft 3BHK apartments starting at ₹92.99 Lakhs, strategically located near major IT hubs like EON IT Park, Kharadi, and Magarpatta City."
        }
      },
      {
        "@type": "Question",
        "name": "Is Kumar Magnacity Township MahaRERA approved?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Kumar Magnacity is fully MahaRERA approved with registration numbers P52100052096 and P52100054476, ensuring complete legal transparency for real estate investment in Pune East."
        }
      },
      {
        "@type": "Question",
        "name": "What is the possession date for the G+30 high-rise towers in Manjari?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The targeted possession date for the new G+30 high-rise luxury apartments at Kumar Magnacity is December 2028."
        }
      },
      {
        "@type": "Question",
        "name": "Why is Manjari considered the best ROI location in Pune East real estate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Due to its proximity to the upcoming Pune Ring Road, Solapur Highway, and saturated IT hubs like Magarpatta and SP Infocity, Manjari offers excellent capital appreciation and high rental yields for 2BHK and 3BHK homes."
        }
      }
    ]
  };

  return (
    <main ref={containerRef} className="min-h-screen bg-light selection:bg-accent/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      
      {/* 1. CINEMATIC HERO 2.0 */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-dark">
        {/* Cinematic Media Layer */}
        <motion.div style={{ scale: heroScale, opacity: heroOpacity }} className="absolute inset-0 z-0 bg-dark">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/assets/hero-bg.jpg"
            className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity"
          >
            <source src="/assets/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-dark/90 via-dark/40 to-dark" />
          <div className="absolute -top-1/4 -right-1/4 w-full h-full bg-accent/10 blur-[150px] rounded-full opacity-30 animate-pulse-slow" />
        </motion.div>
        
        {/* Main Hero Focus */}
        <div className="container mx-auto max-w-7xl px-6 relative z-10 text-center space-y-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-obsidian border border-accent/40 text-accent font-bold text-[10px] md:text-[11px] uppercase tracking-[0.4em] backdrop-blur-3xl shadow-2xl mx-auto ring-1 ring-white/10">
               <Gem size={14} className="animate-pulse" />
               RERA: P52100052096 | P52100054476
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-heading font-bold text-white leading-[0.85] tracking-tighter">
                Absolute <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-accent-hover italic font-light">Sovereignty</span>
              </h1>
              
              <p className="max-w-2xl mx-auto text-base md:text-xl lg:text-2xl text-white/40 font-light leading-relaxed px-4">
                The ultimate 150-acre sanctuary at <span className="text-white font-medium">Manjari near Hadapsar</span>. 
                Securing generational wealth through branded horizontal luxury in Pune East.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-12">
              <button 
                onClick={() => openModal({ title: "Sovereign Plot Tour", source: "Hero Primary" })}
                className="w-full sm:w-auto group bg-accent text-dark px-12 py-5 rounded-full font-black uppercase tracking-[0.25em] text-[11px] shadow-[0_20px_60px_rgba(201,162,39,0.3)] hover:shadow-[0_20px_80px_rgba(201,162,39,0.5)] transition-all flex items-center justify-center gap-3 relative overflow-hidden"
              >
                <span className="relative z-10">EXPLORE MASTERPLAN</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </button>
              <button 
                onClick={() => openModal({ title: "Instant Brochure Access", source: "Hero Secondary" })}
                className="w-full sm:w-auto bg-white/5 text-white px-12 py-5 rounded-full font-bold uppercase tracking-[0.25em] text-[11px] hover:bg-white/10 transition-all border border-white/10 backdrop-blur-xl"
              >
                REQUEST BROCHURE
              </button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
        >
          <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent" />
          <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-white">SCROLL TO DISCOVER</span>
        </motion.div>
      </section>

      {/* 2. THE VISIONARY MASTERPLAN (Comprehensive Detailing) */}
      <section className="py-24 md:py-48 bg-white relative overflow-hidden">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 md:gap-40 items-center">
            <div className="space-y-12">
              <SectionHeader 
                align="left"
                badge="The 150-Acre Vision"
                title="A City Within <br/> A Sanctuary."
                subtitle="Integrated within Pune East's most successful residential ecosystem, Kumar Magnacity is not just a layout; it's a future-proofed micro-market designed for the elite."
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4 p-8 rounded-[2.5rem] bg-light-soft border border-dark/5 hover:border-accent/30 transition-all group">
                   <div className="w-12 h-12 bg-dark rounded-xl flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                      <Building2 size={24} />
                   </div>
                   <h4 className="text-xl font-bold text-dark">Established Heritage</h4>
                   <p className="text-sm text-dark/40 leading-relaxed">Built on Kumar Props' 59-year legacy of delivering high-appreciation assets.</p>
                </div>
                <div className="space-y-4 p-8 rounded-[2.5rem] bg-light-soft border border-dark/5 hover:border-accent/30 transition-all group">
                   <div className="w-12 h-12 bg-dark rounded-xl flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                      <ShieldCheck size={24} />
                   </div>
                   <h4 className="text-xl font-bold text-dark">Complete NA Title</h4>
                   <p className="text-sm text-dark/40 leading-relaxed">Individual 7/12 extracts and full RERA compliance for 100% legal security.</p>
                </div>
              </div>

              <div className="pt-8">
                 <button 
                  onClick={() => openModal({ title: "Sector Wise Detailing", source: "Vision Section" })}
                  className="inline-flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.3em] text-dark hover:text-accent transition-colors group"
                 >
                    INTERNAL INFRASTRUCTURE SPECS
                    <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                 </button>
              </div>
            </div>

            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative z-10 rounded-[4rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)] group"
              >
                <img src="/assets/plot-layout.jpg" alt="Masterplan" className="w-full h-auto transition-transform duration-[3s] group-hover:scale-110" />
                <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <div className="bg-white px-8 py-4 rounded-full text-[10px] font-bold tracking-widest uppercase text-dark flex items-center gap-2">
                      VIEW FULL RESOLUTION <Sparkles size={14} className="text-accent" />
                   </div>
                </div>
              </motion.div>
              {/* Floating Stat */}
              <div className="absolute -bottom-10 -right-10 z-20 bg-dark text-white p-10 rounded-[3rem] shadow-2xl space-y-2 hidden md:block border border-white/10">
                 <div className="text-4xl font-heading font-bold text-accent">1700+</div>
                 <div className="text-[10px] font-bold uppercase tracking-widest opacity-40">SQ.FT PLOTTING STARTING</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2.5 PREMIUM APARTMENTS SHOWCASE */}
      <section className="py-24 md:py-40 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(201,162,39,0.08),transparent_60%)]" />
        <div className="container mx-auto max-w-7xl px-6 relative z-10">
          <SectionHeader 
            dark
            badge="Premium Residences"
            title="Elevated<br/>Township Living."
            subtitle="Beyond bungalow plots — experience world-class G+30 High-Rise 2BHK & 3BHK apartments within the same 150-acre master-planned ecosystem."
            className="mb-24"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* 2BHK Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative bg-white/[0.03] border border-white/10 rounded-[3rem] p-10 md:p-14 space-y-8 hover:border-accent/30 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/10 blur-[80px] rounded-full group-hover:bg-accent/20 transition-all duration-700" />
              <div className="relative z-10 space-y-8">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent font-bold text-[10px] uppercase tracking-[0.3em]">
                    <Building2 size={14} />
                    2 BHK
                  </div>
                  <div className="text-[10px] text-white/30 font-bold uppercase tracking-widest">RERA: P52100052096</div>
                </div>
                <div className="space-y-3">
                  <div className="text-5xl md:text-6xl font-heading font-bold text-white">757 <span className="text-lg text-white/30">sq.ft</span></div>
                  <div className="text-sm text-white/40 leading-relaxed">Compact yet spacious carpet area — perfect for young IT professionals and first-time homebuyers.</div>
                </div>
                <div className="flex items-end gap-2">
                  <div className="text-3xl font-heading font-bold text-accent">₹67.99L</div>
                  <div className="text-sm text-white/30 pb-1">onwards</div>
                </div>
                <a 
                  href="/kumar-magnacity-2bhk-flats-hadapsar-pune-price"
                  className="inline-flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.25em] text-accent hover:text-white transition-colors group/link"
                >
                  EXPLORE 2BHK
                  <ArrowRight size={16} className="group-hover/link:translate-x-2 transition-transform" />
                </a>
              </div>
            </motion.div>

            {/* 3BHK Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="group relative bg-white/[0.03] border border-white/10 rounded-[3rem] p-10 md:p-14 space-y-8 hover:border-accent/30 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 blur-[80px] rounded-full group-hover:bg-primary/20 transition-all duration-700" />
              <div className="relative z-10 space-y-8">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/40 text-white font-bold text-[10px] uppercase tracking-[0.3em]">
                    <Building2 size={14} />
                    3 BHK
                  </div>
                  <div className="text-[10px] text-white/30 font-bold uppercase tracking-widest">RERA: P52100054476</div>
                </div>
                <div className="space-y-3">
                  <div className="text-5xl md:text-6xl font-heading font-bold text-white">1,053 <span className="text-lg text-white/30">sq.ft</span></div>
                  <div className="text-sm text-white/40 leading-relaxed">Expansive 3-bedroom layout with premium finishes — designed for growing families and space-seekers.</div>
                </div>
                <div className="flex items-end gap-2">
                  <div className="text-3xl font-heading font-bold text-accent">₹92.99L</div>
                  <div className="text-sm text-white/30 pb-1">onwards</div>
                </div>
                <a 
                  href="/kumar-magnacity-3bhk-apartments-manjari-pune-price"
                  className="inline-flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.25em] text-accent hover:text-white transition-colors group/link"
                >
                  EXPLORE 3BHK
                  <ArrowRight size={16} className="group-hover/link:translate-x-2 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Full Apartments CTA */}
          <div className="mt-16 text-center">
            <a 
              href="/kumar-magnacity-2bhk-3bhk-apartments-manjari-pune"
              className="inline-flex items-center gap-4 bg-accent text-dark px-12 py-5 rounded-full font-black uppercase tracking-[0.25em] text-[11px] shadow-[0_20px_60px_rgba(201,162,39,0.3)] hover:shadow-[0_20px_80px_rgba(201,162,39,0.5)] transition-all group relative overflow-hidden"
            >
              <span className="relative z-10">VIEW ALL APARTMENTS</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform relative z-10" />
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </a>
          </div>
        </div>
      </section>

      {/* 3. AMENITY ECOSYSTEM (Advanced Visuals) */}
      <section className="py-24 md:py-40 bg-dark">
        <div className="container mx-auto max-w-7xl px-6">
          <SectionHeader 
            dark
            badge="Luxury Portfolio"
            title="The Magnum Opus <br/> Social Hub."
            subtitle="Featuring a ~1 Lakh sq.ft clubhouse and 25+ acres of peripheral greens, Kumar Magnacity redefines the lifestyle of Pune East's IT & Business elite."
            className="mb-24"
          />
          <AmenityGrid />
        </div>
      </section>

      {/* 4. INVESTMENT INTELLIGENCE (Data-Driven Detailed Section) */}
      <section className="py-24 md:py-40 bg-light">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
             <SectionHeader 
               align="left"
               badge="Market Intelligence"
               title="Capitalizing on <br/> Pune East Dominance."
               subtitle="As Kharadi and Magarpatta reach peak saturation, the Manjari-BK corridor is emerging as the chosen ROI hub for horizontal luxury."
               className="max-w-3xl"
             />
             <div className="flex flex-col items-center md:items-end gap-3 p-8 bg-white rounded-[2.5rem] border border-dark/5 shadow-xl">
                <div className="text-3xl font-heading font-bold text-primary italic">15-18%</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-dark/30">AVG. ANNUAL APPRECIATION</div>
             </div>
          </div>
          <InvestmentMatrix />
        </div>
      </section>

      {/* 5. LOCATION SYNERGY (Connectivity Detailing) */}
      <section className="py-24 md:py-40 bg-white relative overflow-hidden">
        <div className="container mx-auto max-w-7xl px-6 text-center">
           <SectionHeader 
             badge="Strategic Proximity"
             title="The Pulse of <br/> Connectivity."
             subtitle="Seamlessly connected to Pune's core business hubs via the Solapur-Pune Highway and the upcoming Outer Ring Road."
             className="mb-20"
           />
           
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { time: "15 MINS", label: "Kharadi IT Hub", icon: <Building2 className="text-primary" /> },
                { time: "12 MINS", label: "Magarpatta City", icon: <Landmark className="text-primary" /> },
                { time: "20 MINS", label: "EON IT Park", icon: <Sparkles className="text-primary" /> },
                { time: "05 MINS", label: "Solapur Highway", icon: <MapPin className="text-primary" /> }
              ].map((loc, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-10 rounded-[3rem] bg-light-soft border border-dark/5 transition-all hover:shadow-2xl space-y-4"
                >
                   <div className="w-12 h-12 mx-auto bg-white rounded-2xl flex items-center justify-center shadow-lg">
                      {loc.icon}
                   </div>
                   <div className="space-y-1">
                      <div className="text-2xl font-heading font-bold text-dark">{loc.time}</div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-dark/30">{loc.label}</div>
                   </div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* 6. ADVANCED ENQUIRY ENGINE (Final Conversion) */}
      <section id="contact" className="py-24 md:py-48 bg-dark relative">
        <div className="absolute inset-0 bg-[url('/assets/amenities.jpg')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto max-w-5xl px-6 relative z-10">
           <AdvancedEnquiryForm 
             title="Authorize Your Priority Interest"
             subtitle="Capture the exhaustive inventory list, plot dimensions, and pre-launch pricing advantages before Phase 1 completion."
             buttonText="SECURE MY PLOT"
           />
        </div>
      </section>

      <Footer />
      <SovereignBar />
    </main>
  );
}
