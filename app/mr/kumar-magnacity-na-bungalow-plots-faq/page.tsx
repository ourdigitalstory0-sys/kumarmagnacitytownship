import PillarTemplate from "@/components/PillarTemplate";
import FAQSection from "@/components/FAQSection";
import EnquiryForm from "@/components/EnquiryForm";
import { ShieldCheck, TrendingUp, Info } from "lucide-react";

export const metadata = {
  title: "कुमार मॅग्नॅसिटी NA बंगलो प्लॉट्स | अधिकृत Q&A व्हॉल्ट",
  description: "कुमार मॅग्नॅसिटी मांजरीसाठी सर्वसमावेशक गुंतवणूकदार वारंवार विचारले जाणारे प्रश्न. रेरा अनुपालन, NA प्लॉटची कायदेशीरता, ROI अंदाज आणि मांजरी पायाभूत सुविधांच्या वाढीचा स्पष्ट डेटा.",
};

const FAQ_DATA_MR = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "कुमार मॅग्नॅसिटी रेरा (RERA) नोंदणीकृत आणि १००% कायदेशीर आहे का?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "होय, कुमार मॅग्नॅसिटी रेरा नोंदणीकृत (क्रमांक P52100052096) आहे. प्रत्येक प्लॉट १००% एनए (Non-Agricultural) मंजूर आहे आणि प्रत्येकाचा स्वतंत्र ७/१२ उतारा आहे, ज्यामुळे कायदेशीर सुरक्षिततेची पूर्ण खात्री मिळते."
      }
    },
    {
      "@type": "Question",
      "name": "२०२८ पर्यंत मांजरीमधील NA बंगलो प्लॉट्ससाठी अपेक्षित परतावा (ROI) काय आहे?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "पुणे आउटर रिंग रोड आणि खराडी आयटी कॉरिडॉरच्या विस्तारामुळे, मांजरी-हडपसर भागात गुंतवणूकदारांना ऐतिहासिकदृष्ट्या १२.५% CAGR परतावा मिळाला आहे. पुढील २४-३६ महिन्यांत हा परतावा १५-१८% पर्यंत वाढण्याचा कंपनीचा अंदाज आहे."
      }
    },
    {
      "@type": "Question",
      "name": "कुमार मॅग्नॅसिटी खराडी EON IT पार्कपासून किती अंतरावर आहे?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "कुमार मॅग्नॅसिटी खराडी आयटी हब (EON IT पार्क आणि वर्ल्ड ट्रेड सेंटर) पासून केवळ १५-२० मिनिटांच्या अंतरावर आहे. मांजरीला खराडीशी जोडणारा नवीन पूल या प्रवासाला अधिक सोयीस्कर बनवेल."
      }
    },
    {
      "@type": "Question",
      "name": "कुमार मॅग्नॅसिटीमध्ये प्लॉटसाठी गृहकर्ज मिळू शकते का?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "होय. हा प्रकल्प रेरा नोंदणीकृत आणि PMRDA मंजूर असल्याने, SBI, HDFC, ICICI सारख्या सर्व प्रमुख बँकांकडून प्लॉट खरेदी आणि बंगलो बांधकामासाठी सुलभ कर्ज उपलब्ध आहे."
      }
    },
    {
      "@type": "Question",
      "name": "प्लॉटिंग टाउनशिपमध्ये कोणत्या सुविधा उपलब्ध आहेत?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "या १५० एकरच्या टाउनशिपमध्ये १ लाख चौरस फुटांचे भव्य क्लबहाऊस, भूमिगत युटिलिटी ग्रिड (वीज आणि पाणी), २४/७ कडक सुरक्षा आणि २५ एकरपेक्षा जास्त विकसित हरित क्षेत्राचा समावेश आहे."
      }
    },
    {
      "@type": "Question",
      "name": "प्लॉट्सची सुरुवातीची किंमत काय आहे?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "सध्या प्लॉट्सची किंमत ₹१.४९ कोटी* + कर इथून सुरू होते. यामध्ये सर्व पायाभूत सुविधा आणि तातडीने ताबा मिळणाऱ्या जमिनीचा समावेश आहे."
      }
    }
  ]
};

