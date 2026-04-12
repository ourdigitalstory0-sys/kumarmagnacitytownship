import PillarTemplate from "@/components/PillarTemplate";
import EnquiryForm from "@/components/EnquiryForm";
import { Sparkles, Waves, Dumbbell, TreePine, Coffee, ShieldCheck } from "lucide-react";

export const runtime = "edge";

export const metadata = {
  title: "World-Class Amenities & Safety | Kumar Magnacity | The Pride of Pune's Rising East",
  description: "Discover the luxury amenities at Kumar Magnacity. From designer clubhouses and olympic pools to 3-tier security and sustainable infrastructure."
};

const AMENITIES_LIST = [
  { icon: Waves, title: "Lapis Pool", desc: "A temperature-controlled designer pool with infinity edges." },
  { icon: Dumbbell, title: "Elite Gym", desc: "High-end equipment curated for professional performance." },
  { icon: TreePine, title: "Botanic Trails", desc: "Native flora walking paths across 150 acres." },
  { icon: Coffee, title: "Lounge Bar", desc: "A private cigar and coffee lounge for residents." },
  { icon: ShieldCheck, title: "Triple Armour", desc: "Advanced AI-driven 24/7 security ecosystem." },
  { icon: Sparkles, title: "Zen Garden", desc: "Meditation zones designed by leading landscape architects." }
];

export default function AmenitiesPage() {
  return (
    <PillarTemplate 
      title="The Luxury Layer" 
      subtitle="Exquisite lifestyle features integrated within a master-planned gated sanctuary."
      badge="Amenities"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {AMENITIES_LIST.map((item, idx) => (
          <div key={idx} className="group p-10 bg-white rounded-[3rem] border border-dark/5 shadow-sm hover:shadow-2xl hover:border-accent/30 transition-all duration-500">
             <div className="w-16 h-16 bg-primary/5 rounded-3xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                <item.icon size={32} />
             </div>
             <h3 className="text-2xl font-heading font-bold mb-4">{item.title}</h3>
             <p className="text-dark/40 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-40 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
         <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[url('/assets/amenities.jpg')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px]" />
         </div>
         <div className="space-y-8">
            <h3 className="text-4xl font-heading font-bold text-dark italic leading-tight">"Where your backyard is a 150-acre curated estate."</h3>
            <p className="text-dark/60 font-light text-xl leading-relaxed">
               Living at Kumar Magnacity means never compromising on scale or quality. Our amenities are managed by professional facility teams, ensuring that your lifestyle remains Sovereign for decades to come.
            </p>
         </div>
      </div>
      
      <div id="contact" className="mt-32">
        <div className="max-w-4xl mx-auto">
          <EnquiryForm 
            title="Experience the Lifestyle" 
            subtitle="Get our detailed amenities brochure and virtual tour."
            buttonText="Download Brochure" 
          />
        </div>
      </div>
    </PillarTemplate>
  );
}
