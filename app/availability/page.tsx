"use client";

import PillarTemplate from "@/components/PillarTemplate";
import EnquiryForm from "@/components/EnquiryForm";
import InventoryBadge from "@/components/InventoryBadge";
import Link from "next/link";
import { Info, ShieldCheck, Map, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AvailabilityPage() {
  const plots = [
    { id: "P-101", status: "Available", size: "3200 Sq.ft" },
    { id: "P-102", status: "Available", size: "3200 Sq.ft" },
    { id: "P-103", status: "Reserved", size: "3500 Sq.ft" },
    { id: "P-104", status: "Available", size: "3200 Sq.ft" },
    { id: "P-105", status: "Available", size: "3200 Sq.ft" },
    { id: "P-201", status: "Available", size: "4000 Sq.ft" },
    { id: "P-202", status: "Reserved", size: "4000 Sq.ft" },
    { id: "P-203", status: "Available", size: "4500 Sq.ft" },
    { id: "P-204", status: "Available", size: "4000 Sq.ft" },
    { id: "P-205", status: "Sold Out", size: "4000 Sq.ft" },
  ];

  return (
    <PillarTemplate 
      title="Real-Time Plot Availability" 
      subtitle="Exclusive NA Bungalow Plots at Manjari near Hadapsar. Hover over the plots below to check dimensions and current booking status."
      badge="Project Inventory"
    >
      <div className="space-y-32">
        {/* Interactive Grid Section */}
        <div className="space-y-12">
           <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-dark/5 pb-12">
              <div className="space-y-4">
                 <h2 className="text-4xl md:text-6xl font-heading font-bold text-dark">Phase 1 Status</h2>
                 <p className="text-dark/40 font-light text-xl max-w-xl">
                    High-demand east-facing inventory. Each plot at <span className="text-primary font-medium">Kumar Magnacity</span> is RERA-compliant.
                 </p>
              </div>
              <div className="flex items-center gap-4 bg-white shadow-xl p-4 rounded-3xl border border-dark/5 animate-float">
                 <InventoryBadge text="Only 4 plots left in Phase 1!" />
              </div>
           </div>

           {/* Plot Grid Engineering */}
           <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8">
              {plots.map((plot) => (
                <div 
                  key={plot.id} 
                  className={cn(
                    "relative aspect-square rounded-[2rem] p-6 flex flex-col items-center justify-center gap-3 transition-all duration-500 group border cursor-default",
                    plot.status === "Available" ? "bg-primary/20 border-primary/20 hover:bg-primary/30 hover:scale-105 hover:shadow-2xl" : 
                    plot.status === "Reserved" ? "bg-accent/10 border-accent/20 opacity-60" :
                    "bg-dark/5 border-dark/5 opacity-40 grayscale"
                  )}
                >
                   <span className="text-lg md:text-2xl font-bold tracking-tighter text-dark">{plot.id}</span>
                   <span className={cn(
                     "text-[8px] md:text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full",
                     plot.status === "Available" ? "bg-primary/20 text-primary" : 
                     plot.status === "Reserved" ? "bg-accent/20 text-accent" : 
                     "bg-dark/10 text-dark/40"
                   )}>
                     {plot.status}
                   </span>
                   
                   {/* Tooltip Simulation */}
                   <div className="absolute inset-0 bg-dark/95 backdrop-blur-xl rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-center gap-2 pointer-events-none">
                      <div className="text-accent text-[8px] font-bold uppercase tracking-widest">Plot Size</div>
                      <div className="text-white text-lg font-heading font-bold">{plot.size}</div>
                      <div className="flex items-center gap-2 pt-2 text-[8px] text-white/50 uppercase font-bold tracking-widest border-t border-white/10">
                         <Map size={10} className="text-accent" />
                         East Facing
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>

        {/* Pricing & ROI Hub */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
           <div className="space-y-12">
              <div className="space-y-6">
                 <h3 className="text-4xl font-heading font-bold">Pricing Architecture</h3>
                 <p className="text-dark/60 leading-relaxed font-light text-lg">
                    Kumar Magnacity offers the highest value-to-cost ratio in <span className="text-primary font-medium">Manjari</span>. 
                    Invest in a lifestyle that appreciates at Pune East&apos;s fastest pace.
                 </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="p-8 rounded-[2.5rem] bg-white border border-dark/5 shadow-xl">
                    <ShieldCheck className="text-primary mb-4" size={32} />
                    <h5 className="font-bold text-lg">Clear Title</h5>
                    <p className="text-sm text-dark/40">Verified by leading legal experts.</p>
                 </div>
                 <div className="p-8 rounded-[2.5rem] bg-white border border-dark/5 shadow-xl">
                    <Info className="text-primary mb-4" size={32} />
                    <h5 className="font-bold text-lg">Plot Layout</h5>
                    <p className="text-sm text-dark/40">Optimized for maximum light & air.</p>
                 </div>
              </div>
           </div>

           <div className="bg-dark text-white p-12 md:p-20 rounded-[4rem] flex flex-col items-center justify-center text-center space-y-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10 translate-y-1/2 group-hover:translate-y-0 transition-transform duration-1000" />
              <div className="relative space-y-2">
                 <span className="text-accent uppercase font-bold tracking-[0.3em] text-[10px]">Investment Starts At</span>
                 <div className="text-5xl md:text-8xl font-heading font-bold text-white tracking-tighter">₹2.25Cr*</div>
                 <div className="flex items-center justify-center gap-3 pt-6">
                    <div className="w-12 h-[1px] bg-white/10" />
                    <span className="text-[9px] uppercase tracking-widest text-white/40">Exclusive of Govt Charges</span>
                    <div className="w-12 h-[1px] bg-white/10" />
                 </div>
              </div>
              <Link href="#contact" className="relative bg-accent text-dark px-10 py-5 rounded-full font-bold uppercase tracking-widest text-[11px] shadow-2xl hover:scale-110 active:scale-95 transition-all shine-effect">
                SECURE THIS PRICE
              </Link>
           </div>
        </div>

        {/* Dynamic Conversion Engine */}
        <div id="contact" className="bg-white rounded-[4rem] p-12 md:p-24 shadow-2xl border border-dark/5">
           <div className="max-w-2xl mx-auto text-center space-y-6 mb-16">
              <h3 className="text-4xl md:text-6xl font-heading font-bold">Request Private Inventory</h3>
              <p className="text-dark/40 text-lg font-light">Get the detailed PDF inventory list with specific plot dimensions and east-facing availability.</p>
           </div>
           <EnquiryForm 
             title="Download Inventory Suite" 
             subtitle="You will receive the pricing sheet and master plan on WhatsApp."
             buttonText="SEND DETAILS"
           />
        </div>
      </div>
    </PillarTemplate>
  );
}
