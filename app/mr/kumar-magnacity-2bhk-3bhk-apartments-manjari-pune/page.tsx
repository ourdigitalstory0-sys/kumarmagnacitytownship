import { Metadata } from "next";
import PillarTemplate from "@/components/PillarTemplate";
import SectionHeader from "@/components/SectionHeader";
import AdvancedEnquiryForm from "@/components/AdvancedEnquiryForm";
import ApartmentShowcase from "@/components/ApartmentShowcase";
import Link from "next/link";

export const metadata: Metadata = {
  title: "कुमार मॅग्नासिटी २ बीएचके व ३ बीएचके अपार्टमेंट मांजरी पुणे | ₹६७.९९ लाखांपासून",
  description: "कुमार मॅग्नासिटीमध्ये लक्झरी २ बीएचके आणि ३ बीएचके अपार्टमेंट्स. मांजरी आणि हडपसर जवळ प्रीमियम घरे. बुकिंगसाठी आताच संपर्क करा.",
  keywords: ["कुमार मॅग्नासिटी", "2 BHK flats in Pune", "3 BHK apartments Pune", "Kumar Magnacity Manjari", "apartments in hadapsar"],
  alternates: {
    canonical: "https://kumarmagnacity-pune.in/mr/kumar-magnacity-2bhk-3bhk-apartments-manjari-pune",
    languages: {
      "en-IN": "https://kumarmagnacity-pune.in/kumar-magnacity-2bhk-3bhk-apartments-manjari-pune",
      "mr-IN": "https://kumarmagnacity-pune.in/mr/kumar-magnacity-2bhk-3bhk-apartments-manjari-pune"
    }
  }
};

export default function PrimaryLandingMarathi() {
  return (
    <PillarTemplate
      title="कुमार मॅग्नासिटी अपार्टमेंट्स"
      subtitle="मांजरी, पुणे मधील एक प्रीमियम रेसिडेन्शियल प्रकल्प. तुमचे स्वप्नातील घर आता सत्यात."
      badge="लक्झरी २ व ३ बीएचके घरे"
      isMarathi={true}
    >
      <section className="py-16 md:py-24 bg-dark">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="प्रकल्पाविषयी माहिती"
            subtitle="सर्वोत्तम सुखसोयी आणि आधुनिक जीवनशैली"
          />
          <div className="mt-12 text-light space-y-6 max-w-4xl mx-auto text-lg leading-relaxed">
            <p>
              कुमार मॅग्नासिटी हा मांजरी, पुणे येथील एक अत्यंत प्रतिष्ठित निवासी प्रकल्प आहे. येथे तुम्हाला २ बीएचके आणि ३ बीएचके अपार्टमेंट्स मिळतात जे आधुनिक जीवनशैलीसाठी डिझाइन केले आहेत.
            </p>
            <p>
              हडपसर आणि मगरपट्टा सिटीच्या जवळ असल्यामुळे, या प्रकल्पाचे स्थान अत्यंत सोयीचे आहे. सर्व आवश्यक सुविधा जसे की शाळा, रुग्णालये आणि शॉपिंग मॉल्स काही मिनिटांच्या अंतरावर आहेत.
            </p>
            <p>
              तुमच्या कुटुंबासाठी एक सुरक्षित आणि आरामदायक घर शोधत असाल, तर कुमार मॅग्नासिटी हा एक उत्तम पर्याय आहे. निसर्गरम्य वातावरण आणि जागतिक दर्जाच्या सुविधा येथे उपलब्ध आहेत.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark">
        <ApartmentShowcase />
      </section>

      <section className="py-16 md:py-24 bg-light/5">
        <div className="container mx-auto px-4">
          <AdvancedEnquiryForm />
        </div>
      </section>
      
      <section className="py-12 bg-dark border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-6 justify-center">
            <Link href="/mr/kumar-magnacity-2bhk-flats-hadapsar-pune-price" className="text-accent hover:text-white transition-colors">
              २ बीएचके फ्लॅट्स
            </Link>
            <Link href="/mr/kumar-magnacity-3bhk-apartments-manjari-pune-price" className="text-accent hover:text-white transition-colors">
              ३ बीएचके अपार्टमेंट्स
            </Link>
            <Link href="/mr/kumar-magnacity-floor-plan-2bhk-3bhk" className="text-accent hover:text-white transition-colors">
              फ्लोर प्लॅन
            </Link>
            <Link href="/mr/kumar-magnacity-specifications-apartments" className="text-accent hover:text-white transition-colors">
              वैशिष्ट्ये
            </Link>
            <Link href="/mr/kumar-magnacity-location-advantages-hadapsar-manjari" className="text-accent hover:text-white transition-colors">
              लोकेशन
            </Link>
          </div>
        </div>
      </section>
    </PillarTemplate>
  );
}
