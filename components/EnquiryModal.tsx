"use client";

import React, { useEffect, useState } from "react";
import { useModal } from "@/lib/modal-context";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldCheck, MapPin, MessageSquare } from "lucide-react";
import EnquiryForm from "./EnquiryForm";

export default function EnquiryModal() {
  const { isOpen, closeModal, modalData } = useModal();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[10001] flex items-center justify-center p-0 md:p-6 overflow-hidden">
          {/* Minimalist Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0 bg-dark/95 backdrop-blur-2xl"
          />

          {/* Modal Container - Streamlined Card / Mobile Bottom Sheet */}
          <motion.div
            initial={isMobile ? { y: "100%" } : { opacity: 0, scale: 0.95, y: 30 }}
            animate={isMobile ? { y: "10%" } : { opacity: 1, scale: 1, y: 0 }}
            exit={isMobile ? { y: "100%" } : { opacity: 0, scale: 0.95, y: 30 }}
            transition={{ type: "spring", damping: 30, stiffness: 250 }}
            className="relative w-full max-w-lg glass-obsidian border border-white/10 rounded-t-[3rem] md:rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] h-full md:h-auto"
          >
            {/* Mobile Grab Handle */}
            <div className="md:hidden w-full flex justify-center pt-4">
               <div className="w-12 h-1 bg-white/10 rounded-full" />
            </div>

            {/* Minimalist Header Section */}
            <div className="bg-gradient-to-br from-white/5 to-transparent p-8 md:p-12 pb-4 text-center">
              <button
                onClick={closeModal}
                className="absolute top-6 right-8 md:top-6 md:right-6 text-white/30 hover:text-white transition-colors p-2"
              >
                <X size={24} />
              </button>

              <div className="space-y-3">
                 <div className="w-12 h-12 bg-accent/20 rounded-2xl flex items-center justify-center text-accent mx-auto mb-6">
                    <ShieldCheck size={28} />
                 </div>
                 <h2 className="text-3xl md:text-3xl font-heading font-bold text-white tracking-tight">
                    {modalData.title || "The Sovereign Brief"}
                 </h2>
                 <p className="text-white/40 text-sm font-light leading-relaxed max-w-[280px] mx-auto">
                    {modalData.subtitle || "Enter your details for instant access to the inventory suite."}
                 </p>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 md:p-12 pt-4 pb-24 md:pb-12">
              <EnquiryForm 
                isModal={true}
                title="" // Handled by parent modal header
                subtitle=""
                formId={`modal-${modalData.plotId || 'general'}`}
                buttonText={modalData.plotId ? `Inquire for ${modalData.plotId}` : "Instant Connect"}
              />

              {/* Swift WhatsApp Option */}
              <div className="mt-8 pt-8 border-t border-white/5 text-center">
                 <p className="text-[10px] text-white/20 uppercase tracking-[0.3em] mb-6">Alternatively</p>
                 <a 
                   href={`https://wa.me/917744009295?text=${encodeURIComponent("Hi! I am interested in " + (modalData.plotId || "Kumar Magnacity") + ". Please share brochure and pricing.")}`}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex items-center justify-center gap-2 text-accent hover:text-white transition-colors text-sm font-bold uppercase tracking-widest"
                 >
                    <MessageSquare size={16} />
                    Chat Directly on WhatsApp
                 </a>
              </div>
            </div>

            {/* Bottom context marker */}
            <div className="hidden md:flex bg-white/[0.02] py-4 px-8 border-t border-white/5 justify-center items-center gap-3">
              <MapPin size={12} className="text-accent/40" />
              <span className="text-[9px] text-white/30 uppercase tracking-[0.2em] font-bold">150-Acre Master Sanctioned Township</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
