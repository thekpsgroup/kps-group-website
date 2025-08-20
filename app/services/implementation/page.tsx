import { headers } from 'next/headers';
import { resolveBrand } from '@kps/config';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export const metadata = {
  title: 'Implementation',
  description: 'Plan, configure, and launch with confidence—clear scope, accountable owners, and realistic timelines.'
};

export default async function Page() {
  const headersList = await headers();
  const brandKey = headersList.get('x-brand') || 'kps-group';
  const brand = resolveBrand(undefined, brandKey as any);
  if (brand.flavor === 'pay') {
    notFound();
  }
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h1 className="heading-2 text-neutral-900 mb-4">Implementation</h1>
          <p className="text-neutral-700 text-lg leading-relaxed mb-8">
            Kickoff to go‑live without the chaos. Clear scope, named owners, realistic dates, and a single source of truth. 
            We configure the tools, migrate the data, and train your team so launch day is calm and boring the way it should be.
          </p>
        </div>

        {/* What we implement */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm">
            <h2 className="text-xl font-semibold text-neutral-900 mb-2">Systems</h2>
            <ul className="list-disc pl-5 space-y-2 text-neutral-700">
              <li>CRM, scheduling, and dispatch</li>
              <li>Accounting and payments</li>
              <li>Document + asset management</li>
              <li>Customer portal and notifications</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm">
            <h2 className="text-xl font-semibold text-neutral-900 mb-2">Data</h2>
            <ul className="list-disc pl-5 space-y-2 text-neutral-700">
              <li>Migration cut plan (zero surprises)</li>
              <li>Validation, sampling, and sign‑off</li>
              <li>Backups and rollback drills</li>
              <li>Audit trails and change logs</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm">
            <h2 className="text-xl font-semibold text-neutral-900 mb-2">People</h2>
            <ul className="list-disc pl-5 space-y-2 text-neutral-700">
              <li>Role‑based training and materials</li>
              <li>Cutover communications</li>
              <li>Frontline playbooks</li>
              <li>Post‑launch office hours</li>
            </ul>
          </div>
        </div>

        {/* Process */}
        <div className="space-y-6 mb-10">
          <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm">
            <div className="flex items-start gap-6">
              <div className="w-10 h-10 bg-neutral-900 text-white rounded-full flex items-center justify-center font-semibold">1</div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-900">Discovery & Scope</h3>
                <p className="text-neutral-700">We map the current state, define the target state, and lock scope. Owners, dates, and exit criteria—written down.</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm">
            <div className="flex items-start gap-6">
              <div className="w-10 h-10 bg-neutral-900 text-white rounded-full flex items-center justify-center font-semibold">2</div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-900">Configuration & Integrations</h3>
                <p className="text-neutral-700">Environments, access, roles, and clean integrations. Least‑privilege security and sensible defaults.</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm">
            <div className="flex items-start gap-6">
              <div className="w-10 h-10 bg-neutral-900 text-white rounded-full flex items-center justify-center font-semibold">3</div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-900">Migration & Testing</h3>
                <p className="text-neutral-700">Dry runs, validation, and owner sign‑off. We prove it in staging before we touch production.</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm">
            <div className="flex items-start gap-6">
              <div className="w-10 h-10 bg-neutral-900 text-white rounded-full flex items-center justify-center font-semibold">4</div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-900">Cutover & Go‑Live</h3>
                <p className="text-neutral-700">Short maintenance window, clear comms, rollback plan ready. Launch is calm and reversible.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Outcomes */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-2xl p-6 border border-neutral-200 text-center">
            <div className="text-3xl font-bold text-neutral-900 mb-1">100%</div>
            <div className="text-neutral-600">Launch checklist coverage</div>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-neutral-200 text-center">
            <div className="text-3xl font-bold text-neutral-900 mb-1">0</div>
            <div className="text-neutral-600">Surprise downtime during cutover</div>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-neutral-200 text-center">
            <div className="text-3xl font-bold text-neutral-900 mb-1">48–72 hrs</div>
            <div className="text-neutral-600">To steady‑state after go‑live</div>
          </div>
        </div>

        {/* Packages */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm">
            <h3 className="text-2xl font-bold text-neutral-900 mb-2">Implementation Lite</h3>
            <div className="text-neutral-900 text-3xl font-bold mb-3">$6,500</div>
            <p className="text-neutral-700 mb-4">Single system, clean config, and a tight cutover. Training for frontline and leads.</p>
            <ul className="text-neutral-700 text-sm space-y-2 mb-6">
              <li>• Access, roles, environments</li>
              <li>• Data import with validation</li>
              <li>• Training materials + office hours</li>
            </ul>
            <Link href="/contact" className="inline-block px-6 py-3 rounded-lg bg-neutral-900 text-white hover:bg-neutral-800">Plan my rollout</Link>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm ring-2 ring-neutral-900">
            <h3 className="text-2xl font-bold text-neutral-900 mb-2">Full Implementation</h3>
            <div className="text-neutral-900 text-3xl font-bold mb-3">$18,000</div>
            <p className="text-neutral-700 mb-4">Multi‑system implementation with integrations, migration rehearsals, and change management.</p>
            <ul className="text-neutral-700 text-sm space-y-2 mb-6">
              <li>• CRM + accounting + payments</li>
              <li>• Integrations with retries + audit</li>
              <li>• Cutover comms + rollback plan</li>
            </ul>
            <Link href="/contact" className="inline-block px-6 py-3 rounded-lg bg-neutral-900 text-white hover:bg-neutral-800">Schedule scope</Link>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm">
            <h3 className="text-2xl font-bold text-neutral-900 mb-2">Franchise / Multi‑Location</h3>
            <div className="text-neutral-900 text-3xl font-bold mb-3">$35,000+</div>
            <p className="text-neutral-700 mb-4">Templates, playbooks, and a repeatable rollout plan. Train the trainers and scale.</p>
            <ul className="text-neutral-700 text-sm space-y-2 mb-6">
              <li>• Standardized configs + runbooks</li>
              <li>• Observability and SLOs</li>
              <li>• Governance and change control</li>
            </ul>
            <Link href="/contact" className="inline-block px-6 py-3 rounded-lg bg-neutral-900 text-white hover:bg-neutral-800">Design my program</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
