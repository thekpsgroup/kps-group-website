import { headers } from 'next/headers';
import { resolveBrand } from '@kps/config';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export const metadata = {
  title: 'Brand Development',
  description: 'Identity systems, visual design, and brand strategy to make you unmistakable.'
};

// Brand-specific service configurations
const brandSpecificServices = {
  'modern-brands': {
    heroTitle: 'Creative Brand Development',
    heroDescription: 'Bold, creative branding and marketing solutions that make your business unmistakable. From strategic positioning to visual identity systems, we create brands that drive real business results.',
    services: [
      {
        title: 'Brand Strategy & Positioning',
        description: 'Define your unique market position and competitive advantage',
        features: [
          'Market research and competitive analysis',
          'Brand positioning and differentiation strategy',
          'Target audience profiling and segmentation',
          'Brand personality and voice development',
          'Value proposition and messaging framework',
          'Brand architecture and naming strategy'
        ],
        deliverables: ['Brand strategy document', 'Positioning statement', 'Messaging framework', 'Brand guidelines foundation']
      },
      {
        title: 'Visual Identity System',
        description: 'Create a cohesive visual system that represents your brand authentically',
        features: [
          'Primary and secondary logo development',
          'Logo variations and usage guidelines',
          'Color palette and typography selection',
          'Icon system and pattern development',
          'Photography and illustration style',
          'Digital and print application standards'
        ],
        deliverables: ['Logo files (vector and raster)', 'Color palette guide', 'Typography system', 'Visual style guide']
      },
      {
        title: 'Brand Collateral & Applications',
        description: 'Essential materials to launch and maintain your brand presence',
        features: [
          'Business cards and letterhead design',
          'Email signature and template creation',
          'Social media profile and post templates',
          'Presentation and proposal templates',
          'Trade show and event materials',
          'Brand guidelines and standards manual'
        ],
        deliverables: ['Complete collateral suite', 'Digital templates', 'Brand guidelines manual', 'Implementation support']
      }
    ],
    process: [
      {
        step: 1,
        title: 'Discovery & Research',
        description: 'Comprehensive analysis of your business, market, competition, and target audience to understand your unique position and opportunities.',
        duration: '1-2 weeks',
        deliverables: ['Brand audit report', 'Competitive analysis', 'Target audience profiles', 'Market opportunity assessment']
      },
      {
        step: 2,
        title: 'Strategy Development',
        description: 'Craft your brand strategy, positioning, messaging framework, and brand architecture based on research insights.',
        duration: '2-3 weeks',
        deliverables: ['Brand strategy document', 'Positioning statement', 'Messaging framework', 'Brand voice guidelines']
      },
      {
        step: 3,
        title: 'Visual Identity Creation',
        description: 'Develop your visual identity system including logo, color palette, typography, and visual style guidelines.',
        duration: '3-4 weeks',
        deliverables: ['Logo designs and variations', 'Color palette guide', 'Typography system', 'Visual style guide']
      },
      {
        step: 4,
        title: 'Brand Launch & Implementation',
        description: 'Prepare all materials and guide you through a successful brand launch with ongoing support.',
        duration: '1-2 weeks',
        deliverables: ['Brand guidelines manual', 'Launch materials', 'Implementation support', 'Training and consultation']
      }
    ],
    pricing: [
      {
        name: 'Brand Foundation',
        price: '$8,500',
        description: 'Essential branding for startups and small businesses',
        features: [
          'Brand strategy and positioning',
          'Primary logo design (2 concepts)',
          'Basic color palette and typography',
          'Brand guidelines PDF',
          'Business card and letterhead design',
          'Email signature template',
          '30-day implementation support'
        ],
        popular: false
      },
      {
        name: 'Complete Brand System',
        price: '$18,000',
        description: 'Comprehensive branding for growing businesses',
        features: [
          'Complete brand strategy and positioning',
          'Primary and secondary logo designs (3 concepts)',
          'Full visual identity system',
          'Comprehensive brand guidelines',
          'Complete collateral suite',
          'Social media templates and guidelines',
          'Presentation and proposal templates',
          'Brand launch strategy and support',
          '90-day implementation support'
        ],
        popular: true
      },
      {
        name: 'Enterprise Branding',
        price: '$35,000',
        description: 'Full-service branding for established companies',
        features: [
          'Everything in Complete Brand System',
          'Brand architecture and naming strategy',
          'Sub-brand development and guidelines',
          'Comprehensive brand guidelines and standards',
          'Brand training and workshops',
          'Launch strategy and campaign support',
          'Ongoing brand consultation and support',
          'Brand performance monitoring'
        ],
        popular: false
      }
    ],
    outcomes: [
      {
        title: 'Brand Recognition',
        description: 'Increased brand awareness and recognition in your market',
        metric: '40-60%'
      },
      {
        title: 'Market Differentiation',
        description: 'Clear competitive advantage and market positioning',
        metric: '50-75%'
      },
      {
        title: 'Customer Trust',
        description: 'Enhanced credibility and trust with target audience',
        metric: '35-55%'
      },
      {
        title: 'Business Growth',
        description: 'Improved lead generation and conversion rates',
        metric: '25-45%'
      }
    ]
  },
  'kps-group': {
    heroTitle: 'Professional Brand Development',
    heroDescription: 'Strategic brand development services that align with your business objectives. We create professional, results-driven brands that support your growth and market position.',
    services: [
      {
        title: 'Strategic Brand Planning',
        description: 'Develop a comprehensive brand strategy aligned with business goals',
        features: [
          'Business objective alignment',
          'Market positioning strategy',
          'Competitive landscape analysis',
          'Target audience identification',
          'Brand value proposition development',
          'Strategic messaging framework'
        ],
        deliverables: ['Brand strategy plan', 'Positioning document', 'Messaging framework', 'Implementation roadmap']
      },
      {
        title: 'Professional Identity Design',
        description: 'Create a professional visual identity that builds trust and credibility',
        features: [
          'Professional logo design',
          'Corporate color palette',
          'Business typography system',
          'Professional collateral design',
          'Digital application guidelines',
          'Brand standards documentation'
        ],
        deliverables: ['Professional logo suite', 'Color and typography guide', 'Collateral templates', 'Brand standards manual']
      },
      {
        title: 'Brand Implementation',
        description: 'Systematic implementation of your brand across all touchpoints',
        features: [
          'Brand rollout planning',
          'Employee training and guidelines',
          'Digital implementation support',
          'Ongoing brand management',
          'Performance measurement',
          'Brand maintenance protocols'
        ],
        deliverables: ['Implementation plan', 'Training materials', 'Ongoing support', 'Performance metrics']
      }
    ],
    process: [
      {
        step: 1,
        title: 'Business Analysis',
        description: 'Thorough analysis of your business model, market position, and strategic objectives.',
        duration: '1-2 weeks',
        deliverables: ['Business analysis report', 'Market assessment', 'Strategic objectives alignment']
      },
      {
        step: 2,
        title: 'Brand Strategy',
        description: 'Development of comprehensive brand strategy and positioning framework.',
        duration: '2-3 weeks',
        deliverables: ['Brand strategy document', 'Positioning framework', 'Strategic messaging']
      },
      {
        step: 3,
        title: 'Identity Development',
        description: 'Creation of professional visual identity and brand standards.',
        duration: '3-4 weeks',
        deliverables: ['Visual identity system', 'Brand standards', 'Implementation guidelines']
      },
      {
        step: 4,
        title: 'Implementation & Support',
        description: 'Guided implementation with ongoing support and performance monitoring.',
        duration: '1-2 weeks',
        deliverables: ['Implementation plan', 'Training support', 'Ongoing consultation']
      }
    ],
    pricing: [
      {
        name: 'Professional Brand Package',
        price: '$6,500',
        description: 'Essential professional branding for established businesses',
        features: [
          'Brand strategy and positioning',
          'Professional logo design',
          'Corporate color and typography',
          'Basic brand guidelines',
          'Business collateral design',
          'Implementation support'
        ],
        popular: false
      },
      {
        name: 'Comprehensive Brand Solution',
        price: '$15,000',
        description: 'Complete professional branding solution',
        features: [
          'Full brand strategy development',
          'Complete visual identity system',
          'Comprehensive brand guidelines',
          'Professional collateral suite',
          'Digital implementation support',
          'Employee training and guidelines',
          'Ongoing brand management support'
        ],
        popular: true
      },
      {
        name: 'Enterprise Brand Management',
        price: '$28,000',
        description: 'Full-service brand management for large organizations',
        features: [
          'Everything in Comprehensive Brand Solution',
          'Brand architecture development',
          'Multi-location brand guidelines',
          'Brand training and workshops',
          'Performance monitoring and optimization',
          'Ongoing strategic consultation',
          'Brand compliance and maintenance'
        ],
        popular: false
      }
    ],
    outcomes: [
      {
        title: 'Professional Credibility',
        description: 'Enhanced professional reputation and market credibility',
        metric: '45-65%'
      },
      {
        title: 'Market Position',
        description: 'Improved market positioning and competitive advantage',
        metric: '40-60%'
      },
      {
        title: 'Business Alignment',
        description: 'Better alignment between brand and business objectives',
        metric: '50-70%'
      },
      {
        title: 'Operational Efficiency',
        description: 'Streamlined brand management and implementation',
        metric: '30-50%'
      }
    ]
  }
};

