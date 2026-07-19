"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { apartmentTypes } from "@/data/apartments";
import { cn } from "@/lib/utils";
import { Compass, Maximize2, Layers } from "lucide-react";

export default function FloorPlanViewer() {
  const [activeType, setActiveType] = useState<0 | 1>(0);
  const currentPlan = apartmentTypes[activeType];

  return (
    <section className="py-24 bg-dark text-white relative overflow-hidden" id="floor-plans">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C9A227]/30 bg-[#C9A227]/10 text-[#C9A227] text-[10px] uppercase tracking-[0.3em] mb-6"
            >
              <Layers size={12} />
              Spatial Design
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-heading text-5xl md:text-6xl"
            >
              Master <span className="text-[#C9A227]">Layouts</span>
            </motion.h2>
          </div>
          
          <div className="p-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md inline-flex">
            {apartmentTypes.map((apt, idx) => (
              <button
                key={apt.type}
                onClick={() => setActiveType(idx as 0 | 1)}
                className={cn(
                  "px-8 py-3 rounded-full text-sm font-medium transition-all duration-300",
                  activeType === idx ? "bg-white text-dark shadow-lg" : "text-white/70 hover:text-white"
                )}
              >
                {apt.type}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Abstract Floor Plan Visualization */}
          <div className="lg:col-span-8">
            <div className="glass-obsidian rounded-[2.5rem] p-8 border border-white/10 h-full min-h-[500px] relative flex flex-col">
              
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-2xl font-heading mb-2">{currentPlan.type} Premium</h3>
                  <p className="text-[#C9A227]">{currentPlan.carpetArea} {currentPlan.carpetAreaUnit}</p>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/50">
                  <Compass size={24} />
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeType}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="flex-1 w-full grid gap-4 p-4 rounded-3xl bg-white/5 border border-white/5"
                  style={{
                    gridTemplateColumns: activeType === 0 ? "repeat(2, 1fr)" : "repeat(3, 1fr)",
                    gridTemplateRows: "repeat(2, 1fr)",
                  }}
                >
                  {currentPlan.rooms.map((room, idx) => (
                    <div 
                      key={idx}
                      className={cn(
                        "group relative rounded-2xl border border-white/10 bg-black/40 p-4 transition-all hover:bg-[#C9A227]/20 hover:border-[#C9A227]/50 overflow-hidden",
                        idx === 0 && "col-span-full md:col-span-2 row-span-1"
                      )}
                    >
                      <div className="relative z-10 h-full flex flex-col justify-between">
                        <div>
                          <p className="text-sm font-medium text-white group-hover:text-[#C9A227] transition-colors">{room.name}</p>
                          <p className="text-xs text-white/50 font-mono mt-1">{room.area}</p>
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0">
                          <p className="text-[10px] text-white/70 uppercase tracking-wider">{room.flooring}</p>
                        </div>
                      </div>
                      
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Maximize2 size={16} className="text-[#C9A227]" />
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>

            </div>
          </div>

          {/* Room Details List */}
          <div className="lg:col-span-4 space-y-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeType}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
                className="h-full flex flex-col gap-4"
              >
                {currentPlan.rooms.map((room, idx) => (
                  <div key={idx} className="glass-obsidian rounded-2xl p-5 border border-white/5 hover:border-white/20 transition-colors">
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="font-medium text-white/90">{room.name}</h4>
                      <span className="text-xs font-mono text-[#C9A227]">{room.area}</span>
                    </div>
                    <ul className="space-y-2">
                      {room.features.slice(0, 2).map((feature, fIdx) => (
                        <li key={fIdx} className="text-sm text-white/60 flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-white/30 mt-2 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
