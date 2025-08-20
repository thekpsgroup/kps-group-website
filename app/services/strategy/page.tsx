import { headers } from 'next/headers';
import { resolveBrand } from '@kps/config';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Strategy',
  description: 'Set direction, align teams, and execute with confidence.'
};

export default async function Page() {
  const headersList = await headers();
  const brandKey = headersList.get('x-brand') || 'kps-group';
  const brand = resolveBrand(undefined, brandKey as any);
  if (brand.flavor !== 'consulting' && brand.flavor !== 'parent') {
    notFound();
  }
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h1 className="heading-2 text-neutral-900 mb-4">Strategy</h1>
          <p className="text-neutral-700 text-lg leading-relaxed mb-8">
            Clear priorities, accountable owners, and time-bound goals. We help leadership decide what matters and build a
            plan your team can actually execute.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm">
            <h2 className="text-xl font-semibold text-neutral-900 mb-2">Workstreams</h2>
            <ul className="list-disc pl-5 space-y-2 text-neutral-700">
              <li>Annual and quarterly planning</li>
              <li>Org design and accountability</li>
              <li>Scorecards and reviews</li>
              <li>Market and competitive analysis</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm">
            <h2 className="text-xl font-semibold text-neutral-900 mb-2">Outcomes</h2>
            <ul className="list-disc pl-5 space-y-2 text-neutral-700">
              <li>Aligned leadership and teams</li>
              <li>Measurable, realistic targets</li>
              <li>Cadence for execution</li>
              <li>Fewer priorities, more progress</li>
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <a href="/contact" className="inline-flex items-center px-6 py-3 rounded-xl bg-kps-navy text-white hover:bg-kps-navy/90 focus:ring-2 focus:ring-kps-navy focus:ring-offset-2">
            Plan My Quarter
          </a>
        </div>
      </div>
    </section>
  );
}
