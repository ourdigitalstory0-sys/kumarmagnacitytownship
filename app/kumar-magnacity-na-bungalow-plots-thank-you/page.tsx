"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CheckCircle2, ArrowRight, MessageSquareCode } from "lucide-react";
import { motion } from "framer-motion";

export default function ThankYou() {
  const pathname = usePathname();
  const isMarathi = pathname.includes("/mr");

  const waBase = "https://wa.me/917744009295";
  const waMsg = isMarathi 
    ? "नमस्कार! मी पोर्टलवर माझी माहिती सबमिट केली आहे. कृपया मला प्लॉटचे दर आणि मॅप शेअर करा."
    : "Hi! I just submitted my enquiry on the portal. Please share the plot prices and location map.";
  const waLink = `${waBase}?text=${encodeURIComponent(waMsg)}`;

  return (
    <main className="min-h-screen bg-dark overflow-hidden">
      <Header />
      
      <section className="min-h-screen flex items-center justify-center pt-32 pb-20 px-4 relative">
        {/* Dynamic Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full animate-pulse" />
            <div className="absolute bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-accent/10 blur-[120px] rounded-full animate-float" />
        </div>

        <div className="container mx-auto max-w-2xl text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white/5 backdrop-blur-3xl rounded-[3.5rem] p-12 md:p-20 shadow-2xl border border-white/10 space-y-12 relative overflow-hidden group"
          >
            {/* Subtle light leak */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/5 blur-[80px] rounded-full group-hover:bg-white/10 transition-all duration-700" />

            <div className="space-y-10">
                <div className="w-28 h-28 bg-accent/10 rounded-full flex items-center justify-center text-accent mx-auto border border-accent/20 shadow-[0_0_50px_rgba(197,160,89,0.2)]">
                    <CheckCircle2 size={56} className="animate-pulse" />
                </div>
                
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-heading font-black text-white italic tracking-tight">
                        {isMarathi ? "यशस्वी!" : "Success!" }
                    </h1>
                    <p className="text-xl text-white/60 leading-relaxed font-light">
                        {isMarathi 
                          ? "तुमची नोंदणी यशस्वी झाली आहे. आमचे तज्ञ लवकरच तुमच्याशी संपर्क साधतील." 
                          : "Your VIP access for Kumar Magnacity has been prioritized for the next 30 minutes."}
                    </p>
                </div>

                <div className="flex flex-col gap-5 pt-4">
                    <a 
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-green-500 text-white px-10 py-6 rounded-3xl font-bold uppercase tracking-[0.2em] text-[12px] hover:bg-green-600 transition-all shadow-[0_20px_40px_-10px_rgba(34,197,94,0.3)] flex items-center justify-center gap-4 hover:scale-105 active:scale-95 pulse-accent"
                    >
                        <MessageSquareCode size={20} />
                        {isMarathi ? "WhatsApp द्वारे संपर्क करा" : "Connect via WhatsApp"}
                    </a>

                    <Link 
                        href={isMarathi ? "/mr" : "/"} 
                        className="bg-white/5 text-white/40 px-10 py-5 rounded-3xl font-medium uppercase tracking-[0.1em] text-[10px] hover:bg-white/10 transition-all flex items-center justify-center gap-3"
                    >
                        {isMarathi ? "मुख्य पृष्ठावर जा" : "Back to Property Dashboard"}
                        <ArrowRight size={14} className="opacity-40" />
                    </Link>
                </div>
                
                <div className="pt-6 border-t border-white/5">
                   <p className="text-[10px] uppercase font-bold text-white/10 tracking-[0.8em]">Sovereign Elite Network</p>
                </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