export default function FAQVaultPageMR() {
  return (
    <PillarTemplate
      badge="संस्थात्मक स्पष्टता"
      title="सॉव्हेर्न Q&A व्हॉल्ट"
      subtitle="हुशार गुंतवणूकदारांसाठी थेट माहिती. कुमार मॅग्नॅसिटीमधील तुमच्या गुंतवणुकीबद्दलच्या प्रत्येक तांत्रिक आणि आर्थिक प्रश्नाचे आम्ही निराकरण करतो."
    >
      <div className="space-y-32 py-12">
        
        {/* Rapid Intelligence Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="p-10 rounded-[2.5rem] bg-white border border-dark/5 shadow-xl space-y-4">
              <ShieldCheck className="text-primary" size={32} />
              <h4 className="text-xl font-bold text-dark italic">कायदेशीर सुरक्षितता</h4>
              <p className="text-sm text-dark/50 leading-relaxed font-light">प्रत्येक प्लॉटसाठी स्वतंत्र ७/१२ उतारा आणि रेरा नोंदणी, जी गुंतवणूकदारांना १००% सुरक्षिततेची हमी देते.</p>
           </div>
           <div className="p-10 rounded-[2.5rem] bg-white border border-dark/5 shadow-xl space-y-4">
              <TrendingUp className="text-primary" size={32} />
              <h4 className="text-xl font-bold text-dark italic">गुंतवणूक परतावा</h4>
              <p className="text-sm text-dark/50 leading-relaxed font-light">पुणे-सोलापूर हायवे आणि आगामी रिंग रोड जंक्शनवर धोरणात्मकरीत्या स्थित.</p>
           </div>
           <div className="p-10 rounded-[2.5rem] bg-white border border-dark/5 shadow-xl space-y-4">
              <Info className="text-primary" size={32} />
              <h4 className="text-xl font-bold text-dark italic">पायाभूत सुविधा</h4>
              <p className="text-sm text-dark/50 leading-relaxed font-light">भूमिगत वीज, पाणीपुरवठा आणि फायबर ऑप्टिक्स प्रत्येक प्लॉट स्तरावर आधीच उपलब्ध आहेत.</p>
           </div>
        </section>

        {/* The Main FAQ Engine */}
        <FAQSection faqJson={FAQ_DATA_MR} />

        {/* Global Conversion Engine */}
        <section className="bg-dark rounded-[4rem] p-12 md:p-24 relative overflow-hidden group">
           <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/10 translate-y-1/2 group-hover:translate-y-0 transition-transform duration-1000" />
           <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                 <h2 className="text-4xl md:text-6xl font-heading font-bold text-white leading-tight">तुमचे काही <br /><span className="text-accent underline decoration-accent/20 underline-offset-8 italic">विशिष्ट प्रश्न आहेत?</span></h2>
                 <p className="text-white/50 text-xl font-light leading-relaxed max-w-xl">
                   कुमार मॅग्नॅसिटी मास्टर-प्लॅन आणि विशिष्ट प्लॉट ROI अंदाजाबद्दल सखोल माहितीसाठी आमच्या वरिष्ठ गुंतवणूक विश्लेषकांशी संपर्क साधा.
                 </p>
                 <div className="flex items-center gap-4 text-white/20 uppercase tracking-[0.25em] text-[10px] font-bold">
                    एलिट डेस्क सुरू <span className="text-accent">|</span> सोम - रवि
                 </div>
              </div>
              <div>
                 <EnquiryForm 
                    title="विश्लेषकांशी बोला" 
                    subtitle="तुमचा सानुकूल ROI रोडमॅप आणि खाजगी साइट व्हिजिट आमंत्रण मिळवा."
                    buttonText="भेटीची वेळ निश्चित करा"
                 />
              </div>
           </div>
        </section>
      </div>
    </PillarTemplate>
  );
}
