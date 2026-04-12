import PillarTemplate from "@/components/PillarTemplate";
import FAQSection from "@/components/FAQSection";
import EnquiryForm from "@/components/EnquiryForm";
import { ShieldCheck, TrendingUp, Info } from "lucide-react";

export const metadata = {
  title: "Kumar Magnacity NA Bungalow Plots | Official Q&A Vault",
  description: "Comprehensive investor FAQs for Kumar Magnacity Manjari. Clear data on RERA compliance, NA plot legality, ROI projections, and Manjari infrastructure growth.",
};

const FAQ_DATA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is Kumar Magnacity RERA Registered and 100% legal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Kumar Magnacity is 100% RERA registered under project number P52100052096. Every plot is fully sanctioned NA (Non-Agricultural) with individual 7/12 extracts, ensuring absolute clear title and legal peace of mind."
      }
    },
    {
      "@type": "Question",
      "name": "What is the expected ROI for NA Bungalow Plots in Manjari by 2028?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Based on the upcoming Pune Outer Ring Road intersection and expansion of the Kharadi IT corridor, investors have seen a historical CAGR of 12.5%. Market data suggests that land scarcity in the Manjari-Hadapsar annexe will drive an accelerated 15-18% CAGR over the next 24-36 months."
      }
    },
    {
      "@type": "Question",
      "name": "How far is Kumar Magnacity from Kharadi EON IT Park?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kumar Magnacity is strategically located just 15-20 minutes from the Kharadi IT Hub, including EON IT Park and World Trade Center (WTC). The upcoming direct bridge connecting Manjari to Kharadi will further streamline this transit."
      }
    },
    {
      "@type": "Question",
      "name": "Can I get a home loan for NA Bungalow Plots at Kumar Magnacity?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. Since the project is RERA registered and fully sanctioned by PMRDA, all major nationalized and private banks (SBI, HDFC, ICICI, etc.) provide attractive land-plus-construction loan options for Kumar Magnacity."
      }
    },
    {
      "@type": "Question",
      "name": "What are the common amenities provided in the plotting township?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The 150-acre township features a massive ~1 Lakh sq.ft. clubhouse, integrated underground utility grids (no overhead cables), 24/7 high-tier security, internal wide tree-lined roads, and over 25 acres of dedicated landscaped greens."
      }
    },
    {
      "@type": "Question",
      "name": "What is the starting price for plots at Kumar Magnacity?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The current asset entry starts at ₹1.49Cr plus government taxes. This includes the gated community infrastructure and immediate possession-ready land with all basic utilities at the plot boundary."
      }
    }
  ]
};

export default function FAQVaultPage() {
  return (
    <PillarTemplate
      badge="Institutional Clarity"
      title="The Sovereign Q&A Vault"
      subtitle="Direct intelligence for smart investors. We address every technical and financial query regarding your legacy investment at Kumar Magnacity."
    >
      <div className="space-y-32 py-12">
        
        {/* Rapid Intelligence Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="p-10 rounded-[2.5rem] bg-white border border-dark/5 shadow-xl space-y-4">
              <ShieldCheck className="text-primary" size={32} />
              <h4 className="text-xl font-bold text-dark italic">Legal Fortress</h4>
              <p className="text-sm text-dark/50 leading-relaxed font-light">Individual 7/12 extracts and RERA registration ensuring 100% security for HNI and NRI investors.</p>
           </div>
           <div className="p-10 rounded-[2.5rem] bg-white border border-dark/5 shadow-xl space-y-4">
              <TrendingUp className="text-primary" size={32} />
              <h4 className="text-xl font-bold text-dark italic">ROI Hub</h4>
              <p className="text-sm text-dark/50 leading-relaxed font-light">Strategically positioned on the Pune-Solapur Highway & upcoming Outer Ring Road junction.</p>
           </div>
           <div className="p-10 rounded-[2.5rem] bg-white border border-dark/5 shadow-xl space-y-4">
              <Info className="text-primary" size={32} />
              <h4 className="text-xl font-bold text-dark italic">Ready Grids</h4>
              <p className="text-sm text-dark/50 leading-relaxed font-light">Underground electricity, water supply, and fiber optics are already integrated at the plot level.</p>
           </div>
        </section>

        {/* The Main FAQ Engine */}
        <FAQSection faqJson={FAQ_DATA} />

        {/* Global Conversion Engine */}
        <section className="bg-dark rounded-[4rem] p-12 md:p-24 relative overflow-hidden group">
           <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/10 translate-y-1/2 group-hover:translate-y-0 transition-transform duration-1000" />
           <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                 <h2 className="text-4xl md:text-6xl font-heading font-bold text-white leading-tight">Need More <br /><span className="text-accent underline decoration-accent/20 underline-offset-8 italic">Specific Answers?</span></h2>
                 <p className="text-white/50 text-xl font-light leading-relaxed max-w-xl">
                   Connect with our Senior Investment Analyst for a deep-dive session on the Kumar Magnacity master-plan and specific plot ROI forecasts.
                 </p>
                 <div className="flex items-center gap-4 text-white/20 uppercase tracking-[0.25em] text-[10px] font-bold">
                    Elite Desk Open <span className="text-accent">|</span> Mon - Sun
                 </div>
              </div>
              <div>
                 <EnquiryForm 
                    title="Speak to an Analyst" 
                    subtitle="Receive your custom ROI roadmap and private walkthrough invite."
                    buttonText="SCHEDULE CONSULTATION"
                 />
              </div>
           </div>
        </section>
      </div>
    </PillarTemplate>
  );
}
