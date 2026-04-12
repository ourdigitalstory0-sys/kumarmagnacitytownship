import PillarTemplate from "@/components/PillarTemplate";
import EnquiryForm from "@/components/EnquiryForm";
import { Shield, LandPlot } from "lucide-react";

export const runtime = "edge";

export const metadata = {
  title: "संकल्पना | सोव्हेरीन लाइफस्टाईल | कुमार मॅग्नासिटी",
  description: "कुमार मॅग्नासिटीच्या १५०-एकर सोव्हेरीन टाउनशिपची संकल्पना जाणून घ्या. जिथे वारसा आणि आधुनिक लक्झरी यांचा संगम होतो."
};

export default function MarathiConceptPage() {
  return (
    <PillarTemplate 
      isMarathi={true}
      title="सोव्हेरीन व्हिजन" 
      subtitle="पुण्याच्या उगवत्या पूर्वेसाठी १५०-एकरांचे मास्टरपीस. जिथे तुमचा वारसा सुरक्षित आहे."
      badge="संकल्पना"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 text-right md:text-left">
           <div className="space-y-4">
             <h2 className="text-3xl font-heading font-bold text-dark italic">प्लॉटेड इस्टेटमधील प्रभुत्व</h2>
             <p className="text-dark/60 leading-relaxed">
               कुमार मॅग्नासिटी ही केवळ एक लेआउट नाही; ती एक नियोजित परिसंस्था आहे. आमच्या संकल्पनेच्या केंद्रस्थानी 'सोव्हेरीन' जीवनशैली आहे—जी जमीनमालकांना पूर्ण स्वातंत्र्य, गोपनीयता आणि जागतिक दर्जाच्या पायाभूत सुविधा प्रदान करते.
             </p>
           </div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
             <div className="p-6 bg-white rounded-2xl border border-dark/5 shadow-sm text-right md:text-left">
                <Shield className="text-accent mb-4 mx-auto md:mx-0" size={24} />
                <h4 className="font-bold mb-2">पूर्ण सुरक्षा</h4>
                <p className="text-xs text-dark/40">३-स्तरीय गेटेड एन्ट्री आणि २४/७ पाळत.</p>
             </div>
             <div className="p-6 bg-white rounded-2xl border border-dark/5 shadow-sm text-right md:text-left">
                <LandPlot className="text-accent mb-4 mx-auto md:mx-0" size={24} />
                <h4 className="font-bold mb-2">नियोजित भव्यता</h4>
                <p className="text-xs text-dark/40">रुंद रस्ते आणि भूमिगत युटिलिटी ग्रीड्स.</p>
             </div>
           </div>
        </div>
        
        <div className="relative">
           <div className="aspect-[4/5] bg-dark/5 rounded-[3rem] overflow-hidden">
              <div className="absolute inset-0 bg-[url('/assets/amenities.jpg')] bg-cover bg-center" />
           </div>
        </div>
      </div>
      
      <div id="contact" className="mt-32">
        <div className="max-w-4xl mx-auto">
          <EnquiryForm 
            title="तुमचा वारसा घडवा" 
            subtitle="प्रीमियम पूर्व-मुखी प्लॉट्सची माहिती मिळवण्यासाठी संपर्क करा."
            buttonText="माहिती मिळवा" 
          />
        </div>
      </div>
    </PillarTemplate>
  );
}
