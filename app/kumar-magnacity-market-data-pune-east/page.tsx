import PillarTemplate from "@/components/PillarTemplate";
import { marketAnalysis } from "@/data/market-analysis";
import { TrendingUp, MapPin, ArrowRight, ShieldCheck } from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata = {
  title: "East Pune Market Intelligence Hub | 2026 NA Plot Data",
  description: "Comprehensive real estate market analysis for Kharadi, Hadapsar, and Magarpatta. Investment ROI, infrastructure milestones, and NA plot growth trends.",
};

export default function MarketInsightsPage() {
  return (
    <PillarTemplate
      badge="Premium Intelligence 2026"
      title="East Pune Market Intelligence Hub"
      subtitle="Quantifying the Kharadi-Hadapsar-Magarpatta Wealth Corridor. Detailed micro-market analysis for strategic NA bungalow plot investments."
    >
      <div className="space-y-32 py-12 md:py-24">
        
        {/* Key Metrics Dashboard */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { label: "Manjari CAGR", value: "12.5%", sub: "Last 5 Years", icon: TrendingUp },
            { label: "Market Potential", value: "High", sub: "Ring Road Boost", icon: MapPin },
            { label: "Legal Status", value: "100%", sub: "RERA Registered", icon: ShieldCheck },
          ].map((metric, i) => (
            <div key={i} className="glass-obsidian p-10 rounded-[2.5rem] border border-white/5 space-y-4 hover:border-accent/30 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                 <metric.icon size={24} />
              </div>
              <div>
                 <span className="text-4xl font-heading font-bold text-white block">{metric.value}</span>
                 <span className="text-accent uppercase tracking-widest text-[10px] font-bold">{metric.label}</span>
                 <p className="text-white/30 text-xs mt-2">{metric.sub}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Micro-Market Deep Dive */}
        <section className="space-y-16">
          <div className="max-w-3xl">
             <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight"> Micro-Market <br /><span className="text-accent italic font-light">Comparative Analysis</span></h2>
             <p className="text-white/40 leading-relaxed text-lg font-light">
               Understanding the wealth migration from established IT hubs to emerging managed estates in Pune East.
             </p>
          </div>

          <div className="grid grid-cols-1 gap-12">
            {marketAnalysis.insights.map((insight, idx) => (
              <div key={idx} className="group relative glass-obsidian rounded-[3rem] p-12 overflow-hidden border border-white/5 hover:border-accent/20 transition-all">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/10 transition-colors" />
                
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div className="space-y-8">
                     <div className="flex items-center gap-3">
                        <span className="px-5 py-1.5 rounded-full bg-accent/20 text-accent font-bold uppercase tracking-widest text-[9px] border border-accent/20">
                          {insight.location}
                        </span>
                     </div>
                     <h3 className="text-3xl md:text-4xl font-heading font-bold text-white tracking-tight">{insight.topic}</h3>
                     <p className="text-white/50 leading-relaxed font-light text-lg">{insight.summary}</p>
                     
                     <div className="grid grid-cols-2 gap-8 pt-4">
                        <div className="space-y-1">
                           <span className="text-[10px] text-accent uppercase tracking-widest font-bold">ROI Forecast</span>
                           <p className="text-white font-medium">{insight.roi_forecast}</p>
                        </div>
                        <div className="space-y-1">
                           <span className="text-[10px] text-accent uppercase tracking-widest font-bold">Infa Boost</span>
                           <p className="text-white font-medium">{insight.infrastructure_boosts[0]}</p>
                        </div>
                     </div>
                  </div>

                  <div className="glass-panel p-10 rounded-[2.5rem] border border-white/5 space-y-6">
                     <h4 className="font-bold text-white uppercase tracking-widest text-[11px] mb-4">Investor Benefits Matrix</h4>
                     <ul className="space-y-4">
                        {insight.investor_benefits.map((benefit, bIdx) => (
                          <li key={bIdx} className="flex gap-4 text-white/40 group-hover:text-white/70 transition-colors duration-500">
                             <ArrowRight size={16} className="text-accent shrink-0 mt-1" />
                             <span className="text-sm font-light leading-relaxed">{benefit}</span>
                          </li>
                        ))}
                     </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Land Scarcity Matrix & Investor Profiling */}
        <section className="space-y-16 py-12">
          <div className="max-w-4xl">
             <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight"> The NA Scarcity <br /><span className="text-accent italic font-light">Pune East Land Matrix</span></h2>
             <p className="text-white/40 leading-relaxed text-lg font-light">
               While vertical high-rises oversaturate Kharadi and Hadapsar, RERA-approved NA bungalow plots within PMC limits represent the rarest asset class in Pune&apos;s current development cycle.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="p-12 rounded-[3rem] bg-gradient-to-br from-red-900/20 to-dark border border-red-500/20">
                <span className="text-red-400 font-bold tracking-[0.2em] uppercase text-[10px]">The Apartment Squeeze</span>
                <h3 className="text-3xl font-heading font-bold text-white mt-4 mb-6">Vertical Density</h3>
                <ul className="space-y-4 text-white/50">
                   <li className="flex items-center gap-3"><span className="text-red-500">X</span> Oversupply in Kharadi / Magarpatta</li>
                   <li className="flex items-center gap-3"><span className="text-red-500">X</span> Stagnant 3-4% rental yields</li>
                   <li className="flex items-center gap-3"><span className="text-red-500">X</span> Zero land ownership percentage</li>
                </ul>
             </div>
             
             <div className="p-12 rounded-[3rem] bg-gradient-to-br from-primary/30 to-dark border border-primary/30 relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent/20 blur-[100px] rounded-full" />
                <div className="relative z-10">
                   <span className="text-accent font-bold tracking-[0.2em] uppercase text-[10px]">The Sovereign Asset</span>
                   <h3 className="text-3xl font-heading font-bold text-white mt-4 mb-6">Horizontal Luxury</h3>
                   <ul className="space-y-4 text-white/90">
                      <li className="flex items-center gap-3"><span className="text-accent">✓</span> 150-Acre Master Township at Manjari</li>
                      <li className="flex items-center gap-3"><span className="text-accent">✓</span> Accelerated 14-18% projected CAGR</li>
                      <li className="flex items-center gap-3"><span className="text-accent">✓</span> 100% individual 7/12 extract ownership</li>
                   </ul>
                </div>
             </div>
          </div>
          
          <div className="pt-20">
             <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                <h3 className="text-3xl font-heading font-bold text-white">Target Acquisition Personas</h3>
                <p className="text-white/40">Custom-tailored investment strategies for Pune&apos;s most elite demographic funnels.</p>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {marketAnalysis.personas.map((persona, i) => (
                   <div key={i} className="glass-obsidian border border-white/10 p-8 rounded-[2rem] hover:border-accent/40 transition-all group flex flex-col">
                      <div className="text-accent text-[10px] uppercase tracking-widest font-bold mb-4 h-8 flex-shrink-0">{persona.type}</div>
                      <h4 className="text-lg font-bold text-white mb-4 group-hover:text-accent transition-colors flex-shrink-0">{persona.goal}</h4>
                      <p className="text-white/50 text-sm font-light mb-6 flex-grow">{persona.strategy}</p>
                      <div className="pt-4 border-t border-white/5 flex-shrink-0">
                         <span className="text-[9px] uppercase tracking-widest text-white/30 block mb-1">Target Plot</span>
                         <span className="text-white/80 font-medium text-sm">{persona.target_plots}</span>
                      </div>
                   </div>
                ))}
             </div>
          </div>
        </section>

        {/* Strategic Wealth Section */}
        <section className="py-24 px-12 rounded-[4rem] bg-gradient-to-br from-primary/20 to-dark border border-white/5 relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/hero-bg.jpg')] opacity-5 bg-cover bg-center" />
           <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-10">
                 <h2 className="text-4xl md:text-6xl font-heading font-bold text-white leading-tight">Institutional Trust <br /><span className="text-accent">Generational Wealth</span></h2>
                 <p className="text-white/50 text-xl font-light leading-relaxed">
                   Kumar Magnacity isn&apos;t just a real estate project; it&apos;s a programmatic investment vehicle designed to capitalize on the expansion of Pune&apos;s most valuable IT corridor.
                 </p>
                 <div className="flex flex-wrap gap-6 pt-6">
                    <div className="flex items-center gap-3">
                       <div className="w-10 h-10 rounded-full bg-accent text-dark flex items-center justify-center font-bold">59</div>
                       <span className="text-white font-medium uppercase tracking-widest text-[10px]">Years of Legacy</span>
                    </div>
                    <div className="flex items-center gap-3">
                       <div className="w-10 h-10 rounded-full bg-accent text-dark flex items-center justify-center font-bold">7/12</div>
                       <span className="text-white font-medium uppercase tracking-widest text-[10px]">Individual Extract</span>
                    </div>
                 </div>
              </div>

              <div className="relative">
                 <EnquiryForm 
                   title="Secure Your Hub Brief"
                   subtitle="Request the complete East Pune Market Intelligence whitepaper and current plot inventory."
                 />
              </div>
           </div>
        </section>
      </div>
    </PillarTemplate>
  );
}
