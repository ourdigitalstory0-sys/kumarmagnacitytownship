import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const runtime = "edge";
import { Shield } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Kumar Magnacity",
  description: "Read the privacy policy for Kumar Magnacity. Learn how we handle your personal information and ensure data security."
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-light">
      <Header />
      
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-xl border border-dark/5">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                <Shield size={24} />
              </div>
              <div>
                <h1 className="text-4xl font-heading font-bold text-dark">Privacy Policy</h1>
                <p className="text-dark/40 text-sm">Last Updated: March 11, 2026</p>
              </div>
            </div>

            <div className="prose prose-lg prose-primary max-w-none text-dark/70 leading-relaxed space-y-8 font-light">
              <p>
                Welcome to <strong>Kumar Magnacity</strong>. Your privacy is critically important to us. 
                This Privacy Policy document contains types of information that is collected and recorded 
                by our website and how we use it.
              </p>

              <div>
                <h2 className="text-2xl font-heading font-bold text-dark mb-4">1. Information We Collect</h2>
                <p>
                  We collect personal information that you voluntarily provide to us when you express an interest 
                  in obtaining information about us or our products and services, such as:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Name and Contact Data (Email address, Phone number)</li>
                  <li>Property preferences and interests</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-dark mb-4">2. How We Use Your Information</h2>
                <p>We use the information we collect in various ways, including to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide, operate, and maintain our website</li>
                  <li>Improve, personalize, and expand our website</li>
                  <li>Understand and analyze how you use our website</li>
                  <li>Communicate with you, either directly or through one of our partners</li>
                  <li>Send you updates, marketing and promotional materials</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-dark mb-4">3. Log Files</h2>
                <p>
                  Kumar Magnacity follows a standard procedure of using log files. These files log visitors 
                  when they visit websites. The information collected by log files include internet protocol (IP) 
                  addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit 
                  pages, and possibly the number of clicks.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-dark mb-4">4. Data Security</h2>
                <p>
                  We use commercially acceptable means to protect your personal information, but remember 
                  that no method of transmission over the internet, or method of electronic storage is 100% secure.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-dark mb-4">5. Cookies and Web Beacons</h2>
                <p>
                  Like any other website, Kumar Magnacity uses &apos;cookies&apos;. These cookies are used to store 
                  information including visitors&apos; preferences, and the pages on the website that the visitor 
                  accessed or visited.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-dark mb-4">6. Your Consent</h2>
                <p>
                  By using our website, you hereby consent to our Privacy Policy and agree to its terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
