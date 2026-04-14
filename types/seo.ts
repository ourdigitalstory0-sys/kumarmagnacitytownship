export interface FAQItem {
  "@type": "Question";
  name: string;
  acceptedAnswer: {
    "@type": "Answer";
    text: string;
  };
}

export interface FAQSchema {
  "@context": "https://schema.org";
  "@type": "FAQPage";
  mainEntity: FAQItem[];
}

export interface SEOPageData {
  title: string;
  description: string;
  hero_badge?: string;
  hero_title: string;
  hero_subtitle: string;
  blog_content?: {
    heading: string;
    paragraph: string;
  }[];
  faq_json: FAQSchema | null;
}

export type SEORegistry = Record<string, SEOPageData>;
