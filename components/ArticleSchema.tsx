export default function ArticleSchema({ post }: { post: any }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "image": [
      `https://kumarmagnacity.com${post.thumbnail}`
    ],
    "datePublished": post.date,
    "dateModified": post.date,
    "author": [{
        "@type": "Organization",
        "name": "Kumar Properties",
        "url": "https://kumarmagnacity.com"
      }],
    "publisher": {
      "@type": "Organization",
      "name": "Kumar Properties",
      "logo": {
        "@type": "ImageObject",
        "url": "https://kumarmagnacity.com/assets/favicon.png"
      }
    },
    "description": post.excerpt
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
