import PillarTemplate from "@/components/PillarTemplate";
import EnquiryForm from "@/components/EnquiryForm";
import { Shield, MapPin, LandPlot, TrendingUp, Gem, Sparkles } from "lucide-react";

export const runtime = "edge";

export const metadata = {
  title: "The Vision & Concept | Kumar Magnacity | The Pride of Pune's Rising East",
  description: "Experience the vision of a 150-acre Sovereign Landed Estate. Discover the architectural philosophy behind Kumar Magnacity's luxury plots."
};

export default function ConceptPage() {
  return (
    <PillarTemplate 
      title="The Sovereign Vision" 
      subtitle="A 150-acre architectural masterpiece designed for Pune's rising east. Where legacy meets modern luxury."
      badge="The Concept"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
           <div className="space-y-4">
             <h2 className="text-3xl font-heading font-bold text-dark">Landed Estate Mastery</h2>
             <p className="text-dark/60 leading-relaxed">
               Kumar Magnacity isn't just a layout; it's a planned ecosystem. At the heart of our concept is the 'Sovereign' lifestyle—providing landowners with unchecked freedom, absolute privacy, and a gated infrastructure that rivals the best in the world.
             </p>
           </div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
             <div className="p-6 bg-white rounded-2xl border border-dark/5 shadow-sm">
                <Shield className="text-accent mb-4" size={24} />
                <h4 className="font-bold mb-2">Absolute Security</h4>
                <p className="text-xs text-dark/40">3-tier gated entry and 24/7 surveillance.</p>
             </div>
             <div className="p-6 bg-white rounded-2xl border border-dark/5 shadow-sm">
                <LandPlot className="text-accent mb-4" size={24} />
                <h4 className="font-bold mb-2">25+ Acres of Green</h4>
                <p className="text-xs text-dark/40">Immersive landscaped greens designed for holistic wellness.</p>
             </div>
             <div className="p-6 bg-white rounded-2xl border border-dark/5 shadow-sm sm:col-span-2 flex items-center justify-between">
                <div>
                  <h4 className="font-bold mb-2">A City Within a City</h4>
                  <p className="text-xs text-dark/40">Featuring high street retail, food courts, schools, and healthcare inside the township.</p>
                </div>
                <Sparkles className="text-accent" size={32} />
             </div>
           </div>
        </div>
        
        <div className="relative">
           <div className="aspect-[4/5] bg-dark/5 rounded-[3rem] overflow-hidden">
              <div className="absolute inset-0 bg-[url('/assets/amenities.jpg')] bg-cover bg-center" />
           </div>
           <div className="absolute -bottom-10 -left-10 bg-accent p-10 rounded-[2rem] text-dark shadow-2xl hidden md:block">
              <span className="block text-4xl font-heading font-bold">150+</span>
              <span className="text-[10px] font-bold uppercase tracking-widest">Acre Master-plan</span>
           </div>
        </div>
      </div>

      <div className="mt-40 bg-dark text-white rounded-[4rem] p-12 md:p-24 overflow-hidden relative">
         <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 blur-[150px] rounded-full" />
         <div className="relative z-10 max-w-2xl">
            <h3 className="text-4xl font-heading font-bold mb-8 italic">"A plot is your canvas. Let your legacy be the masterpiece."</h3>
            <div className="flex items-center gap-4 border-t border-white/10 pt-8 mt-8">
               <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary font-bold">KP</div>
               <div>
                  <p className="font-bold">Kumar Properties</p>
                  <p className="text-white/40 text-sm">Building Trust Since 1966</p>
               </div>
            </div>
         </div>
      </div>
      
      <div id="contact" className="mt-32">
        <div className="max-w-4xl mx-auto">
          <EnquiryForm 
            title="Design Your Legacy" 
            subtitle="Get early access to our most premium east-facing plots."
            buttonText="Request Presentation" 
          />
        </div>
      </div>
    </PillarTemplate>
  );
}
