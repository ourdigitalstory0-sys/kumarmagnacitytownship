"use client";

import React from "react";
import { useModal } from "@/lib/modal-context";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldCheck, TrendingUp, Download, MapPin } from "lucide-react";
import EnquiryForm from "./EnquiryForm";

export default function EnquiryModal() {
  const { isOpen, closeModal, modalData } = useModal();

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[10001] flex items-center justify-center p-4 md:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0 bg-dark/95 backdrop-blur-2xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative w-full max-w-6xl glass-obsidian border border-white/10 rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] flex flex-col md:flex-row max-h-[95vh] md:max-h-[85vh]"
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 md:top-10 md:right-10 z-20 text-white/50 hover:text-white transition-colors p-2"
            >
              <X size={28} />
            </button>

            {/* Side Branding & Detailing */}
            <div className="md:w-[45%] bg-gradient-to-br from-primary/30 via-dark to-dark p-8 md:p-16 flex flex-col justify-between relative overflow-hidden shrink-0 border-b md:border-b-0 md:border-r border-white/5">
              {/* Background Glows */}
              <div className="absolute -top-32 -left-32 w-64 h-64 bg-accent/20 blur-[100px] rounded-full" />
              <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-primary/20 blur-[100px] rounded-full" />

              <div className="relative z-10 space-y-10">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/20 text-accent font-bold text-[9px] uppercase tracking-[0.2em] mb-4">
                     Elite Access Reserved
                  </div>
                  <h2 className="text-3xl md:text-5xl font-heading font-bold text-white leading-tight">
                    {modalData.title || "The Sovereign Brief"}
                  </h2>
                  <p className="text-white/50 text-base md:text-lg font-light leading-relaxed">
                    {modalData.subtitle || "Unlock exclusive 59-year legacy data, plot availability maps, and VIP inventory pricing."}
                  </p>
                </div>

                {/* Scarcity / Detailing List */}
                <div className="space-y-6">
                   <div className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center text-accent shrink-0 group-hover:scale-110 transition-transform">
                        <Download size={20} />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-sm uppercase tracking-widest">3D Brochure Included</h4>
                        <p className="text-white/30 text-xs mt-1">Receive technical master-plan and inventory sheets.</p>
                      </div>
                   </div>
                   <div className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center text-accent shrink-0 group-hover:scale-110 transition-transform">
                        <ShieldCheck size={20} />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-sm uppercase tracking-widest">Title Verification</h4>
                        <p className="text-white/30 text-xs mt-1">Direct access to RERA and 7/12 extract documentation.</p>
                      </div>
                   </div>
                   <div className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center text-accent shrink-0 group-hover:scale-110 transition-transform">
                        <TrendingUp size={20} />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-sm uppercase tracking-widest">ROI Roadmap</h4>
                        <p className="text-white/30 text-xs mt-1">East Pune 2026 Micro-market appreciation forecasting.</p>
                      </div>
                   </div>
                </div>
              </div>

              {/* Security Badge */}
              <div className="relative z-10 flex items-center gap-4 pt-10 mt-10 border-t border-white/5 opacity-50">
                 <MapPin size={16} className="text-accent" />
                 <span className="text-[10px] text-white uppercase tracking-widest font-bold">150-Acre Master Township</span>
              </div>
            </div>

            {/* Form Section */}
            <div className="flex-1 p-8 md:p-20 overflow-y-auto">
              <EnquiryForm 
                isModal={true}
                title="Enter Executive Details"
                subtitle="Ensure accurate data for priority inventory validation."
                formId={`modal-${modalData.plotId || 'general'}`}
                buttonText={modalData.plotId ? `Inquire for ${modalData.plotId}` : "Unlock Full Brief"}
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
