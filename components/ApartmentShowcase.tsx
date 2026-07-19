"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { apartmentTypes, calculateEMI } from "@/data/apartments";
import { useModal } from "@/lib/modal-context";
import { cn } from "@/lib/utils";
import { ChevronRight, IndianRupee, Ruler, Calendar, ShieldCheck, Target } from "lucide-react";

export default function ApartmentShowcase() {
  const [activeTab, setActiveTab] = useState<0 | 1>(0);
  const [emiTenure, setEmiTenure] = useState<number>(20); // default 20 years
  const { openModal } = useModal();
  
  const currentApt = apartmentTypes[activeTab];
  const loanAmount = currentApt.priceFrom * 0.8; // Assuming 80% loan
  const monthlyEmi = calculateEMI(loanAmount, 8.5, emiTenure); // 8.5% interest

  return (
    <section className="py-24 bg-dark text-white overflow-hidden" id="apartments">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C9A227]/30 bg-[#C9A227]/10 text-[#C9A227] text-[10px] uppercase tracking-[0.3em] mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227] animate-pulse-slow"></span>
            Premium Residences
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-5xl md:text-7xl mb-6"
          >
            The Art of <span className="text-[#C9A227]">Living</span>
          </motion.h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="p-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md inline-flex">
            {apartmentTypes.map((apt, idx) => (
              <button
                key={apt.type}
                onClick={() => setActiveTab(idx as 0 | 1)}
                className={cn(
                  "px-8 py-3 rounded-full text-sm font-medium transition-all duration-300",
                  activeTab === idx ? "bg-[#C9A227] text-dark shadow-[0_0_20px_rgba(201,162,39,0.3)]" : "text-white/70 hover:text-white"
                )}
              >
                {apt.type}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-12 gap-8"
          >
            {/* Left Column - Stats & Details */}
            <div className="lg:col-span-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                
                {/* Main Stat Card */}
                <div className="glass-obsidian rounded-[2.5rem] p-8 border border-white/10 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Ruler size={100} />
                  </div>
                  <p className="text-white/60 text-sm uppercase tracking-widest mb-2">Carpet Area</p>
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-6xl font-heading text-[#C9A227]">{currentApt.carpetArea}</span>
                    <span className="text-white/60">{currentApt.carpetAreaUnit}</span>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-sm">
                      <IndianRupee className="text-[#C9A227]" size={18} />
                      <span>{currentApt.priceUnit}{(currentApt.priceFrom / 10000000).toFixed(2)} Cr - {(currentApt.priceTo / 10000000).toFixed(2)} Cr</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <ShieldCheck className="text-[#C9A227]" size={18} />
                      <span>RERA: {currentApt.rera}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Calendar className="text-[#C9A227]" size={18} />
                      <span>Possession: {currentApt.possession}</span>
                    </div>
                  </div>
                </div>

                {/* EMI Calculator */}
                <div className="glass-obsidian rounded-[2.5rem] p-8 border border-white/10">
                  <p className="text-white/60 text-sm uppercase tracking-widest mb-6">EMI Calculator</p>
                  <div className="mb-6">
                    <div className="text-4xl font-heading text-white mb-1">
                      ₹{monthlyEmi.toLocaleString('en-IN')}
                      <span className="text-sm font-sans text-white/50 ml-2">/ month</span>
                    </div>
                    <p className="text-xs text-[#C9A227]">Estimated at 8.5% interest (80% loan)</p>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-xs text-white/60">Select Tenure (Years)</p>
                    <div className="flex gap-2">
                      {[10, 15, 20, 25].map(year => (
                        <button
                          key={year}
                          onClick={() => setEmiTenure(year)}
                          className={cn(
                            "flex-1 py-2 text-xs rounded-xl border transition-colors",
                            emiTenure === year 
                              ? "border-[#C9A227] bg-[#C9A227]/10 text-[#C9A227]" 
                              : "border-white/10 hover:border-white/30 text-white/60"
                          )}
                        >
                          {year}Y
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="glass-obsidian rounded-[2.5rem] p-8 border border-white/10">
                <p className="text-white/60 text-sm uppercase tracking-widest mb-6">Key Highlights</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {currentApt.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#C9A227] shrink-0" />
                      <p className="text-sm text-white/80">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Ideal For & CTA */}
            <div className="lg:col-span-4 space-y-6">
              <div className="glass-obsidian rounded-[2.5rem] p-8 border border-[#C9A227]/30 bg-gradient-to-b from-[#C9A227]/10 to-transparent">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="text-[#C9A227]" size={24} />
                  <p className="text-white text-sm uppercase tracking-widest">Ideal For</p>
                </div>
                <div className="space-y-4 mb-8">
                  {currentApt.idealFor.map((persona, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/5 text-sm">
                      {persona}
                    </div>
                  ))}
                </div>
                
                <button 
                  onClick={openModal}
                  className="w-full py-4 rounded-2xl bg-[#C9A227] text-dark font-medium hover:bg-white transition-colors duration-300 flex items-center justify-center gap-2 group"
                >
                  Enquire Now
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
