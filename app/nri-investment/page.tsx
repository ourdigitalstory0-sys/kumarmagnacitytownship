import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NRIEnquiryForm from "@/components/NRIEnquiryForm";
import { Globe, TrendingUp, Building2, ShieldCheck, Scale, Plane, ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "NRI Real Estate Investment | Kumar Magnacity Pune",
  description: "Exclusive NRI investment opportunities in Pune Real Estate. High ROI, FEMA compliant, seamless repatriation, and dedicated global relationship managers. 2BHK, 3BHK & NA Plots at Kumar Magnacity.",
  alternates: {
    canonical: "https://kumarmagnacitytownship.com/nri-investment",
  },
};

export default function NRIInvestmentPage() {
  return (
    <main className="min-h-screen bg-dark text-white selection:bg-accent selection:text-dark">
      <Header />
      
      {/* 1. GLOBAL HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden">
        {/* Abstract Globe Background */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/assets/hero-bg.jpg" 
            alt="Kumar Magnacity Masterplan" 
            fill 
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/90 to-dark" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,162,39,0.1)_0,transparent_50%)]" />
        </div>

        <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm">
              <Globe className="text-accent" size={16} />
              <span className="text-accent text-[11px] font-bold uppercase tracking-[0.2em]">Global Capital Welcome</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-heading font-bold leading-[1.1] tracking-tight">
              Invest in Pune. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#FFF8D6]">From Anywhere.</span>
            </h1>
            
            <p className="text-white/60 text-lg max-w-xl font-light leading-relaxed">
              Leverage the historic depreciation of the INR against the USD & AED. Secure premium 2BHK, 3BHK apartments or NA Bungalow Plots at Kumar Magnacity with seamless FEMA compliance and end-to-end digital transactions.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 bg-white/5 px-4 py-3 rounded-2xl border border-white/10">
                <TrendingUp className="text-accent" size={20} />
                <div className="text-left">
                    <p className="text-[10px] text-white/50 uppercase">Capital Appreciation</p>
                    <p className="font-bold">12-15% Est. YoY</p>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-4 py-3 rounded-2xl border border-white/10">
                <ShieldCheck className="text-accent" size={20} />
                <div className="text-left">
                    <p className="text-[10px] text-white/50 uppercase">Legal Compliance</p>
                    <p className="font-bold">100% Repatriable</p>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <NRIEnquiryForm />
          </div>
        </div>
      </section>

      {/* 2. THE NRI ADVANTAGE (CURRENCY & ROI) */}
      <section className="py-24 border-t border-white/5 relative overflow-hidden bg-white/[0.02]">
        <div className="container-custom relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                <h2 className="text-3xl md:text-5xl font-heading font-bold">The Strategic Multiplier</h2>
                <p className="text-white/50">Why Non-Resident Indians are aggressively pivoting capital into East Pune real estate right now.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Advantage 1 */}
                <div className="bg-[#0A0A0A] p-8 rounded-3xl border border-white/10 group hover:border-accent/50 transition-colors">
                    <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                        <TrendingUp size={28} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Currency Arbitrage</h3>
                    <p className="text-white/50 text-sm leading-relaxed">
                        With the USD & AED at historic highs against the INR, your foreign capital buys up to 20% more square footage than it did 3 years ago. Real estate is the ultimate hedge.
                    </p>
                </div>
                {/* Advantage 2 */}
                <div className="bg-[#0A0A0A] p-8 rounded-3xl border border-white/10 group hover:border-accent/50 transition-colors">
                    <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                        <Building2 size={28} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">East Pune Boom</h3>
                    <p className="text-white/50 text-sm leading-relaxed">
                        Manjari and Hadapsar are witnessing massive infrastructure injections (Ring Road, Metro Expansion). Property rates are projected to appreciate aggressively over the next 5 years.
                    </p>
                </div>
                {/* Advantage 3 */}
                <div className="bg-[#0A0A0A] p-8 rounded-3xl border border-white/10 group hover:border-accent/50 transition-colors">
                    <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                        <Plane size={28} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Zero Travel Required</h3>
                    <p className="text-white/50 text-sm leading-relaxed">
                        From 4K drone layouts to digital execution of Agreements and Power of Attorney (POA), our NRI desk handles the entire acquisition process virtually.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* 3. FEMA & COMPLIANCE */}
      <section className="py-24 border-t border-white/5">
        <div className="container-custom">
            <div className="bg-gradient-to-r from-accent/5 to-transparent border border-accent/20 rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-[10px] text-accent font-bold uppercase tracking-widest border border-accent/20">
                        <Scale size={12} /> Legal Compliance
                    </div>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold">100% Repatriable. <br/>Fully FEMA Compliant.</h2>
                    <p className="text-white/60 text-lg leading-relaxed max-w-xl">
                        Investing in India doesn't mean your funds are locked. Under the Foreign Exchange Management Act (FEMA), NRIs and OCIs can freely acquire residential and commercial properties in India. 
                    </p>
                    <ul className="space-y-4 pt-4">
                        <li className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0">
                                <CheckCircle2 size={14} />
                            </div>
                            <span className="text-white/80">Funds can be remitted via NRE/NRO or FCNR accounts.</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0">
                                <CheckCircle2 size={14} />
                            </div>
                            <span className="text-white/80">Principal investment and rental yields are repatriable.</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0">
                                <CheckCircle2 size={14} />
                            </div>
                            <span className="text-white/80">Home loans available in India up to 80% of property value.</span>
                        </li>
                    </ul>
                </div>
                
                {/* Visual / Branding */}
                <div className="w-full md:w-[400px] aspect-square relative rounded-[2.5rem] overflow-hidden border border-white/10 group">
                    <Image 
                        src="/assets/plot-layout.jpg"
                        alt="Virtual Tours for NRIs"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-80" />
                    <div className="absolute bottom-8 left-8 right-8">
                        <div className="flex items-center justify-between border-b border-white/20 pb-4 mb-4">
                            <span className="text-sm text-white/50 uppercase tracking-widest">Digital Signatures</span>
                            <CheckCircle2 className="text-accent" size={16} />
                        </div>
                        <div className="flex items-center justify-between border-b border-white/20 pb-4 mb-4">
                            <span className="text-sm text-white/50 uppercase tracking-widest">Virtual POA Setup</span>
                            <CheckCircle2 className="text-accent" size={16} />
                        </div>
                        <div className="flex items-center justify-between pb-2">
                            <span className="text-sm text-white/50 uppercase tracking-widest">Dedicated RM</span>
                            <CheckCircle2 className="text-accent" size={16} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
