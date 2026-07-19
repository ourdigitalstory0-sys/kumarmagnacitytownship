"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Layers, Maximize2, X, Download } from "lucide-react";

const LAYOUT_TABS = [
  {
    id: "master",
    title: "Master Plan",
    description: "The 150-acre township vision detailing road networks, green zones, and plotting sectors.",
    imagePath: "/assets/master-layout.jpg", // Placeholder expected
    fallbackPath: "/assets/plot-layout.jpg"
  },
  {
    id: "township",
    title: "Township Layout",
    description: "Zonal demarcations including residential, commercial, and premium amenity hubs.",
    imagePath: "/assets/township-layout.jpg", // Placeholder expected
    fallbackPath: "/assets/plot-layout.jpg"
  },
  {
    id: "2bhk",
    title: "2BHK Floor Plan",
    description: "757 sq.ft premium spatial design optimized for growing families.",
    imagePath: "/assets/2bhk-floor-plan.jpg", // Placeholder expected
    fallbackPath: "/assets/plot-layout.jpg"
  },
  {
    id: "3bhk",
    title: "3BHK Floor Plan",
    description: "1053 sq.ft expansive luxury layout with grand balconies and corner views.",
    imagePath: "/assets/3bhk-floor-plan.jpg", // Placeholder expected
    fallbackPath: "/assets/plot-layout.jpg"
  }
];

export default function InteractiveLayoutViewer() {
  const [activeTab, setActiveTab] = useState(LAYOUT_TABS[0].id);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const activeData = LAYOUT_TABS.find(t => t.id === activeTab) || LAYOUT_TABS[0];

  // Helper to handle fallback images gracefully
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = activeData.fallbackPath;
  };

  return (
    <section className="py-24 bg-dark text-white relative overflow-hidden" id="floor-plans">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header & Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 text-accent text-[10px] uppercase tracking-[0.3em]"
            >
              <Layers size={14} />
              Spatial Intelligence
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-heading text-4xl md:text-6xl font-bold leading-tight"
            >
              Master <span className="text-accent italic">Layouts</span>
            </motion.h2>
          </div>
          
          <div className="p-1.5 rounded-2xl md:rounded-full border border-white/10 bg-white/5 backdrop-blur-md inline-flex flex-wrap gap-1">
            {LAYOUT_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "px-6 py-3 rounded-xl md:rounded-full text-[11px] md:text-sm font-bold uppercase tracking-wider transition-all duration-300",
                  activeTab === tab.id ? "bg-accent text-dark shadow-lg" : "text-white/60 hover:text-white hover:bg-white/5"
                )}
              >
                {tab.title}
              </button>
            ))}
          </div>
        </div>

        {/* Visual Display */}
        <div className="glass-obsidian rounded-[3rem] p-6 md:p-12 border border-white/10 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col gap-8"
            >
              {/* Context Text */}
              <div className="max-w-3xl">
                <h3 className="text-2xl font-bold text-white">{activeData.title}</h3>
                <p className="text-white/50 mt-2">{activeData.description}</p>
              </div>

              {/* Image Container */}
              <div 
                className="relative w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden cursor-zoom-in group border border-white/5 bg-black/50"
                onClick={() => setLightboxImage(activeData.imagePath)}
              >
                <img 
                  src={activeData.imagePath} 
                  onError={handleImageError}
                  alt={activeData.title} 
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-16 h-16 rounded-full bg-accent text-dark flex items-center justify-center">
                      <Maximize2 size={24} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-white drop-shadow-md">Click to Enlarge</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-8"
            onClick={() => setLightboxImage(null)}
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-50 border border-white/10"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxImage(null);
              }}
            >
              <X size={24} />
            </button>

            {/* Download Button */}
            <a 
              href={lightboxImage}
              download
              className="absolute top-6 right-24 w-12 h-12 bg-accent hover:bg-white rounded-full flex items-center justify-center text-dark transition-colors z-50 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Download size={20} />
            </a>

            {/* Image */}
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={lightboxImage}
              onError={(e) => { e.currentTarget.src = "/assets/plot-layout.jpg"; }}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              alt="Enlarged Layout"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
