import { headers } from 'next/headers';
import { resolveBrand } from '@kps/config';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Digital Solutions',
  description: 'Web, ecommerce, and integration work that ties your business systems together.'
};

export default async function Page() {
  const headersList = await headers();
  const brandKey = headersList.get('x-brand') || 'kps-group';
  const brand = resolveBrand(undefined, brandKey as any);
  if (brand.flavor !== 'brands' && brand.flavor !== 'stack' && brand.flavor !== 'parent') {
    notFound();
  }
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h1 className="heading-2 text-neutral-900 mb-4">Digital Solutions</h1>
          <p className="text-neutral-700 text-lg leading-relaxed mb-8">
            Modern websites, ecommerce, and API integrations that actually support the way your team works. Built for performance,
            accessibility, and maintainability—without needless complexity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm">
            <h2 className="text-xl font-semibold text-neutral-900 mb-2">Capabilities</h2>
            <ul className="list-disc pl-5 space-y-2 text-neutral-700">
              <li>Ecommerce storefronts and Stripe integration</li>
              <li>Headless CMS and content architecture</li>
              <li>Systems integration and automation</li>
              <li>Performance and accessibility improvements</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm">
            <h2 className="text-xl font-semibold text-neutral-900 mb-2">Deliverables</h2>
            <ul className="list-disc pl-5 space-y-2 text-neutral-700">
              <li>Design system and component library</li>
              <li>Production-ready codebase and docs</li>
              <li>Monitoring and analytics setup</li>
              <li>Handover and training</li>
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <a href="/contact" className="inline-flex items-center px-6 py-3 rounded-xl bg-kps-navy text-white hover:bg-kps-navy/90 focus:ring-2 focus:ring-kps-navy focus:ring-offset-2">
            Request Demo
          </a>
        </div>
      </div>
    </section>
  );
}
