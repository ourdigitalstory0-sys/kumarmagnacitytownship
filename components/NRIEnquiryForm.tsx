"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Send, CheckCircle2, AlertCircle, Loader2, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { useDataLayer } from "@/hooks/useDataLayer";
import { submitLead } from "@/lib/submitLead";

interface NRIEnquiryFormProps {
  formId?: string;
  sourceUrl?: string;
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

export default function NRIEnquiryForm({
  formId = "nriEnquiryForm",
  sourceUrl = typeof window !== 'undefined' ? window.location.href : '',
  title = "Schedule a Virtual Site Tour",
  subtitle = "Discuss FEMA compliance, ROI, and dedicated NRI inventory with our global relationship managers.",
  buttonText = "Book Virtual Session",
}: NRIEnquiryFormProps) {
  const router = useRouter();
  const { trackLead } = useDataLayer();
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(form);
    
    // Honeypot
    const honeypot = formData.get("_honey");
    if (honeypot) {
      setStatus("success"); 
      return;
    }

    const name = formData.get("name") as string;
    const countryCode = formData.get("countryCode") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const timezone = formData.get("timezone") as string;
    const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
    const fullPhone = `${countryCode} ${phone}`;

    // Basic Validation (NRI phones can vary, so just ensuring digits)
    if (phone.replace(/\D/g, '').length < 7) {
      setStatus("error");
      setErrorMessage("Please enter a valid international mobile number.");
      return;
    }

    try {
      const isSuccess = await submitLead({
        name: name,
        phone: fullPhone,
        email: email,
        timezone: timezone,
        intent: "NRI Investment",
        source_url: sourceUrl || window.location.href,
        form_id: formId,
        timestamp: timestamp,
        _subject: `🌍 NRI LEAD: ${name} | ${fullPhone}`,
      });

      if (isSuccess) {
        setStatus("success");
        try {
          trackLead({
            lead_type: 'NRI_Enquiry',
            project: 'Kumar Magnacity',
            email: email,
            phone: fullPhone
          });
        } catch(e) {}
        setTimeout(() => {
          router.push("/kumar-magnacity-na-bungalow-plots-thank-you");
        }, 3000);
        return;
      }

      throw new Error("Lead submission failed");
    } catch (err: any) {
      console.warn("FormSubmit AJAX failed, using WhatsApp backup:", err.message);

      try {
        const waMessage = encodeURIComponent(
          `🌍 NRI LEAD - Kumar Magnacity\n` +
          `👤 Name: ${name}\n` +
          `📱 Phone: ${fullPhone}\n` +
          `✉️ Email: ${email}\n` +
          `⏰ Timezone: ${timezone}\n` +
          `📍 Source: ${sourceUrl || window.location.href}\n`
        );
        window.open(`https://wa.me/917744009295?text=${waMessage}`, "_blank");
      } catch (waErr) {
        console.error("WhatsApp backup also failed:", waErr);
      }

      setStatus("success");
      try {
        trackLead({
          lead_type: 'NRI_Enquiry',
          project: 'Kumar Magnacity',
          email: email,
          phone: fullPhone
        });
      } catch(e) {}
      setTimeout(() => {
        router.push("/kumar-magnacity-na-bungalow-plots-thank-you");
      }, 3000);
    }
  };

  return (
    <div className="w-full bg-[#050505] backdrop-blur-3xl border border-accent/20 p-8 md:p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(201,162,39,0.1)] relative overflow-hidden">
      
      {status === "success" && (
        <div className="absolute inset-0 z-50 bg-[#050505]/95 backdrop-blur-xl flex flex-col items-center justify-center p-8 text-center space-y-6 animate-fade-in text-white">
          <CheckCircle2 size={60} className="text-accent animate-pulse" />
          <div className="space-y-2">
              <h3 className="text-3xl font-heading font-bold tracking-widest text-accent uppercase">Session Confirmed</h3>
              <p className="text-white/60 text-sm">Your international relationship manager will contact you shortly.</p>
          </div>
        </div>
      )}

      <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/10 blur-[80px] rounded-full pointer-events-none" />
      
      <div className="relative mb-8 space-y-3 z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-[10px] text-accent font-bold uppercase tracking-widest">
            <Globe size={12} /> Global NRI Support
        </div>
        <h3 className="text-3xl font-heading font-bold text-white tracking-tight">{title}</h3>
        <p className="text-white/50 text-sm font-light leading-relaxed max-w-md">{subtitle}</p>
      </div>

      <form id={formId} onSubmit={handleSubmit} className="relative space-y-5 z-10">
        {/* Anti-spam */}
        <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

        <div className="group relative">
          <input
            type="text"
            name="name"
            required
            placeholder="Full Name"
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/60 transition-all placeholder:text-white/30 text-sm"
          />
        </div>

        <div className="flex gap-3">
          <select
            name="countryCode"
            className="w-[110px] bg-white/5 border border-white/10 rounded-2xl px-3 py-4 text-white focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/60 transition-all text-sm appearance-none text-center"
            defaultValue="+971"
          >
            <option value="+971">🇦🇪 +971</option>
            <option value="+1">🇺🇸 +1</option>
            <option value="+44">🇬🇧 +44</option>
            <option value="+65">🇸🇬 +65</option>
            <option value="+61">🇦🇺 +61</option>
            <option value="+91">🇮🇳 +91</option>
            <option value="Other">🌍 Other</option>
          </select>
          <input
            type="tel"
            name="phone"
            required
            placeholder="Mobile Number"
            className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/60 transition-all placeholder:text-white/30 text-sm"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="group relative">
            <input
                type="email"
                name="email"
                required
                placeholder="Email Address"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/60 transition-all placeholder:text-white/30 text-sm"
            />
            </div>
            <div className="group relative">
            <select
                name="timezone"
                required
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white/50 focus:text-white focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/60 transition-all text-sm appearance-none"
            >
                <option value="" disabled selected>Preferred Timezone</option>
                <option value="GST (Dubai)">GST (Dubai)</option>
                <option value="EST (US East)">EST (US East)</option>
                <option value="PST (US West)">PST (US West)</option>
                <option value="GMT (London)">GMT (London)</option>
                <option value="SGT (Singapore)">SGT (Singapore)</option>
                <option value="IST (India)">IST (India)</option>
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
          className="w-full bg-accent hover:bg-accent-hover text-dark font-black uppercase tracking-[0.2em] py-5 rounded-2xl transition-all flex items-center justify-center gap-3 disabled:opacity-50 hover:scale-[1.02] active:scale-[0.98] mt-4"
        >
          {status === "submitting" ? (
            <Loader2 className="animate-spin" size={20} />
          ) : (
            <>
              <span className="text-[13px]">{buttonText}</span>
              <Send size={16} />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
