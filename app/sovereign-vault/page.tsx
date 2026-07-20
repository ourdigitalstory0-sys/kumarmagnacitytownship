"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Database, 
  RefreshCcw, 
  Search, 
  ExternalLink, 
  User, 
  Phone, 
  Calendar, 
  Globe,
  Loader2,
  Lock
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Lead {
  name: string;
  phone: string;
  email?: string;
  plot_id?: string;
  source_url?: string;
  source_meta?: string;
  timestamp: string;
}

export default function SovereignVault() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  
  // Security State
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passkey, setPasskey] = useState("");
  const [authError, setAuthError] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  const CORRECT_PASSKEY = "MAGNA9295";

  const handleAuth = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setIsVerifying(true);
    setAuthError(false);

    // UX delay to show verifying state
    setTimeout(() => {
      if (passkey.trim().toUpperCase() === CORRECT_PASSKEY) {
        setIsAuthenticated(true);
        localStorage.setItem("vault_auth", "true");
      } else {
        setAuthError(true);
        setPasskey("");
      }
      setIsVerifying(false);
    }, 400);
  };

  useEffect(() => {
    const savedAuth = localStorage.getItem("vault_auth");
    if (savedAuth === "true") setIsAuthenticated(true);
  }, []);

  const fetchLeads = async () => {
    if (!isAuthenticated) return;
    setLoading(true);
    try {
      const response = await fetch("/api/leads");
      if (!response.ok) throw new Error("Failed to unlock vault");
      const data = await response.json();
      setLeads(data);
    } catch (err) {
      setError("Leads synchronisation failure. Vault remains locked.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchLeads();
    }
  }, [isAuthenticated, fetchLeads]);

  const filteredLeads = leads.filter(lead => 
    lead.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    lead.phone.includes(searchTerm)
  );

  return (
    <main className="min-h-screen bg-dark text-white overflow-hidden">
      <Header />
      
      {!isAuthenticated ? (
        <section className="min-h-screen flex items-center justify-center pt-20 px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-lg p-12 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3.5rem] shadow-2xl relative overflow-hidden text-center space-y-8"
          >
            {/* Security Glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/10 blur-[80px] rounded-full" />
            
            <div className="space-y-4">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto text-accent border border-accent/20">
                <Lock size={32} />
              </div>
              <h2 className="text-3xl font-heading font-black tracking-tight italic uppercase">Sovereign Gate</h2>
              <p className="text-white/40 text-xs uppercase tracking-widest leading-relaxed">
                Vault entry requires executive clearance. <br/>Enter protocol bypass key.
              </p>
            </div>

            <form onSubmit={handleAuth} className="space-y-4">
              <div className="relative group">
                <input 
                  type="password"
                  value={passkey}
                  onChange={(e) => setPasskey(e.target.value)}
                  placeholder="Enter Clearance Passkey"
                  className={cn(
                    "w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-center text-white tracking-widest focus:outline-none focus:ring-2 transition-all placeholder:text-[10px] placeholder:tracking-widest",
                    authError ? "border-red-500/50 focus:ring-red-500/20" : "focus:ring-accent/40"
                  )}
                  autoFocus
                />
              </div>
              
              {authError && (
                <motion.p 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-[10px] font-bold uppercase tracking-widest"
                >
                  Clearance Denied. Key sequence invalid.
                </motion.p>
              )}

              <button 
                type="submit"
                disabled={isVerifying}
                className="w-full bg-accent text-dark hover:bg-white hover:text-dark font-black uppercase tracking-[0.3em] py-5 rounded-2xl transition-all shadow-[0_20px_50px_rgba(197,160,89,0.3)] disabled:opacity-50 flex items-center justify-center gap-3 active:scale-95"
              >
                {isVerifying ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    <span className="text-[10px]">AUTH_SEQUENCE_RUNNING</span>
                  </>
                ) : (
                  "INITIATE_BYPASS"
                )}
              </button>

            </form>

            <p className="text-[10px] text-white/10 uppercase tracking-[0.5em] pt-4">Sovereign Security Node</p>
          </motion.div>
        </section>
      ) : (
        <section className="pt-40 pb-20 px-6">
        <div className="container mx-auto max-w-6xl space-y-12">
          
          {/* Dashboard Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-12">
            <div className="space-y-4">
               <div className="flex items-center gap-3 text-accent mb-2">
                  <Lock size={16} />
                  <span className="text-[10px] font-bold uppercase tracking-[0.5em]">Executive Access Required</span>
               </div>
               <h1 className="text-4xl md:text-6xl font-heading font-black tracking-tight italic">
                 The Sovereign <span className="text-accent">Vault</span>
               </h1>
               <p className="text-white/40 font-light max-w-md">
                 Confidential real-time ledger of all high-intent enquiries captured across the Magnacity network.
               </p>
            </div>
            
            <div className="flex items-center gap-4">
               <div className="relative group">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-accent transition-colors" size={18} />
                  <input 
                    type="text" 
                    placeholder="Search leads..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="bg-white/5 border border-white/10 rounded-2xl pl-12 pr-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 w-full md:w-[300px] transition-all"
                  />
               </div>
               <button 
                 onClick={fetchLeads}
                 className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all text-accent"
               >
                 {loading ? <Loader2 size={20} className="animate-spin" /> : <RefreshCcw size={20} />}
               </button>
            </div>
          </div>

          {/* Leads Grid/List */}
          <div className="min-h-[400px]">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-20 space-y-4">
                 <Loader2 className="animate-spin text-accent" size={40} />
                 <p className="text-white/20 uppercase tracking-widest text-xs">Synchronising Ledger...</p>
              </div>
            ) : error ? (
              <div className="p-12 bg-red-500/5 border border-red-500/20 rounded-[2.5rem] text-center space-y-4">
                 <p className="text-red-400 font-medium">{error}</p>
                 <button onClick={fetchLeads} className="text-accent underline text-sm">Retry Protocol</button>
              </div>
            ) : filteredLeads.length === 0 ? (
              <div className="p-20 bg-white/5 border border-dashed border-white/10 rounded-[3.5rem] text-center space-y-6">
                 <Database className="mx-auto text-white/10" size={60} />
                 <p className="text-white/30 italic font-light">The vault is currently awaiting its first resident.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence mode="popLayout">
                  {filteredLeads.map((lead, i) => (
                    <motion.div
                      key={lead.timestamp + i}
                      initial={{ opacity: 0, scale: 0.95, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ delay: i * 0.05 }}
                      className="group bg-white/5 border border-white/10 p-8 rounded-[2.5rem] hover:bg-white/10 hover:border-accent/30 transition-all relative overflow-hidden"
                    >
                      {/* Plot Badge */}
                      <div className="absolute top-6 right-6 px-3 py-1 bg-accent/20 border border-accent/30 rounded-full">
                         <span className="text-[9px] font-black text-accent uppercase tracking-tighter">Plot: {lead.plot_id || "NR"}</span>
                      </div>

                      <div className="space-y-6 relative z-10">
                        <div className="flex items-center gap-4">
                           <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent">
                              <User size={20} />
                           </div>
                           <div>
                              <h3 className="text-xl font-heading font-bold text-white group-hover:text-accent transition-colors">{lead.name}</h3>
                              <p className="text-white/30 text-[10px] uppercase font-bold tracking-widest">Enquiry Received</p>
                           </div>
                        </div>

                        <div className="space-y-4 pt-4 border-t border-white/5">
                           <a href={`tel:${lead.phone}`} className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group">
                              <Phone size={14} className="text-accent/50 group-hover:text-accent" />
                              <span className="text-sm font-medium">{lead.phone}</span>
                              <ExternalLink size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                           </a>
                           
                           <div className="flex items-center gap-3 text-white/40">
                              <Calendar size={14} className="text-white/20" />
                              <span className="text-xs">{new Date(lead.timestamp).toLocaleString()}</span>
                           </div>

                           <div className="flex items-center gap-3 text-white/40">
                              <Globe size={14} className="text-white/20" />
                              <span className="text-[10px] truncate max-w-[200px] italic">{lead.source_meta || "Direct Portal"}</span>
                           </div>
                        </div>
                      </div>

                      {/* Decal background */}
                      <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-accent/5 blur-[40px] rounded-full group-hover:bg-accent/10 transition-all" />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </div>
          
          <div className="pt-12 border-t border-white/5 flex flex-col items-center gap-4">
             <div className="flex items-center gap-2 text-[10px] text-white/20 uppercase tracking-[0.5em]">
                <Database size={12} />
                Sovereign Ledger Node-01
             </div>
          </div>
        </div>
      </section>
      )}

      <Footer />
    </main>
  );
}
