import Link from 'next/link';

export const metadata = {
  title: 'Industries We Serve - The KPS Group',
  description: 'Comprehensive business solutions across diverse industries. From healthcare and construction to technology and professional services, we deliver specialized expertise.'
};

const industries = [
  {
    name: 'Home Services & Trades',
    description: 'Comprehensive solutions for medical practices, healthcare facilities, and medical service providers',
    services: [
      'HVAC business operations and dispatch optimization',
      'Electrical contractor scheduling and compliance',
      'Plumbing CRM, quoting, and job-costing systems',
      'Fleet, route, and inventory management',
      'Local SEO, LSA, and lead intake automation',
      'Job tracking, photos, and customer communication',
      'Technician onboarding and playbooks',
      'Financing, invoicing, and payments'
    ],
    specialties: [
      'HVAC install/service companies',
      'Electrical contractors',
      'Plumbing contractors',
      'Garage door and fencing companies',
      'Roofing and exterior services',
      'Landscaping and outdoor services',
      'Cleaning and restoration',
      'Other home services'
    ],
    stats: { clients: '30+', experience: '8+ years', growth: '300%' }
  },
  {
    name: 'Construction & Contracting',
    description: 'Specialized solutions for construction companies, contractors, and building service providers',
    services: [
      'Construction project management and optimization',
      'Contractor financial management and accounting',
      'Construction payroll and compliance',
      'Job costing and project profitability analysis',
      'Construction marketing and lead generation',
      'Contractor technology and software integration',
      'Construction safety and compliance management',
      'Subcontractor management and coordination'
    ],
    specialties: [
      'General contractors and construction management',
      'Residential construction and home builders',
      'Commercial construction and development',
      'Electrical contractors and services',
      'Plumbing contractors and services',
      'HVAC contractors and mechanical services',
      'Roofing contractors and services',
      'Landscaping and outdoor construction'
    ],
    stats: { clients: '15+', experience: '10+ years', growth: '400%' }
  },
  {
    name: 'Professional Services',
    description: 'Tailored solutions for law firms, accounting practices, and professional service providers',
    services: [
      'Professional practice management and optimization',
      'Client relationship management and CRM systems',
      'Professional services marketing and business development',
      'Practice financial management and accounting',
      'Professional staff training and development',
      'Technology integration and automation',
      'Compliance and regulatory support',
      'Professional practice growth strategies'
    ],
    specialties: [
      'Law firms and legal services',
      'Accounting firms and CPA practices',
      'Consulting firms and advisory services',
      'Architecture and engineering firms',
      'Real estate agencies and brokerages',
      'Financial advisory and wealth management',
      'Insurance agencies and brokers',
      'Marketing and advertising agencies'
    ],
    stats: { clients: '15+', experience: '12+ years', growth: '350%' }
  },
  {
    name: 'Technology & Software',
    description: 'Comprehensive solutions for technology companies, software developers, and IT service providers',
    services: [
      'Technology company business strategy and growth',
      'Software development project management',
      'Technology marketing and lead generation',
      'SaaS business model optimization',
      'Technology company financial management',
      'IT service management and optimization',
      'Technology compliance and security',
      'Software company scaling and expansion'
    ],
    specialties: [
      'Software development companies',
      'SaaS and subscription-based businesses',
      'IT consulting and managed services',
      'Technology startups and scale-ups',
      'Cybersecurity companies and services',
      'Cloud computing and infrastructure',
      'Mobile app development companies',
      'E-commerce and online businesses'
    ],
    stats: { clients: '15+', experience: '15+ years', growth: '500%' }
  },
  {
    name: 'Manufacturing & Industrial',
    description: 'Specialized solutions for manufacturing companies, industrial operations, and production facilities',
    services: [
      'Manufacturing operations optimization',
      'Supply chain management and logistics',
      'Manufacturing financial management and cost control',
      'Quality control and process improvement',
      'Manufacturing technology integration',
      'Inventory management and optimization',
      'Manufacturing compliance and safety',
      'Production planning and scheduling'
    ],
    specialties: [
      'Custom manufacturing and fabrication',
      'Food and beverage manufacturing',
      'Automotive and transportation manufacturing',
      'Electronics and component manufacturing',
      'Chemical and pharmaceutical manufacturing',
      'Textile and apparel manufacturing',
      'Metal fabrication and machining',
      'Plastics and composite manufacturing'
    ],
    stats: { clients: '10+', experience: '10+ years', growth: '250%' }
  },
  {
    name: 'Retail & E-commerce',
    description: 'Comprehensive solutions for retail businesses, e-commerce companies, and consumer goods',
    services: [
      'Retail operations optimization and management',
      'E-commerce platform development and optimization',
      'Retail marketing and customer acquisition',
      'Inventory management and supply chain optimization',
      'Retail financial management and accounting',
      'Customer relationship management and loyalty programs',
      'Retail technology integration and automation',
      'Multi-channel retail strategy and execution'
    ],
    specialties: [
      'Brick-and-mortar retail stores',
      'E-commerce and online retail',
      'Fashion and apparel retail',
      'Home and garden retail',
      'Electronics and technology retail',
      'Food and beverage retail',
      'Automotive retail and dealerships',
      'Specialty retail and boutique stores'
    ],
    stats: { clients: '10+', experience: '8+ years', growth: '450%' }
  },
  {
    name: 'Real Estate & Property',
    description: 'Specialized solutions for real estate companies, property managers, and real estate professionals',
    services: [
      'Real estate business strategy and growth',
      'Property management optimization',
      'Real estate marketing and lead generation',
      'Real estate financial management and accounting',
      'Property technology integration and automation',
      'Real estate compliance and regulatory support',
      'Investment property management and optimization',
      'Real estate team development and training'
    ],
    specialties: [
      'Residential real estate agencies',
      'Commercial real estate and property management',
      'Real estate investment and development',
      'Property management companies',
      'Real estate technology companies',
      'Mortgage and lending services',
      'Real estate appraisal and valuation',
      'Real estate consulting and advisory'
    ],
    stats: { clients: '10+', experience: '12+ years', growth: '380%' }
  },
  {
    name: 'Financial Services',
    description: 'Comprehensive solutions for financial institutions, investment firms, and financial service providers',
    services: [
      'Financial services business strategy and growth',
      'Financial compliance and regulatory support',
      'Financial technology integration and automation',
      'Financial services marketing and client acquisition',
      'Financial operations optimization and management',
      'Risk management and compliance systems',
      'Financial staff training and development',
      'Financial services technology modernization'
    ],
    specialties: [
      'Investment advisory and wealth management',
      'Banking and credit unions',
      'Insurance companies and agencies',
      'Financial technology companies',
      'Accounting and tax preparation services',
      'Credit and lending services',
      'Financial planning and consulting',
      'Cryptocurrency and blockchain companies'
    ],
    stats: { clients: '10+', experience: '15+ years', growth: '320%' }
  }
];

