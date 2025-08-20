import { headers } from 'next/headers';
import { resolveBrand } from '@kps/config';
import Link from 'next/link';

export const metadata = {
  title: 'Webinars - Free Digital Marketing Education',
  description: 'Join our free webinars to learn digital marketing strategies, industry insights, and growth tactics from our expert team.'
};

const upcomingWebinars = [
  {
    id: 1,
    title: 'The Future of Digital Marketing: AI-Driven Strategies for 2024',
    date: 'January 15, 2024',
    time: '2:00 PM - 3:30 PM CST',
    duration: '90 minutes',
    speaker: 'Sarah Johnson',
    speakerTitle: 'Digital Marketing Director',
    description: 'Discover how artificial intelligence is revolutionizing digital marketing and learn practical strategies to implement AI-driven campaigns that deliver real results.',
    topics: [
      'AI-powered content creation and optimization',
      'Predictive analytics for better targeting',
      'Automated campaign management',
      'Future trends and predictions'
    ],
    attendees: 247,
    maxAttendees: 500,
    isFree: true,
    category: 'Digital Marketing',
    color: 'bg-blue-100 text-blue-800'
  },
  {
    id: 2,
    title: 'Local SEO Mastery: Dominate Your Local Market',
    date: 'January 22, 2024',
    time: '1:00 PM - 2:30 PM CST',
    duration: '90 minutes',
    speaker: 'Michael Chen',
    speakerTitle: 'SEO Specialist',
    description: 'Learn proven local SEO strategies to dominate your local market, improve Google My Business rankings, and generate more qualified leads.',
    topics: [
      'Google My Business optimization',
      'Local keyword research and targeting',
      'Review management strategies',
      'Local link building techniques'
    ],
    attendees: 189,
    maxAttendees: 300,
    isFree: true,
    category: 'SEO',
    color: 'bg-green-100 text-green-800'
  },
  {
    id: 3,
    title: 'Facebook Ads Optimization: From Beginner to Expert',
    date: 'January 29, 2024',
    time: '3:00 PM - 4:30 PM CST',
    duration: '90 minutes',
    speaker: 'Lisa Rodriguez',
    speakerTitle: 'Paid Advertising Manager',
    description: 'Master Facebook advertising from setup to optimization. Learn advanced targeting, creative strategies, and scaling techniques.',
    topics: [
      'Campaign structure and optimization',
      'Advanced targeting and audiences',
      'Creative testing and optimization',
      'Scaling strategies and budget management'
    ],
    attendees: 312,
    maxAttendees: 400,
    isFree: true,
    category: 'Paid Advertising',
    color: 'bg-purple-100 text-purple-800'
  }
];

const pastWebinars = [
  {
    id: 4,
    title: 'Email Marketing Automation: Nurture Your Leads to Sales',
    date: 'December 18, 2023',
    speaker: 'David Thompson',
    speakerTitle: 'Email Marketing Expert',
    description: 'Learn how to create effective email automation sequences that convert leads into customers.',
    recording: 'Available',
    slides: 'Available',
    attendees: 423,
    category: 'Email Marketing',
    color: 'bg-orange-100 text-orange-800'
  },
  {
    id: 5,
    title: 'Content Marketing Strategy: Drive Traffic and Conversions',
    date: 'December 11, 2023',
    speaker: 'Emily Davis',
    speakerTitle: 'Content Strategy Director',
    description: 'Develop a content marketing strategy that drives organic traffic and converts visitors into customers.',
    recording: 'Available',
    slides: 'Available',
    attendees: 356,
    category: 'Content Marketing',
    color: 'bg-pink-100 text-pink-800'
  },
  {
    id: 6,
    title: 'Google Ads Mastery: Maximize Your ROI',
    date: 'December 4, 2023',
    speaker: 'Robert Wilson',
    speakerTitle: 'Google Ads Specialist',
    description: 'Optimize your Google Ads campaigns for maximum return on investment and sustainable growth.',
    recording: 'Available',
    slides: 'Available',
    attendees: 298,
    category: 'Paid Advertising',
    color: 'bg-indigo-100 text-indigo-800'
  }
];

const webinarStats = [
  { number: '50+', label: 'Webinars Delivered' },
  { number: '10,000+', label: 'Attendees' },
  { number: '95%', label: 'Satisfaction Rate' },
  { number: '100%', label: 'Free Access' }
];

export default async function WebinarsPage() {
  const headersList = await headers();
  const brandKey = headersList.get('x-brand') || 'kps-group';
  const brand = resolveBrand(undefined, brandKey as any);

  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Free Digital Marketing Webinars
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Join our expert-led webinars to learn proven digital marketing strategies, 
            industry insights, and actionable tactics to grow your business.
          </p>
        </div>

        {/* Webinar Stats */}
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {webinarStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-neutral-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Webinars */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8">Upcoming Webinars</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingWebinars.map((webinar) => (
              <div key={webinar.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${webinar.color}`}>
                      {webinar.category}
                    </span>
                    <span className="text-sm text-neutral-500">{webinar.duration}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-neutral-900 mb-3 line-clamp-2">
                    {webinar.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold text-blue-600">
                        {webinar.speaker.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-neutral-900">{webinar.speaker}</div>
                      <div className="text-sm text-neutral-500">{webinar.speakerTitle}</div>
                    </div>
                  </div>
                  
                  <p className="text-neutral-600 mb-4 line-clamp-3">{webinar.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <h4 className="font-semibold text-neutral-900 text-sm">What You&apos;ll Learn:</h4>
                    <ul className="space-y-1">
                      {webinar.topics.slice(0, 3).map((topic, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-neutral-600">
                          <span className="text-green-500">✓</span>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm text-neutral-500">
                      <div>{webinar.date}</div>
                      <div>{webinar.time}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-neutral-500">
                        {webinar.attendees}/{webinar.maxAttendees} registered
                      </div>
                      <div className="w-24 bg-neutral-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${(webinar.attendees / webinar.maxAttendees) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  
                  <button className="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                    Register Free
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Past Webinars */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8">Past Webinars</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastWebinars.map((webinar) => (
              <div key={webinar.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${webinar.color}`}>
                    {webinar.category}
                  </span>
                  <span className="text-xs text-neutral-500">{webinar.attendees} attendees</span>
                </div>
                
                <h3 className="text-lg font-bold text-neutral-900 mb-3 line-clamp-2">
                  {webinar.title}
                </h3>
                
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-xs font-semibold text-blue-600">
                      {webinar.speaker.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold text-neutral-900">{webinar.speaker}</div>
                    <div className="text-neutral-500">{webinar.speakerTitle}</div>
                  </div>
                </div>
                
                <p className="text-neutral-600 text-sm mb-4 line-clamp-2">{webinar.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-neutral-500">{webinar.date}</div>
                  <div className="flex gap-2">
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-semibold">
                      Watch Recording
                    </button>
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-semibold">
                      Download Slides
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Never Miss a Webinar</h2>
          <p className="text-xl mb-6 opacity-90">
            Get notified about upcoming webinars and receive exclusive marketing insights.
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

        {/* Webinar Benefits */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">Why Attend Our Webinars?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Actionable Strategies</h3>
              <p className="text-neutral-600">
                Learn proven tactics and strategies you can implement immediately to grow your business.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Expert Insights</h3>
              <p className="text-neutral-600">
                Get insights from industry experts with years of experience in digital marketing.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Live Q&A</h3>
              <p className="text-neutral-600">
                Ask questions and get personalized answers during our live Q&A sessions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
