"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface EnquiryFormProps {
  formId?: string;
  sourceUrl?: string;
  title?: string;
  subtitle?: string;
  buttonText?: string;
  isModal?: boolean;
}

export default function EnquiryForm({
  formId = "enquiryForm",
  sourceUrl = typeof window !== 'undefined' ? window.location.href : '',
  title = "Request VIP Access",
  subtitle = "Unlock pricing, inventory, and floor plans for Kumar Magnacity.",
  buttonText = "Get Details",
  isModal = false,
}: EnquiryFormProps) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email") || "no-email@kumarmagnacity.com",
      source_url: sourceUrl,
      form_id: formId,
      timestamp: new Date().toISOString(),
    };

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        // Smooth transition to thank you page
        setTimeout(() => {
          router.push("/thank-you");
        }, 1200);
      } else {
        throw new Error("Failed to submit. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "An unexpected error occurred.");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-12 rounded-[2.5rem] text-center space-y-6 animate-pulse">
        <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto text-accent border border-accent/30 shadow-[0_0_30px_rgba(201,162,39,0.3)]">
          <CheckCircle2 size={40} />
        </div>
        <div className="space-y-2">
            <h3 className="text-3xl font-heading font-bold text-white">Redirecting...</h3>
            <p className="text-white/60 text-sm">Validating your VIP access brief.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={cn(
      "w-full transition-all duration-700",
      isModal ? "p-0" : "bg-dark backdrop-blur-3xl border border-white/10 p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden"
    )}>
      {!isModal && (
        <>
          {/* Subtle background glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/10 blur-[80px] rounded-full" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-primary/10 blur-[80px] rounded-full" />
          
          <div className="relative mb-8 space-y-2">
            <h3 className="text-3xl font-heading font-bold text-white tracking-tight">{title}</h3>
            <p className="text-white/40 text-sm font-light leading-relaxed">{subtitle}</p>
          </div>
        </>
      )}

      <form id={formId} onSubmit={handleSubmit} className="relative space-y-5">
        <div className="group relative">
          <input
            type="text"
            name="name"
            required
            placeholder="Your Full Name"
            className="w-full bg-[#1A1A1A] border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/60 transition-all placeholder:text-white/40 text-sm shadow-inner"
          />
        </div>
        <div className="group relative">
          <input
            type="tel"
            name="phone"
            required
            placeholder="Mobile Number"
            className="w-full bg-[#1A1A1A] border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/60 transition-all placeholder:text-white/40 text-sm shadow-inner"
          />
        </div>
        
        {status === "error" && (
          <div className="flex items-center gap-2 text-red-400 text-xs bg-red-400/5 p-4 rounded-xl border border-red-400/10 animate-fade-in">
            <AlertCircle size={14} />
            <span>{errorMessage}</span>
          </div>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full bg-gradient-to-r from-accent to-accent-hover text-dark font-bold uppercase tracking-[0.2em] py-5 rounded-2xl transition-all flex items-center justify-center gap-3 shadow-[0_10px_30px_-10px_rgba(201,162,39,0.5)] disabled:opacity-50 hover:scale-[1.02] active:scale-[0.98] group relative overflow-hidden"
        >
          {/* Inner Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          
          {status === "submitting" ? (
            <Loader2 className="animate-spin" size={20} />
          ) : (
            <>
              <span className="text-[13px]">{buttonText}</span>
              <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </>
          )}
        </button>
        
        <div className="flex flex-col items-center gap-4 pt-4 mt-2 border-t border-white/5">
          <div className="flex items-center gap-6 opacity-30 group-hover:opacity-50 transition-opacity">
            <div className="flex flex-col items-center">
               <span className="text-[10px] font-bold text-white uppercase tracking-tighter">59 Years</span>
               <span className="text-[8px] text-white/50 uppercase">Legacy</span>
            </div>
            <div className="w-[1px] h-6 bg-white/20" />
            <div className="flex flex-col items-center">
               <span className="text-[10px] font-bold text-white uppercase tracking-tighter">RERA</span>
               <span className="text-[8px] text-white/50 uppercase">Verified</span>
            </div>
            <div className="w-[1px] h-6 bg-white/20" />
            <div className="flex flex-col items-center">
               <span className="text-[10px] font-bold text-white uppercase tracking-tighter">Secure</span>
               <span className="text-[8px] text-white/50 uppercase">AES-256</span>
            </div>
          </div>
        </div>
      </form>
    </div>

  );
}
