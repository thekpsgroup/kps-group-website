import { headers } from 'next/headers';
import { resolveBrand } from '@kps/config';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export const metadata = {
  title: 'Business Consulting',
  description: 'Strategic consulting focused on operations, revenue systems, and accountable execution.'
};

// Brand-specific service configurations
const brandSpecificServices = {
  'modern-consulting': {
    heroTitle: 'Strategic Business Consulting',
    heroDescription: 'Transform your business with strategic insights and proven methodologies. We install the operating rhythm for the business you already have—clean stage definitions, weekly leadership cadence, manager scorecards, and frontline playbooks. Predictable revenue without the chaos.',
    services: [
      {
        title: 'Strategic Planning & Execution',
        description: 'Develop and implement comprehensive business strategies that drive growth and operational excellence',
        features: [
          'Business model analysis and optimization',
          'Market positioning and competitive strategy development',
          'Revenue model design and implementation',
          'Growth strategy and scaling roadmap creation',
          'Strategic planning workshops and facilitation',
          'Performance measurement and KPI development'
        ],
        deliverables: ['Strategic plan document', 'Implementation roadmap', 'Performance metrics framework', 'Execution timeline']
      },
      {
        title: 'Operations Optimization',
        description: 'Streamline processes and improve operational efficiency across all business functions',
        features: [
          'Process mapping and workflow optimization',
          'Operational efficiency audits and improvement',
          'Quality control systems implementation',
          'Performance metrics and KPI development',
          'Technology integration and automation',
          'Supply chain and logistics optimization'
        ],
        deliverables: ['Process documentation', 'Efficiency improvement plan', 'Performance dashboards', 'Implementation guidelines']
      },
      {
        title: 'Leadership Development & Management',
        description: 'Build strong leadership teams and management systems that drive organizational success',
        features: [
          'Leadership training and executive coaching',
          'Management cadence and accountability systems',
          'Team structure and role definition optimization',
          'Performance management and evaluation systems',
          'Change management and organizational development',
          'Succession planning and talent development'
        ],
        deliverables: ['Leadership development plan', 'Management playbooks', 'Performance systems', 'Training materials']
      }
    ],
    process: [
      {
        step: 1,
        title: 'Business Assessment & Discovery',
        description: 'Comprehensive analysis of your current business operations, market position, competitive landscape, and growth opportunities.',
        duration: '1-2 weeks',
        deliverables: ['Business assessment report', 'Market analysis', 'Competitive landscape review', 'Opportunity identification']
      },
      {
        step: 2,
        title: 'Strategy Development & Planning',
        description: 'Collaborative development of strategic plans, operational improvements, and implementation roadmaps.',
        duration: '2-3 weeks',
        deliverables: ['Strategic plan document', 'Implementation roadmap', 'Success metrics framework', 'Resource allocation plan']
      },
      {
        step: 3,
        title: 'Implementation & Change Management',
        description: 'Guided implementation of strategic initiatives with hands-on support, training, and change management.',
        duration: '4-8 weeks',
        deliverables: ['Implementation support', 'Team training programs', 'System setup and configuration', 'Change management plan']
      },
      {
        step: 4,
        title: 'Optimization & Continuous Improvement',
        description: 'Ongoing optimization, performance monitoring, and continuous improvement initiatives.',
        duration: 'Ongoing',
        deliverables: ['Performance optimization', 'Scaling strategies', 'Continuous improvement programs', 'Strategic consultation']
      }
    ],
    pricing: [
      {
        name: 'Strategic Assessment',
        price: '$3,500',
        description: 'Comprehensive business assessment and strategic recommendations',
        features: [
          'Full business assessment and analysis',
          'Market and competitive analysis',
          'Strategic recommendations report',
          'Implementation roadmap',
          '30-day follow-up consultation',
          'Executive summary and presentation'
        ],
        popular: false
      },
      {
        name: 'Strategic Transformation',
        price: '$18,000',
        description: 'Comprehensive 3-month strategic consulting and transformation program',
        features: [
          'Complete business assessment and analysis',
          'Strategic planning and development',
          'Operations optimization and improvement',
          'Leadership development and training',
          'Implementation support and guidance',
          'Monthly progress reviews and adjustments',
          '90-day optimization and scaling session',
          'Ongoing strategic consultation'
        ],
        popular: true
      },
      {
        name: 'Strategic Partnership',
        price: '$6,000/month',
        description: 'Ongoing strategic partnership with continuous support and optimization',
        features: [
          'Everything in Strategic Transformation',
          'Weekly leadership meetings and coaching',
          'Ongoing optimization and improvement support',
          'Performance monitoring and analysis',
          'Quarterly strategic reviews and planning',
          'Priority access to strategic resources',
          'Continuous market analysis and adaptation'
        ],
        popular: false
      }
    ],
    outcomes: [
      {
        title: 'Revenue Growth',
        description: 'Predictable revenue streams and sustainable growth',
        metric: '25-50%'
      },
      {
        title: 'Operational Efficiency',
        description: 'Streamlined processes and reduced operational costs',
        metric: '30-45%'
      },
      {
        title: 'Leadership Effectiveness',
        description: 'Improved team performance and accountability',
        metric: '40-60%'
      },
      {
        title: 'Market Position',
        description: 'Enhanced competitive advantage and market share',
        metric: '35-55%'
      }
    ]
  },
  'kps-group': {
    heroTitle: 'Comprehensive Business Consulting',
    heroDescription: 'End-to-end business solutions that address your most critical challenges. From strategic planning to operational excellence, we provide the expertise and systems you need to achieve sustainable growth and operational efficiency.',
    services: [
      {
        title: 'Business Strategy & Growth',
        description: 'Develop comprehensive business strategies that align with your vision and drive sustainable growth',
        features: [
          'Business model evaluation and optimization',
          'Market analysis and competitive positioning',
          'Growth strategy development and planning',
          'Revenue optimization and diversification',
          'Strategic planning and goal setting',
          'Performance measurement and analytics'
        ],
        deliverables: ['Business strategy document', 'Growth roadmap', 'Performance metrics', 'Implementation plan']
      },
      {
        title: 'Operational Excellence',
        description: 'Optimize your operations for maximum efficiency, quality, and profitability',
        features: [
          'Process analysis and optimization',
          'Quality management systems',
          'Performance improvement initiatives',
          'Technology integration and automation',
          'Supply chain optimization',
          'Cost reduction and efficiency programs'
        ],
        deliverables: ['Operational improvement plan', 'Process documentation', 'Performance dashboards', 'Implementation guidelines']
      },
      {
        title: 'Organizational Development',
        description: 'Build high-performing teams and organizational structures that support your business objectives',
        features: [
          'Organizational structure optimization',
          'Leadership development and training',
          'Performance management systems',
          'Change management and culture development',
          'Talent acquisition and retention strategies',
          'Succession planning and development'
        ],
        deliverables: ['Organizational development plan', 'Leadership training programs', 'Performance systems', 'Change management plan']
      }
    ],
    process: [
      {
        step: 1,
        title: 'Comprehensive Business Analysis',
        description: 'Thorough assessment of your business model, operations, market position, and growth opportunities.',
        duration: '1-2 weeks',
        deliverables: ['Business analysis report', 'Market assessment', 'Operational review', 'Opportunity identification']
      },
      {
        step: 2,
        title: 'Strategy Development',
        description: 'Development of comprehensive business strategies and operational improvement plans.',
        duration: '2-3 weeks',
        deliverables: ['Business strategy document', 'Operational improvement plan', 'Implementation roadmap', 'Success metrics']
      },
      {
        step: 3,
        title: 'Implementation & Support',
        description: 'Guided implementation with hands-on support, training, and change management.',
        duration: '4-8 weeks',
        deliverables: ['Implementation support', 'Training programs', 'System setup', 'Change management']
      },
      {
        step: 4,
        title: 'Optimization & Growth',
        description: 'Ongoing optimization, performance monitoring, and growth acceleration.',
        duration: 'Ongoing',
        deliverables: ['Performance optimization', 'Growth strategies', 'Continuous improvement', 'Strategic consultation']
      }
    ],
    pricing: [
      {
        name: 'Business Assessment',
        price: '$2,500',
        description: 'Comprehensive business assessment and strategic recommendations',
        features: [
          'Full business analysis and assessment',
          'Market and competitive analysis',
          'Strategic recommendations report',
          'Implementation roadmap',
          '30-day follow-up consultation'
        ],
        popular: false
      },
      {
        name: 'Business Transformation',
        price: '$15,000',
        description: 'Comprehensive 3-month business transformation program',
        features: [
          'Complete business assessment',
          'Strategic planning and development',
          'Operations optimization',
          'Leadership development',
          'Implementation support',
          'Monthly progress reviews',
          '90-day optimization session'
        ],
        popular: true
      },
      {
        name: 'Ongoing Partnership',
        price: '$4,500/month',
        description: 'Continuous business partnership with ongoing support',
        features: [
          'Everything in Business Transformation',
          'Weekly leadership meetings',
          'Ongoing optimization support',
          'Performance monitoring',
          'Quarterly strategic reviews',
          'Priority support access'
        ],
        popular: false
      }
    ],
    outcomes: [
      {
        title: 'Business Growth',
        description: 'Sustainable revenue growth and market expansion',
        metric: '20-40%'
      },
      {
        title: 'Operational Efficiency',
        description: 'Improved processes and reduced operational costs',
        metric: '25-40%'
      },
      {
        title: 'Team Performance',
        description: 'Enhanced productivity and organizational effectiveness',
        metric: '35-55%'
      },
      {
        title: 'Market Position',
        description: 'Strengthened competitive advantage and market share',
        metric: '30-50%'
      }
    ]
  }
};

export default async function ConsultingPage() {
  const headersList = await headers();
  const brandKey = headersList.get('x-brand') || 'kps-group';
  const brand = resolveBrand(undefined, brandKey as any);
  
  if (brand.flavor !== 'consulting' && brand.flavor !== 'parent') {
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
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">Our Consulting Services</h2>
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
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">Our Consulting Process</h2>
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
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">Consulting Packages</h2>
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
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Manufacturing Company</h3>
                             <p className="text-neutral-600 mb-4">
                 &quot;The KPS Group helped us implement a new operational system that increased our efficiency by 40% 
                 and reduced costs by 25%. Their strategic guidance was invaluable to our growth.&quot;
               </p>
              <div className="text-sm text-neutral-500">- John Smith, CEO</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Service Business</h3>
                             <p className="text-neutral-600 mb-4">
                 &quot;Working with The KPS Group transformed our business operations. We now have predictable revenue, 
                 clear accountability, and a team that performs at their best every day.&quot;
               </p>
              <div className="text-sm text-neutral-500">- Sarah Johnson, Founder</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-6 opacity-90">
            Let&apos;s work together to build predictable revenue and operational excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-neutral-100 transition-colors"
            >
              Schedule Consultation
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-gray-900 font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
