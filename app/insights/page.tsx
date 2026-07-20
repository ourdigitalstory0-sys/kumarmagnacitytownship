import { getAllInsights } from '@/lib/markdown';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SovereignBar from '@/components/SovereignBar';
import SectionHeader from '@/components/SectionHeader';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Real Estate Insights & Market Trends | Kumar Magnacity',
  description: 'In-depth analysis, market trends, and investment guides for premium real estate in Pune East, Manjari, and Hadapsar.',
};

export default function InsightsIndexPage() {
  const posts = getAllInsights();

  return (
    <main className="min-h-screen bg-light text-dark selection:bg-accent selection:text-dark">
      <Header />
      
      <section className="pt-40 pb-24 bg-dark text-white rounded-b-[4rem]">
        <div className="container mx-auto px-6 max-w-7xl">
          <SectionHeader 
            align="left"
            badge="Top-of-Funnel Engine"
            title="Market Intelligence <br/> & Insights."
            subtitle="Data-driven research, investment blueprints, and real estate trends defining the future of Pune East."
            className="mb-16"
          />
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link 
                href={`/insights/${post.slug}`} 
                key={post.slug}
                className="group block bg-white rounded-[2rem] border border-dark/5 overflow-hidden hover:shadow-2xl hover:border-accent/30 transition-all duration-500"
              >
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={post.thumbnail} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-dark flex items-center gap-2">
                    <Clock size={12} /> {post.readTime}
                  </div>
                </div>
                
                <div className="p-8 space-y-4">
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-dark/40">
                    <Calendar size={12} /> {new Date(post.date).toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })}
                  </div>
                  <h3 className="text-xl font-heading font-bold leading-snug group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-dark/60 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="pt-4 flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-accent">
                    READ ARTICLE <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <SovereignBar />
    </main>
  );
}
