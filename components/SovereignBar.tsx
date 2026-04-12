"use client";

import { useState, useEffect } from "react";
import { useModal } from "@/lib/modal-context";
import { Phone, MessageSquare, LayoutGrid } from "lucide-react";
import { cn } from "@/lib/utils";

export default function SovereignBar() {
  const { openModal } = useModal();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className={cn(
        "fixed bottom-0 left-0 w-full z-[10001] md:hidden transition-all duration-500",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      )}
    >
      <div className="bg-dark/80 backdrop-blur-3xl border-t border-white/10 py-5 px-6 flex items-center justify-between gap-4 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        <a 
          href="tel:+917744009295"
          className="flex-1 flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white py-4 rounded-xl font-bold uppercase tracking-[0.1em] text-[10px] active:scale-95 transition-all"
        >
          <Phone size={14} className="text-accent" />
          Call
        </a>
        <button 
          onClick={() => openModal({ title: "Priority Mobile Enquiry", source: "Sovereign Bar Mobile" })}
          className="flex-1 flex items-center justify-center gap-2 bg-primary text-white py-4 rounded-xl font-bold uppercase tracking-[0.1em] text-[10px] active:scale-95 transition-all shadow-xl"
        >
           <LayoutGrid size={14} className="text-accent" />
           Inquire
        </button>
        <a 
          href="https://wa.me/917744009295?text=Hi!%20Interested%20in%20Kumar%20Magnacity%20Bungalow%20Plots."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 rounded-xl font-bold uppercase tracking-[0.1em] text-[10px] active:scale-95 transition-all shadow-lg"
        >
          <MessageSquare size={14} />
          Chat
        </a>
      </div>

    </div>
  );
}
