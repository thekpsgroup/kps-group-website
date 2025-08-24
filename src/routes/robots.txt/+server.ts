export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://thekpsgroup.com/sitemap.xml

# Disallow admin and private areas
Disallow: /api/
Disallow: /admin/
Disallow: /private/

# Allow important pages
Allow: /services
Allow: /contact
Allow: /suite/
Allow: /outcomes

# Crawl delay (optional)
Crawl-delay: 1`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400'
    }
  });
}
