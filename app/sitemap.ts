import { MetadataRoute } from 'next';
import registry from "@/data/seo-registry.json";
import { SEORegistry } from "@/types/seo";
import { getInsightSlugs } from '@/lib/markdown';

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
    // Apartment Pillar Pages
    "/kumar-magnacity-2bhk-3bhk-apartments-manjari-pune",
    "/kumar-magnacity-2bhk-flats-hadapsar-pune-price",
    "/kumar-magnacity-3bhk-apartments-manjari-pune-price",
    "/kumar-magnacity-floor-plan-2bhk-3bhk",
    "/kumar-magnacity-specifications-apartments",
    "/kumar-magnacity-location-advantages-hadapsar-manjari",
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

  // Dynamic pSEO Routes (Flats near X)
  const pSEOLocations = [
    'magarpatta-city',
    'kharadi-it-park',
    'sp-infocity',
    'viman-nagar',
    'koregaon-park',
    'pune-station'
  ];

  const pSEORoutes: MetadataRoute.Sitemap = pSEOLocations.map((slug) => ({
    url: `${baseUrl}/flats-near-${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  // Insights (Blog) Routes
  const insightSlugs = getInsightSlugs();
  const insightRoutes: MetadataRoute.Sitemap = insightSlugs.map((slug) => ({
    url: `${baseUrl}/insights/${slug.replace(/\.md$/, '')}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));
  
  const insightsIndexRoute: MetadataRoute.Sitemap = [{
    url: `${baseUrl}/insights`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 0.8,
  }];

  // Combine static and dynamic routes
  return [...sitemapEntries, ...pSEORoutes, ...insightsIndexRoute, ...insightRoutes];
}
