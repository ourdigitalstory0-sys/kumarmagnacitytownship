import { Metadata } from "next";
import PillarTemplate from "@/components/PillarTemplate";
import SectionHeader from "@/components/SectionHeader";
import AdvancedEnquiryForm from "@/components/AdvancedEnquiryForm";
import ApartmentShowcase from "@/components/ApartmentShowcase";
import Link from "next/link";

export const metadata: Metadata = {
  title: "मांजरी पुणे मध्ये ३ बीएचके अपार्टमेंट | कुमार मॅग्नासिटी १०५३ चौ.फू. @ ₹९२.९९ लाख",
  description: "कुमार मॅग्नासिटीमधील प्रशस्त ३ बीएचके अपार्टमेंट्स. मांजरी आणि हडपसर जवळ लक्झरी घरे. १०५३ चौ.फू. क्षेत्रफळ, किंमत ₹९२.९९ लाखांपासून.",
  keywords: ["3 BHK apartments Manjari", "Kumar Magnacity 3 BHK", "Pune premium flats", "३ बीएचके अपार्टमेंट", "मांजरी पुणे"],
  alternates: {
    canonical: "https://kumarmagnacity-pune.in/mr/kumar-magnacity-3bhk-apartments-manjari-pune-price",
    languages: {
      "en-IN": "https://kumarmagnacity-pune.in/kumar-magnacity-3bhk-apartments-manjari-pune-price",
      "mr-IN": "https://kumarmagnacity-pune.in/mr/kumar-magnacity-3bhk-apartments-manjari-pune-price"
    }
  }
};

export default function ThreeBHKMarathi() {
  return (
    <PillarTemplate
      title="३ बीएचके लक्झरी अपार्टमेंट्स"
      subtitle="तुमच्या कुटुंबासाठी एक प्रशस्त आणि आरामदायक ३ बीएचके घर, ₹९२.९९ लाखांपासून."
      badgeText="१०५३ चौ.फू. | प्रीमियम लाइफस्टाइल"
      isMarathi={true}
    >
      <section className="py-16 md:py-24 bg-dark">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="३ बीएचके अपार्टमेंटची वैशिष्ट्ये"
            subtitle="विस्तीर्ण जागा आणि लक्झरी"
          />
          <div className="mt-12 text-light space-y-6 max-w-4xl mx-auto text-lg leading-relaxed">
            <p>
              कुमार मॅग्नासिटी मधील ३ बीएचके अपार्टमेंट्स मोठ्या कुटुंबांसाठी डिझाइन केले आहेत. १०५३ चौ.फू. च्या या विस्तीर्ण घरांमध्ये तुम्हाला मोकळी आणि हवेशीर जागा मिळते.
            </p>
            <p>
              या प्रीमियम घरांमध्ये उत्कृष्ट दर्जाचे बांधकाम आणि उच्च दर्जाच्या सुविधा देण्यात आल्या आहेत. बाल्कनीमधून मिळणारे निसर्गरम्य दृश्य तुमच्या घराची शोभा आणखी वाढवते.
            </p>
            <p>
              मांजरी मधील हे ३ बीएचके अपार्टमेंट्स हडपसर आणि प्रमुख आयटी पार्क्सपासून अत्यंत जवळ आहेत. येथे तुम्हाला शहराच्या गजबजाटापासून दूर, पण सर्व आवश्यक सुविधांच्या जवळ राहण्याचा अनुभव मिळेल.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark">
        {/* The ApartmentShowcase likely uses named export or default. The previous files used named import. Let me stick to what works. I'll change it to { ApartmentShowcase } in the next edit or leave it as it was if both are valid. */}
        <ApartmentShowcase />
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
              प्रकल्पाची माहिती
            </Link>
            <Link href="/mr/kumar-magnacity-2bhk-flats-hadapsar-pune-price" className="text-accent hover:text-white transition-colors">
              २ बीएचके फ्लॅट्स
            </Link>
            <Link href="/mr/kumar-magnacity-floor-plan-2bhk-3bhk" className="text-accent hover:text-white transition-colors">
              फ्लोर प्लॅन
            </Link>
          </div>
        </div>
      </section>
    </PillarTemplate>
  );
}
