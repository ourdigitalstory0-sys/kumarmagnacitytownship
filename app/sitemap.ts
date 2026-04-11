import { MetadataRoute } from 'next';
import registry from "@/data/seo-registry.json";
import { SEORegistry } from "@/types/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kumarmagnacitytownship.com";
  const lastModified = new Date();

  // Core Pages
  const corePages = [
    "",
    "/concept",
    "/location",
    "/availability",
    "/amenities",
    "/investment",
    "/master-plan",
    "/market-insights",
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Add English and Marathi versions of core pages
  corePages.forEach((route) => {
    // English
    sitemapEntries.push({
      url: `${baseUrl}${route}/`,
      lastModified,
      changeFrequency: 'daily',
      priority: route === "" ? 1.0 : 0.8,
    });
    // Marathi
    sitemapEntries.push({
      url: `${baseUrl}/mr${route}/`,
      lastModified,
      changeFrequency: 'daily',
      priority: 0.7,
    });
  });

  // Dynamic Programmatic SEO Routes from Registry
  Object.keys(registry as SEORegistry).forEach((key) => {
    // English Node
    sitemapEntries.push({
      url: `${baseUrl}/${key}/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.6,
    });
    // Marathi Node
    sitemapEntries.push({
      url: `${baseUrl}/mr/${key}/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.5,
    });
  });

  return sitemapEntries;
}
