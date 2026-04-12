import PillarTemplate from "@/components/PillarTemplate";
import EnquiryForm from "@/components/EnquiryForm";
import { MapPin, Plane, Train, Building2, School } from "lucide-react";

export const runtime = "edge";

export const metadata = {
  title: "Strategic Neighborhood & Location | Kumar Magnacity | The Pride of Pune's Rising East",
  description: "Explore the location matrix of Kumar Magnacity in Manjari-Hadapsar, Pune. Seamless connectivity to Magarpatta, Kharadi, and the upcoming Ring Road."
};

export default function LocationPage() {
  return (
    <PillarTemplate 
      title="The Strategic East" 
      subtitle="Perfectly positioned at the intersection of Pune's twin IT hubs and upcoming infrastructure corridors."
      badge="The Location"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         <div className="md:col-span-2 space-y-12">
            <div className="bg-dark text-white p-12 rounded-[3.5rem] relative overflow-hidden group">
               <div className="absolute inset-0 bg-[url('/assets/plot-layout.jpg')] bg-cover bg-center opacity-20 group-hover:scale-110 transition-transform duration-[5s]" />
               <div className="relative z-10">
                  <h3 className="text-3xl font-heading font-bold mb-6">Proximity Matrix</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                     <div className="space-y-4">
                        <div className="flex items-start gap-4">
                           <Building2 className="text-accent shrink-0" size={20} />
                           <div>
                              <p className="font-bold">IT Hubs</p>
                              <p className="text-white/40 text-sm">Magarpatta City (10 mins) <br/> EON IT Park, Kharadi (15 mins)</p>
                           </div>
                        </div>
                        <div className="flex items-start gap-4">
                           <School className="text-accent shrink-0" size={20} />
                           <div>
                              <p className="font-bold">Education</p>
                              <p className="text-white/40 text-sm">Lexicon International <br/> Orbis School</p>
                           </div>
                        </div>
                     </div>
                     <div className="space-y-4">
                        <div className="flex items-start gap-4">
                           <Plane className="text-accent shrink-0" size={20} />
                           <div>
                              <p className="font-bold">Pune Airport</p>
                              <p className="text-white/40 text-sm">25-30 Minutes away via <br/> new Hadapsar corridor.</p>
                           </div>
                        </div>
                        <div className="flex items-start gap-4">
                           <MapPin className="text-accent shrink-0" size={20} />
                           <div>
                              <p className="font-bold">Highway Access</p>
                              <p className="text-white/40 text-sm">Pune-Solapur Highway <br/> Direct Connectivity.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="space-y-8 px-4">
               <h3 className="text-2xl font-heading font-bold text-dark italic">Why Manjari BK - Hadapsar Annexe?</h3>
               <p className="text-dark/60 leading-relaxed font-light text-lg">
                  Manjari is Pune's fastest growing residential and investment corridor. With the upcoming **Pune Ring Road** passing nearby and the expansion of the **Metro Line 3**, Kumar Magnacity sits at the absolute center of Pune's future growth map.
               </p>
               <div className="flex flex-wrap gap-4">
                  <span className="px-4 py-2 bg-accent/5 border border-accent/20 rounded-full text-xs font-bold text-accent uppercase tracking-widest">Ring Road Impact</span>
                  <span className="px-4 py-2 bg-accent/5 border border-accent/20 rounded-full text-xs font-bold text-accent uppercase tracking-widest">Metro Line 3 Hub</span>
                  <span className="px-4 py-2 bg-accent/5 border border-accent/20 rounded-full text-xs font-bold text-accent uppercase tracking-widest">Smart-City Precinct</span>
               </div>
            </div>
         </div>

         <div id="contact" className="space-y-8">
            <div className="bg-white border p-10 rounded-[2.5rem] shadow-2xl">
               <EnquiryForm 
                isModal={true}
                title="Location Visit" 
                subtitle="Book a chauffeured site visit to experience the scale ourselves."
                buttonText="Schedule Visit" 
               />
            </div>
            <div className="bg-primary/5 p-8 rounded-[2rem] border border-primary/10">
               <p className="text-[10px] uppercase font-bold text-primary/40 tracking-[0.2em] mb-4">Location Marker</p>
               <p className="text-dark/80 text-sm font-medium">Kumar Magnacity, Manjari BK-Hadapsar Annexe, Pune - 412307</p>
            </div>
         </div>
      </div>
    </PillarTemplate>
  );
}
