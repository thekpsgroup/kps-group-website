import type { Metadata } from 'next';

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  noindex?: boolean;
}

export function generateSEO(config: SEOConfig, brandName: string = 'The KPS Group'): Metadata {
  const baseConfig: Metadata = {
    // Use a plain string title here. The brand/app name will be appended once by the root layout template.
    title: config.title,
    description: config.description,
    keywords: config.keywords || ['business services', 'consulting', 'professional services', brandName.toLowerCase()],
    robots: {
      index: config.noindex ? false : true,
      follow: true,
      googleBot: {
        index: config.noindex ? false : true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: config.title,
      description: config.description,
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: config.title,
      description: config.description,
    },
  };

  if (config.noindex) {
    baseConfig.robots = {
      index: false,
      follow: true,
    };
  }

  return baseConfig;
}

// SEO configurations for each page
export const seoConfigs = {
  home: {
    title: 'Small Business Consulting in Texas – Operations & Growth',
    description: 'Back-office consulting for contractors and service businesses: QuickBooks cleanup, payroll & HR, and operations. Schedule a free consultation.',
    keywords: ['small business consulting', 'QuickBooks cleanup', 'payroll services', 'HR compliance', 'Texas business services']
  },
  services: {
    title: 'Business Services – QuickBooks, Payroll & HR',
    description: 'Setup, cleanup, and ongoing support for QuickBooks, payroll, and HR compliance. Built for small businesses.',
    keywords: ['QuickBooks setup', 'payroll services', 'HR compliance', 'business operations', 'accounting services']
  },
  pricing: {
    title: 'Pricing & Packages – Custom Plans',
    description: 'Custom packages to fit your stage and budget. See what\'s included and book your free consult.',
    keywords: ['business pricing', 'consulting packages', 'custom plans', 'free consultation', 'service costs']
  },
  testimonials: {
    title: 'Client Testimonials & Results',
    description: 'Real outcomes from contractors and service businesses. Read their stories.',
    keywords: ['client testimonials', 'success stories', 'business results', 'customer reviews', 'case studies']
  },
  about: {
    title: 'About – Mission, Team, Approach',
    description: 'We help small businesses run smoother and grow faster with modern back-office systems.',
    keywords: ['about us', 'company mission', 'team approach', 'business philosophy', 'company values']
  },
  contact: {
    title: 'Contact – Schedule a Free Consultation',
    description: 'Get expert help with bookkeeping, payroll/HR, and operations. Talk to our team.',
    keywords: ['contact us', 'free consultation', 'business help', 'expert advice', 'schedule meeting']
  }
};

// Thin pages that should be noindexed
export const thinPages = [
  '/blog',
  '/careers', 
  '/case-studies',
  '/resources',
  '/support',
  '/team',
  '/webinars',
  '/industries'
];