export const dynamic = 'force-static';

export async function GET() {
  const baseUrl = "https://kumarmagnacitytownship.com";
  
  // Define all high-value SEO images
  const images = [
    {
      url: `${baseUrl}/assets/master_layout.jpg`,
      title: "Kumar Magnacity 150 Acre Master Plan",
      caption: "The official master layout showing the 150-acre township, residential towers, and NA bungalow plots in Manjari, Pune East.",
      geo_location: "Pune, Maharashtra, India"
    },
    {
      url: `${baseUrl}/assets/floor_plan_2bhk.jpg`,
      title: "Kumar Magnacity 2BHK Premium Floor Plan",
      caption: "Detailed 2BHK floor plan layout starting at 757 sq.ft carpet area at Kumar Magnacity.",
      geo_location: "Pune, Maharashtra, India"
    },
    {
      url: `${baseUrl}/assets/floor_plan_3bhk.jpg`,
      title: "Kumar Magnacity 3BHK Luxury Floor Plan",
      caption: "Detailed 3BHK floor plan layout starting at 1053 sq.ft carpet area at Kumar Magnacity.",
      geo_location: "Pune, Maharashtra, India"
    },
    {
      url: `${baseUrl}/assets/township_layout.jpg`,
      title: "Kumar Magnacity NA Bungalow Plots Layout",
      caption: "Sanctioned NA Bungalow Plots layout within the Kumar Magnacity 150-Acre Township in Pune East.",
      geo_location: "Pune, Maharashtra, India"
    }
  ];

  // Build the strict Google Image Sitemap XML schema
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${images.map(img => `
  <url>
    <loc>${baseUrl}</loc>
    <image:image>
      <image:loc>${img.url}</image:loc>
      <image:title><![CDATA[${img.title}]]></image:title>
      <image:caption><![CDATA[${img.caption}]]></image:caption>
      <image:geo_location>${img.geo_location}</image:geo_location>
    </image:image>
  </url>
  `).join('')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400, stale-while-revalidate',
    },
  });
}
