import PillarTemplate from "@/components/PillarTemplate";
import EnquiryForm from "@/components/EnquiryForm";
import { TrendingUp, MapPin, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "पूर्व पुणे बाजार विश्लेषण हब | २०२६ एनए प्लॉट डेटा",
  description: "खराडी, हडपसर आणि मगरपट्टा क्षेत्राचे सविस्तर रिअल इस्टेट मार्केट विश्लेषण. गुंतवणुकीवरील परतावा आणि पायाभूत सुविधांचे टप्पे.",
};

export default function MarketInsightsPageMR() {
  return (
    <PillarTemplate
      badge="प्रीमियम विश्लेषण २०२६"
      title="पूर्व पुणे बाजार विश्लेषण हब"
      subtitle="खराडी-हडपसर-मगरपट्टा वेल्थ कॉरिडॉरचे सविस्तर विश्लेषण. स्ट्रॅटेजिक एनए बंगला प्लॉट गुंतवणुकीसाठी सर्वोत्तम मार्गदर्शन."
      isMarathi={true}
    >
      <div className="space-y-32 py-12 md:py-24">
        
        {/* Key Metrics Dashboard */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { label: "मांजरी CAGR", value: "१२.५%", sub: "गेल्या ५ वर्षात", icon: TrendingUp },
            { label: "मार्केट पोटेन्शियल", value: "उच्च", sub: "रिंग रोड बूस्ट", icon: MapPin },
            { label: "कायदेशीर स्थिती", value: "१००%", sub: "रेरा नोंदणीकृत", icon: ShieldCheck },
          ].map((metric, i) => (
            <div key={i} className="glass-obsidian p-10 rounded-[2.5rem] border border-white/5 space-y-4 hover:border-accent/30 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                 <metric.icon size={24} />
              </div>
              <div>
                 <span className="text-4xl font-heading font-bold text-white block">{metric.value}</span>
                 <span className="text-accent uppercase tracking-widest text-[10px] font-bold">{metric.label}</span>
                 <p className="text-white/30 text-xs mt-2">{metric.sub}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Micro-Market Deep Dive */}
        <section className="space-y-16">
          <div className="max-w-3xl">
             <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight"> मायक्रो-मार्केट <br /><span className="text-accent italic font-light">तुलनात्मक विश्लेषण</span></h2>
             <p className="text-white/40 leading-relaxed text-lg font-light">
               प्रस्थापित आयटी हबमधून पूर्व पुण्यातील उदयोन्मुख इस्टेट्समध्ये होणाऱ्या संपत्तीच्या स्थलांतराचे विश्लेषण.
             </p>
          </div>

          <div className="grid grid-cols-1 gap-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               <div className="glass-panel p-10 rounded-[2.5rem] border border-white/5 space-y-6">
                  <h3 className="text-2xl font-heading font-bold text-white tracking-tight">खराडी आयटी हब</h3>
                  <p className="text-white/50 text-sm font-light leading-relaxed">EON IT पार्क आणि WTC च्या वाढत्या विस्तारामुळे मांजरी क्षेत्रातील भूखंडांच्या किंमतीत मोठी वाढ अपेक्षित आहे.</p>
               </div>
               <div className="glass-panel p-10 rounded-[2.5rem] border border-white/5 space-y-6">
                  <h3 className="text-2xl font-heading font-bold text-white tracking-tight">मगरपट्टा अपग्रेड</h3>
                  <p className="text-white/50 text-sm font-light leading-relaxed">मगरपट्टा सिटीमधील रहिवासी आता गर्दीच्या फ्लॅट संस्कृतीतून बाहेर पडून मांजरीमधील एनए बंगला प्लॉट्सना पसंती देत आहेत.</p>
               </div>
               <div className="glass-panel p-10 rounded-[2.5rem] border border-white/5 space-y-6">
                  <h3 className="text-2xl font-heading font-bold text-white tracking-tight">हडपसर अॅनेक्स</h3>
                  <p className="text-white/50 text-sm font-light leading-relaxed">पुणे आऊटर रिंग रोड आणि मेट्रो फेज २ मुळे हडपसर अॅनेक्स (मांजरी) हे गुंतवणुकीचे महत्त्वाचे केंद्र बनले आहे.</p>
               </div>
            </div>
          </div>
        </section>

        {/* Strategic Wealth Section */}
        <section className="py-24 px-12 rounded-[4rem] bg-gradient-to-br from-primary/20 to-dark border border-white/5 relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/hero-bg.jpg')] opacity-5 bg-cover bg-center" />
           <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-10">
                 <h2 className="text-4xl md:text-6xl font-heading font-bold text-white leading-tight">संस्थात्मक विश्वास <br /><span className="text-accent">पिढ्यानपिढ्यांची संपत्ती</span></h2>
                 <p className="text-white/50 text-xl font-light leading-relaxed">
                   कुमार मॅ्नासिटी हा केवळ रिअल इस्टेट प्रकल्प नाही; हे पुण्यातील सर्वात मौल्यवान आयटी कॉरिडॉरच्या विस्ताराचा लाभ घेण्यासाठी डिझाइन केलेले एक प्रगत गुंतवणूक साधन आहे.
                 </p>
              </div>

              <div className="relative">
                 <EnquiryForm 
                   title="तुमचा रिपोर्ट मिळवा"
                   subtitle="पूर्व पुणे मार्केट इंटेलिजन्स व्हाईटपेपर आणि सध्याची इन्व्हेंटरी मिळवण्यासाठी विनंती करा."
                   buttonText="माहिती मिळवा"
                 />
              </div>
           </div>
        </section>
      </div>
    </PillarTemplate>
  );
}
