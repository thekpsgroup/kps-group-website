import { headers } from 'next/headers';
import { resolveBrand } from '@kps/config';
import { getContent } from '@kps/content';
import { CTASection, H1, H2, Body, Card } from '@kps/ui';
import Image from 'next/image';
import { sendLead } from '../actions/sendLead';
import { generateSEO } from '../../lib/seo';

export default async function AboutPage() {
  const headersList = await headers();
  const brandKey = headersList.get('x-brand') || 'kps-group';
  const brand = resolveBrand(undefined, brandKey as any);
  const content = getContent(brandKey as any);



  return (
    <>
      <section className="section-padding pt-28 md:pt-32 bg-gradient-secondary relative overflow-hidden">
        {/* Enhanced background decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-kps-navy/5 rounded-full blur-3xl -translate-x-32 -translate-y-32 float" aria-hidden="true"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-kps-gold/5 rounded-full blur-3xl translate-x-32 translate-y-32 float-delayed" aria-hidden="true"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-kps-navy/3 rounded-full blur-3xl float-slow" aria-hidden="true"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <H1 className="mb-6">
              About {brand.name}
            </H1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              {content.about.description}
            </p>
          </div>

          {/* KPS Photos Showcase */}
          <div className="max-w-6xl mx-auto mb-20 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="relative group">
                <Image
                  src="/brands/kps/photos/kps-on-glass.png"
                  alt="The KPS Group signage on glass wall"
                  width={800}
                  height={512}
                  className="w-full h-64 object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-300"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
                <div className="absolute bottom-4 left-4 text-white">
                  <Body className="text-sm opacity-90">Professional Excellence</Body>
                </div>
              </div>
              <div className="relative group">
                <Image
                  src="/brands/kps/photos/kps-on-wall.png"
                  alt="The KPS Group signage on interior wall"
                  width={800}
                  height={512}
                  className="w-full h-64 object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-300"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
                <div className="absolute bottom-4 left-4 text-white">
                  <Body className="text-sm opacity-90">Established Presence</Body>
                </div>
              </div>
              <div className="relative group">
                <Image
                  src="/brands/kps/photos/kps-blue.png"
                  alt="The KPS Group blue logo background"
                  width={800}
                  height={512}
                  className="w-full h-64 object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-300"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
                <div className="absolute bottom-4 left-4 text-white">
                  <Body className="text-sm opacity-90">Trusted Brand</Body>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-neutral-200">
              <div className="prose prose-lg max-w-none text-neutral-700">
                {brand.flavor === 'parent' ? (
                  <>
                    <H2 className="mb-8">
                      Karson&apos;s Why (Founder&apos;s Letter)
                    </H2>
                    <div className="space-y-6 leading-relaxed">
                      <p>
                        I didn&apos;t start The KPS Group because the world needed another agency or another consultant. I started it because I kept seeing the same root problem across small and midsize businesses—especially in the trades (HVAC, electrical, plumbing, specialty contractors): the back office was split across five vendors, three spreadsheets, and zero accountability.
                      </p>
                      <p>
                        Payroll here. Bookkeeping there. Marketing with a freelancer. IT with an MSP that charges enterprise prices for consumer gear. A Franken-stack of tools that don&apos;t talk to each other—and nobody owning the outcomes. Revenue felt random, not repeatable.
                      </p>
                      <H2 as="h3" className="mt-8 mb-4">My Background</H2>
                      <p>
                        Before founding KPS, I lived the corporate side of the house. My career began selling into the enterprise at companies like IBM, Microsoft, and PwC, where I learned how the biggest organizations operate. Later, I worked in sales and account management roles where my job was to land large accounts and keep them growing.
                      </p>
                      <p>
                        I saw firsthand how Fortune 500s build repeatable revenue machines with clear systems, disciplined processes, and integrated infrastructure. But when I started consulting for small business owners, I realized they were playing the same game without the resources, without the team, and without the playbook.
                      </p>
                      <p>
                        These were smart, ambitious operators—but they were drowning in disconnected systems, clunky tools, and outdated processes. They weren&apos;t failing because they lacked vision; they were failing because the infrastructure underneath them was fragile.
                      </p>
                      <p>
                        I&apos;ve sat on both sides of the table—inside big tech selling multimillion-dollar systems, and on the ground with business owners who wear twelve hats before lunch. The pattern was loud: great operators were suffering from chaotic infrastructure, not a lack of ambition.
                      </p>
                      <p>
                        What they needed wasn&apos;t &quot;one more tool.&quot; They needed a single, modern back office—clean books, compliant payroll, a site that actually converts, reliable IT, and pragmatic leadership to tie it all together.
                      </p>
                      <p>
                        So I built The KPS Group with a simple conviction: revenue is a system, not a slot machine. If we fix the plumbing behind the scenes—finance, people ops, brand, tech, and operating cadence—growth stops being luck and starts being math.
                      </p>
                      <p>
                        That&apos;s why The KPS Group exists: one partner, one accountable team, one Modern Suite.
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <H2 className="mb-8">
                      Why {brand.name} Exists
                    </H2>
                    <div className="space-y-6 leading-relaxed">
                      {content.about.content}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Modern Suite Section (for parent company) */}
          {brand.flavor === 'parent' && (
            <div className="max-w-4xl mx-auto mt-20 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-neutral-200">
                <H2 className="mb-8">
                  How the Modern Suite Fits Together
                </H2>
                <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
                  Think of the Modern Suite like a tightly-coupled pit crew for your business. Each brand solves a critical function on its own, but the compounding effect comes from the hand-offs:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-neutral-900">Modern Brands</h3>
                    <p className="text-neutral-700">Attracts demand (get seen, get leads).</p>
                    
                    <h3 className="text-xl font-bold text-neutral-900">Modern Consulting</h3>
                    <p className="text-neutral-700">Operationalizes the machine (process, playbooks, coaching).</p>
                    
                    <h3 className="text-xl font-bold text-neutral-900">Modern Pay</h3>
                    <p className="text-neutral-700">Handles people ops and compliance (payroll, filings, risk off your plate).</p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-neutral-900">Modern Ledger</h3>
                    <p className="text-neutral-700">Locks in financial clarity (clean books, real-time reporting).</p>
                    
                    <h3 className="text-xl font-bold text-neutral-900">Modern Stack</h3>
                    <p className="text-neutral-700">Keeps the tools and network sane (secure, simple, supported).</p>
                    
                    <h3 className="text-xl font-bold text-neutral-900">Modern OS</h3>
                    <p className="text-neutral-700">The unified operating system that ties it all together (in development).</p>
                  </div>
                </div>
                <p className="text-lg text-neutral-700 mt-8 leading-relaxed">
                  One back office. One roadmap. No finger-pointing between vendors. When something breaks, you call us—and we fix it.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      <CTASection 
        brand={brand} 
        flavor={brand.flavor} 

      />
    </>
  );
}

export async function generateMetadata() {
  const headersList = await headers();
  const brandKey = headersList.get('x-brand') || 'kps-group';
  const brand = resolveBrand(undefined, brandKey as any);
  const content = getContent(brandKey as any);

  return generateSEO({
    title: `About ${brand.name} - Professional Business Services`,
    description: content.about.description,
  });
}
