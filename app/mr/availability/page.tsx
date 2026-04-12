"use client";

import PillarTemplate from "@/components/PillarTemplate";
import EnquiryForm from "@/components/EnquiryForm";
import InventoryBadge from "@/components/InventoryBadge";
import { useModal } from "@/lib/modal-context";
import { Info, ShieldCheck, Map } from "lucide-react";
import { cn } from "@/lib/utils";

export default function MarathiAvailabilityPage() {
  const { openModal } = useModal();
  const plots = [
    { id: "P-101", status: "उपलब्ध", size: "३२०० चौ.फूट" },
    { id: "P-102", status: "उपलब्ध", size: "३२०० चौ.फूट" },
    { id: "P-103", status: "राखून ठेवलेले", size: "३५०० चौ.फूट" },
    { id: "P-104", status: "उपलब्ध", size: "३२०० चौ.फूट" },
    { id: "P-105", status: "उपलब्ध", size: "३२०० चौ.फूट" },
    { id: "P-201", status: "उपलब्ध", size: "४००० चौ.फूट" },
    { id: "P-202", status: "राखून ठेवलेले", size: "४००० चौ.फूट" },
    { id: "P-203", status: "उपलब्ध", size: "४५०० चौ.फूट" },
    { id: "P-204", status: "उपलब्ध", size: "४००० चौ.फूट" },
    { id: "P-205", status: "विकले गेले", size: "४००० चौ.फूट" },
  ];

  return (
    <PillarTemplate 
      isMarathi={true}
      title="प्लॉट्सची उपलब्धता" 
      subtitle="मांजरी, हडपसर जवळील प्रीमियम NA बंगलो प्लॉट्स. प्लॉट्सचे परिमाण आणि सद्यस्थिती तपासण्यासाठी खालील ग्रीड पहा."
      badge="प्रकल्प इन्व्हेंटरी"
    >
      <div className="space-y-32">
        {/* Interactive Grid Section */}
        <div className="space-y-12">
           <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-dark/5 pb-12">
              <div className="space-y-4">
                 <h2 className="text-4xl md:text-6xl font-heading font-bold text-dark">फेज १ सद्यस्थिती</h2>
                 <p className="text-dark/40 font-light text-xl max-w-xl">
                    उच्च-मागणी असलेले पूर्व-देखावा प्लॉट्स. <span className="text-primary font-medium">कुमार मॅग्नॅसिटी</span> मधील प्रत्येक प्लॉट रेरा-मान्यता प्राप्त आहे.
                 </p>
              </div>
              <div className="flex items-center gap-4 bg-white shadow-xl p-4 rounded-3xl border border-dark/5 animate-float">
                 <InventoryBadge text="फेज १ मध्ये फक्त ४ प्लॉट्स शिल्लक!" />
              </div>
           </div>

           {/* Plot Grid Engineering */}
           <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8">
              {plots.map((plot) => (
                <div 
                  key={plot.id} 
                  onClick={() => {
                    if (plot.status === "उपलब्ध") {
                      openModal({
                        title: `${plot.id} साठी चौकशी`,
                        subtitle: `${plot.id} (${plot.size}) साठी ७/१२ उतारा आणि लेआउट प्लॅनची विनंती करा.`,
                        plotId: plot.id,
                        source: "Plot Grid MR"
                      });
                    }
                  }}
                  className={cn(
                    "relative aspect-square rounded-[2rem] p-6 flex flex-col items-center justify-center gap-3 transition-all duration-500 group border",
                    plot.status === "उपलब्ध" ? "bg-primary/20 border-primary/20 hover:bg-primary/30 hover:scale-105 hover:shadow-2xl cursor-pointer" : 
                    plot.status === "राखून ठेवलेले" ? "bg-accent/10 border-accent/20 opacity-60 cursor-not-allowed" :
                    "bg-dark/5 border-dark/5 opacity-40 grayscale cursor-not-allowed"
                  )}
                >
                   <span className="text-lg md:text-2xl font-bold tracking-tighter text-dark">{plot.id}</span>
                   <span className={cn(
                     "text-[8px] md:text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full",
                     plot.status === "उपलब्ध" ? "bg-primary/20 text-primary" : 
                     plot.status === "राखून ठेवलेले" ? "bg-accent/20 text-accent" : 
                     "bg-dark/10 text-dark/40"
                   )}>
                     {plot.status}
                   </span>
                   
                   {/* Tooltip Simulation */}
                   <div className="absolute inset-0 bg-dark/95 backdrop-blur-xl rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-center gap-2 pointer-events-none">
                      <div className="text-accent text-[8px] font-bold uppercase tracking-widest">प्लॉटचा आकार</div>
                      <div className="text-white text-lg font-heading font-bold">{plot.size}</div>
                      <div className="flex items-center gap-2 pt-2 text-[8px] text-white/50 uppercase font-bold tracking-widest border-t border-white/10">
                         <Map size={10} className="text-accent" />
                         पूर्व मुखी
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>

        {/* Pricing Hub */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
           <div className="space-y-12">
              <div className="space-y-6">
                 <h3 className="text-4xl font-heading font-bold text-dark">किंमत संरचना</h3>
                 <p className="text-dark/60 leading-relaxed font-light text-lg">
                    कुमार मॅग्नॅसिटी मांजरीमध्ये सर्वोत्तम मूल्य-ते-किंमत गुणोत्तर देते. अशा जीवनशैलीत गुंतवणूक करा जी वेगाने वाढते.
                 </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="p-8 rounded-[2.5rem] bg-white border border-dark/5 shadow-xl">
                    <ShieldCheck className="text-primary mb-4" size={32} />
                    <h5 className="font-bold text-lg">क्लिअर टायटल</h5>
                    <p className="text-sm text-dark/40">कायदेशीर तज्ञांनी प्रमाणित केलेले.</p>
                 </div>
                 <div className="p-8 rounded-[2.5rem] bg-white border border-dark/5 shadow-xl">
                    <Info className="text-primary mb-4" size={32} />
                    <h5 className="font-bold text-lg">प्लॉट लेआउट</h5>
                    <p className="text-sm text-dark/40">जास्तीत जास्त प्रकाश आणि हवा.</p>
                 </div>
              </div>
           </div>

           <div className="bg-dark text-white p-12 md:p-20 rounded-[4rem] flex flex-col items-center justify-center text-center space-y-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10 translate-y-1/2 group-hover:translate-y-0 transition-transform duration-1000" />
              <div className="relative space-y-2">
                 <span className="text-accent uppercase font-bold tracking-[0.3em] text-[10px]">किंमत सुरु होते</span>
                 <div className="text-5xl md:text-8xl font-heading font-bold text-white tracking-tighter">₹२.२५ कोटी*</div>
              </div>
              <button 
                onClick={() => openModal({ title: "किंमत सुरक्षित करा", source: "Availability MR" })}
                className="relative bg-accent text-dark px-10 py-5 rounded-full font-bold uppercase tracking-widest text-[11px] shadow-2xl hover:scale-110 active:scale-95 transition-all shine-effect"
              >
                ही किंमत सुरक्षित करा
              </button>
           </div>
        </div>

        {/* Conversion Section */}
        <div id="contact" className="bg-white rounded-[4rem] p-12 md:p-24 shadow-2xl border border-dark/5">
           <div className="max-w-2xl mx-auto text-center space-y-6 mb-16">
              <h3 className="text-4xl md:text-6xl font-heading font-bold text-dark">प्रायव्हेट इन्व्हेंटरी विनंती</h3>
              <p className="text-dark/40 text-lg font-light">विशिष्ट प्लॉट परिमाणांसह सविस्तर पीडीएफ इन्व्हेंटरी लिस्ट मिळवा.</p>
           </div>
           <EnquiryForm 
             title="इन्व्हेंटरी लिस्ट डाउनलोड करा" 
             subtitle="तुम्हाला व्हॉट्सॲपवर किमतीची तक्ता आणि मास्टर प्लॅन मिळेल."
             buttonText="तपशील पाठवा"
           />
        </div>
      </div>
    </PillarTemplate>
  );
}