export default async function BrandingPage() {
  const headersList = await headers();
  const brandKey = headersList.get('x-brand') || 'kps-group';
  const brand = resolveBrand(undefined, brandKey as any);
  
  if (brand.flavor !== 'brands' && brand.flavor !== 'parent') {
    notFound();
  }

  const brandConfig = brandSpecificServices[brand.key as keyof typeof brandSpecificServices] || brandSpecificServices['kps-group'];

  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            {brandConfig.heroTitle}
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            {brandConfig.heroDescription}
          </p>
        </div>

        {/* Services Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">Our Brand Development Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {brandConfig.services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">{service.title}</h3>
                <p className="text-neutral-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-neutral-600">
                      <span className="text-green-500">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-neutral-900 mb-2">Deliverables:</h4>
                  <ul className="space-y-1">
                    {service.deliverables.map((deliverable, deliverableIndex) => (
                      <li key={deliverableIndex} className="text-sm text-neutral-600">• {deliverable}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Expected Outcomes */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">Expected Outcomes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {brandConfig.outcomes.map((outcome, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <h3 className="text-lg font-bold text-neutral-900 mb-2">{outcome.title}</h3>
                <p className="text-neutral-600 text-sm mb-3">{outcome.description}</p>
                <div className="text-2xl font-bold text-blue-600">{outcome.metric}</div>
                <div className="text-sm text-neutral-500">Average Improvement</div>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">Our Brand Development Process</h2>
          <div className="space-y-8">
            {brandConfig.process.map((step, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="text-xl font-bold text-neutral-900">{step.title}</h3>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-neutral-600 mb-4">{step.description}</p>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-2">Deliverables:</h4>
                      <ul className="flex flex-wrap gap-2">
                        {step.deliverables.map((deliverable, deliverableIndex) => (
                          <li key={deliverableIndex} className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-sm">
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">Brand Development Packages</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {brandConfig.pricing.map((tier, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-md p-6 relative ${tier.popular ? 'ring-2 ring-blue-500' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-2">{tier.price}</div>
                  <p className="text-neutral-600">{tier.description}</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-sm">
                      <span className="text-green-500">✓</span>
                      <span className="text-neutral-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`w-full py-3 px-4 rounded-lg font-semibold text-center block transition-colors ${
                    tier.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Case Studies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">Brand Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-neutral-900 mb-3">TechFlow Solutions</h3>
                             <p className="text-neutral-600 mb-4">
                 &quot;The KPS Group helped us create a brand that perfectly represents our innovative approach to technology. 
                 Our new identity has been instrumental in attracting top talent and winning major clients.&quot;
               </p>
              <div className="text-sm text-neutral-500">- Emily Davis, Co-Founder</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-neutral-900 mb-3">EcoStyle Boutique</h3>
                             <p className="text-neutral-600 mb-4">
                 &quot;Our rebrand completely transformed how customers perceive us. The new visual identity and messaging 
                 helped us stand out in a crowded market and increase our customer base by 300%.&quot;
               </p>
              <div className="text-sm text-neutral-500">- Lisa Rodriguez, Founder</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your Brand?</h2>
          <p className="text-xl mb-6 opacity-90">
            Let&apos;s create a brand that sets you apart and drives real business results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-neutral-100 transition-colors"
            >
              Start Your Brand Project
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-gray-900 font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
