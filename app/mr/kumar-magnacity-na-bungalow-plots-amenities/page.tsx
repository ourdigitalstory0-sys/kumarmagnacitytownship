import PillarTemplate from "@/components/PillarTemplate";
import EnquiryForm from "@/components/EnquiryForm";
import { Waves, Dumbbell, ShieldCheck } from "lucide-react";

export const runtime = "edge";

export const metadata = {
  title: "जागतिक दर्जाच्या सोयी-सुविधा | कुमार मॅग्नासिटी",
  description: "कुमार मॅग्नासिटीमधील अलिशान सोयी-सुविधांचा अनुभव घ्या. जिम, जलतरण तलाव आणि २४/७ सुरक्षा."
};

export default function MarathiAmenitiesPage() {
  return (
    <PillarTemplate 
      isMarathi={true}
      title="अलिशान सोयी-सुविधा" 
      subtitle="१५०-एकर गेटेड टाउनशिपमध्ये आधुनिक सुविधांचा आनंद घ्या."
      badge="सुविधा"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         <div className="p-10 bg-white rounded-3xl border border-dark/5 shadow-sm text-center">
            <Waves className="text-accent mb-4 mx-auto" size={32} />
            <p className="font-bold text-xl">स्विमिंग पूल</p>
         </div>
         <div className="p-10 bg-white rounded-3xl border border-dark/5 shadow-sm text-center">
            <Dumbbell className="text-accent mb-4 mx-auto" size={32} />
            <p className="font-bold text-xl">हाय-टेक जिम</p>
         </div>
         <div className="p-10 bg-white rounded-3xl border border-dark/5 shadow-sm text-center">
            <ShieldCheck className="text-accent mb-4 mx-auto" size={32} />
            <p className="font-bold text-xl">२४/७ सुरक्षा</p>
         </div>
      </div>
      <div id="contact" className="mt-32 max-w-4xl mx-auto">
        <EnquiryForm 
          title="अधिक माहिती मिळवा" 
          subtitle="सुविधांचे सविस्तर माहितीपत्रक (Brochure) डाउनलोड करा."
          buttonText="Brochure मिळवा" 
        />
      </div>
    </PillarTemplate>
  );
}
