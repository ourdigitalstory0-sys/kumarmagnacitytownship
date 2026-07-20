import { getInsightBySlug, getInsightSlugs } from '@/lib/markdown';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SovereignBar from '@/components/SovereignBar';
import AdvancedEnquiryForm from '@/components/AdvancedEnquiryForm';
import ArticleSchema from '@/components/ArticleSchema';
import { Clock, Calendar } from 'lucide-react';

export async function generateStaticParams() {
  const slugs = getInsightSlugs();
  return slugs.map((slug) => ({
    slug: slug.replace(/\.md$/, ''),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const post = getInsightBySlug(resolvedParams.slug);
  
  if (!post) return { title: 'Not Found' };

  return {
    title: `${post.title} | Kumar Magnacity Insights`,
    description: post.excerpt,
    alternates: {
      canonical: `https://kumarmagnacity.com/insights/${post.slug}`,
    }
  };
}

export default async function InsightArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = getInsightBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-light text-dark selection:bg-accent selection:text-dark">
      <ArticleSchema post={post} />
      <Header />
      
      {/* Article Header (Hero) */}
      <section className="pt-40 pb-20 bg-dark text-white rounded-b-[4rem]">
        <div className="container mx-auto px-6 max-w-4xl space-y-8 text-center">
          <div className="flex items-center justify-center gap-6 text-[11px] font-bold uppercase tracking-widest text-white/50">
            <span className="flex items-center gap-2"><Calendar size={14} className="text-accent" /> {new Date(post.date).toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })}</span>
            <span className="flex items-center gap-2"><Clock size={14} className="text-accent" /> {post.readTime}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight">
            {post.title}
          </h1>
          <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed max-w-2xl mx-auto">
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <article className="prose prose-lg md:prose-xl prose-headings:font-heading prose-headings:font-bold prose-h2:text-4xl prose-h2:mt-16 prose-h2:mb-8 prose-h2:text-dark prose-p:text-dark/70 prose-p:leading-relaxed prose-a:text-accent prose-li:text-dark/70 max-w-none">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </article>
        </div>
      </section>

      {/* Lead Capture Injection */}
      <section className="py-24 bg-dark text-white rounded-t-[4rem] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(201,162,39,0.08),transparent_60%)]" />
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-heading font-bold">Capitalize on the Market.</h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              Secure priority pricing at Kumar Magnacity before the next massive wave of appreciation hits Pune East.
            </p>
          </div>
          
          <div className="bg-white/[0.03] border border-white/10 rounded-[3rem] p-8 md:p-12">
            <AdvancedEnquiryForm formId={`Blog_Lead_${post.slug}`} />
          </div>
        </div>
      </section>

      <Footer />
      <SovereignBar />
    </main>
  );
}
