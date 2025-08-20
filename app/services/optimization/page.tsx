import { headers } from 'next/headers';
import { resolveBrand } from '@kps/config';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Performance Optimization',
  description: 'Improve speed, reliability, and efficiency across your tools and workflows.'
};

export default async function Page() {
  const headersList = await headers();
  const brandKey = headersList.get('x-brand') || 'kps-group';
  const brand = resolveBrand(undefined, brandKey as any);
  if (brand.flavor !== 'stack' && brand.flavor !== 'parent') {
    notFound();
  }
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h1 className="heading-2 text-neutral-900 mb-4">Performance Optimization</h1>
          <p className="text-neutral-700 text-lg leading-relaxed mb-8">
            We tune your stack for speed and stability—front to back. Faster loads, fewer regressions, and a workflow your team can maintain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm">
            <h2 className="text-xl font-semibold text-neutral-900 mb-2">Focus Areas</h2>
            <ul className="list-disc pl-5 space-y-2 text-neutral-700">
              <li>Core Web Vitals and Lighthouse</li>
              <li>Image and asset optimization</li>
              <li>Caching, compression, and headers</li>
              <li>Accessibility and contrast fixes</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm">
            <h2 className="text-xl font-semibold text-neutral-900 mb-2">Deliverables</h2>
            <ul className="list-disc pl-5 space-y-2 text-neutral-700">
              <li>Before/after audit with metrics</li>
              <li>Production-ready configuration</li>
              <li>Actionable backlog and playbooks</li>
              <li>Training and handoff</li>
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <a href="/contact" className="inline-flex items-center px-6 py-3 rounded-xl bg-kps-navy text-white hover:bg-kps-navy/90 focus:ring-2 focus:ring-kps-navy focus:ring-offset-2">
            Improve My Performance
          </a>
        </div>
      </div>
    </section>
  );
}
