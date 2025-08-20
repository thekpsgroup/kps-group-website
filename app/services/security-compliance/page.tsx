import { headers } from 'next/headers';
import { resolveBrand } from '@kps/config';
import { CTASection } from '@kps/ui';
import { generateSEO } from '../../../lib/seo';
import Link from 'next/link';

export async function generateMetadata() {
  return generateSEO({
    title: 'Security & Compliance Services',
    description: 'Comprehensive security solutions and compliance management to protect your business and ensure regulatory adherence.'
  });
}

export default async function SecurityCompliancePage() {
  const headersList = await headers();
  const host = headersList.get('host') || '';
  const brand = resolveBrand(host);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6">Security & Compliance</h1>
            <p className="text-xl text-gray-600 mb-8">
              Protect your business with comprehensive security solutions and ensure regulatory compliance to maintain trust and avoid costly penalties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-kps-navy text-white px-8 py-4 rounded-lg font-semibold hover:bg-kps-navy/90 transition-colors">Get Started</Link>
              <Link href="#what-we-protect" className="border border-kps-navy text-kps-navy px-8 py-4 rounded-lg font-semibold hover:bg-kps-navy/5 transition-colors">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Protect */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Protect</h2>
              <p className="text-xl text-gray-600">The business, the data, and the trust you’ve earned</p>
            </div>

            <div id="what-we-protect" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white border border-neutral-200 p-8 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Security Audits</h3>
                <p className="text-gray-600">Config reviews, access audits, and sensible controls. Least privilege and clean logging before fancy tools.</p>
              </div>

              <div className="bg-white border border-neutral-200 p-8 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Compliance Management</h3>
                <p className="text-gray-600">PCI, SOC2‑lite, state regs. We right‑size policies, controls, and evidence so audits are predictable—not performative.</p>
              </div>

              <div className="bg-white border border-neutral-200 p-8 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Risk Assessment</h3>
                <p className="text-gray-600">Real threats, not checkbox theater. Crown jewels, threat modeling, and pragmatic mitigations that stick.</p>
              </div>

              <div className="bg-white border border-neutral-200 p-8 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Policy Development</h3>
                <p className="text-gray-600">Short, readable, and enforced. We write policies people actually follow and build the checks to keep them alive.</p>
              </div>

              <div className="bg-white border border-neutral-200 p-8 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Training & Awareness</h3>
                <p className="text-gray-600">Role‑based training and incident drills. Fewer tickets, fewer mistakes, faster response.</p>
              </div>

              <div className="bg-white border border-neutral-200 p-8 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Incident Response</h3>
                <p className="text-gray-600">Runbooks, on‑call, backups, and restore drills. When something breaks, we already know what to do.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Security & Compliance Approach</h2>
              <p className="text-xl text-gray-600">A systematic methodology to protect your business</p>
            </div>

            <div className="space-y-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Assessment & Analysis</h3>
                  <p className="text-gray-600 text-lg">We begin with a comprehensive security and compliance assessment to understand your current state, identify gaps, and evaluate risks across your organization.</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Strategy Development</h3>
                  <p className="text-gray-600 text-lg">Based on our assessment, we develop a customized security and compliance strategy that addresses your specific risks and regulatory requirements.</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-yellow-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Implementation & Training</h3>
                  <p className="text-gray-600 text-lg">We implement security measures, develop policies and procedures, and provide comprehensive training to ensure your team understands and follows security protocols.</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Monitoring & Maintenance</h3>
                  <p className="text-gray-600 text-lg">We provide ongoing monitoring, regular audits, and continuous improvement to ensure your security and compliance posture remains strong and up-to-date.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes + Packages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Expected Outcomes</h2>
              <p className="text-xl text-gray-600">Fewer surprises, cleaner audits, faster recovery</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center bg-gray-50 rounded-xl p-8">
                <div className="text-4xl font-bold text-neutral-900 mb-2">99.9%</div>
                <p className="text-gray-600">Preventable incidents avoided</p>
              </div>
              <div className="text-center bg-gray-50 rounded-xl p-8">
                <div className="text-4xl font-bold text-neutral-900 mb-2">100%</div>
                <p className="text-gray-600">Evidence‑backed audit pass rate</p>
              </div>
              <div className="text-center bg-gray-50 rounded-xl p-8">
                <div className="text-4xl font-bold text-neutral-900 mb-2">&lt; 30 min</div>
                <p className="text-gray-600">Mean time to recover (critical)</p>
              </div>
            </div>

            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Packages</h3>
              <p className="text-xl text-gray-600">Practical security, right‑sized for your stage</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow p-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Security Baseline</h4>
                <div className="text-3xl font-bold text-neutral-900 mb-3">$5,000</div>
                <p className="text-gray-600 mb-4">Access, backups, logging, and a few smart defaults. Big wins without drama.</p>
                <ul className="text-sm text-gray-700 space-y-2 mb-6">
                  <li>• Role and access review</li>
                  <li>• Backup + restore drill</li>
                  <li>• Logging + alerting</li>
                </ul>
                <Link href="/contact" className="inline-block px-6 py-3 rounded-lg bg-kps-navy text-white hover:bg-kps-navy/90">Set my baseline</Link>
              </div>
              <div className="bg-white rounded-xl shadow p-8 ring-2 ring-kps-navy">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Compliance Ready</h4>
                <div className="text-3xl font-bold text-neutral-900 mb-3">$14,000</div>
                <p className="text-gray-600 mb-4">Policies, controls, and evidence workflows. Audits become paperwork, not panic.</p>
                <ul className="text-sm text-gray-700 space-y-2 mb-6">
                  <li>• Policy set + training</li>
                  <li>• Control matrix + checks</li>
                  <li>• Evidence capture flow</li>
                </ul>
                <Link href="/contact" className="inline-block px-6 py-3 rounded-lg bg-kps-navy text-white hover:bg-kps-navy/90">Make me audit‑ready</Link>
              </div>
              <div className="bg-white rounded-xl shadow p-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">IR + Resilience</h4>
                <div className="text-3xl font-bold text-neutral-900 mb-3">$3,500/mo</div>
                <p className="text-gray-600 mb-4">On‑call, runbooks, and quarterly drills so bad days don’t become worst days.</p>
                <ul className="text-sm text-gray-700 space-y-2 mb-6">
                  <li>• Incident playbooks</li>
                  <li>• SLOs and error budgets</li>
                  <li>• Quarterly game days</li>
                </ul>
                <Link href="/contact" className="inline-block px-6 py-3 rounded-lg bg-kps-navy text-white hover:bg-kps-navy/90">Add resilience</Link>
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
