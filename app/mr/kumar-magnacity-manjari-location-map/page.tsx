import PillarTemplate from "@/components/PillarTemplate";
import EnquiryForm from "@/components/EnquiryForm";
import { Building2, Train, Plane, MapPin } from "lucide-react";

export const runtime = "edge";

export const metadata = {
  title: "स्थान आणि परिसर | मांजरी-हडपसर | कुमार मॅग्नासिटी",
  description: "कुमार मॅग्नासिटीचे मोक्याचे ठिकाण जाणून घ्या. मगरपट्टा, खराडी आणि नियोजित रिंग रोडशी उत्तम कनेक्टिव्हिटी."
};

export default function MarathiLocationPage() {
  return (
    <PillarTemplate 
      isMarathi={true}
      title="मोक्याचे ठिकाण" 
      subtitle="पुण्याच्या आयटी हब आणि नियोजित रिंग रोडच्या अगदी जवळ."
      badge="स्थान"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
         <div className="p-8 bg-white rounded-3xl border border-dark/5 shadow-sm text-center">
            <Building2 className="text-accent mb-4 mx-auto" size={24} />
            <p className="font-bold">मगरपट्टा सिटी</p>
            <p className="text-xs text-dark/40">१० मिनिटे</p>
         </div>
         <div className="p-8 bg-white rounded-3xl border border-dark/5 shadow-sm text-center">
            <Train className="text-accent mb-4 mx-auto" size={24} />
            <p className="font-bold">मेट्रो लाइन ३</p>
            <p className="text-xs text-dark/40">५ मिनिटे</p>
         </div>
         <div className="p-8 bg-white rounded-3xl border border-dark/5 shadow-sm text-center">
            <Plane className="text-accent mb-4 mx-auto" size={24} />
            <p className="font-bold">पुणे विमानतळ</p>
            <p className="text-xs text-dark/40">३० मिनिटे</p>
         </div>
         <div className="p-8 bg-white rounded-3xl border border-dark/5 shadow-sm text-center">
            <MapPin className="text-accent mb-4 mx-auto" size={24} />
            <p className="font-bold">रिंग रोड</p>
            <p className="text-xs text-dark/40">अत्यंत जवळ</p>
         </div>
      </div>
      
      <div id="contact" className="mt-32 max-w-4xl mx-auto">
        <EnquiryForm 
          title="साईट व्हिजिट बुक करा" 
          subtitle="प्रकल्प पाहण्यासाठी आजच आपली वेळ राखून ठेवा."
          buttonText="संपर्क करा" 
        />
      </div>
    </PillarTemplate>
  );
}
