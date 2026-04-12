"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SovereignBar from "@/components/SovereignBar";
import { 
  Users, 
  MessageSquare, 
  PhoneCall, 
  Calendar, 
  Search, 
  Filter, 
  ShieldCheck, 
  ArrowUpRight,
  TrendingUp,
  LayoutGrid,
  Gem
} from "lucide-react";
import { cn } from "@/lib/utils";

// In a real production app, this would be fetched from a database.
// For the Sovereign Pivot Phase, we illustrate the architecture.
const MOCK_LEADS = [
  { id: 1, name: "Vikas Yewle", phone: "9579250011", source: "Header Desktop", status: "Active", timestamp: "2026-04-12T09:22:00Z" },
  { id: 2, name: "Test User", phone: "9999999999", source: "Hero Brochure", status: "New", timestamp: "2026-04-12T09:19:00Z" },
  { id: 3, name: "Investor Group", phone: "7744009295", source: "Investment Page", status: "Hot", timestamp: "2026-04-11T18:45:00Z" },
];

export default function LeadVault() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [passkey, setPasskey] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleAuthorize = (e: React.FormEvent) => {
    e.preventDefault();
    if (passkey === "magna2026") {
      setIsAuthorized(true);
    }
  };

  if (!isAuthorized) {
    return (
      <main className="min-h-screen bg-dark flex items-center justify-center p-6">
        <div className="max-w-md w-full space-y-8 text-center reveal-luxury">
           <div className="w-20 h-20 bg-accent/20 rounded-3xl flex items-center justify-center text-accent mx-auto border border-accent/30 shadow-2xl">
              <ShieldCheck size={40} />
           </div>
           <div className="space-y-4">
              <h1 className="text-3xl font-heading font-bold text-white tracking-tight italic">
                 Sovereign Lead Vault
              </h1>
              <p className="text-white/40 text-sm font-light uppercase tracking-[0.3em]">
                 Restricted Access Portal
              </p>
           </div>
           <form onSubmit={handleAuthorize} className="space-y-4">
              <input 
                type="password" 
                placeholder="Enter Elite Passkey" 
                value={passkey}
                onChange={(e) => setPasskey(e.target.value)}
                className="w-full bg-white/5 border border-white/10 text-white rounded-2xl px-6 py-4 text-center text-lg tracking-[0.5em] focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
              />
              <button className="w-full bg-accent text-dark font-black py-4 rounded-2xl tracking-[0.1em] uppercase shadow-2xl hover:bg-accent-hover transition-all">
                 VERIFY IDENTITY
              </button>
           </form>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-light">
      <Header />
      
      {/* Vault Masthead */}
      <section className="pt-40 pb-20 bg-dark text-white relative overflow-hidden">
        <div className="container mx-auto max-w-7xl px-6 relative z-10">
           <div className="flex flex-col md:flex-row justify-between items-end gap-12 reveal-luxury">
              <div className="space-y-6">
                 <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/20 border border-accent/40 rounded-full text-accent font-bold text-[10px] uppercase tracking-widest">
                    <TrendingUp size={12} /> Live Conversion Data
                 </div>
                 <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight">
                    Lead <span className="text-accent italic font-light">Inventory</span>
                 </h1>
                 <p className="text-white/40 text-xl font-light max-w-xl">
                    Managing search-engine dominance through professional prospect liquidation.
                 </p>
              </div>

              <div className="flex gap-4">
                 <div className="p-8 bg-white/5 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 min-w-[200px]">
                    <div className="text-accent text-3xl font-heading font-bold">128</div>
                    <div className="text-white/30 text-[10px] uppercase font-bold tracking-widest mt-1">Total Leads</div>
                 </div>
                 <div className="p-8 bg-primary/20 backdrop-blur-3xl rounded-[2.5rem] border border-primary/20 min-w-[200px]">
                    <div className="text-primary text-3xl font-heading font-bold">42%</div>
                    <div className="text-white/30 text-[10px] uppercase font-bold tracking-widest mt-1">Conversion Ratio</div>
                 </div>
              </div>
           </div>
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[150px] -rotate-45" />
      </section>

      {/* Vault Search & Filter */}
      <section className="py-12 bg-white border-b border-dark/5 sticky top-20 z-[999] shadow-sm">
        <div className="container mx-auto max-w-7xl px-6">
           <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="relative flex-1 group w-full">
                 <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-dark/20 group-focus-within:text-accent transition-colors" size={20} />
                 <input 
                   type="text" 
                   placeholder="Search prospects by name or phone..."
                   value={searchQuery}
                   onChange={(e) => setSearchQuery(e.target.value)}
                   className="w-full bg-dark/5 border-none rounded-2xl pl-16 pr-8 py-5 focus:ring-0 focus:outline-none focus:bg-dark/10 transition-all font-medium text-dark"
                 />
              </div>
              <div className="flex gap-4 w-full md:w-auto">
                 <button className="flex-1 md:flex-none border border-dark/5 px-8 py-5 rounded-2xl flex items-center justify-center gap-3 text-sm font-bold uppercase tracking-widest hover:bg-dark/5 transition-all">
                    <Filter size={18} /> Filter By
                 </button>
                 <button className="flex-1 md:flex-none bg-primary text-white px-8 py-5 rounded-2xl flex items-center justify-center gap-3 text-sm font-bold uppercase tracking-widest shadow-xl hover:bg-primary-light transition-all">
                    <ArrowUpRight size={18} /> Export Vault
                 </button>
              </div>
           </div>
        </div>
      </section>

      {/* Main Ledger Architecture */}
      <section className="py-20 bg-light">
         <div className="container mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 gap-6 reveal-luxury" style={{ animationDelay: '0.3s' }}>
               {MOCK_LEADS.filter(l => l.name.toLowerCase().includes(searchQuery.toLowerCase()) || l.phone.includes(searchQuery)).map((lead) => (
                  <div key={lead.id} className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-dark/5 shadow-md hover:shadow-xl transition-all group flex flex-col md:flex-row items-center justify-between gap-8">
                     <div className="flex items-center gap-8 w-full md:w-auto">
                        <div className="w-20 h-20 bg-dark/5 rounded-3xl flex items-center justify-center text-dark/20 group-hover:bg-accent/10 group-hover:text-accent transition-all duration-500">
                           <Users size={32} />
                        </div>
                        <div className="space-y-1">
                           <h3 className="text-2xl font-heading font-black text-dark group-hover:text-primary transition-colors">
                              {lead.name}
                           </h3>
                           <div className="flex items-center gap-4">
                              <span className="text-sm font-bold text-dark/40 uppercase tracking-widest">{lead.phone}</span>
                              <span className={cn(
                                "px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest",
                                lead.status === 'Hot' ? "bg-red-100 text-red-600" : "bg-emerald-100 text-emerald-600"
                              )}>{lead.status}</span>
                           </div>
                        </div>
                     </div>

                     <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full md:w-auto">
                        <div className="text-center md:text-left space-y-1">
                           <div className="text-dark/40 text-[9px] uppercase font-bold tracking-widest">Attribution</div>
                           <div className="text-dark font-bold text-sm">{lead.source}</div>
                        </div>
                        <div className="text-center md:text-left space-y-1 border-x border-dark/5 px-6">
                           <div className="text-dark/40 text-[9px] uppercase font-bold tracking-widest">Timestamp</div>
                           <div className="text-dark font-bold text-sm">Today, 9:22 AM</div>
                        </div>
                        <div className="hidden md:block space-y-1">
                           <div className="text-dark/40 text-[9px] uppercase font-bold tracking-widest">Plot ID</div>
                           <div className="text-dark font-bold text-sm">Bungalow Gen</div>
                        </div>
                     </div>

                     <div className="flex gap-3 w-full md:w-auto">
                        <a 
                          href={`tel:+91${lead.phone}`}
                          className="flex-1 md:flex-none p-5 rounded-2xl bg-white border border-dark/5 text-dark hover:bg-dark hover:text-white transition-all shadow-sm"
                        >
                           <PhoneCall size={20} />
                        </a>
                        <a 
                          href={`https://wa.me/91${lead.phone}`}
                          className="flex-1 md:flex-none p-5 rounded-2xl bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all shadow-sm"
                        >
                           <MessageSquare size={20} />
                        </a>
                        <button className="flex-[2] md:flex-none px-8 py-5 rounded-2xl bg-accent text-dark font-black tracking-widest text-xs uppercase shadow-lg shadow-accent/20 hover:scale-105 active:scale-95 transition-all">
                           VIEW FILE
                        </button>
                     </div>
                  </div>
               ))}
            </div>

            <div className="mt-20 text-center space-y-6">
               <div className="inline-flex items-center gap-3 text-dark/20 uppercase tracking-[0.4em] text-[10px] font-bold">
                  <LayoutGrid size={16} /> Secure Infrastructure End-point
               </div>
               <p className="text-dark/30 text-xs font-light max-w-md mx-auto italic">
                  All metrics are synchronized with the Sovereign Backup Registry for real-time compliance.
               </p>
            </div>
         </div>
      </section>

      <Footer />
      <SovereignBar />
    </main>
  );
}
