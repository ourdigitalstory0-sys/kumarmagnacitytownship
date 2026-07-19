import { Metadata } from "next";
import PillarTemplate from "@/components/PillarTemplate";
import SectionHeader from "@/components/SectionHeader";
import AdvancedEnquiryForm from "@/components/AdvancedEnquiryForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "कुमार मॅग्नासिटी फ्लोर प्लॅन | २ बीएचके ७५७ चौ.फू. व ३ बीएचके १०५३ चौ.फू.",
  description: "कुमार मॅग्नासिटी मधील २ बीएचके (७५७ चौ.फू.) आणि ३ बीएचके (१०५३ चौ.फू.) अपार्टमेंट्सचे फ्लोर प्लॅन्स. उत्तम डिझाइन आणि प्रशस्त जागा. आताच डाउनलोड करा.",
  keywords: ["Kumar Magnacity floor plan", "2 BHK floor plan", "3 BHK floor plan", "कुमार मॅग्नासिटी फ्लोर प्लॅन", "Pune"],
  alternates: {
    canonical: "https://kumarmagnacity-pune.in/mr/kumar-magnacity-floor-plan-2bhk-3bhk",
    languages: {
      "en-IN": "https://kumarmagnacity-pune.in/kumar-magnacity-floor-plan-2bhk-3bhk",
      "mr-IN": "https://kumarmagnacity-pune.in/mr/kumar-magnacity-floor-plan-2bhk-3bhk"
    }
  }
};

export default function FloorPlanMarathi() {
  return (
    <PillarTemplate
      title="फ्लोर प्लॅन्स"
      subtitle="तुमच्या स्वप्नातील घराची रचना. २ बीएचके आणि ३ बीएचके अपार्टमेंट्सचे विस्तृत लेआउट."
      badgeText="७५७ चौ.फू. व १०५३ चौ.फू."
      isMarathi={true}
    >
      <section className="py-16 md:py-24 bg-dark">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="विस्तृत फ्लोर प्लॅन्स"
            subtitle="जागेचा पुरेपूर आणि योग्य वापर"
          />
          <div className="mt-12 text-light space-y-6 max-w-4xl mx-auto text-lg leading-relaxed">
            <p>
              कुमार मॅग्नासिटीचे डिझाइन अत्यंत बारकाईने करण्यात आले आहे. २ बीएचके अपार्टमेंट्स ७५७ चौ.फू. कारपेट क्षेत्रफळात उपलब्ध आहेत, ज्यात स्मार्ट स्पेस युटिलायझेशन करण्यात आले आहे.
            </p>
            <p>
              ३ बीएचके अपार्टमेंट्स १०५३ चौ.फू. मध्ये विस्तीर्ण जागा आणि जास्तीत जास्त प्रायव्हसी देतात. हे लेआउट्स मोठ्या कुटुंबांसाठी एक परिपूर्ण पर्याय आहेत.
            </p>
            <p>
              आमचे फ्लोर प्लॅन्स पाहण्यासाठी आणि अधिक माहिती मिळवण्यासाठी खालील फॉर्म भरा. आमची टीम तुम्हाला सर्व माहिती आणि ब्रोशर पाठवेल.
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
            <Link href="/mr/kumar-magnacity-2bhk-flats-hadapsar-pune-price" className="text-accent hover:text-white transition-colors">
              २ बीएचके फ्लॅट्स
            </Link>
            <Link href="/mr/kumar-magnacity-3bhk-apartments-manjari-pune-price" className="text-accent hover:text-white transition-colors">
              ३ बीएचके अपार्टमेंट्स
            </Link>
          </div>
        </div>
      </section>
    </PillarTemplate>
  );
}
