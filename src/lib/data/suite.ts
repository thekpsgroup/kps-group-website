export interface Suite {
	key: string;
	name: string;
	tag: string;
	icon?: string;
	summary?: string;
	description: string;
	painPoints: string[];
	solutions: string[];
	cta: { label: string; href: string };
	website?: string;
	// Brand-specific styling
	brandColors: {
		primary: string;
		secondary: string;
		accent: string;
		gradient: string;
	};
	// Brand-specific content
	features: string[];
	benefits: string[];
	process?: string[];
	testimonials?: string[];
	// Landing page specific content
	heroHeadline?: string;
	heroSubheadline?: string;
	painHeadline?: string;
	featuresHeadline?: string;
	benefitsHeadline?: string;
	processHeadline?: string;
	testimonialsHeadline?: string;
	ctaHeadline?: string;
	ctaSubtext?: string;
}

export const SUITE: Suite[] = [
  {
    key: "brands",
    name: "Modern Brands",
    tag: "Brand Identity & Web Design",
    icon: "brands",
    description: "Build a brand that wins trust & closes deals. Professional logos, high-performance websites, and complete brand kits that make you look bigger than you are.",
    painPoints: [
      "You look smaller than you are. Your service is excellent — but your logo looks like it was made in Microsoft Paint or Canva. Customers assume you're not established.",
      "Your website is killing your leads. Slow load times, confusing layouts, broken forms, or outdated design silently push customers to competitors.",
      "Inconsistent identity everywhere. Business cards don't match your truck wraps. Your website doesn't match your proposals. Customers feel that chaos.",
      "Google doesn't know you exist. Without proper SEO structure, your site is invisible to the people actively searching for your services.",
      "DIY branding stops scaling. Maybe you built a site yourself. It worked at first, but now it's holding you back — and you know it."
    ],
    solutions: [
      "Custom logo design that reflects your professionalism and industry expertise",
      "Modern, high-performance website built on enterprise-grade technology",
      "Complete brand kit with consistent identity across all touchpoints",
      "Search visibility and local SEO setup to capture your market",
      "Ongoing hosting, updates, and support to keep you competitive"
    ],
    cta: { label: "We do that", href: "#contact" },
    website: "https://modernbrands.co",
    brandColors: {
      primary: "gold",
      secondary: "navy",
      accent: "gold-600",
      gradient: "from-gold to-gold-600"
    },
    features: [
      "Custom Logo Design - No templates, hand-designed around your industry and customer psychology",
      "Modern, High-Performance Website - Built on enterprise-grade tech with 90+ Lighthouse scores",
      "Complete Brand Kit - Fonts, color palette, and usage rules for consistency",
      "Search Visibility & Local SEO Setup - Google Business Profile optimization and keyword targeting",
      "Marketing Asset Bundle - Social media templates, email signatures, and branded materials",
      "Hosting, Updates, and Support - Ongoing maintenance with uptime monitoring and security"
    ],
    benefits: [
      "Instant Credibility - Look like the most professional provider in your market",
      "Higher Conversion Rates - More visitors turn into calls, form fills, and paying customers",
      "Competitive Edge - Stand out in industries where everyone else looks outdated",
      "Consistency Across Channels - One polished look across trucks, invoices, and digital presence",
      "Time Back - No more DIY edits, we handle design, SEO, and upkeep"
    ],
    process: [
      "Discovery Call - Understand your services, audience, and goals",
      "Concepts & Drafts - We present logo options + homepage layouts",
      "Build Phase - Full website buildout, SEO configuration, lead capture forms",
      "Brand Delivery - You get your full brand kit, website, and digital assets",
      "Support & Growth - Hosting, maintenance, and optional monthly marketing support"
    ],
    testimonials: [
      "We started closing bigger jobs after Modern Brands redid our site. The professional look immediately changed how customers perceived us.",
      "Our phone started ringing more after the new website launched. The SEO work alone paid for itself in the first month.",
      "Finally, everything looks consistent. Our trucks, website, and proposals all match. Customers notice the professionalism."
    ],
    heroHeadline: "Build a Brand That Wins Trust & Closes Deals",
    heroSubheadline: "Your logo and website are the first things prospects see. We make sure they say professional, reliable, and here to stay.",
    painHeadline: "The Truth: Your Brand Might Be Costing You Customers",
    featuresHeadline: "Everything You Need To Compete With the Big Guys",
    benefitsHeadline: "Your Brand, Finally Working For You",
    processHeadline: "From Idea to Launch in Weeks, Not Months",
    testimonialsHeadline: "See What Happens When Small Businesses Look Big",
    ctaHeadline: "The Best Time To Elevate Your Brand Was Yesterday. The Next Best Time Is Now.",
    ctaSubtext: "Every brand is unique. We don't do cookie-cutter packages. Reach out to get a customized proposal."
  },
  {
    key: "ledger",
    name: "Modern Ledger",
    tag: "Books without drama",
    summary: "Done-for-you bookkeeping that kills busywork.",
    description:
      "Modern Ledger provides done-for-you bookkeeping services that eliminate administrative busywork. We offer automated reconciliations, clean monthly closes, and decision-ready dashboards.",
    painPoints: [
      "Admin busywork is expensive",
      "No real-time numbers",
      "Month-end chaos",
    ],
    solutions: [
      "Automated reconciliations",
      "Clean monthly closes",
      "Decision-ready dashboards",
    ],
    cta: { label: "We do that", href: "#contact" },
    website: "https://modernledger.co",
    brandColors: {
      primary: "blue",
      secondary: "navy",
      accent: "blue-600",
      gradient: "from-blue-500 to-blue-700"
    },
    features: [
      "Automated reconciliations",
      "Clean monthly closes",
      "Financial statements",
      "Tax-ready reports",
      "Decision-ready dashboards",
      "Cash flow tracking",
      "Performance metrics",
      "Custom reporting"
    ],
    benefits: [
      "Eliminate administrative busywork",
      "Get real-time financial insights",
      "Make better business decisions",
      "Stay tax-ready year-round"
    ]
  },
  {
    key: "pay",
    name: "Modern Pay",
    tag: "Payroll that behaves",
    summary: "Payroll + HR compliance without the headaches.",
    description:
      "Modern Pay delivers payroll and HR compliance services without the typical headaches. We provide fully managed payroll, transparent pricing, and HR compliance guardrails.",
    painPoints: [
      "Manual payroll is risky",
      "Overpaying current provider",
      "Compliance anxiety",
    ],
    solutions: [
      "Fully managed payroll",
      "Transparent pricing",
      "HR compliance guardrails",
    ],
    cta: { label: "We do that", href: "#contact" },
    website: "https://modernpay.co",
    brandColors: {
      primary: "emerald",
      secondary: "navy",
      accent: "emerald-600",
      gradient: "from-emerald-500 to-emerald-700"
    },
    features: [
      "Fully managed payroll",
      "Tax filing & compliance",
      "Direct deposit setup",
      "Payroll reporting",
      "HR policy development",
      "Compliance monitoring",
      "Employee handbooks",
      "Regulatory updates",
      "PEO services",
      "Benefits administration"
    ],
    benefits: [
      "Eliminate payroll headaches",
      "Stay compliant automatically",
      "Reduce HR administrative burden",
      "Protect your business from risks"
    ],
    process: [
      "Initial setup & onboarding",
      "Ongoing payroll processing",
      "Compliance monitoring",
      "Regular reporting & insights"
    ]
  },
  {
    key: "stack",
    name: "Modern Stack",
    tag: "Audit. Fix. Build.",
    summary:
      "We audit your tech, cut waste, and build custom software that actually fits.",
    description:
      "Modern Stack audits your technology stack, cuts waste, and builds custom software solutions that actually fit your business needs. We specialize in stack audits, custom apps, integrations, and AI copilots.",
    painPoints: [
      "Paying for too many tools",
      "Off‑the‑shelf doesn't fit",
      "Nothing talks to each other",
    ],
    solutions: [
      "Stack audit + cost reduction",
      "Custom apps & integrations",
      "Automations & AI copilots",
    ],
    cta: { label: "We do that", href: "#contact" },
    website: "https://moderntechstack.co",
    brandColors: {
      primary: "purple",
      secondary: "navy",
      accent: "purple-600",
      gradient: "from-purple-500 to-purple-700"
    },
    features: [
      "Stack optimization",
      "Cost reduction analysis",
      "Integration opportunities",
      "Security assessment",
      "Custom applications",
      "API integrations",
      "Automation workflows",
      "AI-powered solutions"
    ],
    benefits: [
      "Cut technology costs",
      "Build solutions that fit",
      "Automate manual processes",
      "Scale with confidence"
    ]
  },
  {
    key: "consulting",
    name: "Modern Consulting",
    tag: "Sell + operate smart",
    summary: "Sales, ops, and leadership tuned for the trades.",
    description:
      "Modern Consulting specializes in sales, operations, and leadership optimization for service businesses. We provide training, playbooks, process design, and accountability systems.",
    painPoints: [
      "Sales team underperforming",
      "Ops are a tire fire",
      "No playbook, no KPIs",
    ],
    solutions: [
      "Training + playbooks",
      "Process design",
      "Accountability systems",
    ],
    cta: { label: "We do that", href: "#contact" },
    website: "https://modernconsulting.co",
    brandColors: {
      primary: "orange",
      secondary: "navy",
      accent: "orange-600",
      gradient: "from-orange-500 to-orange-700"
    },
    features: [
      "Sales training programs",
      "Process optimization",
      "Performance metrics",
      "Lead generation strategies",
      "Process design & documentation",
      "KPI development",
      "Accountability systems",
      "Team leadership training"
    ],
    benefits: [
      "Improve sales performance",
      "Streamline operations",
      "Build scalable processes",
      "Develop strong leadership"
    ]
  },
];
