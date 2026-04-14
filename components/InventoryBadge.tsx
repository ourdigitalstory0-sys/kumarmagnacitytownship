"use client";

import { AlertTriangle, CheckCircle2, Flame, ShieldCheck } from "lucide-react";
import inventory from "@/data/inventory.json";
import { cn } from "@/lib/utils";

export default function InventoryBadge({ text }: { text?: string }) {
  const availableCount = inventory.plots.filter(p => p.status === "available" || p.status === "fast-selling").length;
  const isFastSelling = inventory.plots.filter(p => p.status === "fast-selling").length > 0;

  if (availableCount === 0 && !text) return null;

  return (
    <div className="flex flex-wrap gap-4">
      <div className={cn(
        "inline-flex items-center gap-2.5 px-4 py-2 rounded-full border font-bold text-[10px] md:text-[11px] uppercase tracking-[0.15em] transition-all animate-float",
        availableCount < 10 
          ? "bg-red-500/10 border-red-500/20 text-red-500 shadow-[0_0_30px_rgba(239,68,68,0.2)]" 
          : "bg-accent/10 border-accent/20 text-accent shadow-[0_0_30px_rgba(197,160,89,0.2)]"
      )}>
        <AlertTriangle size={14} className="animate-pulse" />
        {text || (availableCount < 10 ? `Extremely Limited: ${availableCount} ESTATE PLOTS LEFT` : `${availableCount} PLOTS AVAILABLE`)}
      </div>

      {isFastSelling && (
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border border-[#F97316]/20 text-[#F97316] font-bold text-[10px] md:text-[11px] uppercase tracking-[0.15em] shadow-[0_0_30px_rgba(249,115,22,0.1)]">
          <Flame size={14} />
          Fast Selling
        </div>
      )}

      <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-[10px] md:text-[11px] uppercase tracking-[0.15em] shadow-[0_0_30px_rgba(10,77,60,0.15)]">
        <ShieldCheck size={14} className="text-accent" />
        RERA VERIFIED ESTATE
      </div>
    </div>
  );
}
