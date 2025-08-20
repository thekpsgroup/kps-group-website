import { headers } from 'next/headers';
import { resolveBrand, getBrandByKey } from '@kps/config';
import { Hero, ServicesOverview, Proof, CTASection } from '@kps/ui';
import { SubBrandsShowcase } from '@kps/ui';
import { sendLead } from './actions/sendLead';
import { generateSEO, seoConfigs } from '../lib/seo';

export async function generateMetadata() {
  const headersList = await headers();
  const brandKey = (headersList.get('x-brand') || 'kps-group') as any;
  const brand = getBrandByKey(brandKey) || resolveBrand(undefined);

  const titles: Record<string, string> = {
    parent: 'Small Business Consulting in Texas – Operations & Growth',
    consulting: 'Business Consulting – Strategy, Operations, Advisory',
    ledger: 'Bookkeeping & Accounting – Clean Books, Real-Time Reporting',
    pay: 'Payroll & HR Compliance – Accurate, On Time, Auditable',
    brands: 'Branding & Web – Build Your Brand. Get Leads.',
    stack: 'Technology & IT Support – Secure, Simple, Supported',
    os: 'Business Automation – One Login, One Truth'
  };
  const descriptions: Record<string, string> = {
    parent: 'Back-office consulting for contractors and service businesses: QuickBooks cleanup, payroll & HR, and operations. Schedule a free consultation.',
    consulting: 'Operating rhythm for real life. Process, playbooks, and leadership cadence that make revenue predictable.',
    ledger: 'Clean books, month-end discipline, job-costing that tells the truth, and reporting you can trust.',
    pay: 'Payroll processing, tax filing, benefits admin, and HR compliance you don\'t have to think about.',
    brands: 'Identity, websites, SEO, and ecommerce built for pipeline, not pageviews.',
    stack: 'IT support, cloud infrastructure, security, and sensible tools your team actually uses.',
    os: 'Automation, integration, and workflows that reduce chaos and increase efficiency.'
  };

  return generateSEO({
    title: titles[brand.flavor] || titles.parent,
    description: descriptions[brand.flavor] || descriptions.parent
  }, brand.name);
}

export default async function HomePage() {
  const headersList = await headers();
  const host = headersList.get('host') || '';
  const brandKey = headersList.get('x-brand') || 'kps-group';
  const brand = getBrandByKey(brandKey as any) || resolveBrand(host);

  const siteUrl = `https://${brand.domain}`;
  const logoPath = brand.key === 'kps-group'
    ? '/brands/kps/logo-transparent.png'
    : `/brands/modern/${(brand.key as string).replace('modern-', '')}/logo-transparent.png`;
  const flavorServices: Record<string, string[]> = {
    parent: ['Business Consulting', 'QuickBooks Setup', 'Payroll Services', 'HR Compliance'],
    consulting: ['Business Consulting', 'Operations', 'Strategy', 'Process Optimization'],
    ledger: ['Bookkeeping', 'Accounting', 'Financial Reporting', 'Compliance'],
    pay: ['Payroll Services', 'HR Compliance', 'Tax Filing', 'Benefits Administration'],
    brands: ['Branding', 'Web Design', 'SEO', 'Ecommerce'],
    stack: ['IT Support', 'Cloud Infrastructure', 'Security', 'Custom Software'],
    os: ['Business Automation', 'Workflow Optimization', 'System Integration']
  };
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: brand.name,
    url: siteUrl,
    logo: `${siteUrl}${logoPath}`,
    telephone: brand.contact?.phone || '469-458-6966',
    email: brand.contact?.email || 'sales@thekpsgroup.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Austin',
      addressRegion: 'TX',
      addressCountry: 'US'
    },
    areaServed: 'US',
    serviceType: flavorServices[brand.flavor] || flavorServices.parent,
    description: brand.description
  };

  return (
    <div className="bg-white">
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* Hero already contains the main visual h1 */}
        <Hero brand={brand.key} />
        <section aria-labelledby="home-services-heading">
          <h2 id="home-services-heading" className="sr-only">Services</h2>
          <ServicesOverview brand={brand.key} />
        </section>
        
        {/* Showcase sub-brands on parent company website, or other services on sub-brand pages */}
        <section aria-labelledby="sub-brands-heading">
          <h2 id="sub-brands-heading" className="sr-only">
            {brand.flavor === 'parent' ? 'Our Specialized Companies' : 'Explore Our Other Services'}
          </h2>
          <SubBrandsShowcase currentBrandKey={brand.key} />
        </section>
        
        <section aria-labelledby="home-proof-heading">
          <h2 id="home-proof-heading" className="sr-only">Proof and Testimonials</h2>
          <Proof brand={brand} />
        </section>
        <section aria-labelledby="home-cta-heading">
          <h2 id="home-cta-heading" className="sr-only">Get Started</h2>
          <CTASection brand={brand} flavor={brand.flavor} />
        </section>
      </div>
  );
}