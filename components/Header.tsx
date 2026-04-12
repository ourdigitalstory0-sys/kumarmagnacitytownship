"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X, ShieldCheck } from "lucide-react";

const NAV_LINKS = [
  { name: "THE CONCEPT", href: "/concept" },
  { name: "NEIGHBORHOOD", href: "/location" },
  { name: "OUR PLOTS", href: "/availability" },
  { name: "INVESTMENT", href: "/investment" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 4, hours: 23, mins: 57, secs: 28 });
  const pathname = usePathname();
  const isMarathi = pathname.startsWith("/mr");

  // Real-time Countdown logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.secs > 0) return { ...prev, secs: prev.secs - 1 };
        if (prev.mins > 0) return { ...prev, mins: 59, secs: 59, mins: prev.mins - 1 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, mins: 59, secs: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, mins: 59, secs: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[1000] transition-all duration-700">
        {/* Price Revision Banner */}
        <div className={cn(
          "bg-gradient-to-r from-accent via-[#E0C58E] to-accent py-2 text-dark font-bold text-[10px] md:text-[11px] uppercase tracking-[0.2em] flex flex-col md:flex-row items-center justify-center gap-2 md:gap-8 transition-all duration-700 relative overflow-hidden",
          isScrolled ? "h-0 opacity-0 -translate-y-full" : "h-auto opacity-100"
        )}>
           <div className="flex items-center gap-2 animate-pulse">
             <span className="text-red-700">⚠️</span> 
             Price Revision Incoming! Next appreciation milestone in:
           </div>
           <div className="flex items-center gap-3 font-mono bg-dark/10 px-4 py-1 rounded-full text-sm">
              <div className="flex flex-col items-center">
                <span>{String(timeLeft.days).padStart(2, '0')}D</span>
              </div>
              <span>:</span>
              <div className="flex flex-col items-center">
                <span>{String(timeLeft.hours).padStart(2, '0')}H</span>
              </div>
              <span>:</span>
              <div className="flex flex-col items-center">
                <span>{String(timeLeft.mins).padStart(2, '0')}M</span>
              </div>
              <span>:</span>
              <div className="flex flex-col items-center">
                <span className="text-red-700">{String(timeLeft.secs).padStart(2, '0')}S</span>
              </div>
           </div>
           <Link href="#contact" className="hidden md:block border border-dark/20 px-3 py-0.5 rounded-full hover:bg-dark hover:text-white transition-all text-[9px]">
             LOCK CURRENT PRICE
           </Link>
        </div>

        <div className={cn(
          "mx-auto transition-all duration-700 px-4",
          isScrolled ? "max-w-5xl mt-4" : "max-w-7xl mt-4 md:mt-6"
        )}>
          <div className={cn(
            "flex justify-between items-center rounded-3xl md:rounded-full transition-all duration-700 border glass-obsidian px-6 md:px-12 py-3 md:py-4 shadow-2xl relative",
            isScrolled ? "border-accent/30 bg-dark/60 backdrop-blur-3xl" : "border-white/10"
          )}>
            
            {/* Logo Area - Refined Sovereign Identity */}
            <Link href={isMarathi ? "/mr" : "/"} className="flex items-center gap-4 md:gap-6 group">
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-2xl md:rounded-[1.25rem] kumar-emblem transition-all duration-700 group-hover:rotate-[10deg] shadow-2xl overflow-hidden relative">
                <span className="font-heading font-black text-xl md:text-2xl text-dark z-10">K</span>
                <div className="absolute inset-x-0 bottom-0 h-[2px] bg-white/30" />
              </div>
              <div className="flex flex-col leading-none">
                <div className="flex items-center gap-1.5 overflow-hidden">
                   <span className="font-heading font-bold text-lg md:text-2xl text-white tracking-widest uppercase mb-0.5">Kumar</span>
                </div>
                <div className="flex items-center gap-2">
                   <div className="h-[1px] w-4 bg-accent/50" />
                   <span className="text-[7px] md:text-[9px] text-accent font-bold uppercase tracking-[0.4em] whitespace-nowrap">
                     MagnaCity
                   </span>
                </div>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center gap-8 xl:gap-12">
              <div className="hidden xl:flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 shadow-inner">
                 <span className="text-[8px] text-white/50 font-bold tracking-[0.2em] uppercase whitespace-nowrap">
                    RERA: <span className="text-accent">P52100052096</span>
                 </span>
              </div>

              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={isMarathi ? `/mr${link.href}` : link.href}
                  className={cn(
                    "text-[10px] xl:text-[11px] font-bold uppercase tracking-[0.15em] transition-all relative group py-2",
                    pathname === link.href ? "text-accent" : "text-white/70 hover:text-white"
                  )}
                >
                  {link.name}
                  <span className={cn(
                    "absolute -bottom-1 left-0 h-[2px] bg-accent transition-all duration-500",
                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  )} />
                </Link>
              ))}
              
              <Link 
                href="#contact" 
                className="bg-gradient-to-r from-primary to-primary-light text-white text-[10px] font-bold uppercase tracking-widest px-8 py-3.5 rounded-full hover:shadow-[0_0_20px_rgba(10,77,60,0.5)] transition-all hover:scale-105 active:scale-95 shadow-xl shine-effect border border-primary/50"
              >
                ENQUIRE NOW
              </Link>

              {/* Language Switcher */}
              <div className="flex items-center gap-4 border-l border-white/10 ml-2 pl-8">
                <Link 
                  href={pathname.replace("/mr", "") || "/"} 
                  className={cn("text-[10px] font-bold transition-all tracking-widest hover:scale-110", !isMarathi ? "text-accent" : "text-white/30 hover:text-white")}
                >
                  EN
                </Link>
                <div className="w-[1px] h-3 bg-white/10" />
                <Link 
                  href={isMarathi ? pathname : `/mr${pathname === "/" ? "" : pathname}`} 
                  className={cn("text-[11px] font-bold transition-all tracking-wider hover:scale-110", isMarathi ? "text-accent" : "text-white/30 hover:text-white")}
                >
                  मराठी
                </Link>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Sidebar */}
        <div className={cn(
          "lg:hidden fixed inset-0 top-0 bg-dark/95 backdrop-blur-3xl z-[999] p-8 transition-all duration-500 flex flex-col justify-center",
          mobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        )}>
          <button className="absolute top-8 right-8 text-white" onClick={() => setMobileMenuOpen(false)}>
             <X size={32} />
          </button>
          <nav className="flex flex-col gap-8 text-center">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={isMarathi ? `/mr${link.href}` : link.href}
                className="text-2xl font-heading font-bold text-white uppercase tracking-widest hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="#contact" 
              className="bg-accent text-dark font-bold py-5 rounded-2xl mt-4 text-center tracking-widest"
              onClick={() => setMobileMenuOpen(false)}
            >
              ENQUIRE NOW
            </Link>
            
            <div className="flex items-center justify-center gap-6 mt-8 pt-8 border-t border-white/10">
               <Link href="/" className={cn("text-xl font-bold", !isMarathi ? "text-accent" : "text-white/40")}>EN</Link>
               <Link href="/mr" className={cn("text-xl font-bold", isMarathi ? "text-accent" : "text-white/40")}>मराठी</Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
