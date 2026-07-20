"use client";

import React, { useEffect, useState } from "react";
import { useModal } from "@/lib/modal-context";
import { useDataLayer } from "@/hooks/useDataLayer";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, MessageSquare } from "lucide-react";
import AdvancedEnquiryForm from "./AdvancedEnquiryForm";

export default function EnquiryModal() {
  const { isOpen, closeModal, modalData } = useModal();
  const [isMobile, setIsMobile] = useState(false);
  const { trackBeginCheckout } = useDataLayer();

  useEffect(() => {
    if (isOpen) {
      trackBeginCheckout(modalData.source || 'modal');
    }
  }, [isOpen, modalData.source, trackBeginCheckout]);

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

          {/* Modal Container */}
          <motion.div
            initial={isMobile ? { y: "100%" } : { opacity: 0, scale: 0.95, y: 30 }}
            animate={isMobile ? { y: "10%" } : { opacity: 1, scale: 1, y: 0 }}
            exit={isMobile ? { y: "100%" } : { opacity: 0, scale: 0.95, y: 30 }}
            transition={{ type: "spring", damping: 30, stiffness: 250 }}
            className="relative w-full max-w-2xl bg-[#0A0A0A] border border-white/10 rounded-t-[3rem] md:rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] h-full md:h-auto"
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-8 z-[100] text-white/30 hover:text-white transition-all p-2 bg-white/5 rounded-full"
            >
              <X size={20} />
            </button>

            {/* Content Section */}
            <div className="p-4 md:p-6">
              <AdvancedEnquiryForm 
                title={modalData.title || "The Sovereign Brief"}
                subtitle={modalData.subtitle || "Access the exclusive inventory suite and pre-launch pricing."}
                formId={`modal-${modalData.source || 'general'}`}
                plotId={modalData.plotId}
              />

              {/* Swift WhatsApp Option */}
              <div className="mt-8 pt-6 border-t border-white/5 text-center px-8 pb-8">
                 <p className="text-[10px] text-white/20 uppercase tracking-[0.3em] mb-4">Swift Connect</p>
                 <a 
                   href={`https://wa.me/917744009295?text=${encodeURIComponent("Hi! I am interested in " + (modalData.title || "Kumar Magnacity") + ". Please share brochure and pricing.")}`}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex items-center justify-center gap-2 text-accent hover:text-white transition-all text-sm font-bold uppercase tracking-widest"
                 >
                    <MessageSquare size={16} />
                    WhatsApp Intelligence Direct
                 </a>
              </div>
            </div>

            {/* Bottom context marker */}
            <div className="hidden md:flex bg-white/[0.02] py-4 px-8 border-t border-white/5 justify-center items-center gap-3">
              <MapPin size={12} className="text-accent/40" />
              <span className="text-[9px] text-white/40 uppercase tracking-[0.2em] font-bold">150-Acre Master Planned Sanctuary</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

