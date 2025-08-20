import Link from 'next/link';

export const metadata = {
  title: 'Client Testimonials & Success Stories - The KPS Group',
  description: 'See what our clients say about working with The KPS Group. Real testimonials and success stories from businesses we\'ve helped grow.'
};

const testimonials = [
  {
    id: 1,
    quote: "The KPS Group transformed our digital marketing strategy completely. We went from struggling to get leads to having a consistent pipeline of qualified prospects. Their expertise in our industry is unmatched.",
    author: "Dr. Sarah Johnson",
    title: "CEO & Founder",
    company: "Johnson Medical Group",
    industry: "Healthcare",
    rating: 5,
    results: "300% increase in patient inquiries",
    image: "/testimonials/sarah-johnson.jpg",
    color: "bg-blue-100 text-blue-800"
  },
  {
    id: 2,
    quote: "Working with The KPS Group has been a game-changer for our real estate business. Their local SEO strategies helped us dominate our market and we've seen incredible growth in both leads and sales.",
    author: "Michael Chen",
    title: "Principal Broker",
    company: "Chen Real Estate",
    industry: "Real Estate",
    rating: 5,
    results: "500% ROI on marketing spend",
    image: "/testimonials/michael-chen.jpg",
    color: "bg-green-100 text-green-800"
  },
  {
    id: 3,
    quote: "The team at The KPS Group understands our industry inside and out. They've helped us scale our e-commerce business from $50K to $500K in annual revenue. Their strategic approach is exactly what we needed.",
    author: "Lisa Rodriguez",
    title: "Founder & CEO",
    company: "EcoStyle Boutique",
    industry: "E-commerce",
    rating: 5,
    results: "1000% revenue growth",
    image: "/testimonials/lisa-rodriguez.jpg",
    color: "bg-purple-100 text-purple-800"
  },
  {
    id: 4,
    quote: "The KPS Group's approach to digital marketing is both strategic and results-driven. They helped us establish market dominance in our local area and the results speak for themselves.",
    author: "David Thompson",
    title: "Managing Partner",
    company: "Thompson Law Group",
    industry: "Legal Services",
    rating: 5,
    results: "400% increase in case inquiries",
    image: "/testimonials/david-thompson.jpg",
    color: "bg-indigo-100 text-indigo-800"
  },
  {
    id: 5,
    quote: "As a SaaS startup, we needed a partner who could help us scale quickly. The KPS Group delivered beyond our expectations. Their data-driven approach helped us achieve 1000% growth in trial signups.",
    author: "Emily Davis",
    title: "Co-Founder & CMO",
    company: "TechFlow Solutions",
    industry: "Technology",
    rating: 5,
    results: "1000% increase in trial signups",
    image: "/testimonials/emily-davis.jpg",
    color: "bg-orange-100 text-orange-800"
  },
  {
    id: 6,
    quote: "The KPS Group helped us dominate our local market through strategic SEO and reputation management. We've seen a 600% increase in service calls and our business has never been stronger.",
    author: "Robert Wilson",
    title: "Owner",
    company: "Wilson Contracting",
    industry: "Home Services",
    rating: 5,
    results: "600% increase in service calls",
    image: "/testimonials/robert-wilson.jpg",
    color: "bg-red-100 text-red-800"
  }
];

const caseStudies = [
  {
    id: 1,
    title: "Medical Practice Growth: 300% Increase in Patient Inquiries",
    company: "Johnson Medical Group",
    industry: "Healthcare",
    challenge: "Struggling to attract new patients in a competitive market",
    solution: "Comprehensive digital marketing strategy including HIPAA-compliant SEO, content marketing, and patient acquisition campaigns",
    results: [
      "300% increase in patient inquiries",
      "150% improvement in search rankings",
      "200% increase in website traffic",
      "95% patient satisfaction rate"
    ],
    duration: "6 months",
    image: "/case-studies/medical-practice.jpg"
  },
  {
    id: 2,
    title: "E-commerce Scaling: From $50K to $500K Annual Revenue",
    company: "EcoStyle Boutique",
    industry: "E-commerce",
    challenge: "Limited online presence and low conversion rates",
    solution: "Complete e-commerce optimization including product SEO, conversion rate optimization, and customer retention strategies",
    results: [
      "1000% revenue growth",
      "250% increase in conversion rate",
      "400% improvement in customer lifetime value",
      "300% increase in repeat customers"
    ],
    duration: "12 months",
    image: "/case-studies/ecommerce-scaling.jpg"
  },
  {
    id: 3,
    title: "Local Market Domination: Real Estate Agent Success",
    company: "Chen Real Estate",
    industry: "Real Estate",
    challenge: "Competing with larger agencies in a saturated market",
    solution: "Local SEO mastery, Google My Business optimization, and targeted lead generation campaigns",
    results: [
      "500% ROI on marketing spend",
      "400% increase in qualified leads",
      "300% improvement in local search rankings",
      "200% increase in property showings"
    ],
    duration: "8 months",
    image: "/case-studies/real-estate.jpg"
  }
];

