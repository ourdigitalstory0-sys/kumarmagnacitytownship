"use client";

import { useState } from "react";
import { useModal } from "@/lib/modal-context";
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
  const { modalData } = useModal();
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(form);
    
    // 1. SILENT HONEYPOT CHECK
    const honeypot = formData.get("_honey");
    if (honeypot) {
      console.warn("Honeypot triggered - bot detected.");
      setStatus("success"); // Tricked bot into thinking it succeeded
      return;
    }

    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const timing = formData.get("timing") as string;
    const intent = formData.get("intent") as string;
    const isMarathi = window.location.pathname.includes("/mr");

    // 2. VALIDATION
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phone.replace(/\s+/g, ""))) {
      setStatus("error");
      setErrorMessage(isMarathi 
        ? "कृपया वैध १०-अंकी मोबाईल नंबर प्रविष्ट करा." 
        : "Please enter a valid 10-digit mobile number.");
      return;
    }

    const data = {
      name,
      phone,
      email: email || "no-email@kumarmagnacity.com",
      timing,
      intent,
      source_url: sourceUrl,
      form_id: formId,
      plot_id: modalData?.plotId || "General",
      source_meta: modalData?.source || "Direct",
      timestamp: new Date().toISOString(),
    };

    try {
      // PRIMARY: Server-Side Quad-Tier API
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        setTimeout(() => {
           router.push(isMarathi ? "/mr/kumar-magnacity-na-bungalow-plots-thank-you" : "/kumar-magnacity-na-bungalow-plots-thank-you");
        }, 2000);
      } else {
        throw new Error("Server-Side Relay Failed");
      }

    } catch (error: any) {
      console.warn("Server Relay Failed. Triggering Emergency Client-Side Failover...", error.message);
      
      // EMERGENCY FAILOVER: Direct Browser-to-FormSubmit
      // This bypasses Vercel and the API entirely. No room for failure.
      try {
        const emergencyForm = document.createElement("form");
        emergencyForm.method = "POST";
        emergencyForm.action = "https://formsubmit.co/propsmartrealty@gmail.com";
        emergencyForm.style.display = "none";

        const fields = {
          ...data,
          _subject: `🚨 EMERGENCY LEAD (Bypass): ${data.name}`,
          _captcha: "false",
          _next: isMarathi 
            ? "https://kumarmagnacitytownship.com/mr/kumar-magnacity-na-bungalow-plots-thank-you" 
            : "https://kumarmagnacitytownship.com/kumar-magnacity-na-bungalow-plots-thank-you"
        };

        Object.entries(fields).forEach(([key, value]) => {
          const input = document.createElement("input");
          input.type = "hidden";
          input.name = key;
          input.value = value as string;
          emergencyForm.appendChild(input);
        });

        document.body.appendChild(emergencyForm);
        emergencyForm.submit();
        
        // Even if we submit, we show success to the user
        setStatus("success");
      } catch (failoverError) {
        console.error("Total Failure:", failoverError);
        setStatus("error");
        setErrorMessage(isMarathi 
          ? "सिस्टम एरर. कृपया पुन्हा प्रयत्न करा." 
          : "Failed to send lead. Please try again.");
      }
    }
  };

  const isMarathi = typeof window !== 'undefined' ? window.location.pathname.includes("/mr") : false;

  return (
    <div className={cn(
      "w-full transition-all duration-700 relative",
      isModal ? "p-0" : "bg-dark backdrop-blur-3xl border border-white/10 p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden"
    )}>
      {/* Success Overlay */}
      {status === "success" && (
        <div className="absolute inset-0 z-50 bg-dark/95 backdrop-blur-xl flex flex-col items-center justify-center p-12 text-center space-y-6 animate-fade-in text-white">
          <CheckCircle2 size={60} className="text-accent animate-bounce" />
          <div className="space-y-2">
              <h3 className="text-3xl font-heading font-bold tracking-widest uppercase">Lead Secured</h3>
              <p className="text-white/60 text-sm">Your details have been delivered to our priority inbox.</p>
          </div>
        </div>
      )}

      {!isModal && (
        <>
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/10 blur-[80px] rounded-full" />
          <div className="relative mb-8 space-y-2">
            <h3 className="text-3xl font-heading font-bold text-white tracking-tight">{title}</h3>
            <p className="text-white/40 text-sm font-light leading-relaxed">{subtitle}</p>
          </div>
        </>
      )}

      <form id={formId} onSubmit={handleSubmit} className="relative space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="group relative">
            <input
              type="text"
              name="name"
              required
              placeholder={isMarathi ? "पूर्ण नाव" : "Full Name"}
              className="w-full bg-[#1A1A1A] border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/60 transition-all placeholder:text-white/40 text-sm shadow-inner"
            />
          </div>
          <div className="group relative">
            <input
              type="tel"
              name="phone"
              required
              placeholder={isMarathi ? "मोबाईल नंबर" : "Mobile Number"}
              className="w-full bg-[#1A1A1A] border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/60 transition-all placeholder:text-white/40 text-sm shadow-inner"
            />
          </div>
        </div>

        <div className="group relative">
          <input
            type="email"
            name="email"
            required
            placeholder={isMarathi ? "ईमेल पत्ता" : "Email Address"}
            className="w-full bg-[#1A1A1A] border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/60 transition-all placeholder:text-white/40 text-sm shadow-inner"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="group relative">
            <select
              name="timing"
              required
              className="w-full bg-[#1A1A1A] border border-white/10 rounded-2xl px-5 py-4 text-white/50 focus:text-white focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/60 transition-all text-sm shadow-inner appearance-none"
            >
              <option value="" disabled selected>{isMarathi ? "भेट देण्याची वेळ" : "Expected Visit"}</option>
              <option value="Next 48 Hours">{isMarathi ? "पुढील ४८ तासात" : "Next 48 Hours"}</option>
              <option value="This Weekend">{isMarathi ? "या शनिवार-रविवारी" : "This Weekend"}</option>
              <option value="Next Week">{isMarathi ? "पुढील आठवड्यात" : "Next Week"}</option>
              <option value="Just Researching">{isMarathi ? "फक्त माहितीसाठी" : "Just Researching"}</option>
            </select>
          </div>
          <div className="group relative">
            <select
              name="intent"
              required
              className="w-full bg-[#1A1A1A] border border-white/10 rounded-2xl px-5 py-4 text-white/50 focus:text-white focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/60 transition-all text-sm shadow-inner appearance-none"
            >
              <option value="" disabled selected>{isMarathi ? "उद्देश निवडा" : "Investment Goal"}</option>
              <option value="Self Use Bungalow">{isMarathi ? "स्वतःचे घर" : "Self Use Bungalow"}</option>
              <option value="ROI / Investment">{isMarathi ? "गुंतवणूक / परतावा" : "ROI / Investment"}</option>
              <option value="Portfolio Extension">{isMarathi ? "पोर्टफोलिओ वाढ" : "Portfolio Extension"}</option>
            </select>
          </div>
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
               <span className="text-[8px] text-white/50 uppercase">{isMarathi ? "वारसा" : "Legacy"}</span>
            </div>
            <div className="w-[1px] h-6 bg-white/20" />
            <div className="flex flex-col items-center">
               <span className="text-[10px] font-bold text-white uppercase tracking-tighter">RERA</span>
               <span className="text-[8px] text-white/50 uppercase">{isMarathi ? "प्रमाणित" : "Verified"}</span>
            </div>
            <div className="w-[1px] h-6 bg-white/20" />
            <div className="flex flex-col items-center">
               <span className="text-[10px] font-bold text-white uppercase tracking-tighter">SECURE</span>
               <span className="text-[8px] text-white/50 uppercase">AES-256</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-[8px] text-white/20 uppercase tracking-[0.2em] font-medium">
             <div className="w-1 h-1 bg-accent rounded-full animate-pulse" />
             {isMarathi ? "तुमची माहिती सुरक्षित आहे" : "Your data is encrypted & secure"}
          </div>
        </div>
      </form>
    </div>

  );
}
