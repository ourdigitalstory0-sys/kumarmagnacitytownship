import { Metadata } from "next";
import PillarTemplate from "@/components/PillarTemplate";
import SectionHeader from "@/components/SectionHeader";
import AdvancedEnquiryForm from "@/components/AdvancedEnquiryForm";
import ApartmentShowcase from "@/components/ApartmentShowcase";
import Link from "next/link";

export const metadata: Metadata = {
  title: "हडपसर पुणे मध्ये २ बीएचके फ्लॅट | कुमार मॅग्नासिटी ७५७ चौ.फू. @ ₹६७.९९ लाख",
  description: "कुमार मॅग्नासिटीमध्ये लक्झरी २ बीएचके फ्लॅट्स. हडपसर आणि मांजरी जवळ प्रीमियम घरे. ७५७ चौ.फू. क्षेत्रफळ, किंमत ₹६७.९९ लाखांपासून.",
  keywords: ["2 BHK flats Hadapsar", "Kumar Magnacity 2 BHK", "Pune real estate", "२ बीएचके फ्लॅट", "हडपसर पुणे"],
  alternates: {
    canonical: "https://kumarmagnacity-pune.in/mr/kumar-magnacity-2bhk-flats-hadapsar-pune-price",
    languages: {
      "en-IN": "https://kumarmagnacity-pune.in/kumar-magnacity-2bhk-flats-hadapsar-pune-price",
      "mr-IN": "https://kumarmagnacity-pune.in/mr/kumar-magnacity-2bhk-flats-hadapsar-pune-price"
    }
  }
};

export default function TwoBHKMarathi() {
  return (
    <PillarTemplate
      title="२ बीएचके प्रीमियम फ्लॅट्स"
      subtitle="हडपसर आणि मांजरी जवळ परिपूर्ण २ बीएचके अपार्टमेंट्स, फक्त ₹६७.९९ लाखांपासून."
      badgeText="७५७ चौ.फू. | स्मार्ट स्पेस"
      isMarathi={true}
    >
      <section className="py-16 md:py-24 bg-dark">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="२ बीएचके फ्लॅटची वैशिष्ट्ये"
            subtitle="आधुनिक डिझाइन आणि प्रशस्त जागा"
          />
          <div className="mt-12 text-light space-y-6 max-w-4xl mx-auto text-lg leading-relaxed">
            <p>
              कुमार मॅग्नासिटी मधील २ बीएचके फ्लॅट्स हे स्मार्ट डिझाइन आणि सर्वोत्तम स्पेस युटिलायझेशनचे उत्कृष्ट उदाहरण आहेत. ७५७ चौ.फू. कारपेट क्षेत्रफळामध्ये तुम्हाला जास्तीत जास्त जागा मिळते.
            </p>
            <p>
              हडपसर आणि मगरपट्टा आयटी पार्क जवळ असल्यामुळे नोकरदार वर्गासाठी हे अत्यंत सोयीस्कर आहे. तुमची दैनंदिन ये-जा यामुळे सुखकर आणि कमी वेळेची होते.
            </p>
            <p>
              या अपार्टमेंट्समध्ये नैसर्गिक प्रकाश आणि हवा खेळती राहण्यासाठी विशेष काळजी घेण्यात आली आहे. उत्कृष्ट दर्जाचे बांधकाम आणि आधुनिक सुविधा हे कुमार मॅग्नासिटीचे वैशिष्ट्य आहे.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark">
        <ApartmentShowcase isMarathi={true} />
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
            <Link href="/mr/kumar-magnacity-3bhk-apartments-manjari-pune-price" className="text-accent hover:text-white transition-colors">
              ३ बीएचके अपार्टमेंट्स
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
