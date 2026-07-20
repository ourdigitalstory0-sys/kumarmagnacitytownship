import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Flats in Pune East Location Hub | Kumar Magnacity",
  description: "Master location hub for proximity guides, maps, and advantages of living in Manjari, Hadapsar, and Kharadi.",
};

const LINKS = [
  { title: "Magarpatta Proximity", url: "/flats-near-magarpatta-city" },
  { title: "Kharadi IT Park Flats", url: "/flats-near-kharadi-it-park" },
  { title: "Manjari Location Map", url: "/kumar-magnacity-manjari-location-map" },
  { title: "Location Advantages", url: "/kumar-magnacity-location-advantages-hadapsar-manjari" }
];

export default function LocationHub() {
  return (
    <main className="min-h-screen bg-dark pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-4 bg-accent/10 rounded-2xl">
            <MapPin size={32} className="text-accent" />
          </div>
          <div>
             <h1 className="text-4xl md:text-5xl font-heading font-black text-white uppercase tracking-tighter">Location Hub: Pune East</h1>
             <p className="text-accent uppercase font-bold tracking-widest text-xs mt-2">Topic Cluster Master Index</p>
          </div>
        </div>
        
        <p className="text-white/60 text-lg mb-12">
          Discover why the Hadapsar-Manjari corridor is the fastest-growing residential hotspot in Pune, with unmatched connectivity to major IT parks.
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
