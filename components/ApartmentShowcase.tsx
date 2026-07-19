"use client";

import { useState, useRef, MouseEvent } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { apartmentTypes, calculateEMI } from "@/data/apartments";
import { useModal } from "@/lib/modal-context";
import { cn } from "@/lib/utils";
import { ChevronRight, IndianRupee, Ruler, Calendar, ShieldCheck, Target, Sparkles } from "lucide-react";

function TiltCard({ children, className }: { children: React.ReactNode, className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={cn("relative group perspective-1000", className)}
    >
      {/* Glare effect */}
      <motion.div
        style={{ left: glareX, top: glareY }}
        className="absolute w-40 h-40 -ml-20 -mt-20 bg-white/20 blur-[60px] rounded-full pointer-events-none z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay"
      />
      {children}
    </motion.div>
  );
}

export default function ApartmentShowcase() {
  const [activeTab, setActiveTab] = useState<0 | 1>(0);
  const [emiTenure, setEmiTenure] = useState<number>(20);
  const { openModal } = useModal();
  
  const currentApt = apartmentTypes[activeTab];
  const loanAmount = currentApt.priceFrom * 0.8;
  const monthlyEmi = calculateEMI(loanAmount, 8.5, emiTenure);

  return (
    <section className="py-24 bg-dark text-white overflow-hidden relative" id="apartments">
      {/* Background Ambient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(201,162,39,0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C9A227]/30 bg-[#C9A227]/10 text-[#C9A227] text-[10px] uppercase tracking-[0.3em] mb-6 shadow-[0_0_30px_rgba(201,162,39,0.2)]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227] animate-pulse-slow shadow-[0_0_10px_rgba(201,162,39,1)]"></span>
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
          <div className="p-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl inline-flex shadow-2xl relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] animate-[shimmer_2s_infinite]" />
            {apartmentTypes.map((apt, idx) => (
              <button
                key={apt.type}
                onClick={() => setActiveTab(idx as 0 | 1)}
                className={cn(
                  "px-8 py-3 rounded-full text-sm font-medium transition-all duration-500 relative z-10",
                  activeTab === idx ? "bg-[#C9A227] text-dark shadow-[0_0_30px_rgba(201,162,39,0.5)] scale-105" : "text-white/70 hover:text-white hover:bg-white/5"
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
            initial={{ opacity: 0, y: 30, scale: 0.98, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -30, scale: 0.98, filter: "blur(10px)" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="grid lg:grid-cols-12 gap-8"
          >
            {/* Left Column - Stats & Details */}
            <div className="lg:col-span-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                
                {/* Main Stat Card with 3D Tilt */}
                <TiltCard>
                  <div className="glass-obsidian rounded-[2.5rem] p-8 border border-white/10 h-full overflow-hidden relative shadow-2xl transform-gpu" style={{ transform: "translateZ(30px)" }}>
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none text-[#C9A227]">
                      <Ruler size={140} />
                    </div>
                    <p className="text-white/50 text-xs uppercase tracking-widest mb-2 font-bold flex items-center gap-2">
                       <Sparkles size={12} className="text-[#C9A227]" />
                       Carpet Area
                    </p>
                    <div className="flex items-baseline gap-2 mb-8">
                      <span className="text-7xl font-heading font-bold text-[#C9A227] drop-shadow-[0_0_15px_rgba(201,162,39,0.3)]">{currentApt.carpetArea}</span>
                      <span className="text-white/60 text-lg">{currentApt.carpetAreaUnit}</span>
                    </div>
                    <div className="space-y-5">
                      <div className="flex items-center gap-4 text-sm group/item hover:bg-white/5 p-2 -ml-2 rounded-xl transition-colors">
                        <div className="w-8 h-8 rounded-full bg-[#C9A227]/10 flex items-center justify-center shrink-0 border border-[#C9A227]/20">
                           <IndianRupee className="text-[#C9A227]" size={14} />
                        </div>
                        <span className="font-bold text-lg">₹{(currentApt.priceFrom / 100000).toFixed(2)}L - ₹{(currentApt.priceTo / 100000).toFixed(2)}L</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm group/item hover:bg-white/5 p-2 -ml-2 rounded-xl transition-colors">
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                           <ShieldCheck className="text-white/60" size={14} />
                        </div>
                        <span className="text-white/80">RERA: {currentApt.rera}</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm group/item hover:bg-white/5 p-2 -ml-2 rounded-xl transition-colors">
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                           <Calendar className="text-white/60" size={14} />
                        </div>
                        <span className="text-white/80">Possession: {currentApt.possession}</span>
                      </div>
                    </div>
                  </div>
                </TiltCard>

                {/* EMI Calculator */}
                <TiltCard>
                  <div className="glass-obsidian rounded-[2.5rem] p-8 border border-white/10 h-full shadow-2xl relative" style={{ transform: "translateZ(20px)" }}>
                    <p className="text-white/50 text-xs uppercase tracking-widest mb-6 font-bold flex items-center gap-2">
                      EMI Calculator
                    </p>
                    <div className="mb-8 p-6 rounded-2xl bg-gradient-to-br from-black/40 to-black/10 border border-white/5 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A227]/5 blur-2xl rounded-full" />
                      <div className="text-4xl md:text-5xl font-heading font-bold text-white mb-2 relative z-10">
                        <span className="text-[#C9A227]">₹</span>{monthlyEmi.toLocaleString('en-IN')}
                      </div>
                      <p className="text-xs text-white/40 uppercase tracking-wider relative z-10">Monthly at 8.5% (80% LTV)</p>
                    </div>
                    
                    <div className="space-y-4">
                      <p className="text-[10px] text-white/50 uppercase tracking-widest font-bold">Select Tenure</p>
                      <div className="grid grid-cols-4 gap-2">
                        {[10, 15, 20, 25].map(year => (
                          <button
                            key={year}
                            onClick={() => setEmiTenure(year)}
                            className={cn(
                              "py-3 text-xs rounded-xl border transition-all duration-300 font-bold font-sans",
                              emiTenure === year 
                                ? "border-[#C9A227] bg-[#C9A227] text-dark shadow-[0_10px_20px_rgba(201,162,39,0.3)] scale-105" 
                                : "border-white/10 hover:border-white/30 text-white/60 bg-white/5 hover:bg-white/10"
                            )}
                          >
                            {year}Y
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </div>

              {/* Highlights */}
              <motion.div 
                className="glass-obsidian rounded-[2.5rem] p-8 border border-white/10 relative overflow-hidden"
              >
                <div className="absolute right-0 bottom-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
                <p className="text-white/50 text-xs uppercase tracking-widest mb-6 font-bold">Key Highlights</p>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 relative z-10">
                  {currentApt.highlights.map((highlight, idx) => (
                    <motion.div 
                      key={idx} 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 + 0.3 }}
                      className="flex items-start gap-3 group/hi"
                    >
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C9A227] shrink-0 group-hover/hi:scale-150 transition-transform shadow-[0_0_8px_rgba(201,162,39,0.8)]" />
                      <p className="text-sm text-white/70 group-hover/hi:text-white transition-colors">{highlight}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column - Ideal For & CTA */}
            <div className="lg:col-span-4 space-y-6">
              <TiltCard className="h-full">
                <div className="glass-obsidian rounded-[2.5rem] p-8 border border-[#C9A227]/30 bg-gradient-to-b from-[#C9A227]/10 to-transparent h-full flex flex-col relative" style={{ transform: "translateZ(40px)" }}>
                  <div className="absolute inset-0 bg-[url('/assets/noise.png')] opacity-10 mix-blend-overlay rounded-[2.5rem]" />
                  <div className="flex items-center gap-3 mb-8 relative z-10">
                    <div className="w-10 h-10 rounded-full bg-[#C9A227]/20 flex items-center justify-center border border-[#C9A227]/30">
                       <Target className="text-[#C9A227]" size={20} />
                    </div>
                    <p className="text-white text-xs uppercase tracking-widest font-bold">Ideal For</p>
                  </div>
                  <div className="space-y-3 mb-auto relative z-10">
                    {currentApt.idealFor.map((persona, idx) => (
                      <motion.div 
                        key={idx} 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 + 0.4 }}
                        className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-sm text-white/80 hover:bg-white/5 transition-colors flex items-center gap-3"
                      >
                        <div className="w-1 h-1 rounded-full bg-white/30" />
                        {persona}
                      </motion.div>
                    ))}
                  </div>
                  
                  <button 
                    onClick={() => openModal({ title: `Explore ${currentApt.type} Availability`, source: 'ApartmentShowcase' })}
                    className="w-full mt-8 py-5 rounded-2xl bg-[#C9A227] text-dark font-black tracking-widest uppercase hover:bg-white transition-all duration-500 flex items-center justify-center gap-3 group relative overflow-hidden z-10 shadow-[0_15px_40px_rgba(201,162,39,0.4)] hover:shadow-[0_20px_50px_rgba(255,255,255,0.4)] hover:scale-105 active:scale-95"
                  >
                    <span className="relative z-10">Enquire Now</span>
                    <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform relative z-10" />
                    <div className="absolute inset-0 bg-white/40 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
                  </button>
                </div>
              </TiltCard>
            </div>

          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
