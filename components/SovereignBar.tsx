"use client";

import { useState, useEffect } from "react";
import { useModal } from "@/lib/modal-context";
import { Phone, MessageSquare, LayoutGrid } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export default function SovereignBar() {
  const { openModal } = useModal();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show earlier on mobile for friction-free access
      setIsVisible(window.scrollY > 150);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: 100, x: "-50%", opacity: 0 }}
          animate={{ y: 0, x: "-50%", opacity: 1 }}
          exit={{ y: 100, x: "-50%", opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[10001] md:hidden w-[92%] max-w-[400px]"
        >
          <div className="bg-dark/80 backdrop-blur-2xl border border-white/10 p-2 rounded-[2rem] flex items-center justify-between gap-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)] ring-1 ring-white/5">
            <a 
              href="tel:+917744009295"
              className="flex-1 flex flex-col items-center justify-center gap-1 bg-white/5 text-white py-3 rounded-[1.5rem] active:scale-95 transition-all"
            >
              <Phone size={14} className="text-accent" />
              <span className="text-[8px] font-bold uppercase tracking-widest">Call</span>
            </a>
            
            <button 
              onClick={() => openModal({ title: "Priority Briefing", source: "Dynamic Island Mobile" })}
              className="flex-[1.5] flex flex-col items-center justify-center gap-1 bg-primary text-white py-3 rounded-[1.5rem] active:scale-95 transition-all shadow-xl relative overflow-hidden group"
            >
               {/* Pulse effect */}
               <div className="absolute inset-0 bg-white/10 animate-pulse" />
               <LayoutGrid size={16} className="text-accent relative z-10" />
               <span className="text-[9px] font-bold uppercase tracking-[0.2em] relative z-10">Inquire</span>
            </button>
            
            <a 
              href="https://wa.me/917744009295?text=Hi!%20I%20want%20the%20brochure%20and%20price%20list%20for%20Kumar%20Magnacity."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex flex-col items-center justify-center gap-1 bg-[#25D366]/20 text-[#25D366] py-3 rounded-[1.5rem] active:scale-95 transition-all border border-[#25D366]/10"
            >
              <MessageSquare size={14} />
              <span className="text-[8px] font-bold uppercase tracking-widest">Chat</span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
