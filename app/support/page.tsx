import { headers } from 'next/headers';
import { resolveBrand } from '@kps/config';
import Link from 'next/link';

export const metadata = {
  title: 'Support - Get Help & Contact Us',
  description: 'Get help with your account, services, or questions. Contact our support team for assistance.'
};

const faqs = [
  {
    category: 'Account & Billing',
    questions: [
      {
        question: 'How do I update my billing information?',
        answer: 'You can update your billing information by logging into your account dashboard and navigating to the Billing section. From there, you can update payment methods, billing addresses, and view your invoice history.'
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, and bank transfers for annual plans. All payments are processed securely through our payment partners.'
      },
      {
        question: 'Can I cancel my subscription at any time?',
        answer: 'Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees. You\'ll continue to have access to your services until the end of your current billing period.'
      }
    ]
  },
  {
    category: 'Services & Features',
    questions: [
      {
        question: 'How long does it take to see results from your marketing services?',
        answer: 'Results vary depending on the service and your industry. SEO typically shows initial improvements in 3-6 months, while PPC campaigns can show immediate results. We provide detailed reporting and will discuss expected timelines during your consultation.'
      },
      {
        question: 'Do you provide ongoing support and optimization?',
        answer: 'Yes, all our services include ongoing support, monitoring, and optimization. We regularly review performance, make adjustments, and provide monthly reports to ensure you\'re getting the best possible results.'
      },
      {
        question: 'Can you work with my existing marketing tools and platforms?',
        answer: 'Absolutely! We integrate with most popular marketing platforms including Google Analytics, Facebook Ads, Mailchimp, HubSpot, and many others. We\'ll work with your existing tools or recommend new ones as needed.'
      }
    ]
  },
  {
    category: 'Technical Support',
    questions: [
      {
        question: 'How do I access my marketing reports and analytics?',
        answer: 'You can access your reports through your client dashboard, which is available 24/7. We also send monthly reports via email and can schedule regular review calls to discuss your performance and strategy.'
      },
      {
        question: 'What if I need urgent support outside business hours?',
        answer: 'For urgent matters, you can submit a support ticket which will be prioritized. We also offer emergency support packages for clients who need 24/7 availability. Contact us to learn more about these options.'
      },
      {
        question: 'How do I request changes to my campaigns or services?',
        answer: 'You can request changes through your client dashboard, by emailing your account manager directly, or by submitting a support ticket. We typically respond to change requests within 24-48 hours.'
      }
    ]
  }
];

const supportChannels = [
  {
    title: 'Email Support',
    description: 'Get detailed responses to your questions',
    responseTime: 'Within 24 hours',
    icon: '📧',
    contact: 'support@kpsgroup.com',
    color: 'bg-blue-100 text-blue-800'
  },
  {
    title: 'Phone Support',
    description: 'Speak directly with our support team',
    responseTime: 'Available during business hours',
    icon: '📞',
    contact: '(512) 555-0123',
    color: 'bg-green-100 text-green-800'
  },
  {
    title: 'Live Chat',
    description: 'Get instant help with quick questions',
    responseTime: 'Real-time during business hours',
    icon: '💬',
    contact: 'Available on website',
    color: 'bg-purple-100 text-purple-800'
  },
  {
    title: 'Client Portal',
    description: 'Access your account and submit tickets',
    responseTime: '24/7 access',
    icon: '🔐',
    contact: 'Login to dashboard',
    color: 'bg-orange-100 text-orange-800'
  }
];

const helpResources = [
  {
    title: 'Getting Started Guide',
    description: 'Step-by-step guide to setting up your account and services',
    icon: '🚀',
    link: '/resources/getting-started'
  },
  {
    title: 'Video Tutorials',
    description: 'Learn how to use our tools and understand your reports',
    icon: '🎥',
    link: '/resources/tutorials'
  },
  {
    title: 'Knowledge Base',
    description: 'Searchable database of articles and troubleshooting guides',
    icon: '📚',
    link: '/resources/knowledge-base'
  },
  {
    title: 'Best Practices',
    description: 'Tips and strategies to maximize your marketing results',
    icon: '💡',
    link: '/resources/best-practices'
  }
];

export default async function SupportPage() {
  const headersList = await headers();
  const brandKey = headersList.get('x-brand') || 'kps-group';
  const brand = resolveBrand(undefined, brandKey as any);

  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            How Can We Help?
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Get the support you need to succeed. Our team is here to help with any questions about your account, services, or marketing strategy.
          </p>
        </div>

        {/* Support Channels */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">Contact Support</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{channel.icon}</div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">{channel.title}</h3>
                <p className="text-neutral-600 text-sm mb-3">{channel.description}</p>
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${channel.color} mb-4`}>
                  {channel.responseTime}
                </div>
                <div className="text-sm font-semibold text-neutral-900">{channel.contact}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Help Resources */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">Help Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {helpResources.map((resource, index) => (
              <Link
                key={index}
                href={resource.link}
                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow block"
              >
                <div className="text-4xl mb-4">{resource.icon}</div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">{resource.title}</h3>
                <p className="text-neutral-600 text-sm">{resource.description}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-2xl font-bold text-neutral-900 mb-6">{category.category}</h3>
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <div key={faqIndex} className="bg-white rounded-lg shadow-md p-6">
                      <h4 className="text-lg font-semibold text-neutral-900 mb-3">{faq.question}</h4>
                      <p className="text-neutral-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
          <p className="text-xl mb-6 opacity-90">
            Can&apos;t find what you&apos;re looking for? Our team is ready to assist you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-neutral-100 transition-colors"
            >
              Contact Us
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <a
              href="mailto:support@kpsgroup.com"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-gray-900 font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Send Email
            </a>
          </div>
        </div>

        {/* Business Hours */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-neutral-900 mb-4">Business Hours</h3>
          <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">Monday - Friday:</span>
                <span>8:00 AM - 6:00 PM CST</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Saturday:</span>
                <span>9:00 AM - 2:00 PM CST</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Sunday:</span>
                <span>Closed</span>
              </div>
            </div>
            <p className="text-sm text-neutral-500 mt-4">
              Emergency support available for premium clients
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
