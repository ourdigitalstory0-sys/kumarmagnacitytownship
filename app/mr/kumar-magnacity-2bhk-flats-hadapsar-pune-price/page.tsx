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
import { MapPin, Home, HeartHandshake, Briefcase } from 'lucide-react';

export const metadata: Metadata = {
  title: 'हडपसर पुणे मध्ये २ बीएचके फ्लॅट | कुमार मॅग्नासिटी ७५७ चौ.फू. @ ₹६७.९९ लाख',
  description: 'कुमार मॅग्नासिटीमध्ये तुमचे स्वप्नातील २ बीएचके घर बुक करा. ७५७ चौ.फू.चे प्रशस्त फ्लॅट्स फक्त ₹६७.९९ लाखांपासून सुरू. आयटी प्रोफेशनल्स आणि कुटुंबांसाठी योग्य.',
  keywords: 'हडपसर पुणे 2BHK फ्लॅट्स, कुमार मॅग्नासिटी 2BHK किंमत, मगरपट्टा जवळ 2BHK अपार्टमेंट, 757 चौ.फू. फ्लॅट्स पुणे',
};

export default function TwoBHKPageMarathi() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: 'कुमार मॅग्नासिटी येथे प्रीमियम २ बीएचके फ्लॅट्स',
    description: 'मांजरी/हडपसर, पुणे येथे ₹६७.९९ लाखांपासून सुरू होणारे ७५७ चौ.फू.चे प्रशस्त २ बीएचके फ्लॅट्स.',
    offers: {
      '@type': 'Offer',
      price: '6799000',
      priceCurrency: 'INR'
    }
  };

  const personaFeatures = [
    {
      title: "१५-मिनिटांत आयटी हब",
      description: "थकवणाऱ्या प्रवासाला निरोप द्या. मगरपट्टा सिटी आणि ईऑन आयटी पार्कपासून अगदी जवळ असल्यामुळे, तुम्हाला दररोजचा मौल्यवान वेळ परत मिळतो.",
      icon: <MapPin size={24} />
    },
    {
      title: "७५७ चौ.फू. चा इष्टतम लेआउट",
      description: "प्रत्येक चौरस फूट जास्तीत जास्त उपयुक्ततेसाठी डिझाइन केलेले आहे. वर्क-फ्रॉम-होम जागेपासून ते प्रशस्त मास्टर बेडरूमपर्यंत, आधुनिक शहरी जीवनासाठी हे योग्य आहे.",
      icon: <Home size={24} />
    },
    {
      title: "उत्तम वर्क-लाईफ बॅलन्स",
      description: "१५० एकरांच्या इकोसिस्टममध्ये प्रवेश करा, जिथे १ लाख चौ.फू.चे क्लबहाऊस, ऑलिम्पिक दर्जाचे स्विमिंग पूल आणि शांत निसर्गरम्य मार्ग आहेत.",
      icon: <HeartHandshake size={24} />
    },
    {
      title: "प्रीमियम गुंतवणूक मूल्य",
      description: "₹६७.९९ लाख किमतीत, पुण्याच्या सर्वात वेगाने वाढणाऱ्या पूर्व पट्ट्यात तुमचे घर सुरक्षित करणे तुम्हाला उच्च भाडे उत्पन्न आणि भांडवली वाढीची खात्री देते.",
      icon: <Briefcase size={24} />
    }
  ];

  return (
    <main className="bg-dark min-h-screen text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <Header />
      
      <ParallaxHero 
        title="आलिशान २ बीएचके फ्लॅट्स"
        subtitle="₹६७.९९ लाखांपासून सुरू होणारी ७५७ चौ.फू. ची विचारपूर्वक डिझाइन केलेली जागा"
        badge="पुणे पूर्व हब"
        accentColor="gold"
      />

      <PersonaDeepDive 
        personaTitle="आयटी प्रोफेशनल्सचे नंदनवन."
        personaSubtitle="तुमचा वेळ, आराम आणि जीवनशैलीचा दर्जा जास्तीत जास्त वाढवण्यासाठी महत्त्वाकांक्षी लोकांसाठी खास डिझाइन केलेले."
        features={personaFeatures}
        accentColor="gold"
      />

      <div className="bg-dark py-12 relative z-20">
        <div className="container mx-auto px-4 max-w-7xl space-y-24">
          <ApartmentPriceMatrix />
          <FloorPlanViewer />
          
          <section className="glass-obsidian rounded-[2.5rem] p-8 md:p-12 border border-white/10">
            <h3 className="text-3xl font-bold mb-6 font-heading text-accent">तुमची क्षितिजे विस्तृत करा</h3>
            <ul className="list-disc pl-6 space-y-4 text-white/70">
              <li><Link href="/mr/kumar-magnacity-2bhk-3bhk-apartments-manjari-pune" className="hover:text-accent transition-colors">मुख्य अपार्टमेंट शोकेसवर परत जा</Link></li>
              <li><Link href="/mr/kumar-magnacity-3bhk-apartments-manjari-pune-price" className="hover:text-accent transition-colors">मोठे कुटुंब? आमचे ३ बीएचके पहा</Link></li>
              <li><Link href="/mr/kumar-magnacity-floor-plan-2bhk-3bhk" className="hover:text-accent transition-colors">तपशीलवार फ्लोर प्लॅनची तुलना करा</Link></li>
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
