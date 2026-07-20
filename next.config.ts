import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          }
        ],
      },
    ];
  },
  async redirects() {
    const seoMappings = [
      { old: '/availability', new: '/kumar-magnacity-na-bungalow-plots-availability' },
      { old: '/market-insights', new: '/kumar-magnacity-market-data-pune-east' },
      { old: '/concept', new: '/kumar-magnacity-na-bungalow-plots-concept' },
      { old: '/location', new: '/kumar-magnacity-manjari-location-map' },
      { old: '/investment', new: '/kumar-magnacity-investment-plan-pune-east' },
      { old: '/amenities', new: '/kumar-magnacity-na-bungalow-plots-amenities' },
      { old: '/master-plan', new: '/kumar-magnacity-na-bungalow-plots-master-plan' },
      { old: '/privacy-policy', new: '/kumar-magnacity-na-bungalow-plots-privacy-policy' },
      { old: '/thank-you', new: '/kumar-magnacity-na-bungalow-plots-thank-you' },
      { old: '/faq', new: '/kumar-magnacity-na-bungalow-plots-faq' },
    ];

    const redirectsList = [];

    // English Redirects
    seoMappings.forEach(mapping => {
      redirectsList.push({
        source: mapping.old,
        destination: mapping.new,
        permanent: true,
      });
    });

    // Marathi Redirects
    seoMappings.forEach(mapping => {
      redirectsList.push({
        source: `/mr${mapping.old}`,
        destination: `/mr${mapping.new}`,
        permanent: true,
      });
    });

    return redirectsList;
  },
};

export default nextConfig;
