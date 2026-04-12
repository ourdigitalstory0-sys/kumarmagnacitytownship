"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X, ArrowRight, Home, LayoutGrid, Info, MessageSquare } from "lucide-react";
import { useModal } from "@/lib/modal-context";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "THE CONCEPT", href: "/concept", icon: Home },
  { name: "OUR PLOTS", href: "/availability", icon: LayoutGrid },
  { name: "INVESTMENT", href: "/investment", icon: Info },
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
          isScrolled ? "py-4 bg-dark/80 backdrop-blur-2xl border-b border-white/5" : "py-8 bg-transparent"
        )}
      >
        <div className="container mx-auto max-w-7xl px-6 flex items-center justify-between">
          {/* Logo Branding */}
          <Link href={isMarathi ? "/mr" : "/"} className="flex flex-col group">
            <span className="text-2xl md:text-3xl font-heading font-black tracking-[0.2em] text-white group-hover:text-accent transition-colors">
              KUMAR MAGNACITY
            </span>
            <span className="text-[8px] md:text-[9px] font-bold text-accent tracking-[0.5em] uppercase mt-1">
               Premium NA Bungalow Plots
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={isMarathi ? `/mr${link.href}` : link.href}
                className={cn(
                  "text-[11px] font-bold uppercase tracking-[0.2em] transition-all hover:text-accent relative group",
                  pathname === (isMarathi ? `/mr${link.href}` : link.href) ? "text-accent" : "text-white/60"
                )}
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-accent transition-all group-hover:w-full" />
              </Link>
            ))}
            
            <button
              onClick={() => openModal({
                title: isMarathi ? "एलिट ॲक्सेस मिळवा" : "Sovereign Elite Access",
                subtitle: isMarathi ? "अचूक किंमत आणि इन्व्हेंटरी डेटा अनलॉक करा." : "Unlock exact pricing and inventory master-plan data instantly.",
                source: "Header Desktop"
              })}
              className="bg-gradient-to-r from-primary to-primary-light text-white text-[11px] font-bold uppercase tracking-widest px-8 py-3.5 rounded-full hover:shadow-[0_0_20px_rgba(10,77,60,0.5)] transition-all hover:scale-105 active:scale-95 shadow-xl shine-effect border border-primary/50 whitespace-nowrap shrink-0 ml-4"
            >
              {isMarathi ? "आता चौकशी करा" : "ENQUIRE NOW"}
            </button>

            {/* Language Switcher */}
            <div className="flex items-center gap-4 border-l border-white/10 ml-2 pl-6 shrink-0">
               <Link href="/" className={cn("text-[10px] font-bold", !isMarathi ? "text-accent" : "text-white/30 hover:text-white")}>EN</Link>
               <span className="text-white/10">|</span>
               <Link href="/mr" className={cn("text-[10px] font-bold", isMarathi ? "text-accent" : "text-white/30 hover:text-white")}>MR</Link>
            </div>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden text-white p-2"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Immersive Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10002] bg-dark/95 backdrop-blur-3xl md:hidden"
          >
            {/* Header in Menu */}
            <div className="flex items-center justify-between px-8 py-8 border-b border-white/5">
               <div className="flex flex-col">
                  <span className="text-xl font-heading font-black tracking-widest text-white uppercase">KUMAR Magnacity</span>
                  <span className="text-[8px] font-bold text-accent tracking-[0.4em] uppercase">Premium NA Plots</span>
               </div>
               <button onClick={() => setMobileMenuOpen(false)} className="text-white p-2">
                 <X size={32} />
               </button>
            </div>

            {/* Links Content */}
            <div className="flex flex-col justify-between h-[calc(100vh-120px)] p-8">
               <nav className="space-y-4 pt-10">
                  {NAV_LINKS.map((link, i) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Link
                        href={isMarathi ? `/mr${link.href}` : link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between py-6 border-b border-white/5 group"
                      >
                         <div className="flex items-center gap-6">
                            <link.icon className="text-accent/40 group-hover:text-accent transition-colors" size={24} />
                            <span className="text-3xl font-heading font-bold text-white group-hover:text-accent transition-colors">
                               {link.name}
                            </span>
                         </div>
                         <ArrowRight className="text-white/20" size={20} />
                      </Link>
                    </motion.div>
                  ))}
               </nav>

               <div className="space-y-8 pb-10">
                  <div className="flex items-center gap-10 justify-center">
                    <Link href="/" className={cn("text-xl font-bold", !isMarathi ? "text-accent border-b-2 border-accent pb-1" : "text-white/20")}>ENGLISH</Link>
                    <Link href="/mr" className={cn("text-xl font-bold", isMarathi ? "text-accent border-b-2 border-accent pb-1" : "text-white/20")}>मराठी</Link>
                  </div>
                  
                  <button 
                    onClick={() => {
                      setMobileMenuOpen(false);
                      openModal({ title: "Priority Briefing", source: "Mobile Immersive Menu" });
                    }}
                    className="w-full bg-primary text-white font-bold py-6 rounded-3xl text-center tracking-[0.2em] uppercase text-sm shadow-2xl flex items-center justify-center gap-3"
                  >
                    <MessageSquare size={18} className="text-accent" />
                    Enquire Now
                  </button>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
