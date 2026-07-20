import { Metadata } from "next";
import PillarTemplate from "@/components/PillarTemplate";
import SectionHeader from "@/components/SectionHeader";
import AdvancedEnquiryForm from "@/components/AdvancedEnquiryForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "कुमार मॅग्नासिटी लोकेशन | हडपसर, मगरपट्टा व ईऑन आयटी पार्क जवळ",
  description: "कुमार मॅग्नासिटी मांजरी, पुणे लोकेशन फायदे. हडपसर, मगरपट्टा सिटी आणि ईऑन आयटी पार्क (खराडी) पासून अवघ्या काही मिनिटांच्या अंतरावर.",
  keywords: ["Kumar Magnacity location", "Manjari Pune properties", "near Hadapsar", "मगरपट्टा सिटी जवळ", "पुणे लोकेशन"],
  alternates: {
    canonical: "https://kumarmagnacity-pune.in/mr/kumar-magnacity-location-advantages-hadapsar-manjari",
    languages: {
      "en-IN": "https://kumarmagnacity-pune.in/kumar-magnacity-location-advantages-hadapsar-manjari",
      "mr-IN": "https://kumarmagnacity-pune.in/mr/kumar-magnacity-location-advantages-hadapsar-manjari"
    }
  }
};

export default function LocationAdvantagesMarathi() {
  return (
    <PillarTemplate
      title="लोकेशन फायदे"
      subtitle="हडपसर, मगरपट्टा आणि खराडी आयटी हबच्या जवळ मोक्याचे ठिकाण."
      badgeText="सुवर्ण मध्य | मांजरी, पुणे"
      
    >
      <section className="py-16 md:py-24 bg-dark">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="सर्वोत्तम कनेक्टिव्हिटी"
            subtitle="तुमच्या नोकरी आणि व्यवसायाच्या ठिकाणांपासून जवळ"
          />
          <div className="mt-12 text-light space-y-6 max-w-4xl mx-auto text-lg leading-relaxed">
            <p>
              कुमार मॅग्नासिटी हा प्रकल्प मांजरी, पुणे येथे स्थित आहे. या परिसराला हडपसर, मगरपट्टा सिटी आणि खराडी येथील ईऑन आयटी पार्कची उत्कृष्ट कनेक्टिव्हिटी लाभली आहे.
            </p>
            <p>
              नोकरदार लोकांसाठी हे ठिकाण अत्यंत सोयीचे आहे कारण इथून आयटी पार्क्स आणि प्रमुख व्यावसायिक केंद्रांपर्यंत पोहोचणे सोपे आहे. तसेच, विमानतळ आणि रेल्वे स्टेशन देखील सहजगत्या गाठता येतात.
            </p>
            <p>
              प्रकल्पाच्या आसपास नामांकित शाळा, हॉस्पिटल्स, शॉपिंग मॉल्स आणि मनोरंजनाची साधने उपलब्ध आहेत. त्यामुळे तुमच्या कुटुंबाच्या सर्व गरजा येथे सहज पूर्ण होतात.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-light/5">
        <div className="container mx-auto px-4">
          <AdvancedEnquiryForm  />
        </div>
      </section>
      
      <section className="py-12 bg-dark border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-6 justify-center">
            <Link href="/mr/kumar-magnacity-2bhk-3bhk-apartments-manjari-pune" className="text-accent hover:text-white transition-colors">
              मुख्य पृष्ठ
            </Link>
            <Link href="/mr/kumar-magnacity-specifications-apartments" className="text-accent hover:text-white transition-colors">
              वैशिष्ट्ये
            </Link>
            <Link href="/mr/kumar-magnacity-floor-plan-2bhk-3bhk" className="text-accent hover:text-white transition-colors">
              फ्लोर प्लॅन्स
            </Link>
          </div>
        </div>
      </section>
    </PillarTemplate>
  );
}
