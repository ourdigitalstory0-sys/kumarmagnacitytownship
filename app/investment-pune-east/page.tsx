import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Pune East Investment Hub | Kumar Magnacity",
  description: "Master intelligence hub for real estate ROI, NRI investment guides, and market data in Pune East.",
};

const LINKS = [
  { title: "NRI Investment Guide", url: "/insights/nri-investment-manjari" },
  { title: "Pune East Market Data", url: "/kumar-magnacity-market-data-pune-east" },
  { title: "ROI Calculator", url: "/roi-calculator" },
  { title: "Ring Road Impact", url: "/insights/pune-ring-road-impact" },
  { title: "Investment Matrix", url: "/kumar-magnacity-investment-plan-pune-east" }
];

export default function InvestmentHub() {
  return (
    <main className="min-h-screen bg-dark pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-4 bg-accent/10 rounded-2xl">
            <TrendingUp size={32} className="text-accent" />
          </div>
          <div>
             <h1 className="text-4xl md:text-5xl font-heading font-black text-white uppercase tracking-tighter">Pune East Investment Hub</h1>
             <p className="text-accent uppercase font-bold tracking-widest text-xs mt-2">Topic Cluster Master Index</p>
          </div>
        </div>
        
        <p className="text-white/60 text-lg mb-12">
          Explore comprehensive intelligence on capital appreciation, ROI metrics, and market trends shaping the real estate landscape of Pune East.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {LINKS.map((link, idx) => (
            <Link key={idx} href={link.url} className="group flex items-center justify-between p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-accent transition-colors">
              <span className="font-heading font-bold text-white group-hover:text-accent transition-colors">{link.title}</span>
              <ArrowRight size={20} className="text-white/20 group-hover:text-accent group-hover:translate-x-2 transition-transform" />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
