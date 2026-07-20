import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Luxury Apartments & Plots Pune | Kumar Magnacity",
  description: "Master product hub for 2BHK, 3BHK flats, floor plans, and premium NA bungalow plots.",
};

const LINKS = [
  { title: "2BHK Price & Details", url: "/kumar-magnacity-2bhk-flats-hadapsar-pune-price" },
  { title: "3BHK Price & Details", url: "/kumar-magnacity-3bhk-apartments-manjari-pune-price" },
  { title: "Floor Plans (2BHK & 3BHK)", url: "/kumar-magnacity-floor-plan-2bhk-3bhk" },
  { title: "NA Bungalow Plots Concept", url: "/kumar-magnacity-na-bungalow-plots-concept" },
  { title: "Master Layout", url: "/kumar-magnacity-na-bungalow-plots-master-plan" }
];

export default function ProductHub() {
  return (
    <main className="min-h-screen bg-dark pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-4 bg-accent/10 rounded-2xl">
            <Building2 size={32} className="text-accent" />
          </div>
          <div>
             <h1 className="text-4xl md:text-5xl font-heading font-black text-white uppercase tracking-tighter">Luxury Real Estate Hub</h1>
             <p className="text-accent uppercase font-bold tracking-widest text-xs mt-2">Topic Cluster Master Index</p>
          </div>
        </div>
        
        <p className="text-white/60 text-lg mb-12">
          Dive into our premium inventory suite. Explore exact pricing, precise floor plans, and architectural specifications for our 2BHK, 3BHK, and NA Bungalow Plots.
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
