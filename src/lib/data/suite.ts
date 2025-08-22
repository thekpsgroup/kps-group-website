export type Suite = {
	key: string;
	name: string;
	tag: string;
	summary: string;
	painPoints: string[];
	solutions: string[];
	cta: { label: string; href: string };
	website?: string;
	description: string;
};

export const SUITE: Suite[] = [
	{
		key: 'brands',
		name: 'Modern Brands',
		tag: 'Logos, websites, brand systems',
		summary: 'Ultra-modern logos and websites. Quiet luxury, bold impact.',
		description: 'Modern Brands creates ultra-modern logos, websites, and brand systems for service businesses. We focus on quiet luxury with bold impact, ensuring your brand stands out in today\'s competitive market.',
		painPoints: [
			'Brand looks outdated',
			'Website doesn\'t convert',
			'No cohesive system'
		],
		solutions: [
			'Modern brand identity',
			'Conversion-focused sites',
			'Complete brand systems'
		],
		cta: { label: 'We do that', href: '#contact' },
		website: 'https://modernbrands.co'
	},
	{
		key: 'ledger',
		name: 'Modern Ledger',
		tag: 'Books without drama',
		summary: 'Done-for-you bookkeeping that kills busywork.',
		description: 'Modern Ledger provides done-for-you bookkeeping services that eliminate administrative busywork. We offer automated reconciliations, clean monthly closes, and decision-ready dashboards.',
		painPoints: [
			'Admin busywork is expensive',
			'No real-time numbers',
			'Month-end chaos'
		],
		solutions: [
			'Automated reconciliations',
			'Clean monthly closes',
			'Decision-ready dashboards'
		],
		cta: { label: 'We do that', href: '#contact' },
		website: 'https://modernledger.co'
	},
	{
		key: 'pay',
		name: 'Modern Pay',
		tag: 'Payroll that behaves',
		summary: 'Payroll + HR compliance without the headaches.',
		description: 'Modern Pay delivers payroll and HR compliance services without the typical headaches. We provide fully managed payroll, transparent pricing, and HR compliance guardrails.',
		painPoints: [
			'Manual payroll is risky',
			'Overpaying current provider',
			'Compliance anxiety'
		],
		solutions: [
			'Fully managed payroll',
			'Transparent pricing',
			'HR compliance guardrails'
		],
		cta: { label: 'We do that', href: '#contact' },
		website: 'https://modernpay.co'
	},
	{
		key: 'consulting',
		name: 'Modern Consulting',
		tag: 'Sell + operate smart',
		summary: 'Sales, ops, and leadership tuned for the trades.',
		description: 'Modern Consulting specializes in sales, operations, and leadership optimization for service businesses. We provide training, playbooks, process design, and accountability systems.',
		painPoints: [
			'Sales team underperforming',
			'Ops are a tire fire',
			'No playbook, no KPIs'
		],
		solutions: [
			'Training + playbooks',
			'Process design',
			'Accountability systems'
		],
		cta: { label: 'We do that', href: '#contact' },
		website: 'https://modernconsulting.co'
	},
	{
		key: 'stack',
		name: 'Modern Stack',
		tag: 'Audit. Fix. Build.',
		summary: 'We audit your tech, cut waste, and build custom software that actually fits.',
		description: 'Modern Stack audits your technology stack, cuts waste, and builds custom software solutions that actually fit your business needs. We specialize in stack audits, custom apps, integrations, and AI copilots.',
		painPoints: [
			'Paying for too many tools',
			'Off‑the‑shelf doesn\'t fit',
			'Nothing talks to each other'
		],
		solutions: [
			'Stack audit + cost reduction',
			'Custom apps & integrations',
			'Automations & AI copilots'
		],
		cta: { label: 'We do that', href: '#contact' },
		website: 'https://moderntechstack.co'
	}
];
