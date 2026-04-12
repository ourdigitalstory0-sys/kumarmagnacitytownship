import PillarTemplate from "@/components/PillarTemplate";
import EnquiryForm from "@/components/EnquiryForm";

export const runtime = "edge";

export const metadata = {
  title: "मास्टर प्लॅन | १५०-एकर टाउनशिप | कुमार मॅग्नासिटी",
  description: "कुमार मॅग्नासिटीचा सविस्तर मास्टर प्लॅन पहा. १५०-एकरांचे भव्य नियोजन आणि आधुनिक पायाभूत सुविधा."
};

export default function MarathiMasterPlanPage() {
  return (
    <PillarTemplate 
      isMarathi={true}
      title="१५०-एकर मास्टर प्लॅन" 
      subtitle="नव्या पुण्याचे भव्य आणि नियोजित टाउनशिप."
      badge="मास्टर प्लॅन"
    >
      <div className="space-y-12">
        <div className="bg-white border rounded-[3rem] overflow-hidden shadow-2xl">
           <div className="aspect-[21/9] bg-dark/5 relative group">
              <div className="absolute inset-0 bg-[url('/assets/plot-layout.jpg')] bg-cover bg-center" />
           </div>
           <div className="p-12 md:p-20">
              <h3 className="text-3xl font-heading font-bold text-dark italic mb-6">नियोजित पायाभूत सुविधा</h3>
              <p className="text-dark/60 leading-relaxed font-light text-lg mb-8">
                रुंद रस्ते, भूमिगत वीज वाहिन्या, सांडपाणी प्रक्रिया प्रकल्प (STP) आणि भव्य उद्याने यांसह ही टाउनशिप पुण्याचे एक आयकॉनिक ठिकाण ठरेल.
              </p>
           </div>
        </div>
        <div id="contact" className="mt-32 max-w-4xl mx-auto">
          <EnquiryForm 
            title="HD मॅप मिळवा" 
            subtitle="प्लॉट नंबर्ससह हाय-रिझोल्यूशन मास्टर प्लॅन मिळवण्यासाठी संपर्क करा."
            buttonText="मॅप डाउनलोड करा" 
          />
        </div>
      </div>
    </PillarTemplate>
  );
}