const serviceAreas = [
  {
    category: 'Business Strategy & Consulting',
    services: [
      'Strategic planning and business development',
      'Market analysis and competitive positioning',
      'Business model optimization and innovation',
      'Growth strategy and scaling planning',
      'Operational efficiency and process improvement',
      'Change management and organizational development',
      'Performance measurement and KPI development',
      'Strategic partnerships and alliance development'
    ]
  },
  {
    category: 'Financial Management & Accounting',
    services: [
      'Financial planning and analysis',
      'Accounting system setup and optimization',
      'Bookkeeping and financial record keeping',
      'Financial reporting and compliance',
      'Cost analysis and profitability optimization',
      'Cash flow management and forecasting',
      'Tax planning and preparation support',
      'Financial technology integration and automation'
    ]
  },
  {
    category: 'Payroll & Human Resources',
    services: [
      'Payroll processing and tax filing',
      'HR compliance and regulatory support',
      'Employee benefits administration',
      'HR technology and software integration',
      'Employee handbook and policy development',
      'Performance management and evaluation systems',
      'Recruitment and talent acquisition support',
      'Workplace safety and compliance management'
    ]
  },
  {
    category: 'Technology & Digital Solutions',
    services: [
      'Custom software development and integration',
      'Business automation and workflow optimization',
      'Cloud infrastructure and migration',
      'Cybersecurity and data protection',
      'IT support and managed services',
      'Digital transformation and modernization',
      'Technology strategy and planning',
      'Software selection and implementation'
    ]
  },
  {
    category: 'Marketing & Brand Development',
    services: [
      'Brand strategy and visual identity development',
      'Digital marketing and lead generation',
      'Website design and development',
      'Search engine optimization and content marketing',
      'Social media marketing and management',
      'Marketing automation and CRM integration',
      'Advertising and promotional campaigns',
      'Market research and customer analysis'
    ]
  },
  {
    category: 'Operations & Process Optimization',
    services: [
      'Process mapping and workflow optimization',
      'Quality management and control systems',
      'Supply chain and inventory optimization',
      'Performance measurement and analytics',
      'Lean manufacturing and continuous improvement',
      'Project management and coordination',
      'Risk management and compliance systems',
      'Operational technology integration'
    ]
  }
];

