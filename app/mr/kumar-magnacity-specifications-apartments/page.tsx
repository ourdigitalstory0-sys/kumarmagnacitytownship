import { Metadata } from "next";
import PillarTemplate from "@/components/PillarTemplate";
import SectionHeader from "@/components/SectionHeader";
import AdvancedEnquiryForm from "@/components/AdvancedEnquiryForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "कुमार मॅग्नासिटी अपार्टमेंट वैशिष्ट्ये | प्रीमियम बांधकाम गुणवत्ता",
  description: "कुमार मॅग्नासिटी, पुणे मधील अपार्टमेंट्सची उच्च दर्जाची वैशिष्ट्ये. आधुनिक फिटिंग्स, प्रीमियम फ्लोरिंग आणि जागतिक दर्जाचे बांधकाम.",
  keywords: ["Kumar Magnacity specifications", "premium apartments Pune", "apartments features", "कुमार मॅग्नासिटी वैशिष्ट्ये", "बांधकाम गुणवत्ता"],
  alternates: {
    canonical: "https://kumarmagnacity-pune.in/mr/kumar-magnacity-specifications-apartments",
    languages: {
      "en-IN": "https://kumarmagnacity-pune.in/kumar-magnacity-specifications-apartments",
      "mr-IN": "https://kumarmagnacity-pune.in/mr/kumar-magnacity-specifications-apartments"
    }
  }
};

export default function SpecificationsMarathi() {
  return (
    <PillarTemplate
      title="प्रकल्पाची वैशिष्ट्ये"
      subtitle="प्रीमियम बांधकाम आणि जागतिक दर्जाच्या सुविधा. तुमच्या प्रत्येक गरजांचा विचार करून बनवलेली घरे."
      badgeText="उत्कृष्ट दर्जा | प्रीमियम लाइफ"
      isMarathi={true}
    >
      <section className="py-16 md:py-24 bg-dark">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="अपार्टमेंट वैशिष्ट्ये"
            subtitle="क्वालिटी मध्ये कोणतीही तडजोड नाही"
          />
          <div className="mt-12 text-light space-y-6 max-w-4xl mx-auto text-lg leading-relaxed">
            <p>
              कुमार मॅग्नासिटीमध्ये बांधकामाचा दर्जा आणि वापरण्यात येणारे साहित्य हे अत्यंत प्रीमियम आहे. भूकंपरोधक आरसीसी स्ट्रक्चर आणि उत्कृष्ट दर्जाच्या विटांचा वापर करण्यात आला आहे.
            </p>
            <p>
              सर्व अपार्टमेंट्समध्ये विट्रिफाइड टाईल्स, आधुनिक आणि सुरक्षित इलेक्ट्रिकल फिटिंग्स, आणि उच्च दर्जाचे प्लंबिंग काम केले आहे. स्वयंपाकघर आणि बाथरुममध्ये प्रीमियम ब्रँड्सचे फिटिंग्स आहेत.
            </p>
            <p>
              नैसर्गिक प्रकाश आणि हवा येण्यासाठी मोठ्या खिडक्या आणि सुरक्षिततेसाठी भक्कम दरवाजे देण्यात आले आहेत. प्रत्येक बाबतीत जागतिक दर्जा राखण्याचा आमचा प्रयत्न आहे.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-light/5">
        <div className="container mx-auto px-4">
          <AdvancedEnquiryForm isMarathi={true} />
        </div>
      </section>
      
      <section className="py-12 bg-dark border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-6 justify-center">
            <Link href="/mr/kumar-magnacity-2bhk-3bhk-apartments-manjari-pune" className="text-accent hover:text-white transition-colors">
              मुख्य पृष्ठ
            </Link>
            <Link href="/mr/kumar-magnacity-floor-plan-2bhk-3bhk" className="text-accent hover:text-white transition-colors">
              फ्लोर प्लॅन्स
            </Link>
            <Link href="/mr/kumar-magnacity-location-advantages-hadapsar-manjari" className="text-accent hover:text-white transition-colors">
              लोकेशन फायदे
            </Link>
          </div>
        </div>
      </section>
    </PillarTemplate>
  );
}
