"use client";

import { motion } from "framer-motion";
import { Trees, Warehouse, Droplets, Trophy, ShieldCheck, HeartPulse, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const amenities = [
  {
    icon: <Warehouse />,
    title: "1 Lakh Sq.ft Clubhouse",
    subtitle: "The Magnum Opus",
    desc: "A massive central social hub featuring banquet halls, luxury lounges, and fine dining.",
    category: "Social"
  },
  {
    icon: <Trophy />,
    title: "Olympic Sports Arena",
    subtitle: "Podium Performance",
    desc: "Professional courts for badminton, tennis, and squash within a gated ecosystem.",
    category: "Sports"
  },
  {
    icon: <Droplets />,
    title: "Eco-Filtration Lakes",
    subtitle: "Sustainable Serenity",
    desc: "Natural water bodies integrated into the 150-acre masterplan for thermal comfort.",
    category: "Nature"
  },
  {
    icon: <HeartPulse />,
    title: "Wellness Sanctuary",
    subtitle: "Mind & Body",
    desc: "State-of-the-art gymnasium, open-air yoga decks, and meditation zones.",
    category: "Wellness"
  },
  {
    icon: <Trees />,
    title: "25-Acre Greens",
    subtitle: "Infinite Oxygen",
    desc: "Vast landscaped gardens, peripheral Miyawaki forests, and jogging trails.",
    category: "Nature"
  },
  {
    icon: <ShieldCheck />,
    title: "Tier-IV Security",
    subtitle: "Cerebro Logic",
    desc: "AI-monitored surveillance, biometric access, and 24/7 rapid response teams.",
    category: "Safety"
  }
];

export default function AmenityGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {amenities.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="group relative h-full"
        >
          <div className="h-full p-8 md:p-10 rounded-[3rem] bg-white/[0.03] border border-white/5 hover:border-accent/40 transition-all duration-500 flex flex-col space-y-8 relative overflow-hidden backdrop-blur-3xl shadow-2xl">
            {/* Hover Shine */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-dark transition-all duration-500 shadow-xl group-hover:scale-110">
               {item.icon}
            </div>

            <div className="space-y-4 flex-1">
               <div className="space-y-1">
                  <span className="text-[10px] text-accent font-bold uppercase tracking-[0.3em] font-mono">
                     {item.category} / {item.subtitle}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white group-hover:text-accent transition-colors">
                     {item.title}
                  </h3>
               </div>
               <p className="text-white/40 font-light text-sm md:text-base leading-relaxed">
                  {item.desc}
               </p>
            </div>

            <div className="pt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 text-[10px] font-bold text-accent uppercase tracking-widest">
               EXPLORE DETAILS <Sparkles size={12} />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
