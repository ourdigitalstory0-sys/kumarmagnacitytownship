import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SovereignBar from '@/components/SovereignBar';
import AdvancedEnquiryForm from '@/components/AdvancedEnquiryForm';
import ApartmentPriceMatrix from '@/components/ApartmentPriceMatrix';
import FloorPlanViewer from '@/components/FloorPlanViewer';
import ParallaxHero from '@/components/ParallaxHero';
import PersonaDeepDive from '@/components/PersonaDeepDive';
import { Users, Expand, Shield, Trees } from 'lucide-react';

export const metadata: Metadata = {
  title: 'मांजरी पुणे मध्ये ३ बीएचके अपार्टमेंट | कुमार मॅग्नासिटी १०५३ चौ.फू. @ ₹९२.९९ लाख',
  description: 'मांजरी, पुणे येथील कुमार मॅग्नासिटीमध्ये प्रीमियम ३ बीएचके अपार्टमेंट्सचा अनुभव घ्या. ₹९२.९९ लाखांपासून प्रशस्त १०५३ चौ.फू. लेआउट्स. वाढत्या कुटुंबांसाठी आदर्श.',
  keywords: '3BHK अपार्टमेंट्स मांजरी पुणे, कुमार मॅग्नासिटी 3BHK, लक्झरी 3BHK फ्लॅट्स पुणे, 1053 चौ.फू. अपार्टमेंट्स',
};

export default function ThreeBHKPageMarathi() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: 'कुमार मॅग्नासिटी येथे लक्झरी ३ बीएचके अपार्टमेंट्स',
    description: 'मांजरी, पुणे येथे ₹९२.९९ लाखांपासून सुरू होणारे १०५३ चौ.फू. चे प्रशस्त ३ बीएचके अपार्टमेंट्स.',
    offers: {
      '@type': 'Offer',
      price: '9299000',
      priceCurrency: 'INR'
    }
  };

  const personaFeatures = [
    {
      title: "प्रशस्त १०५३ चौ.फू. जागा",
      description: "मोठ्या आकाराच्या खोल्यांमुळे कुटुंबातील प्रत्येकाला स्वतःची खाजगी जागा मिळते, तसेच कौटुंबिक संमेलनासाठी भव्य सामायिक जागाही मिळते.",
      icon: <Expand size={24} />
    },
    {
      title: "मल्टी-जनरेशनल राहणीमान",
      description: "३ प्रशस्त बेडरूम आणि २ अटॅच्ड बाथरूम्ससह डिझाइन केलेले, हे एकत्र कुटुंबांसाठी किंवा वृद्ध पालकांना सोबत ठेवणाऱ्या जोडप्यांसाठी योग्य आहे.",
      icon: <Users size={24} />
    },
    {
      title: "सुरक्षित, गेटेड इकोसिस्टम",
      description: "तुमच्या मुलांना मुक्तपणे खेळू द्या. २४/७ बहु-स्तरीय सुरक्षा, व्हिडिओ डोअर फोन आणि पादचाऱ्यांसाठी अनुकूल झोनसह, हे एक सुरक्षित आश्रयस्थान आहे.",
      icon: <Shield size={24} />
    },
    {
      title: "निसर्ग तुमच्या दारात",
      description: "२६ एकरांच्या हिरवळीवर आणि निसर्गरम्य मार्गांवर दिसणाऱ्या विस्तीर्ण बाल्कनींमुळे तुमचे कुटुंब स्वच्छ हवा घेईल आणि निसर्गाच्या संपर्कात राहील.",
      icon: <Trees size={24} />
    }
  ];

  return (
    <main className="bg-dark min-h-screen text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <Header />
      
      <ParallaxHero 
        title="प्रीमियम ३ बीएचके अपार्टमेंट्स"
        subtitle="₹९२.९९ लाखांपासून सुरू होणारे १०५३ चौ.फू. चे प्रशस्त लेआउट्स"
        badge="टाऊनशिप जीवनशैली"
        accentColor="green"
      />

      <PersonaDeepDive 
        personaTitle="वाढत्या कुटुंबांचे सुरक्षित आश्रयस्थान."
        personaSubtitle="जिथे जागा, सुरक्षा आणि जागतिक दर्जाच्या सुविधा एकत्र येऊन तुमच्या प्रियजनांसाठी परिपूर्ण वातावरण तयार करतात."
        features={personaFeatures}
        accentColor="green"
      />

      <div className="bg-dark py-12 relative z-20">
        <div className="container mx-auto px-4 max-w-7xl space-y-24">
          <ApartmentPriceMatrix />
          <FloorPlanViewer />
          
          <section className="glass-obsidian rounded-[2.5rem] p-8 md:p-12 border border-white/10">
            <h3 className="text-3xl font-bold mb-6 font-heading text-primary">अधिक एक्सप्लोर करा</h3>
            <ul className="list-disc pl-6 space-y-4 text-white/70">
              <li><Link href="/mr/kumar-magnacity-2bhk-3bhk-apartments-manjari-pune" className="hover:text-primary transition-colors">मुख्य अपार्टमेंट शोकेसवर परत जा</Link></li>
              <li><Link href="/mr/kumar-magnacity-2bhk-flats-hadapsar-pune-price" className="hover:text-primary transition-colors">काहीतरी कॉम्पॅक्ट शोधत आहात? आमचे २ बीएचके पहा</Link></li>
              <li><Link href="/mr/kumar-magnacity-specifications-apartments" className="hover:text-primary transition-colors">तपशीलवार वैशिष्ट्यांचे पुनरावलोकन करा</Link></li>
            </ul>
          </section>
        </div>
      </div>

      <div className="relative z-20 bg-dark py-24">
         <AdvancedEnquiryForm />
      </div>

      <Footer />
      <SovereignBar />
    </main>
  );
}
