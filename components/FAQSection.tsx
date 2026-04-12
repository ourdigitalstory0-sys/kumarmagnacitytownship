"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  "@type": string;
  name: string;
  acceptedAnswer: {
    "@type": string;
    text: string;
  };
}

interface FAQSectionProps {
  faqJson: {
    mainEntity: FAQItem[];
  } | null;
}

export default function FAQSection({ faqJson }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!faqJson || !faqJson.mainEntity) return null;

  return (
    <section className="py-20 bg-light border-y">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 rounded-full text-primary text-[10px] font-bold uppercase tracking-widest border border-primary/10">
            <HelpCircle size={14} />
            Investment Intelligence
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-dark">
            Investor FAQs
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="space-y-4">
          {faqJson.mainEntity.map((item, index) => (
            <div 
              key={index}
              className={cn(
                "bg-white rounded-2xl border transition-all duration-300",
                openIndex === index ? "border-accent shadow-xl" : "border-dark/5 shadow-sm hover:border-dark/20"
              )}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left group"
              >
                <span className="font-heading font-bold text-lg md:text-xl text-dark group-hover:text-primary transition-colors pr-4">
                  {item.name}
                </span>
                <div className={cn(
                  "shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all",
                  openIndex === index ? "bg-accent text-dark rotate-180" : "bg-dark/5 text-dark/40"
                )}>
                  {openIndex === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </div>
              </button>
              
              <div className={cn(
                "overflow-hidden transition-all duration-500 ease-in-out",
                openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              )}>
                <div className="p-6 md:p-8 pt-0 border-t border-dark/5">
                  <p className="text-dark/60 leading-relaxed text-base">
                    {item.acceptedAnswer.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* JSON-LD for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }}
        />
      </div>
    </section>
  );
}
