"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface ParallaxHeroProps {
  title: string;
  subtitle: string;
  badge: string;
  imagePath?: string;
  accentColor?: "gold" | "green";
}

export default function ParallaxHero({
  title,
  subtitle,
  badge,
  imagePath,
  accentColor = "gold"
}: ParallaxHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scaleBackground = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const isGold = accentColor === "gold";

  return (
    <section 
      ref={containerRef}
      className="relative h-[80vh] md:h-[90vh] flex items-center justify-center overflow-hidden bg-dark"
    >
      {/* Background layer */}
      <motion.div 
        style={{ y: yBackground, scale: scaleBackground }}
        className="absolute inset-0 z-0"
        aria-hidden="true"
      >
        {imagePath ? (
          <>
            <div className="absolute inset-0 bg-dark/70 z-10" />
            <img 
              src={imagePath} 
              alt=""
              className="w-full h-full object-cover"
            />
          </>
        ) : (
          <div className="absolute inset-0">
            <div className={cn(
              "absolute inset-0 opacity-20",
              isGold ? "bg-[radial-gradient(circle_at_50%_50%,rgba(201,162,39,0.2),transparent_70%)]" : "bg-[radial-gradient(circle_at_50%_50%,rgba(10,77,60,0.4),transparent_70%)]"
            )} />
            <div className="absolute inset-0 bg-[url('/assets/noise.png')] opacity-5 mix-blend-overlay" />
          </div>
        )}
      </motion.div>

      {/* Content layer */}
      <motion.header 
        style={{ y: yText, opacity: opacityText }}
        className="relative z-10 container mx-auto px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={cn(
            "inline-flex items-center gap-2 px-6 py-2 rounded-full border bg-opacity-10 backdrop-blur-md text-[10px] md:text-xs uppercase tracking-[0.4em] mb-8 shadow-2xl",
            isGold ? "border-accent/30 bg-accent/10 text-accent" : "border-primary/40 bg-primary/20 text-white"
          )}
          role="doc-subtitle"
        >
          <div className={cn(
            "w-2 h-2 rounded-full animate-pulse-slow",
            isGold ? "bg-accent shadow-[0_0_10px_rgba(201,162,39,0.8)]" : "bg-primary shadow-[0_0_10px_rgba(10,77,60,0.8)]"
          )} aria-hidden="true" />
          {badge}
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-white leading-[1.1] tracking-tight max-w-5xl mx-auto drop-shadow-2xl"
        >
          {title.split(" ").map((word, i) => (
            <span key={i} className="inline-block mr-[0.25em]">
              {word === "2BHK" || word === "3BHK" || word === "२ बीएचके" || word === "३ बीएचके" ? (
                <span className={isGold ? "text-accent" : "text-primary"}>{word}</span>
              ) : (
                word
              )}
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-8 text-lg md:text-2xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>
      </motion.header>

      {/* Fade out gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent z-20 pointer-events-none" aria-hidden="true" />
    </section>
  );
}