const stats = [
  { number: "100+", label: "Active Clients" },
  { number: "100+", label: "Industries Served" },
  { number: "15+", label: "Years Experience" },
  { number: "95%", label: "Client Retention Rate" }
];

export default function IndustriesPage() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Industries We Serve
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Comprehensive business solutions across diverse industries. From healthcare and construction to technology and professional services, 
            we deliver specialized expertise tailored to your industry&apos;s unique challenges and opportunities.
          </p>
        </div>

        {/* Stats */}
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-neutral-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Industries */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">Industry Expertise</h2>
          <div className="space-y-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-neutral-900 mb-3">{industry.name}</h3>
                    <p className="text-neutral-600 mb-6">{industry.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-semibold text-neutral-900 mb-3">Core Services</h4>
                        <ul className="space-y-2">
                          {industry.services.map((service, serviceIndex) => (
                            <li key={serviceIndex} className="flex items-center gap-2 text-sm text-neutral-600">
                              <span className="text-green-500">✓</span>
                              {service}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-neutral-900 mb-3">Specialties</h4>
                        <ul className="space-y-2">
                          {industry.specialties.map((specialty, specialtyIndex) => (
                            <li key={specialtyIndex} className="flex items-center gap-2 text-sm text-neutral-600">
                              <span className="text-blue-500">•</span>
                              {specialty}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-neutral-200">
                      <div className="flex flex-wrap gap-6">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">{industry.stats.clients}</div>
                          <div className="text-sm text-neutral-500">Happy Clients</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">{industry.stats.experience}</div>
                          <div className="text-sm text-neutral-500">Years Experience</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">{industry.stats.growth}</div>
                          <div className="text-sm text-neutral-500">Average Growth</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Service Areas */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">Service Areas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-4">{area.category}</h3>
                <ul className="space-y-2">
                  {area.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-center gap-2 text-sm text-neutral-600">
                      <span className="text-green-500">✓</span>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Success Stories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">Industry Success Stories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-neutral-900 mb-3">Healthcare Practice</h3>
                             <p className="text-neutral-600 mb-4">
                 &quot;The KPS Group helped our medical practice increase patient inquiries by 300% while maintaining HIPAA compliance. 
                 Their expertise in healthcare marketing and operations was invaluable.&quot;
               </p>
              <div className="text-sm text-neutral-500">- Dr. Sarah Johnson, Medical Practice Owner</div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-neutral-900 mb-3">Construction Company</h3>
                             <p className="text-neutral-600 mb-4">
                 &quot;Working with The KPS Group transformed our construction business. We now have predictable revenue, 
                 better project management, and improved profitability across all our projects.&quot;
               </p>
              <div className="text-sm text-neutral-500">- Mike Chen, Construction Company Owner</div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-neutral-900 mb-3">Technology Startup</h3>
                             <p className="text-neutral-600 mb-4">
                 &quot;The KPS Group helped us scale our SaaS business from $50K to $500K in annual revenue. 
                 Their strategic guidance and operational expertise were game-changing.&quot;
               </p>
              <div className="text-sm text-neutral-500">- Emily Davis, Tech Startup Founder</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Industry?</h2>
          <p className="text-xl mb-6 opacity-90">
            Let&apos;s discuss how The KPS Group can help your business achieve industry-leading results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-neutral-100 transition-colors"
            >
              Schedule Industry Consultation
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-gray-900 font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Industry Case Studies
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
