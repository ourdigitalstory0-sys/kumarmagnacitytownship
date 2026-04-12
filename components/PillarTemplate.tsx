"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SovereignBar from "@/components/SovereignBar";
import { cn } from "@/lib/utils";

interface PillarTemplateProps {
  title: string;
  subtitle: string;
  badge?: string;
  children: React.ReactNode;
  isMarathi?: boolean;
}

export default function PillarTemplate({
  title,
  subtitle,
  badge,
  children,
}: PillarTemplateProps) {
  return (
    <main className="min-h-screen bg-light">
      <Header />
      
      {/* Immersive Pillar Hero - Stabilized Layout */}
      <section className="relative pt-48 pb-24 md:pt-64 md:pb-32 overflow-hidden bg-dark">
        {/* Cinematic Background Layer */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-[url('/assets/hero-bg.jpg')] bg-cover bg-center opacity-30 scale-110 blur-[2px]" 
            style={{ transformOrigin: 'center' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-primary/30 to-dark" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.05),transparent)]" />
        </div>

        <div className="container mx-auto max-w-7xl px-6 md:px-12 relative z-10">
          <div className="max-w-4xl space-y-10 reveal-luxury">
            {badge && (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/40 text-accent font-bold text-[10px] md:text-[11px] uppercase tracking-[0.25em] backdrop-blur-md">
                {badge}
              </div>
            )}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-heading font-bold text-white leading-[1.05] tracking-tight">
                {title.split(' ').map((word, i) => (
                  <span key={i} className={cn(i === 2 || i === 4 ? "text-accent italic font-light" : "text-white")}>
                    {word}{' '}
                  </span>
                ))}
              </h1>
              <div className="w-24 h-1.5 bg-accent/40 rounded-full" />
            </div>
            <p className="text-lg md:text-xl lg:text-2xl text-white/50 font-light leading-relaxed max-w-2xl border-l border-primary/40 pl-8">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Decorative Element - Smooth Bottom Fade */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-dark to-transparent opacity-50" />
      </section>

      {/* Modern Content Architecture - Stability Focus */}
      <section className="py-20 bg-light relative z-20 -mt-12 overflow-hidden">
        <div className="container mx-auto max-w-7xl px-6 md:px-12">
           <div className="bg-white rounded-[3rem] md:rounded-[4rem] p-8 md:p-20 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.08)] border border-dark/5 reveal-luxury" style={{ animationDelay: '0.3s' }}>
              {children}
           </div>
        </div>
      </section>

      <Footer />
      <SovereignBar />
    </main>
  );
}
