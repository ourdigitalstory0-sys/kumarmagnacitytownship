export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    "name": "Kumar Magnacity Township",
    "description": "150-Acre Master Planned Sanctuary in Pune East. Premium Villas, Estate Plots, and Luxury Apartments.",
    "url": "https://kumarmagnacity.com",
    "image": "https://kumarmagnacity.com/assets/hero-bg.jpg",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "price": "5000000",
      "availability": "https://schema.org/PreOrder",
      "validFrom": "2024-01-01"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Manjari, Pune East",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "provider": {
      "@type": "Organization",
      "name": "Kumar Properties",
      "url": "https://kumarmagnacity.com"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
