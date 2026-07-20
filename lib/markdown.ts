import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content/insights');

export interface InsightPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readTime: string;
  thumbnail: string;
  content: string;
}

export function getInsightSlugs() {
  if (!fs.existsSync(contentDirectory)) return [];
  return fs.readdirSync(contentDirectory);
}

export function getInsightBySlug(slug: string): InsightPost | null {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = path.join(contentDirectory, `${realSlug}.md`);
  
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    readTime: data.readTime || '5 Min Read',
    thumbnail: data.thumbnail || '/assets/hero-bg.jpg',
    content,
  };
}

export function getAllInsights(): InsightPost[] {
  const slugs = getInsightSlugs();
  const posts = slugs
    .map((slug) => getInsightBySlug(slug))
    .filter((post): post is InsightPost => post !== null)
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
