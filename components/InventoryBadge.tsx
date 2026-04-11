"use client";

import { AlertTriangle, CheckCircle2, Flame } from "lucide-react";
import inventory from "@/inventory.json";
import { cn } from "@/lib/utils";

export default function InventoryBadge({ text }: { text?: string }) {
  const availableCount = inventory.plots.filter(p => p.status === "available" || p.status === "fast-selling").length;
  const isFastSelling = inventory.plots.filter(p => p.status === "fast-selling").length > 0;


  if (availableCount === 0 && !text) return null;

  return (
    <div className="flex flex-wrap gap-3">
      <div className={cn(
        "inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border font-bold text-[10px] uppercase tracking-[0.1em] transition-all animate-pulse-subtle",
        availableCount < 10 
          ? "bg-red-500/10 border-red-500/20 text-red-500 shadow-[0_0_20px_rgba(239,68,68,0.1)]" 
          : "bg-accent/10 border-accent/20 text-accent shadow-[0_0_20px_rgba(201,162,39,0.1)]"
      )}>
        <AlertTriangle size={12} />
        {text || (availableCount < 10 ? `Extremely Limited: ${availableCount} Plots Left` : `${availableCount} Plots Available`)}
      </div>

      {isFastSelling && (
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-500 font-bold text-[10px] uppercase tracking-[0.1em] shadow-[0_0_20px_rgba(249,115,22,0.1)]">
          <Flame size={12} />
          Fast Selling
        </div>
      )}

      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 font-bold text-[10px] uppercase tracking-[0.1em] shadow-[0_0_20px_rgba(16,185,129,0.1)]">
        <CheckCircle2 size={12} />
        RERA Verified
      </div>
    </div>
  );
}
