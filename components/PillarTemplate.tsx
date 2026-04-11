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
  isMarathi = false
}: PillarTemplateProps) {
  return (
    <main className="min-h-screen bg-light">
      <Header />
      
      {/* Immersive Pillar Hero */}
      <section className="relative pt-64 pb-32 overflow-hidden bg-dark">
        {/* Cinematic Background Layer */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-[url('/assets/hero-bg.jpg')] bg-cover bg-center opacity-30 scale-110 blur-[2px]" 
            style={{ transformOrigin: 'center' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-primary/40 to-dark" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.05),transparent)]" />
        </div>

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <div className="max-w-4xl space-y-8 reveal-luxury">
            {badge && (
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 border border-accent/40 text-accent font-bold text-[10px] md:text-[11px] uppercase tracking-[0.25em] backdrop-blur-md">
                {badge}
              </div>
            )}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-8xl font-heading font-bold text-white leading-[1.1] tracking-tight">
                {title.split(' ').map((word, i) => (
                  <span key={i} className={cn(i === 2 ? "text-accent italic font-light" : "text-white")}>
                    {word}{' '}
                  </span>
                ))}
              </h1>
              <div className="w-24 h-1 bg-accent/50 rounded-full" />
            </div>
            <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed max-w-2xl border-l border-accent/30 pl-8">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-light to-transparent" />
      </section>

      {/* Modern Content Architecture */}
      <section className="py-24 relative z-20 -mt-10">
        <div className="container mx-auto max-w-7xl px-4">
           <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-white/20 reveal-luxury" style={{ animationDelay: '0.3s' }}>
              {children}
           </div>
        </div>
      </section>

      <Footer />
      <SovereignBar />
    </main>
  );
}
