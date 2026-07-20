'use client';
import { usePathname } from 'next/navigation';

export default function BreadcrumbSchema() {
  const pathname = usePathname();
  
  if (pathname === '/') return null;

  const paths = pathname.split('/').filter(Boolean);
  
  const itemListElement = paths.map((path, index) => {
    const url = `https://kumarmagnacity.com/${paths.slice(0, index + 1).join('/')}`;
    // Format name (e.g., "flats-near-magarpatta" -> "Flats Near Magarpatta")
    const name = path.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    
    return {
      "@type": "ListItem",
      "position": index + 2,
      "name": name,
      "item": url
    };
  });

  // Always include Home as position 1
  itemListElement.unshift({
    "@type": "ListItem",
    "position": 1,
    "name": "Home",
    "item": "https://kumarmagnacity.com/"
  });

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": itemListElement
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
