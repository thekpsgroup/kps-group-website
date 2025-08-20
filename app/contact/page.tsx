import { headers } from 'next/headers';
import { resolveBrand, getMessageTypes } from '@kps/config';
import { LeadForm, Text } from '@kps/ui';
import { generateSEO } from '../../lib/seo';

export const metadata = generateSEO({
  title: 'Contact – Schedule a Free Consultation',
  description: 'Get expert help with bookkeeping, payroll/HR, and operations. Talk to our team.'
});

export default async function ContactPage() {
  const headersList = await headers();
  const brandKey = headersList.get('x-brand') || 'kps-group';
  const brand = resolveBrand(undefined, brandKey as any);
  const typesOfMessages = getMessageTypes(brand.flavor);

  // Special case for Modern OS - show coming soon page
  if (brand.key === 'modern-os') {
    return (
      <div className="min-h-screen bg-gradient-hero flex flex-col">
        <div className="flex-1 container mx-auto px-4 py-20">
          <div className="text-center text-white animate-fade-in">
            <Text as="h1" variant="h1" className="mb-6 animate-slide-up">
              Coming Soon!
            </Text>
            <Text variant="large" className="mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Modern OS is under development. Stay tuned for updates.
            </Text>
            <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <p className="text-lg">
                <strong>Contact:</strong> {brand.contact.email} | {brand.contact.phone}
              </p>
              <p className="text-lg">
                <strong>Domain:</strong> {brand.domain}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }



  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col relative overflow-hidden">
      {/* Enhanced background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-kps-gold/10 rounded-full blur-3xl -translate-x-32 -translate-y-32 float" aria-hidden="true"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-32 translate-y-32 float-delayed" aria-hidden="true"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-kps-gold/5 rounded-full blur-3xl float-slow" aria-hidden="true"></div>
      
      <div className="flex-1 container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Text as="h1" variant="h1" className="text-white mb-6">
              Contact {brand.name}
            </Text>
            <Text variant="large" className="text-white/90 max-w-3xl mx-auto">
              Ready to get started? Let&apos;s discuss how {brand.name} can help transform your business.
            </Text>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Enhanced Contact Information */}
            <div className="text-white animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <Text as="h2" variant="h2" className="mb-8">
                Get in Touch
              </Text>
              <div className="space-y-8">
                <div className="group hover-scale">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-kps-gold to-kps-gold rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0z" />
                      </svg>
                    </div>
                    Our team responds within 1 business day
                  </h3>
                  <p className="text-white/80">
                    Whether you need help with {brand.specialty.toLowerCase()}, our experts are here to help.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <LeadForm brand={brand} source="contact-page" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}