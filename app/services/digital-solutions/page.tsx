import { headers } from 'next/headers';
import { resolveBrand } from '@kps/config';
import { CTASection } from '@kps/ui';
import Link from 'next/link';
import { generateSEO } from '../../../lib/seo';

export async function generateMetadata() {
  return generateSEO({
    title: 'Digital Solutions & Technology Services',
    description: 'Custom software development, cloud infrastructure, and digital transformation solutions to modernize your business operations.'
  });
}

export default async function DigitalSolutionsPage() {
  const headersList = await headers();
  const host = headersList.get('host') || '';
  const brand = resolveBrand(host);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6">Digital Solutions</h1>
            <p className="text-xl text-gray-600 mb-8">
              Transform your business with cutting-edge technology solutions designed to streamline operations, enhance productivity, and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-kps-navy text-white px-8 py-4 rounded-lg font-semibold hover:bg-kps-navy/90 transition-colors">Get Started</Link>
              <Link href="#what-we-build" className="border border-kps-navy text-kps-navy px-8 py-4 rounded-lg font-semibold hover:bg-kps-navy/5 transition-colors">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build (no fluff) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Build</h2>
              <p className="text-xl text-gray-600">Production systems that remove chaos and make money predictable</p>
            </div>

            <div id="what-we-build" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white border border-neutral-200 p-8 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Field Ops Automation</h3>
                <p className="text-gray-600">Estimate → schedule → route → job → invoice. We wire that whole flow together so your techs do the work and the back office runs itself.</p>
              </div>

              <div className="bg-white border border-neutral-200 p-8 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Cloud Infrastructure</h3>
                <p className="text-gray-600">AWS, Vercel, and sensible tooling. CI/CD, environments, observability—set up clean so deploys are boring and rollbacks are instant.</p>
              </div>

              <div className="bg-white border border-neutral-200 p-8 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Integrations (Done Right)</h3>
                <p className="text-gray-600">ServiceTitan, Jobber, Housecall Pro, QuickBooks, Stripe, CRM—glued together with a thin API layer and queuing so data doesn’t get lost.</p>
              </div>

              <div className="bg-white border border-neutral-200 p-8 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">DevOps</h3>
                <p className="text-gray-600">Pipelines, previews, and prod hardening. We ship smaller, test earlier, and keep outages from becoming emergencies.</p>
              </div>

              <div className="bg-white border border-neutral-200 p-8 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Security</h3>
                <p className="text-gray-600">Principle of least privilege, sane defaults, zero trust between services, automated backups and drills. Sensible, not scary.</p>
              </div>

              <div className="bg-white border border-neutral-200 p-8 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Performance</h3>
                <p className="text-gray-600">We tune the whole path—DB, network, API, and UI—so clicks feel instant and your team stops fighting tools.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Development Process</h2>
              <p className="text-xl text-gray-600">A proven methodology that delivers exceptional results</p>
            </div>

            <div className="space-y-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Discovery & Planning</h3>
                  <p className="text-gray-600 text-lg">We start by understanding your business goals, current systems, and requirements. This includes technical analysis, user research, and creating a detailed project roadmap.</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Design & Architecture</h3>
                  <p className="text-gray-600 text-lg">Our team creates detailed technical specifications, user interface designs, and system architecture that aligns with your business objectives and technical requirements.</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Development & Testing</h3>
                  <p className="text-gray-600 text-lg">We build your solution using modern technologies and best practices, with continuous testing and quality assurance throughout the development process.</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Deployment & Support</h3>
                  <p className="text-gray-600 text-lg">We deploy your solution with minimal disruption and provide ongoing support, maintenance, and optimization to ensure long-term success.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes that matter to owners */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Expected Outcomes</h2>
              <p className="text-xl text-gray-600">Clear gains you can feel in the business within 60–90 days</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center bg-gray-50 rounded-xl p-8">
                <div className="text-4xl font-bold text-neutral-900 mb-2">35–55%</div>
                <p className="text-gray-600">Faster quote-to-cash cycle time</p>
              </div>
              <div className="text-center bg-gray-50 rounded-xl p-8">
                <div className="text-4xl font-bold text-neutral-900 mb-2">25–40%</div>
                <p className="text-gray-600">Reduction in manual rework and callbacks</p>
              </div>
              <div className="text-center bg-gray-50 rounded-xl p-8">
                <div className="text-4xl font-bold text-neutral-900 mb-2">20–30%</div>
                <p className="text-gray-600">Increase in technician utilization</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages (simple, outcome-based) */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Packages</h2>
              <p className="text-xl text-gray-600">Pick the lane—speed, visibility, or full automation. We’ll meet you there.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Ops Visibility</h3>
                <div className="text-neutral-900 text-3xl font-bold mb-3">$7,500</div>
                <p className="text-gray-600 mb-4">Dashboards for owner and ops. No more guessing. Daily score, simple pipeline, clean handoffs.</p>
                <ul className="text-sm text-gray-700 space-y-2 mb-6">
                  <li>• Technician + dispatcher scorecards</li>
                  <li>• Quote, jobs, invoice flow with alerts</li>
                  <li>• CRM and accounting snapshots</li>
                </ul>
                <Link href="/contact" className="inline-block px-6 py-3 rounded-lg bg-kps-navy text-white hover:bg-kps-navy/90">Talk to engineering</Link>
              </div>
              <div className="bg-white rounded-xl shadow p-8 ring-2 ring-kps-navy">
                <div className="absolute -mt-10"></div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Automation Sprint</h3>
                <div className="text-neutral-900 text-3xl font-bold mb-3">$18,000</div>
                <p className="text-gray-600 mb-4">Estimate → job → invoice automated. Integrations, error handling, and owner-friendly controls.</p>
                <ul className="text-sm text-gray-700 space-y-2 mb-6">
                  <li>• ServiceTitan/Jobber/HCP + QuickBooks</li>
                  <li>• Stripe + customer portal setup</li>
                  <li>• Alerts, retries, auditing</li>
                </ul>
                <Link href="/contact" className="inline-block px-6 py-3 rounded-lg bg-kps-navy text-white hover:bg-kps-navy/90">Schedule a scope</Link>
              </div>
              <div className="bg-white rounded-xl shadow p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Full Stack Modernization</h3>
                <div className="text-neutral-900 text-3xl font-bold mb-3">$35,000+</div>
                <p className="text-gray-600 mb-4">Replatform web, API, and infra. Predictable deploys, faster UI, and a stack your team can actually maintain.</p>
                <ul className="text-sm text-gray-700 space-y-2 mb-6">
                  <li>• Next.js + API layer + infra hardening</li>
                  <li>• Observability, backups, runbooks</li>
                  <li>• Training and handoff</li>
                </ul>
                <Link href="/contact" className="inline-block px-6 py-3 rounded-lg bg-kps-navy text-white hover:bg-kps-navy/90">Design my plan</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection brand={brand} flavor={brand.flavor} />
    </>
  );
}
