import PillarTemplate from "@/components/PillarTemplate";
import EnquiryForm from "@/components/EnquiryForm";

export const runtime = "edge";

export const metadata = {
  title: "गुंतवणूक आणि ROI | कुमार मॅग्नासिटी",
  description: "पुण्यातील सर्वात सुरक्षित आणि उच्च परतावा देणारी गुंतवणूक म्हणजे कुमार मॅग्नासिटी. गुंतवणुकीचे फायदे जाणून घ्या."
};

export default function MarathiInvestmentPage() {
  return (
    <PillarTemplate 
      isMarathi={true}
      title="गुंतवणुकीचा फायदा" 
      subtitle="१२.५०% पेक्षा जास्त वार्षिक परताव्याची (CAGR) क्षमता."
      badge="गुंतवणूक"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
         <div className="bg-white p-12 rounded-[3rem] border shadow-sm">
            <h3 className="text-3xl font-heading font-bold mb-6 italic">का गुंतवणूक करावी?</h3>
            <ul className="space-y-4 text-dark/60">
               <li>• १००% कायदेशीर टायटल आणि रेरा नोंदणीकृत.</li>
               <li>• मांजरी-हडपसर परिसरातील उत्तम कनेक्टिव्हिटी.</li>
               <li>• कुमार प्रॉपर्टीजचा ५९ वर्षांचा विश्वास.</li>
            </ul>
         </div>
         <div className="bg-primary text-white p-12 rounded-[3rem] shadow-xl">
            <h3 className="text-3xl font-heading font-bold mb-6">परताव्याचा अंदाज</h3>
            <p className="text-white/60 mb-8">नियोजनाप्रमाणे रस्ते आणि पायाभूत सुविधांच्या विकासामुळे जमिनीचे भाव वेगाने वधारण्याची शक्यता.</p>
            <div className="text-4xl font-heading font-bold text-accent italic">१२.५% + CAGR</div>
         </div>
      </div>
      <div id="contact" className="mt-32 max-w-4xl mx-auto">
        <EnquiryForm 
          title="ROI रिपोर्ट मिळवा" 
          subtitle="पुण्यातील रिअल इस्टेटमधील गुंतवणुकीचा सविस्तर अहवाल मिळवण्यासाठी संपर्क करा."
          buttonText="अहवाल मिळवा" 
        />
      </div>
    </PillarTemplate>
  );
}
