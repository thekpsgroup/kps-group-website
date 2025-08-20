import { headers } from 'next/headers';
import { resolveBrand } from '@kps/config';
import { CTASection } from '@kps/ui';
import { generateSEO } from '../../../lib/seo';

export async function generateMetadata() {
  return generateSEO({
    title: 'Strategic Consulting Services',
    description: 'Expert business consulting and strategic planning to drive growth, optimize operations, and achieve sustainable success.'
  });
}

export default async function StrategicConsultingPage() {
  const headersList = await headers();
  const host = headersList.get('host') || '';
  const brand = resolveBrand(host);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6">Strategic Consulting</h1>
            <p className="text-xl text-gray-600 mb-8">
              Transform your business with data-driven strategies, proven methodologies, and expert guidance designed to accelerate growth and maximize profitability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-kps-navy text-white px-8 py-4 rounded-lg font-semibold hover:bg-kps-navy/90 transition-colors">Get Started</a>
              <a href="#what-we-do" className="border border-kps-navy text-kps-navy px-8 py-4 rounded-lg font-semibold hover:bg-kps-navy/5 transition-colors">Learn More</a>
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
              <p className="text-xl text-gray-600">Comprehensive consulting services tailored to your unique business challenges</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Market Analysis</h3>
                <p className="text-gray-600">Deep dive into market trends, competitive landscape, and growth opportunities to inform strategic decisions.</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Growth Strategy</h3>
                <p className="text-gray-600">Develop comprehensive growth roadmaps with clear milestones, KPIs, and actionable implementation plans.</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Risk Assessment</h3>
                <p className="text-gray-600">Identify potential risks and develop mitigation strategies to protect your business and ensure sustainable growth.</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Team Development</h3>
                <p className="text-gray-600">Build high-performing teams through leadership development, culture optimization, and organizational design.</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Process Optimization</h3>
                <p className="text-gray-600">Streamline operations, eliminate inefficiencies, and implement best practices to maximize productivity.</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Performance Metrics</h3>
                <p className="text-gray-600">Establish KPIs, implement tracking systems, and provide ongoing analysis to measure and improve performance.</p>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Approach</h2>
              <p className="text-xl text-gray-600">A proven methodology that delivers measurable results</p>
            </div>

            <div className="space-y-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Discovery & Assessment</h3>
                  <p className="text-gray-600 text-lg">We begin with a comprehensive analysis of your current state, including market position, operational efficiency, team dynamics, and growth potential. This deep dive helps us understand your unique challenges and opportunities.</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Strategy Development</h3>
                  <p className="text-gray-600 text-lg">Based on our findings, we develop a customized strategic roadmap with clear objectives, timelines, and success metrics. This includes detailed action plans for implementation and change management.</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Implementation Support</h3>
                                     <p className="text-gray-600 text-lg">We don&apos;t just provide recommendations—we work alongside your team to implement changes, provide training, and ensure successful execution of the strategic plan.</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Ongoing Optimization</h3>
                  <p className="text-gray-600 text-lg">We provide continuous monitoring, analysis, and optimization to ensure your strategy remains effective and adapts to changing market conditions and business needs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Proven Results</h2>
              <p className="text-xl text-gray-600">See the impact our strategic consulting has delivered for businesses like yours</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">47%</div>
                <p className="text-gray-600">Average revenue growth within 12 months</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">34%</div>
                <p className="text-gray-600">Improvement in operational efficiency</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">89%</div>
                <p className="text-gray-600">Client satisfaction rate</p>
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
