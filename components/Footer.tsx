"use client";

import Link from "next/link";
import { useModal } from "@/lib/modal-context";
import { Phone, Mail, MapPin, Globe, ShieldCheck } from "lucide-react";

export default function Footer() {
  const { openModal } = useModal();
  return (
    <footer className="glass-obsidian text-white pt-32 pb-12 relative overflow-hidden">
      {/* Cinematic Branding Layer */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
          {/* Brand Vision */}
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-5 group">
              <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent-hover text-dark flex items-center justify-center font-black text-2xl rounded-2xl shadow-2xl hover:rotate-6 transition-all duration-500 border border-white/30 shine-effect">
                K
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-heading font-bold text-2xl tracking-tight text-white uppercase">KUMAR Magnacity</span>
                <span className="text-[10px] text-accent font-bold uppercase tracking-[0.4em] -mt-0.5">Premium NA Plots</span>
              </div>
            </Link>
            <p className="text-white/40 text-base leading-relaxed font-light">
              Designing legacies since 1966. Kumar MagnaCity Bungalow Plots represent the pinnacle of landed estate investment at <span className="text-white">Manjari near Hadapsar</span>.
            </p>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-white/5 w-fit">
               <ShieldCheck size={14} className="text-accent" />
               <span className="text-[9px] font-bold uppercase tracking-widest text-white/60">Legacy of 59 Years</span>
            </div>
          </div>

          {/* Site Architecture */}
          <div>
            <h4 className="text-accent uppercase tracking-[0.3em] text-[11px] font-bold mb-10">THE ESTATE</h4>
            <ul className="space-y-5">
              <li><Link href="/kumar-magnacity-na-bungalow-plots-concept" className="text-white/50 hover:text-white transition-all hover:pl-2 text-sm font-light">Philosophy & Vision</Link></li>
              <li><Link href="/kumar-magnacity-manjari-location-map" className="text-white/50 hover:text-white transition-all hover:pl-2 text-sm font-light">Location Intelligence</Link></li>
              <li><Link href="/kumar-magnacity-na-bungalow-plots-availability" className="text-white/50 hover:text-white transition-all hover:pl-2 text-sm font-light">Inventory Suite</Link></li>
              <li><Link href="/kumar-magnacity-investment-plan-pune-east" className="text-white/50 hover:text-white transition-all hover:pl-2 text-sm font-light">Investment ROI Matrix</Link></li>
              <li><Link href="/kumar-magnacity-na-bungalow-plots-amenities" className="text-white/50 hover:text-white transition-all hover:pl-2 text-sm font-light">Botanical Sanctuary</Link></li>
            </ul>
          </div>

          {/* Intelligence Hub */}
          <div>
            <h4 className="text-accent uppercase tracking-[0.3em] text-[11px] font-bold mb-10">RESOURCES</h4>
            <ul className="space-y-5">
              <li><Link href="/kumar-magnacity-market-data-pune-east" className="text-white/50 hover:text-white transition-all hover:pl-2 text-sm font-light">Pulse of Pune East</Link></li>
              <li><Link href="/kumar-magnacity-na-bungalow-plots-master-plan" className="text-white/50 hover:text-white transition-all hover:pl-2 text-sm font-light">Master Plan PDF</Link></li>
              <li><Link href="/kumar-magnacity-na-bungalow-plots-faq" className="text-white/50 hover:text-white transition-all hover:pl-2 text-sm font-light">Investor FAQ Vault</Link></li>
              <li><Link href="/kumar-magnacity-na-bungalow-plots-thank-you" className="text-white/50 hover:text-white transition-all hover:pl-2 text-sm font-light">Access Status</Link></li>
            </ul>
          </div>

          {/* Experience Center */}
          <div className="space-y-8">
            <h4 className="text-accent uppercase tracking-[0.3em] text-[11px] font-bold mb-10">EXPERIENCE CENTER</h4>
            <div className="space-y-6">
                <button 
                  onClick={() => openModal({ title: "Site Visit Scheduled", subtitle: "Book a private experience center tour and site walkthrough.", source: "Footer Address" })}
                  className="flex gap-4 group text-left"
                >
                  <MapPin size={20} className="text-accent shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm text-white/50 leading-relaxed font-light group-hover:text-white transition-colors">
                    Kumar MagnaCity, Manjari near Hadapsar, <br />Pune - 412307, MH
                  </span>
                </button>
              <a href="tel:+917744009295" className="flex gap-4 group items-center">
                <Phone size={18} className="text-accent shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm text-white/50 font-light group-hover:text-white transition-colors tracking-widest">+91 77440 09295</span>
              </a>
              <a href="mailto:sales@kumarmagnacitytownship.com" className="flex gap-4 group items-center">
                <Mail size={18} className="text-accent shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm text-white/50 font-light group-hover:text-white transition-colors">Sovereign Desk</span>
              </a>
            </div>
            
            <div className="flex items-center gap-4 pt-4 border-t border-white/5">
               <Globe size={14} className="text-accent" />
               <span className="text-[10px] text-white/20 uppercase tracking-[0.2em]">Global Domain Presence</span>
            </div>
          </div>
        </div>

        {/* Institutional Footnote */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div className="space-y-2">
             <p className="text-[10px] text-accent font-bold uppercase tracking-[0.3em]">MAHARERA REG. NO: P52100052096</p>
             <p className="text-[9px] text-white/20 uppercase tracking-widest">Available at maharera.mahaonline.gov.in</p>
          </div>
          <div className="text-center md:text-right">
             <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-light">© 2026 Sovereign Edition. Designed for Generational Wealth.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
