import { MetadataRoute } from 'next';
import registry from "@/data/seo-registry.json";
import { SEORegistry } from "@/types/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kumarmagnacitytownship.com";
  const lastModified = new Date();

  // Core Pages (Updated to SEO-Inverted Routes)
  const corePages = [
    "",
    "/kumar-magnacity-na-bungalow-plots-concept",
    "/kumar-magnacity-manjari-location-map",
    "/kumar-magnacity-na-bungalow-plots-availability",
    "/kumar-magnacity-na-bungalow-plots-amenities",
    "/kumar-magnacity-investment-plan-pune-east",
    "/kumar-magnacity-na-bungalow-plots-master-plan",
    "/kumar-magnacity-market-data-pune-east",
    "/kumar-magnacity-na-bungalow-plots-faq",
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Add English and Marathi versions of core pages
  corePages.forEach((route) => {
    // English
    sitemapEntries.push({
      url: `${baseUrl}${route}/`,
      lastModified: new Date('2026-04-12'), // Hardocoded to last major infrastructure update
      changeFrequency: route === "" ? 'always' : 'daily',
      priority: route === "" ? 1.0 : 0.9,
    });
    // Marathi
    sitemapEntries.push({
      url: `${baseUrl}/mr${route}/`,
      lastModified: new Date('2026-04-12'),
      changeFrequency: route === "" ? 'always' : 'daily',
      priority: 0.8,
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
