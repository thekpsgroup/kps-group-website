import Link from 'next/link';
import { Button, H1, H2, H3, Body } from '@kps/ui';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-50 to-neutral-100 px-4">
      <div className="max-w-md w-full mx-auto text-center">
        <div className="space-y-8">
          {/* 404 Number */}
          <div className="space-y-4">
            <H1 className="text-8xl text-kps-navy">404</H1>
            <H2 className="text-2xl">
              Page Not Found
            </H2>
            <p className="text-neutral-600 leading-relaxed">
              The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back on track to growing your business.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <H3 className="text-lg">
              Quick Links
            </H3>
            <div className="grid grid-cols-2 gap-3">
              <Link 
                href="/"
                className="block p-3 bg-white border border-neutral-200 rounded-lg hover:border-kps-navy hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-kps-navy focus:ring-offset-2"
              >
                <span className="text-sm font-medium text-neutral-900">Home</span>
              </Link>
              <Link 
                href="/services"
                className="block p-3 bg-white border border-neutral-200 rounded-lg hover:border-kps-navy hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-kps-navy focus:ring-offset-2"
              >
                <span className="text-sm font-medium text-neutral-900">Services</span>
              </Link>
              <Link 
                href="/pricing"
                className="block p-3 bg-white border border-neutral-200 rounded-lg hover:border-kps-navy hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-kps-navy focus:ring-offset-2"
              >
                <span className="text-sm font-medium text-neutral-900">Pricing</span>
              </Link>
              <Link 
                href="/contact"
                className="block p-3 bg-white border border-neutral-200 rounded-lg hover:border-kps-navy hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-kps-navy focus:ring-offset-2"
              >
                <span className="text-sm font-medium text-neutral-900">Contact</span>
              </Link>
            </div>
          </div>
          
          {/* CTA */}
          <div className="space-y-4">
            <Button asChild className="w-full">
              <Link href="/contact">
                Schedule Free Consultation
              </Link>
            </Button>
            <p className="text-sm text-neutral-500">
              Need help? Our team is here to support your business growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}