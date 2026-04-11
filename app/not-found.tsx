"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { House, Search, ArrowLeft } from "lucide-react";

export const runtime = "edge";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-dark flex flex-col">
      <Header />
      
      <div className="flex-grow flex items-center justify-center pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="relative glass-obsidian rounded-[4rem] p-12 md:p-24 border border-white/10 overflow-hidden text-center reveal-luxury">
             {/* Decorative Media Background */}
             <div className="absolute inset-0 z-0 opacity-10">
                <div className="absolute inset-0 bg-[url('/assets/hero-bg.jpg')] bg-cover bg-center grayscale" />
                <div className="absolute inset-0 bg-gradient-to-b from-dark via-transparent to-dark" />
             </div>

             <div className="relative z-10 space-y-12">
                <div className="space-y-4">
                    <span className="text-[140px] md:text-[220px] font-heading font-black text-white/5 leading-none block select-none">404</span>
                    <div className="space-y-2 -mt-16 md:-mt-28">
                       <h1 className="text-4xl md:text-7xl font-heading font-bold text-white tracking-tight">Path to Excellence <br /><span className="text-accent italic font-light">Sublimated</span></h1>
                       <div className="w-20 h-1 bg-accent/30 mx-auto rounded-full" />
                    </div>
                    <p className="text-white/40 max-w-lg mx-auto leading-relaxed font-light text-lg pt-6">
                        The luxury you seek remains within our sanctuary, but this specific frequency does not exist. Allow us to guide you back to the Sovereign Estate.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Link 
                        href="/" 
                        className="group bg-primary text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-[11px] flex items-center gap-3 hover:bg-primary-light transition-all shadow-[0_20px_50px_rgba(10,77,60,0.4)] shine-effect"
                    >
                        <House size={16} />
                        RETURN HOME
                    </Link>
                    <Link 
                        href="/location" 
                        className="group bg-white/5 backdrop-blur-xl text-white border border-white/10 px-10 py-5 rounded-full font-bold uppercase tracking-widest text-[11px] flex items-center gap-3 hover:bg-white/10 transition-all"
                    >
                        EXPLORE DESTINATION
                        <Search size={16} />
                    </Link>
                </div>
                
                <div className="pt-12 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-6">
                    {["Concept", "Amenities", "Investment", "Availability"].map((item) => (
                        <Link 
                            key={item}
                            href={`/${item.toLowerCase().replace(' ', '-')}`}
                            className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 hover:text-accent transition-colors py-2"
                        >
                            {item}
                        </Link>
                    ))}
                </div>
             </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
