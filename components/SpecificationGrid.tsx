"use client";

import { motion } from "framer-motion";
import { apartmentSpecs } from "@/data/apartments";
import { ShieldCheck, Layers, CookingPot, DoorOpen, Zap, ArrowUp } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  "shield": ShieldCheck,
  "layers": Layers,
  "chef-hat": CookingPot,
  "door-open": DoorOpen,
  "zap": Zap,
  "arrow-up": ArrowUp,
};

export default function SpecificationGrid() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <section className="py-24 bg-dark text-white relative overflow-hidden" id="specifications">
      {/* Abstract background shapes */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0A4D3C]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#C9A227]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/80 text-[10px] uppercase tracking-[0.3em] mb-6"
          >
            <ShieldCheck size={12} className="text-[#C9A227]" />
            Uncompromising Quality
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-5xl md:text-7xl mb-6"
          >
            Premium <span className="text-[#C9A227]">Specifications</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto"
          >
            Every detail is meticulously crafted using industry-leading materials to ensure a lifetime of elegance, safety, and comfort.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {apartmentSpecs.map((spec, idx) => {
            const Icon = iconMap[spec.icon] || ShieldCheck;
            
            return (
              <motion.div
                key={idx}
                variants={item}
                className="glass-obsidian rounded-[2.5rem] p-8 border border-white/5 hover:border-[#C9A227]/30 transition-colors duration-500 group relative overflow-hidden"
              >
                {/* Hover gradient reveal */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#C9A227]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#C9A227] mb-8 group-hover:scale-110 group-hover:bg-[#C9A227]/20 transition-all duration-300">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-2xl font-heading mb-6">{spec.category}</h3>
                  
                  <ul className="space-y-4">
                    {spec.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="group/item">
                        <span className="block text-[10px] uppercase tracking-widest text-white/40 font-bold mb-1 group-hover/item:text-[#C9A227] transition-colors">
                          {item.label}
                        </span>
                        <span className="block text-sm text-white/80">
                          {item.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
