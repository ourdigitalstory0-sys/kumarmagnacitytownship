"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  align?: "left" | "center";
  className?: string;
  dark?: boolean;
}

export default function SectionHeader({
  title,
  subtitle,
  badge,
  align = "center",
  className,
  dark = false,
}: SectionHeaderProps) {
  return (
    <div className={cn(
      "space-y-4 md:space-y-6 max-w-4xl",
      align === "center" && "mx-auto text-center",
      className
    )}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold text-[10px] md:text-[11px] uppercase tracking-[0.4em]"
        >
          <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
          {badge}
        </motion.div>
      )}
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={cn(
          "text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.1] tracking-tight",
          dark ? "text-white" : "text-dark"
        )}
      >
        {title.split("<br/>").map((t, i) => (
          <span key={i}>
            {t}
            {i < title.split("<br/>").length - 1 && <br />}
          </span>
        ))}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={cn(
            "text-base md:text-xl font-light leading-relaxed max-w-2xl",
            align === "center" && "mx-auto",
            dark ? "text-white/40" : "text-dark/40"
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
