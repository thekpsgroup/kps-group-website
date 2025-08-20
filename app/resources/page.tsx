import { headers } from 'next/headers';
import { resolveBrand } from '@kps/config';
import Link from 'next/link';

export const metadata = {
  title: 'Resources - Free Marketing Tools & Templates',
  description: 'Download free marketing templates, guides, calculators, and tools to accelerate your business growth.'
};

const resources = [
  {
    category: 'Marketing Templates',
    items: [
      {
        title: 'Lead Magnet Template Pack',
        description: '10 professionally designed lead magnet templates for different industries',
        type: 'PDF Templates',
        size: '2.4 MB',
        downloads: 1247,
        icon: '📄',
        color: 'bg-blue-100 text-blue-800'
      },
      {
        title: 'Social Media Content Calendar',
        description: 'Monthly content calendar template with posting schedule and hashtag strategy',
        type: 'Excel Template',
        size: '1.2 MB',
        downloads: 892,
        icon: '📅',
        color: 'bg-green-100 text-green-800'
      },
      {
        title: 'Email Marketing Sequence Templates',
        description: 'Welcome series, nurture sequences, and promotional email templates',
        type: 'Word Templates',
        size: '3.1 MB',
        downloads: 567,
        icon: '📧',
        color: 'bg-purple-100 text-purple-800'
      }
    ]
  },
  {
    category: 'Calculators & Tools',
    items: [
      {
        title: 'ROI Calculator',
        description: 'Calculate marketing ROI, customer lifetime value, and campaign performance',
        type: 'Interactive Tool',
        size: 'Web App',
        downloads: 2341,
        icon: '🧮',
        color: 'bg-orange-100 text-orange-800'
      },
      {
        title: 'SEO Audit Checklist',
        description: 'Comprehensive SEO audit checklist with 50+ technical and content factors',
        type: 'PDF Checklist',
        size: '0.8 MB',
        downloads: 1567,
        icon: '🔍',
        color: 'bg-indigo-100 text-indigo-800'
      },
      {
        title: 'Content Planning Worksheet',
        description: 'Strategic content planning worksheet with audience analysis and topic ideation',
        type: 'PDF Worksheet',
        size: '1.5 MB',
        downloads: 743,
        icon: '✏️',
        color: 'bg-pink-100 text-pink-800'
      }
    ]
  },
  {
    category: 'Guides & Ebooks',
    items: [
      {
        title: 'Complete Digital Marketing Guide',
        description: 'Comprehensive 50-page guide covering all aspects of digital marketing',
        type: 'PDF Ebook',
        size: '8.2 MB',
        downloads: 3421,
        icon: '📚',
        color: 'bg-red-100 text-red-800'
      },
      {
        title: 'Facebook Ads Optimization Guide',
        description: 'Step-by-step guide to optimizing Facebook ads for maximum ROI',
        type: 'PDF Guide',
        size: '4.7 MB',
        downloads: 1892,
        icon: '📱',
        color: 'bg-teal-100 text-teal-800'
      },
      {
        title: 'Local SEO Mastery Guide',
        description: 'Complete guide to dominating local search results and Google My Business',
        type: 'PDF Guide',
        size: '6.1 MB',
        downloads: 1123,
        icon: '📍',
        color: 'bg-yellow-100 text-yellow-800'
      }
    ]
  }
];

const featuredResource = {
  title: '2024 Digital Marketing Strategy Template',
  description: 'Our most popular resource - a complete strategic planning template used by 10,000+ businesses to create winning marketing strategies.',
  features: [
    'SWOT Analysis Framework',
    'Competitive Analysis Template',
    'Goal Setting & KPIs',
    'Budget Planning Worksheet',
    'Channel Strategy Planning',
    'Implementation Timeline'
  ],
  downloads: 15432,
  rating: 4.9,
  reviews: 1247
};

export default async function ResourcesPage() {
  const headersList = await headers();
  const brandKey = headersList.get('x-brand') || 'kps-group';
  const brand = resolveBrand(undefined, brandKey as any);

  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Free Marketing Resources
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Download professional templates, tools, and guides to accelerate your marketing success. 
            Everything you need to grow your business, completely free.
          </p>
        </div>

        {/* Featured Resource */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">🏆</span>
                  <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
                <h2 className="text-3xl font-bold mb-4">{featuredResource.title}</h2>
                <p className="text-xl opacity-90 mb-6">{featuredResource.description}</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                  {featuredResource.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="text-green-400">✓</span>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-6 text-sm">
                  <span>📥 {featuredResource.downloads.toLocaleString()} downloads</span>
                  <span>⭐ {featuredResource.rating} ({featuredResource.reviews} reviews)</span>
                </div>
              </div>
              <div className="lg:w-80">
                <button className="w-full bg-white text-blue-600 font-bold py-4 px-6 rounded-lg hover:bg-neutral-100 transition-colors text-lg">
                  Download Free Template
                </button>
                <p className="text-center text-sm opacity-75 mt-2">
                  No email required • Instant download
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Resource Categories */}
        <div className="space-y-16">
          {resources.map((category) => (
            <div key={category.category}>
              <h2 className="text-3xl font-bold text-neutral-900 mb-8">{category.category}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((resource, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">{resource.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${resource.color}`}>
                            {resource.type}
                          </span>
                          <span className="text-xs text-neutral-500">{resource.size}</span>
                        </div>
                        <h3 className="text-lg font-bold text-neutral-900 mb-2">
                          {resource.title}
                        </h3>
                        <p className="text-neutral-600 text-sm mb-4">
                          {resource.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-neutral-500">
                            📥 {resource.downloads.toLocaleString()} downloads
                          </span>
                          <button className="text-blue-600 hover:text-blue-800 font-semibold text-sm">
                            Download Free
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">Get New Resources First</h2>
          <p className="text-xl text-neutral-600 mb-6">
            Be the first to know when we release new templates, tools, and guides.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-neutral-500 mt-4">
            We&apos;ll send you new resources and exclusive content.
          </p>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">
            Need Custom Resources?
          </h2>
          <p className="text-lg text-neutral-600 mb-6">
            We can create custom templates and tools specifically for your business needs.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-neutral-900 text-white font-semibold rounded-lg hover:bg-neutral-800 transition-colors"
          >
            Schedule a Consultation
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
