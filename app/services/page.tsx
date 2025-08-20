import { headers } from 'next/headers';
import Link from 'next/link';
import { resolveBrand } from '@kps/config';
import { getContent } from '@kps/content';
import { CTASection } from '@kps/ui';
import { sendLead } from '../actions/sendLead';
import { generateSEO } from '../../lib/seo';

export const metadata = {
  title: 'Services',
  description: 'Professional services tailored to your brand.',
};

export default async function ServicesPage() {
  const headersList = await headers();
  const brandKey = headersList.get('x-brand') || 'kps-group';
  const brand = resolveBrand(undefined, brandKey as any);
  const content = getContent(brand.key);

  // Adjust meta per brand
  const metaTitleByFlavor: Record<string, string> = {
    parent: 'Business Services – QuickBooks, Payroll & HR',
    consulting: 'Consulting Services – Strategy & Operations',
    ledger: 'Accounting & Bookkeeping Services',
    pay: 'Payroll & HR Compliance Services',
    brands: 'Branding, Websites, and SEO Services',
    stack: 'Technology & IT Support Services',
    os: 'Business Automation & Workflow Services'
  };
  const metaDescByFlavor: Record<string, string> = {
    parent: 'Setup, cleanup, and ongoing support for QuickBooks, payroll, and HR compliance. Built for small businesses.',
    consulting: 'Process, playbooks, and leadership cadence for predictable revenue.',
    ledger: 'Clean books, real-time reporting, and month-end discipline for confident decisions.',
    pay: 'Accurate payroll, on-time filings, benefits admin, and HR compliance you can trust.',
    brands: 'Identity, websites, SEO, and conversion built for pipeline, not pageviews.',
    stack: 'IT support, cloud, security, and sensible tools your team actually uses.',
    os: 'Automation, integration, and workflows that reduce chaos and increase efficiency.'
  };

  const headingByFlavor: Record<string, string> = {
    parent: 'Our Services',
    consulting: 'Consulting Services',
    ledger: 'Accounting & Bookkeeping Services',
    pay: 'Payroll & HR Services',
    brands: 'Branding, Web & SEO Services',
    stack: 'Technology & IT Services',
    os: 'Automation & Workflow Services'
  };
  const subheadingByFlavor: Record<string, string> = {
    parent: 'Comprehensive solutions tailored to your business needs',
    consulting: 'Process, playbooks, and leadership cadence for predictable revenue',
    ledger: 'Clean books, accurate reporting, and month-end discipline',
    pay: 'Accurate payroll, on-time filings, benefits admin, and HR compliance',
    brands: 'Identity, websites, SEO, and conversion built for pipeline',
    stack: 'IT support, cloud infrastructure, security, and sensible tools',
    os: 'Automation, integration, and workflows that reduce chaos'
  };

  // Service schema for each service
  const serviceSchemas = content.services.map((service, index) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `https://${brand.domain}/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`,
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'Organization',
      '@id': `https://${brand.domain}/#organization`,
      name: brand.name,
      url: `https://${brand.domain}`
    },
    areaServed: {
      '@type': 'State',
      name: 'Texas'
    },
    serviceType: service.title,
    category: 'Business Services',
    url: `https://${brand.domain}/services`
  }));

  // Service links mapping (brand cards and generic services)
  const serviceLinks: Record<string, string> = {
    // Parent brand company cards → detailed service pages
    'Modern Consulting': '/services/consulting',
    'Modern Ledger': '/services/optimization',
    'Modern Payroll': '/services/security-compliance',
    'Modern Brands': '/services/branding',
    'Modern Tech Stack': '/services/digital-solutions',
    'Modern OS': '/services/implementation',
    // Generic services → their detailed pages
    'Strategic Consulting': '/services/strategic-consulting',
    'Digital Solutions': '/services/digital-solutions',
    'Brand Development': '/services/brand-development',
    'Performance Optimization': '/services/performance-optimization',
    'Team Development': '/services/team-development',
    'Security & Compliance': '/services/security-compliance'
  };

  return (
    <>
      {/* JSON-LD Schema for Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemas) }}
      />
      
      <section className="section-padding pt-28 md:pt-32 bg-gradient-secondary relative overflow-hidden">
        {/* Enhanced background decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-kps-navy/5 rounded-full blur-3xl -translate-x-32 -translate-y-32 float" aria-hidden="true"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-kps-gold/5 rounded-full blur-3xl translate-x-32 translate-y-32 float-delayed" aria-hidden="true"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-kps-navy/3 rounded-full blur-3xl float-slow" aria-hidden="true"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              {headingByFlavor[brand.flavor] || 'Our Services'}
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              {subheadingByFlavor[brand.flavor] || 'Comprehensive solutions tailored to your business needs'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {content.services.map((service, index) => {
              const serviceLink = serviceLinks[service.title];
              
              return (
                <Link
                  key={index}
                  href={serviceLink || '/contact'}
                  className="group relative animate-scale-in bg-white rounded-2xl p-8 border border-neutral-200 shadow-sm hover:shadow-md overflow-hidden transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Enhanced hover effect background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-kps-navy/10 to-kps-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" aria-hidden="true"></div>
                  
                  {/* Service content */}
                  <div className="relative z-10">
                    {/* Icon removed for cleaner, professional presentation */}
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 group-hover:text-kps-navy transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-neutral-700 leading-relaxed text-lg mb-8">
                      {service.description}
                    </p>
                    
                    {/* Enhanced arrow indicator */}
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0" aria-hidden="true">
                      <div className="w-12 h-12 bg-gradient-to-br from-kps-gold to-kps-gold rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                        <svg className="w-6 h-6 text-kps-navy group-hover:text-white transform group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Custom Pricing banner for parent site */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center bg-white rounded-2xl p-8 border border-neutral-200 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">Custom Pricing</h2>
            <p className="text-neutral-700 mb-6">
              Contact us to learn about our pricing. We&apos;ll tailor a plan around your goals and scope.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 rounded-xl bg-kps-navy text-white hover:bg-kps-navy/90 transition-colors min-h-[44px]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <CTASection 
        brand={brand} 
        flavor={brand.flavor} 
      />
    </>
  );
}