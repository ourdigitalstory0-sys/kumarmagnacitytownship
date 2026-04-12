import PillarTemplate from "@/components/PillarTemplate";
import EnquiryForm from "@/components/EnquiryForm";
import { Compass, Shield, Zap, Droplets, Map } from "lucide-react";

export const runtime = "edge";

export const metadata = {
  title: "150-Acre Master Plan | Kumar Magnacity Township Layout",
  description: "View the comprehensive master plan of Kumar Magnacity. Explore the meticulously designed infrastructure, green belts, and amenity clusters across 150 acres."
};

export default function MasterPlanPage() {
  return (
    <PillarTemplate 
      title="The 150-Acre Vision" 
      subtitle="A meticulously planned landed estate where every sq.ft. is optimized for luxury, safety, and sustainable living."
      badge="Master Plan"
    >
      <div className="space-y-32">
        <div className="relative rounded-[4rem] overflow-hidden shadow-3xl border border-dark/5 bg-white">
           <div className="aspect-[21/9] bg-dark/5 relative group cursor-zoom-in">
              <div className="absolute inset-0 bg-[url('/assets/plot-layout.jpg')] bg-cover bg-center" />
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <div className="bg-white px-8 py-3 rounded-full text-primary font-bold shadow-xl">Click to Zoom Master Plan</div>
              </div>
           </div>
           <div className="p-12 md:p-20 grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                 <h3 className="text-3xl font-heading font-bold text-dark">Infrastructure Anatomy</h3>
                 <p className="text-dark/60 leading-relaxed font-light text-lg">
                    The master plan features wide internal boulevards (12m - 18m), a centralized utility grid, and a series of interconnected green belts ('Botanic Trails') that act as the lungs of the township.
                 </p>
              </div>
              <div className="grid grid-cols-2 gap-8">
                 <div className="space-y-2">
                    <Zap className="text-accent" size={20} />
                    <p className="font-bold text-sm">Underground Grid</p>
                    <p className="text-dark/40 text-xs">No overhead wires for an unobstructed skyline.</p>
                 </div>
                 <div className="space-y-2">
                    <Droplets className="text-accent" size={20} />
                    <p className="font-bold text-sm">Water Autonomy</p>
                    <p className="text-dark/40 text-xs">Integrated STPs and rainwater harvesting.</p>
                 </div>
                 <div className="space-y-2">
                    <Shield className="text-accent" size={20} />
                    <p className="font-bold text-sm">Gated Enclave</p>
                    <p className="text-dark/40 text-xs">Controlled access for absolute resident privacy.</p>
                 </div>
                 <div className="space-y-2">
                    <Compass className="text-accent" size={20} />
                    <p className="font-bold text-sm">Vastu Compliant</p>
                    <p className="text-dark/40 text-xs">A master plan aligned with rhythmic energy.</p>
                 </div>
              </div>
           </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <EnquiryForm 
            title="Get the HD Master Plan" 
            subtitle="Request the high-resolution PDF with plot numbers and dimensions."
            buttonText="Download HD Map" 
          />
        </div>
      </div>
    </PillarTemplate>
  );
}
