"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useModal } from "@/lib/modal-context";
import { Maximize2, MapPin, CheckCircle2, Lock, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type PlotStatus = "available" | "sold" | "hold";

interface Plot {
  id: string;
  x: number; // Left percentage
  y: number; // Top percentage
  status: PlotStatus;
  size: string;
  type: string;
}

// Temporary strategic grid for Masterplan. These coordinates simulate premium clusters.
const PLOT_DATA: Plot[] = [
  { id: "SV-101", x: 22, y: 35, status: "available", size: "2,500 sq.ft", type: "Premium Villa Plot" },
  { id: "SV-102", x: 28, y: 32, status: "sold", size: "2,500 sq.ft", type: "Premium Villa Plot" },
  { id: "SV-103", x: 34, y: 37, status: "available", size: "2,700 sq.ft", type: "Premium Villa Plot" },
  
  { id: "CX-201", x: 55, y: 60, status: "hold", size: "4,200 sq.ft", type: "Corner Estate" },
  { id: "CX-202", x: 62, y: 55, status: "available", size: "3,800 sq.ft", type: "Estate Plot" },
  
  { id: "G-305", x: 75, y: 40, status: "sold", size: "1,800 sq.ft", type: "Garden Facing" },
  { id: "G-306", x: 82, y: 42, status: "available", size: "1,800 sq.ft", type: "Garden Facing" },
  { id: "G-307", x: 78, y: 48, status: "available", size: "2,000 sq.ft", type: "Garden Facing" },
];

export default function InteractivePlotGrid({ imagePath, fallbackPath }: { imagePath: string, fallbackPath: string }) {
  const { openModal } = useModal();
  const [hoveredPlot, setHoveredPlot] = useState<Plot | null>(null);

  const handlePlotClick = (plot: Plot) => {
    if (plot.status === "sold") return; // Prevent clicking sold inventory
    
    openModal({
      title: `Enquire: ${plot.id}`,
      subtitle: `Secure this ${plot.type} (${plot.size}). Our team will confirm current availability and pricing.`,
      plotId: plot.id,
      source: "interactive-masterplan"
    });
  };

  const getStatusColor = (status: PlotStatus) => {
    switch (status) {
      case "available": return "bg-green-500 border-green-300 text-green-950";
      case "sold": return "bg-red-500 border-red-300 text-red-950";
      case "hold": return "bg-accent border-accent-hover text-dark";
    }
  };

  const getStatusIcon = (status: PlotStatus) => {
    switch (status) {
      case "available": return <CheckCircle2 size={12} />;
      case "sold": return <Lock size={12} />;
      case "hold": return <AlertCircle size={12} />;
    }
  };

  return (
    <div className="relative w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden border border-white/5 bg-black/50 select-none group">
      
      {/* Base Image */}
      <Image 
        src={imagePath} 
        alt="Interactive Masterplan"
        fill
        className="object-contain"
        onError={(e) => { e.currentTarget.src = fallbackPath; }}
      />
      
      {/* SVG Overlay / Grid Pins */}
      <div className="absolute inset-0 z-10">
        {PLOT_DATA.map((plot) => (
          <button
            key={plot.id}
            onMouseEnter={() => setHoveredPlot(plot)}
            onMouseLeave={() => setHoveredPlot(null)}
            onClick={() => handlePlotClick(plot)}
            className={cn(
              "absolute -translate-x-1/2 -translate-y-1/2 w-4 h-4 md:w-6 md:h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 cursor-pointer shadow-[0_0_15px_rgba(0,0,0,0.5)] z-20",
              getStatusColor(plot.status),
              plot.status === "sold" ? "opacity-50 cursor-not-allowed" : "hover:scale-125 hover:z-50 animate-pulse"
            )}
            style={{ left: `${plot.x}%`, top: `${plot.y}%` }}
          >
            {/* Inner dot */}
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-current rounded-full" />
          </button>
        ))}
      </div>

      {/* Floating Tooltip (Framer Motion) */}
      <AnimatePresence>
        {hoveredPlot && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.15 } }}
            className="absolute z-50 pointer-events-none bg-black/90 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-2xl min-w-[200px]"
            style={{ 
              left: `calc(${hoveredPlot.x}% + 20px)`, 
              top: `calc(${hoveredPlot.y}% - 40px)`,
              // Boundary logic to prevent tooltip clipping on right edge
              transform: hoveredPlot.x > 70 ? 'translateX(-100%)' : 'translateX(0)'
            }}
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-4">
                <span className="font-bold text-white tracking-widest">{hoveredPlot.id}</span>
                <span className={cn(
                    "text-[9px] uppercase tracking-widest font-black flex items-center gap-1 px-2 py-0.5 rounded-full",
                    hoveredPlot.status === 'available' ? 'bg-green-500/20 text-green-400' :
                    hoveredPlot.status === 'sold' ? 'bg-red-500/20 text-red-400' :
                    'bg-accent/20 text-accent'
                )}>
                  {getStatusIcon(hoveredPlot.status)}
                  {hoveredPlot.status}
                </span>
              </div>
              <div className="text-xs text-white/60 pt-2 border-t border-white/10 flex flex-col gap-1">
                <span className="flex items-center gap-2"><MapPin size={12} /> {hoveredPlot.type}</span>
                <span className="flex items-center gap-2"><Maximize2 size={12} /> {hoveredPlot.size}</span>
              </div>
              {hoveredPlot.status !== "sold" && (
                <div className="text-[10px] text-accent mt-2 animate-pulse font-bold tracking-widest">
                  Click to Enquire &rarr;
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Instructional Overlay (Fades out on hover) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-0 pointer-events-none opacity-50 group-hover:opacity-0 transition-opacity duration-500 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 flex items-center gap-2">
         <MapPin size={14} className="text-accent" />
         <span className="text-[10px] uppercase tracking-widest font-bold">Hover over pins to view live inventory</span>
      </div>
    </div>
  );
}