const stats = [
  { number: "100+", label: "Happy Clients" },
  { number: "95%", label: "Client Retention Rate" },
  { number: "300%", label: "Average ROI" },
  { number: "100+", label: "Industries Served" }
];

export default function TestimonialsPage() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            What Our Clients Say
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Real testimonials and success stories from businesses we&apos;ve helped grow. 
            See how The KPS Group has transformed digital marketing for companies across industries.
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

        {/* Featured Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">Featured Testimonials</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                
                                 <blockquote className="text-neutral-600 mb-6 italic">
                   &quot;{testimonial.quote}&quot;
                 </blockquote>
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-900">{testimonial.author}</div>
                    <div className="text-sm text-neutral-500">{testimonial.title}</div>
                    <div className="text-sm text-neutral-500">{testimonial.company}</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${testimonial.color}`}>
                    {testimonial.industry}
                  </span>
                  <div className="text-sm font-semibold text-green-600">
                    {testimonial.results}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Case Studies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">Success Stories</h2>
          <div className="space-y-8">
            {caseStudies.map((caseStudy) => (
              <div key={caseStudy.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <div className="h-48 md:h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <span className="text-white text-lg font-semibold">{caseStudy.industry}</span>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        caseStudy.industry === 'Healthcare' ? 'bg-blue-100 text-blue-800' :
                        caseStudy.industry === 'E-commerce' ? 'bg-purple-100 text-purple-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {caseStudy.industry}
                      </span>
                      <span className="text-sm text-neutral-500">{caseStudy.duration}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-neutral-900 mb-3">{caseStudy.title}</h3>
                    <p className="text-sm text-neutral-500 mb-4">{caseStudy.company}</p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-neutral-900 mb-2">Challenge</h4>
                        <p className="text-sm text-neutral-600">{caseStudy.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-neutral-900 mb-2">Solution</h4>
                        <p className="text-sm text-neutral-600">{caseStudy.solution}</p>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <h4 className="font-semibold text-neutral-900 mb-3">Results</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {caseStudy.results.map((result, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm">
                            <span className="text-green-500">✓</span>
                            <span className="text-neutral-600">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Testimonials CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-center text-white mb-16">
          <h2 className="text-3xl font-bold mb-4">See More Success Stories</h2>
          <p className="text-xl mb-6 opacity-90">
            Watch video testimonials from our clients and see the real impact of our digital marketing strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/case-studies"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-neutral-100 transition-colors"
            >
              View All Case Studies
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-gray-900 font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Start Your Success Story
            </Link>
          </div>
        </div>

        {/* Industry Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">Success Across Industries</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { industry: 'Healthcare', count: '25+', icon: '🏥' },
              { industry: 'Real Estate', count: '25+', icon: '🏠' },
              { industry: 'E-commerce', count: '25+', icon: '🛒' },
              { industry: 'Professional Services', count: '25+', icon: '💼' }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">{item.industry}</h3>
                <p className="text-2xl font-bold text-blue-600">{item.count}</p>
                <p className="text-sm text-neutral-500">Happy Clients</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-lg text-neutral-600 mb-6">
            Let&apos;s discuss how The KPS Group can help your business achieve similar results.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-neutral-900 text-white font-semibold rounded-lg hover:bg-neutral-800 transition-colors"
          >
            Schedule Free Consultation
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}