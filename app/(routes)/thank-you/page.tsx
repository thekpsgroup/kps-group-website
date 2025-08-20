import Link from 'next/link';
import { headers } from 'next/headers';
import { resolveBrand } from '@kps/config';
import { Button } from '@kps/ui';
import { CheckCircle, ArrowRight, Clock, Mail, Phone } from 'lucide-react';
import { generateSEO, seoConfigs } from '../../../lib/seo';

export const metadata = generateSEO({
  title: 'Thank You – We\'ll Be In Touch Soon',
  description: 'Thank you for contacting us. We\'ll review your request and get back to you within 24 hours.',
  noindex: true // Don't index thank you pages
});

export default async function ThankYouPage() {
  const headersList = await headers();
  const brandKey = headersList.get('x-brand') || 'kps-group';
  const brand = resolveBrand(undefined, brandKey as any);

  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-kps-gold/10 rounded-full blur-3xl -translate-x-32 -translate-y-32 float" aria-hidden="true"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-32 translate-y-32 float-delayed" aria-hidden="true"></div>
      
      <div className="flex-1 container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mb-8 animate-fade-in">
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-400" />
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6 animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Thank You!
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-900/90 leading-relaxed">
              We&apos;ve received your message and will get back to you within 24 hours.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-center space-x-2 text-gray-900/80 mb-4">
                <Clock className="w-5 h-5" />
                <span className="font-medium">What happens next?</span>
              </div>
              
              <div className="space-y-3 text-left">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-kps-gold rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-900/70">We&apos;ll review your requirements and prepare a personalized consultation</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-kps-gold rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-900/70">Our team will reach out to schedule your free strategy session</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-kps-gold rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-900/70">We&apos;ll discuss your goals and create a custom solution for your business</p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Need immediate assistance?</h3>
              <div className="space-y-3">
                <a 
                  href={`mailto:${brand.contact?.email || 'sales@thekpsgroup.com'}`}
                  className="flex items-center justify-center space-x-3 text-gray-900/80 hover:text-gray-900 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>{brand.contact?.email || 'sales@thekpsgroup.com'}</span>
                </a>
                <a 
                  href={`tel:${brand.contact?.phone || '469-458-6966'}`}
                  className="flex items-center justify-center space-x-3 text-gray-900/80 hover:text-gray-900 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>{brand.contact?.phone || '469-458-6966'}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button asChild className="bg-gradient-to-r from-kps-gold to-kps-gold/80 text-kps-navy hover:from-kps-gold/90 hover:to-kps-gold/70">
              <Link href="/services">
                Explore Our Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" className="border-white/20 text-gray-900 hover:bg-white/10">
              <Link href="/testimonials">
                Read Client Stories
              </Link>
            </Button>
          </div>

          {/* Back to Home */}
          <div className="mt-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Link 
              href="/" 
              className="text-gray-900/60 hover:text-gray-900 transition-colors text-sm"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}