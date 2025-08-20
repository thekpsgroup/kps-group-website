import { headers } from 'next/headers';
import { resolveBrand } from '@kps/config';
import { CTASection } from '@kps/ui';
import Link from 'next/link';
import { generateSEO } from '../../../lib/seo';

export async function generateMetadata() {
  return generateSEO({
    title: 'Performance Optimization Services',
    description: 'Data-driven optimization strategies to maximize your business performance and drive measurable results.'
  });
}

export default async function PerformanceOptimizationPage() {
  const headersList = await headers();
  const host = headersList.get('host') || '';
  const brand = resolveBrand(host);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6">Performance Optimization</h1>
            <p className="text-xl text-gray-600 mb-8">
              Unlock your business potential with data-driven optimization strategies that identify bottlenecks and implement solutions for measurable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-kps-navy text-white px-8 py-4 rounded-lg font-semibold hover:bg-kps-navy/90 transition-colors">Get Started</Link>
              <Link href="#what-we-do" className="border border-kps-navy text-kps-navy px-8 py-4 rounded-lg font-semibold hover:bg-kps-navy/5 transition-colors">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16" id="what-we-do">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
              <p className="text-xl text-gray-600">Comprehensive performance optimization solutions</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Analytics & Insights</h3>
                <p className="text-gray-600">Comprehensive data analysis to identify performance bottlenecks and optimization opportunities across your business.</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Process Optimization</h3>
                <p className="text-gray-600">Streamline workflows, eliminate inefficiencies, and implement best practices to maximize productivity and reduce costs.</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Performance Monitoring</h3>
                <p className="text-gray-600">Real-time monitoring and alerting systems to track key performance indicators and identify issues before they impact your business.</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">KPI Tracking</h3>
                <p className="text-gray-600">Establish and track key performance indicators to measure success and drive continuous improvement across all areas of your business.</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Growth Acceleration</h3>
                <p className="text-gray-600">Strategic initiatives and optimizations designed to accelerate business growth and maximize revenue potential.</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Automation</h3>
                <p className="text-gray-600">Implement intelligent automation solutions to reduce manual work, improve accuracy, and free up resources for strategic initiatives.</p>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Optimization Approach</h2>
              <p className="text-xl text-gray-600">A systematic methodology that delivers measurable results</p>
            </div>

            <div className="space-y-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Assessment & Analysis</h3>
                  <p className="text-gray-600 text-lg">We conduct a comprehensive analysis of your current performance, identifying bottlenecks, inefficiencies, and opportunities for improvement across all business areas.</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Strategy Development</h3>
                  <p className="text-gray-600 text-lg">Based on our analysis, we develop a customized optimization strategy with clear objectives, timelines, and success metrics to drive measurable improvements.</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Implementation & Monitoring</h3>
                  <p className="text-gray-600 text-lg">We implement optimization solutions and establish monitoring systems to track progress, measure results, and ensure sustainable performance improvements.</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Continuous Improvement</h3>
                  <p className="text-gray-600 text-lg">We provide ongoing optimization support, regular performance reviews, and continuous improvement initiatives to maintain and enhance your business performance.</p>
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
              <p className="text-xl text-gray-600">Improvements you can measure in weeks, not quarters</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center bg-gray-50 rounded-xl p-8">
                <div className="text-4xl font-bold text-green-600 mb-2">90+ / 100</div>
                <p className="text-gray-600">Lighthouse on key routes</p>
              </div>
              <div className="text-center bg-gray-50 rounded-xl p-8">
                <div className="text-4xl font-bold text-blue-600 mb-2">-30–50%</div>
                <p className="text-gray-600">Bundle size and third‑party</p>
              </div>
              <div className="text-center bg-gray-50 rounded-xl p-8">
                <div className="text-4xl font-bold text-purple-600 mb-2">-25–40%</div>
                <p className="text-gray-600">P95 API latency</p>
              </div>
            </div>

            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Packages</h3>
              <p className="text-xl text-gray-600">From quick wins to full‑stack tuning</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow p-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Vitals Tune‑Up</h4>
                <div className="text-3xl font-bold text-green-700 mb-3">$4,500</div>
                <p className="text-gray-600 mb-4">Image discipline, caching, headers, and a few critical code paths. No rewrites.</p>
                <ul className="text-sm text-gray-700 space-y-2 mb-6">
                  <li>• CWV audit + fixes</li>
                  <li>• Static assets + CDN config</li>
                  <li>• Report and next steps</li>
                </ul>
                <Link href="/contact" className="inline-block px-6 py-3 rounded-lg bg-neutral-900 text-white hover:bg-neutral-800">Book a tune‑up</Link>
              </div>
              <div className="bg-white rounded-xl shadow p-8 ring-2 ring-green-600">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Full Stack Perf</h4>
                <div className="text-3xl font-bold text-green-700 mb-3">$12,000</div>
                <p className="text-gray-600 mb-4">API, DB, and UI tuned together. Monitoring and guardrails so it stays fast.</p>
                <ul className="text-sm text-gray-700 space-y-2 mb-6">
                  <li>• Query and endpoint review</li>
                  <li>• Bundle + route‑level budgets</li>
                  <li>• Dashboards + alerting</li>
                </ul>
                <Link href="/contact" className="inline-block px-6 py-3 rounded-lg bg-neutral-900 text-white hover:bg-neutral-800">Scope my stack</Link>
              </div>
              <div className="bg-white rounded-xl shadow p-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Perf Partner</h4>
                <div className="text-3xl font-bold text-green-700 mb-3">$3,000/mo</div>
                <p className="text-gray-600 mb-4">Monthly reviews, PR checks, and ongoing tuning so regressions don’t sneak back in.</p>
                <ul className="text-sm text-gray-700 space-y-2 mb-6">
                  <li>• Budgets enforced in CI</li>
                  <li>• Monthly perf review</li>
                  <li>• Backlog grooming</li>
                </ul>
                <Link href="/contact" className="inline-block px-6 py-3 rounded-lg bg-neutral-900 text-white hover:bg-neutral-800">Keep us on retainer</Link>
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
