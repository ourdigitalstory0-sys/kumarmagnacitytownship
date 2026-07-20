import PillarTemplate from "@/components/PillarTemplate";
import EnquiryForm from "@/components/EnquiryForm";
import { TrendingUp, BarChart3, PieChart, ShieldCheck, Landmark } from "lucide-react";


export const metadata = {
  title: "Investment Potential | Kumar Magnacity ROI Analysis",
  description: "Analyze the investment ROI for NA plots in Hadapsar-Manjari, Pune. Learn why land at Kumar Magnacity is a superior asset class for local and NRI investors."
};

const STATS = [
  { label: "CAGR Potential", value: "12.5%+", detail: "Historical performance of branded land in Pune East." },
  { label: "Infrastructure", value: "₹4500Cr+", detail: "PMRDA Ring Road & Metro Line 3 investment." },
  { label: "Legacy Trust", value: "59 Years", detail: "Unmatched execution track record by Kumar Properties." }
];

export default function InvestmentPage() {
  return (
    <PillarTemplate 
      title="The Wealth Engine" 
      subtitle="Strategically located NA plots with projected high appreciation in Pune's most active growth corridor."
      badge="Investment ROI"
    >
      <div className="space-y-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {STATS.map((stat, idx) => (
             <div key={idx} className="p-10 bg-white rounded-[3rem] border border-dark/5 shadow-sm text-center space-y-4">
                <p className="text-accent uppercase font-black tracking-widest text-xs">{stat.label}</p>
                <div className="text-5xl font-heading font-bold text-dark">{stat.value}</div>
                <p className="text-dark/40 text-sm">{stat.detail}</p>
             </div>
           ))}
        </div>

        <div className="bg-dark text-white rounded-[4rem] p-12 md:p-24 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <div className="space-y-8">
              <h3 className="text-4xl font-heading font-bold leading-tight">Branded Land vs. Traditional Assets</h3>
              <p className="text-white/60 font-light text-xl leading-relaxed">
                While apartments depreciate and local plots carry legal risks, **Sovereign Branded Land** at Kumar Magnacity offers the rarity of land with the legal purity of a corporate development. 
              </p>
              <div className="flex gap-4">
                 <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest text-accent">
                    <ShieldCheck size={14} /> 100% Legal Title
                 </div>
                 <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest text-accent">
                    <TrendingUp size={14} /> High Appreciation
                 </div>
              </div>
           </div>
           <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-[3rem] space-y-6">
              <div className="space-y-2">
                 <p className="text-[10px] uppercase font-bold text-accent tracking-[5px]">Yield Projection</p>
                 <div className="h-40 flex items-end gap-2 pt-8">
                    <div className="flex-1 bg-white/10 h-[40%] rounded-t-xl" />
                    <div className="flex-1 bg-white/20 h-[60%] rounded-t-xl" />
                    <div className="flex-1 bg-accent h-[90%] rounded-t-xl relative">
                       <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-white font-bold">2026-28</div>
                    </div>
                 </div>
                 <p className="text-xs text-white/40 pt-4">Estimated valuation growth following Ring Road completion.</p>
              </div>
           </div>
        </div>

        {/* The Expert Take Section */}
        <div className="max-w-6xl mx-auto space-y-12 py-16">
           <div className="text-center space-y-4">
              <h3 className="text-3xl md:text-5xl font-heading font-bold text-dark">Expert Take <span className="text-primary italic font-light">Insight</span></h3>
              <p className="text-dark/50 text-lg">Straight facts on who should invest in Kumar Magnacity, and why.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-10 rounded-3xl border border-primary/20 bg-primary/5 space-y-6">
                 <h4 className="text-xl font-bold text-dark flex items-center gap-3">
                    <span className="text-primary text-2xl">✔️</span> Strategic Fit
                 </h4>
                 <ul className="space-y-4">
                    <li className="text-dark/70 border-b border-dark/5 pb-2">Ideal for <strong>long-term investment</strong> (5–10 years horizon) for maximum multiplier effect.</li>
                    <li className="text-dark/70 border-b border-dark/5 pb-2">Strongest option for end-users seeking the independent <strong>villa lifestyle</strong> near IT hubs.</li>
                    <li className="text-dark/70 border-b border-dark/5 pb-2">Perfect for HNI buyers transitioning out of high-density apartments.</li>
                 </ul>
              </div>

              <div className="p-10 rounded-3xl border border-dark/10 bg-white shadow-xl space-y-6">
                 <h4 className="text-xl font-bold text-dark flex items-center gap-3">
                    <span className="text-red-500 text-2xl">❗</span> Practical Considerations
                 </h4>
                 <ul className="space-y-4">
                    <li className="text-dark/70 border-b border-dark/5 pb-2">Not ideal for short-term flipping unless bought during early-phase access.</li>
                    <li className="text-dark/70 border-b border-dark/5 pb-2">Buyers should actively compare plotted projects (e.g., Godrej, VTP plots) to understand the massive 150-acre scale advantage.</li>
                    <li className="text-dark/70 border-b border-dark/5 pb-2">Evaluate central vs peripheral plot locations for future resale premium.</li>
                 </ul>
              </div>
           </div>
        </div>

        
        <div id="contact" className="max-w-4xl mx-auto">
          <EnquiryForm 
            title="Get the ROI Report" 
            subtitle="Download our detailed investment whitepaper for Pune East real estate."
            buttonText="Download Analysis" 
          />
        </div>
      </div>
    </PillarTemplate>
  );
}
