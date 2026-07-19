"use client";

import { motion } from "framer-motion";
import { priceComparison } from "@/data/apartments";
import { cn } from "@/lib/utils";
import { TrendingUp, AlertCircle } from "lucide-react";

export default function ApartmentPriceMatrix() {
  return (
    <section className="py-24 bg-[#050505] text-white relative" id="price-matrix">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C9A227]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C9A227]/30 bg-[#C9A227]/10 text-[#C9A227] text-[10px] uppercase tracking-[0.3em] mb-6"
            >
              <TrendingUp size={12} />
              Investment Intelligence
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl mb-6"
            >
              Strategic Price <span className="text-[#C9A227]">Advantage</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-obsidian rounded-[2.5rem] border border-white/10 overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="p-6 text-xs uppercase tracking-widest text-white/60 font-medium">Location</th>
                    <th className="p-6 text-xs uppercase tracking-widest text-white/60 font-medium">2BHK Avg Rate (₹/sq.ft)</th>
                    <th className="p-6 text-xs uppercase tracking-widest text-white/60 font-medium">3BHK Avg Rate (₹/sq.ft)</th>
                    <th className="p-6 text-xs uppercase tracking-widest text-white/60 font-medium">Market Status</th>
                  </tr>
                </thead>
                <tbody>
                  {priceComparison.locations.map((loc, idx) => {
                    const isMagnacity = loc.name === "Kumar Magnacity";
                    return (
                      <tr 
                        key={idx}
                        className={cn(
                          "border-b border-white/5 transition-colors",
                          isMagnacity ? "bg-[#C9A227]/10 relative" : "hover:bg-white/5"
                        )}
                      >
                        <td className="p-6">
                          <div className="flex items-center gap-3">
                            <span className={cn("font-medium", isMagnacity ? "text-[#C9A227]" : "text-white")}>
                              {loc.name}
                            </span>
                            {isMagnacity && (
                              <span className="px-2 py-1 rounded text-[9px] uppercase tracking-wider bg-[#C9A227] text-dark font-bold">
                                Value Pick
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="p-6 font-mono text-sm">
                          ₹{loc.avgRate2BHK.toLocaleString('en-IN')}
                        </td>
                        <td className="p-6 font-mono text-sm">
                          ₹{loc.avgRate3BHK.toLocaleString('en-IN')}
                        </td>
                        <td className="p-6">
                          <span className={cn(
                            "text-xs px-3 py-1 rounded-full border",
                            isMagnacity ? "border-[#C9A227] text-[#C9A227]" : "border-white/20 text-white/60"
                          )}>
                            {loc.status}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="p-6 bg-[#C9A227]/5 border-t border-[#C9A227]/20 flex gap-4 items-start">
              <AlertCircle className="text-[#C9A227] shrink-0 mt-0.5" size={20} />
              <p className="text-sm text-white/80 leading-relaxed">
                {priceComparison.insight}
              </p>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
