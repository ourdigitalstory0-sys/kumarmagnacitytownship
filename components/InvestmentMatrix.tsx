"use client";

import { motion } from "framer-motion";
import { TrendingUp, BarChart3, Landmark, Globe, ArrowUpRight } from "lucide-react";
import { marketAnalysis } from "@/data/market-analysis";

export default function InvestmentMatrix() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {marketAnalysis.insights.slice(0, 4).map((item, i) => (
        <motion.div
           key={item.id}
           initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ delay: i * 0.1 }}
           className="relative group p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-500 overflow-hidden"
        >
           {/* Geometric Subtle Pattern */}
           <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <TrendingUp size={150} strokeWidth={1} />
           </div>

           <div className="relative z-10 space-y-8">
              <div className="flex items-start justify-between">
                 <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center text-accent">
                    {i === 0 ? <Globe size={24} /> : i === 1 ? <BarChart3 size={24} /> : i === 2 ? <Landmark size={24} /> : <ArrowUpRight size={24} />}
                 </div>
                 <div className="px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-mono text-[9px] font-bold uppercase tracking-widest">
                    {item.investment_potential} PT.
                 </div>
              </div>

              <div className="space-y-4">
                 <div className="space-y-1">
                    <span className="text-[10px] text-accent/50 font-bold uppercase tracking-widest">{item.location} Corridor</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">{item.topic}</h3>
                 </div>
                 <p className="text-white/40 text-sm leading-relaxed font-light line-clamp-2">
                    {item.summary}
                 </p>
              </div>

              <div className="pt-6 border-t border-white/5 space-y-4">
                 <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.2em]">
                    <span className="text-white/30">ROI Forecast</span>
                    <span className="text-accent">{item.roi_forecast}</span>
                 </div>
                 <div className="flex flex-wrap gap-2 text-[10px] text-white/40 font-medium italic">
                    {item.infrastructure_boosts.map((boost, bi) => (
                       <span key={bi} className="px-3 py-1 bg-white/5 rounded-full"># {boost}</span>
                    ))}
                 </div>
              </div>
           </div>
        </motion.div>
      ))}
    </div>
  );
}
