import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const runtime = "edge";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Thank You | Kumar Magnacity",
  description: "Thank you for your interest in Kumar Magnacity. Our team will contact you shortly."
};

export default function ThankYou() {
  return (
    <main className="min-h-screen bg-light">
      <Header />
      
      <section className="min-h-[80vh] flex items-center justify-center pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <div className="bg-white rounded-[3.5rem] p-12 md:p-20 shadow-2xl border border-dark/5 space-y-10 relative overflow-hidden group">
            {/* Subtle background glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/10 blur-[80px] rounded-full group-hover:bg-accent/20 transition-all duration-700" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-primary/10 blur-[80px] rounded-full" />

            <div className="relative z-10 space-y-8">
                <div className="w-24 h-24 bg-primary/5 rounded-full flex items-center justify-center text-primary mx-auto border border-primary/10 shadow-lg">
                    <CheckCircle2 size={40} className="text-accent" />
                </div>
                
                <div className="space-y-4">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-dark italic">Success!</h1>
                    <p className="text-lg text-dark/50 leading-relaxed font-light">
                        Your VIP access request for <strong>Kumar Magnacity</strong> has been prioritized. Our Relationship Manager will connect with you via WhatsApp or Call within 30 minutes.
                    </p>
                </div>

                <div className="pt-8 flex flex-col items-center gap-6">
                    <Link 
                        href="/" 
                        className="group bg-primary text-white px-12 py-5 rounded-full font-bold uppercase tracking-[0.2em] text-[11px] hover:bg-primary-light transition-all shadow-[0_20px_40px_-10px_rgba(10,77,60,0.3)] flex items-center gap-4 hover:scale-105 active:scale-95"
                    >
                        Back to Property Dashboard
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    
                    <p className="text-[10px] uppercase font-bold text-dark/20 tracking-[0.5em]">Landed Estate Mastery</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
