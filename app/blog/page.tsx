import { headers } from 'next/headers';
import { resolveBrand } from '@kps/config';
import Link from 'next/link';

export const metadata = {
  title: 'Blog - Digital Marketing Insights & Strategies',
  description: 'Expert insights on digital marketing, lead generation, and business growth strategies from KPS Group.'
};

const featuredPosts = [
  {
    id: 1,
    title: 'The Future of Digital Marketing: AI-Driven Personalization',
    excerpt: 'Discover how artificial intelligence is revolutionizing digital marketing and creating hyper-personalized customer experiences.',
    category: 'Digital Marketing',
    readTime: '8 min read',
    date: 'December 15, 2024',
    image: '/blog/ai-marketing.jpg',
    slug: 'future-digital-marketing-ai'
  },
  {
    id: 2,
    title: 'Lead Generation Strategies That Actually Work in 2024',
    excerpt: 'Cut through the noise with proven lead generation tactics that deliver real results for your business.',
    category: 'Lead Generation',
    readTime: '12 min read',
    date: 'December 10, 2024',
    image: '/blog/lead-generation.jpg',
    slug: 'lead-generation-strategies-2024'
  },
  {
    id: 3,
    title: 'Building a High-Converting Landing Page: A Complete Guide',
    excerpt: 'Learn the psychology and design principles behind landing pages that convert visitors into customers.',
    category: 'Conversion Optimization',
    readTime: '15 min read',
    date: 'December 5, 2024',
    image: '/blog/landing-page.jpg',
    slug: 'high-converting-landing-page-guide'
  }
];

const categories = [
  { name: 'Digital Marketing', count: 24, color: 'bg-blue-100 text-blue-800' },
  { name: 'Lead Generation', count: 18, color: 'bg-green-100 text-green-800' },
  { name: 'SEO & Content', count: 15, color: 'bg-purple-100 text-purple-800' },
  { name: 'Social Media', count: 12, color: 'bg-pink-100 text-pink-800' },
  { name: 'Analytics & Data', count: 9, color: 'bg-orange-100 text-orange-800' },
  { name: 'Business Growth', count: 21, color: 'bg-indigo-100 text-indigo-800' }
];

const recentPosts = [
  {
    id: 4,
    title: 'Email Marketing Automation: From Basic to Advanced',
    excerpt: 'Master the art of email automation to nurture leads and drive sales.',
    category: 'Email Marketing',
    readTime: '10 min read',
    date: 'November 28, 2024'
  },
  {
    id: 5,
    title: 'Social Media ROI: How to Measure What Matters',
    excerpt: 'Stop guessing and start measuring the real impact of your social media efforts.',
    category: 'Social Media',
    readTime: '7 min read',
    date: 'November 22, 2024'
  },
  {
    id: 6,
    title: 'The Psychology of Customer Decision Making',
    excerpt: 'Understand what drives customer decisions and how to influence them ethically.',
    category: 'Business Growth',
    readTime: '11 min read',
    date: 'November 15, 2024'
  }
];

export default async function BlogPage() {
  const headersList = await headers();
  const brandKey = headersList.get('x-brand') || 'kps-group';
  const brand = resolveBrand(undefined, brandKey as any);

  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Digital Marketing Insights
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Expert strategies, actionable tips, and industry insights to help your business grow in the digital age.
          </p>
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8">Featured Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">{post.category}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-neutral-500 mb-3">
                    <span>{post.category}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                    <span className="mx-2">•</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-neutral-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8">Browse by Category</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-500"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-neutral-900">{category.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${category.color}`}>
                    {category.count} posts
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Posts */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8">Recent Posts</h2>
          <div className="space-y-6">
            {recentPosts.map((post) => (
              <article key={post.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center text-sm text-neutral-500 mb-2">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        post.category === 'Email Marketing' ? 'bg-blue-100 text-blue-800' :
                        post.category === 'Social Media' ? 'bg-pink-100 text-pink-800' :
                        'bg-indigo-100 text-indigo-800'
                      }`}>
                        {post.category}
                      </span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                      <span className="mx-2">•</span>
                      <span>{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">
                      {post.title}
                    </h3>
                    <p className="text-neutral-600">
                      {post.excerpt}
                    </p>
                  </div>
                  <Link 
                    href={`/blog/${post.id}`}
                    className="mt-4 md:mt-0 md:ml-6 inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-6 opacity-90">
            Get the latest digital marketing insights delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-neutral-100 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm opacity-75 mt-4">
            No spam, unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
