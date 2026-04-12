"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X, ArrowRight, Home, LayoutGrid, Info, MessageSquare } from "lucide-react";
import { useModal } from "@/lib/modal-context";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "THE CONCEPT", href: "/kumar-magnacity-na-bungalow-plots-concept", icon: Home },
  { name: "OUR PLOTS", href: "/kumar-magnacity-na-bungalow-plots-availability", icon: LayoutGrid },
  { name: "INVESTMENT", href: "/kumar-magnacity-investment-plan-pune-east", icon: Info },
  { name: "FAQ VAULT", href: "/kumar-magnacity-na-bungalow-plots-faq", icon: MessageSquare },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { openModal } = useModal();
  const isMarathi = pathname.startsWith("/mr");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-[10000] transition-all duration-700",
          isScrolled ? "py-3 bg-dark/90 backdrop-blur-3xl border-b border-white/10" : "py-8 bg-transparent"
        )}
      >
        <div className="container mx-auto max-w-[1400px] px-6 lg:px-12 flex items-center justify-between gap-4">
          
          {/* LOGO AREA - Strong Anchor */}
          <Link href={isMarathi ? "/mr" : "/"} className="flex flex-col group shrink-0">
              <span className="text-xl md:text-2xl lg:text-3xl font-heading font-black tracking-[0.15em] text-white group-hover:text-accent transition-colors duration-500">
                KUMAR MAGNACITY
              </span>
              <span className="text-[7px] md:text-[8px] font-bold text-accent tracking-[0.4em] uppercase mt-1">
                 Premium NA Bungalow Plots
              </span>
          </Link>

          {/* DESKTOP NAVIGATION & ACTIONS - Fluid Spacing */}
          <div className="hidden md:flex items-center justify-end flex-1 gap-6 lg:gap-12">
            
            {/* Primary Links */}
            <nav className="flex items-center gap-1 xl:gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={isMarathi ? `/mr${link.href}` : link.href}
                  className={cn(
                    "px-4 py-2 text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.25em] transition-all hover:text-accent relative group whitespace-nowrap",
                    pathname === (isMarathi ? `/mr${link.href}` : link.href) ? "text-accent" : "text-white/60"
                  )}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-accent transition-all duration-500 group-hover:w-1/2" />
                </Link>
              ))}
            </nav>
            
            {/* Action Group */}
            <div className="flex items-center gap-6 lg:gap-10 border-l border-white/10 pl-6 lg:pl-10">
                <button
                  onClick={() => openModal({
                    title: isMarathi ? "एलिट ॲक्सेस मिळवा" : "Sovereign Elite Access",
                    subtitle: isMarathi ? "अचूक किंमत आणि इन्व्हेंटरी डेटा अनलॉक करा." : "Unlock exact pricing and inventory master-plan data instantly.",
                    source: "Header Desktop"
                  })}
                  className="bg-gradient-to-r from-primary/80 to-primary text-white text-[10px] font-bold uppercase tracking-widest px-7 py-3 rounded-full hover:shadow-[0_10px_30px_rgba(10,77,60,0.6)] transition-all hover:scale-105 active:scale-95 border border-primary/20 whitespace-nowrap"
                >
                  {isMarathi ? "आता चौकशी करा" : "ENQUIRE NOW"}
                </button>

                {/* Language Switcher */}
                <div className="flex items-center gap-3 shrink-0">
                   <Link href="/" className={cn("text-[9px] font-black tracking-tighter transition-all px-2 py-1 rounded", !isMarathi ? "bg-accent text-dark" : "text-white/30 hover:text-white")}>EN</Link>
                   <Link href="/mr" className={cn("text-[9px] font-black tracking-tighter transition-all px-2 py-1 rounded", isMarathi ? "bg-accent text-dark" : "text-white/30 hover:text-white")}>MR</Link>
                </div>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-6">
             <div className="flex items-center gap-2">
                <Link href="/" className={cn("text-[10px] font-bold", !isMarathi ? "text-accent underline underline-offset-4" : "text-white/30")}>EN</Link>
                <Link href="/mr" className={cn("text-[10px] font-bold", isMarathi ? "text-accent underline underline-offset-4" : "text-white/30")}>MR</Link>
             </div>
             <button
               onClick={() => setMobileMenuOpen(true)}
               className="text-white p-2 border border-white/10 rounded-xl bg-white/5"
             >
               <Menu size={24} />
             </button>
          </div>
        </div>
      </header>

      {/* Immersive Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10002] bg-dark/98 backdrop-blur-3xl md:hidden"
          >
            {/* Header in Menu */}
            <div className="flex items-center justify-between px-8 py-8 border-b border-white/10">
                <div className="flex flex-col">
                  <span className="text-xl font-heading font-black tracking-widest text-white uppercase">KUMAR Magnacity</span>
                  <span className="text-[8px] font-bold text-accent tracking-[0.4em] uppercase">Premium NA Plots</span>
                </div>
               <button onClick={() => setMobileMenuOpen(false)} className="text-white p-2 bg-white/5 rounded-full">
                 <X size={28} />
               </button>
            </div>

            {/* Links Content */}
            <div className="flex flex-col justify-between h-[calc(100vh-120px)] p-8 overflow-y-auto">
               <nav className="space-y-4 pt-4">
                  {NAV_LINKS.map((link, i) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between py-6 border-b border-white/5 group"
                      >
                         <div className="flex items-center gap-6">
                            <link.icon className="text-accent/30 group-hover:text-accent transition-colors" size={22} />
                            <span className="text-2xl font-heading font-medium text-white group-hover:text-accent transition-colors uppercase tracking-tight">
                               {link.name}
                            </span>
                         </div>
                         <ArrowRight className="text-white/10" size={18} />
                      </Link>
                    </motion.div>
                  ))}
               </nav>

               <div className="space-y-6 pb-10">
                  <button 
                    onClick={() => {
                      setMobileMenuOpen(false);
                      openModal({ title: "Priority Briefing", source: "Mobile Immersive Menu" });
                    }}
                    className="w-full bg-primary text-white font-bold py-6 rounded-3xl text-center tracking-[0.25em] uppercase text-xs shadow-2xl flex items-center justify-center gap-3 shine-effect border border-white/10"
                  >
                    <MessageSquare size={16} className="text-accent" />
                    Enquire Now
                  </button>
                  <p className="text-[10px] text-white/20 text-center uppercase tracking-widest">Sovereign Asset Management Vault</p>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
