"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";

interface FeatureCard {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface PersonaDeepDiveProps {
  personaTitle: string;
  personaSubtitle: string;
  features: FeatureCard[];
  accentColor?: "gold" | "green";
}

export default function PersonaDeepDive({
  personaTitle,
  personaSubtitle,
  features,
  accentColor = "gold"
}: PersonaDeepDiveProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const isGold = accentColor === "gold";

  return (
    <section ref={containerRef} className="py-24 md:py-40 bg-dark relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Sticky Left Sidebar */}
          <aside className="lg:col-span-5 lg:sticky lg:top-40 space-y-6" aria-labelledby="persona-title">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-accent to-transparent" aria-hidden="true" />
              <h2 id="persona-title" className="text-4xl md:text-6xl font-heading font-bold text-white leading-tight">
                {personaTitle}
              </h2>
              <p className="text-xl text-white/50 leading-relaxed font-light">
                {personaSubtitle}
              </p>
            </motion.div>
          </aside>

          {/* Scrolling Right Features */}
          <div className="lg:col-span-7 space-y-8 md:space-y-12" role="list">
            {features.map((feature, idx) => {
              // Creating a staggered entry based on index
              return (
                <motion.article
                  key={idx}
                  role="listitem"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: idx * 0.1, ease: "easeOut" }}
                  className="group relative"
                >
                  <div className={cn(
                    "absolute -inset-0.5 rounded-[2.5rem] blur opacity-20 group-hover:opacity-60 transition duration-1000",
                    isGold ? "bg-gradient-to-r from-accent to-accent/20" : "bg-gradient-to-r from-primary to-primary/20"
                  )} aria-hidden="true" />
                  <div className="relative glass-obsidian p-10 md:p-12 rounded-[2.5rem] border border-white/10 hover:border-white/20 transition-colors bg-dark/80 backdrop-blur-xl">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className={cn(
                        "w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border",
                        isGold ? "bg-accent/10 border-accent/20 text-accent" : "bg-primary/10 border-primary/20 text-white"
                      )} aria-hidden="true">
                        {feature.icon || <CheckCircle2 size={28} />}
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-2xl md:text-3xl font-heading font-bold text-white">
                          {feature.title}
                        </h3>
                        <p className="text-white/60 leading-relaxed text-lg">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
