export type Suite = {
	key: string;
	name: string;
	tag: string;
	summary: string;
	painPoints: string[];
	solutions: string[];
	cta: { label: string; href: string };
};

export const SUITE: Suite[] = [
	{
		key: 'brands',
		name: 'Modern Brands',
		tag: 'Logos, websites, brand systems',
		summary: 'Ultra-modern logos and websites. Quiet luxury, bold impact.',
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
		cta: { label: 'We do that', href: '#contact' }
	},
	{
		key: 'ledger',
		name: 'Modern Ledger',
		tag: 'Books without drama',
		summary: 'Done-for-you bookkeeping that kills busywork.',
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
		cta: { label: 'We do that', href: '#contact' }
	},
	{
		key: 'pay',
		name: 'Modern Pay',
		tag: 'Payroll that behaves',
		summary: 'Payroll + HR compliance without the headaches.',
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
		cta: { label: 'We do that', href: '#contact' }
	},
	{
		key: 'consulting',
		name: 'Modern Consulting',
		tag: 'Sell + operate smart',
		summary: 'Sales, ops, and leadership tuned for the trades.',
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
		cta: { label: 'We do that', href: '#contact' }
	},
	{
		key: 'stack',
		name: 'Modern Stack',
		tag: 'Audit. Fix. Build.',
		summary: 'We audit your tech, cut waste, and build custom software that actually fits.',
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
		cta: { label: 'We do that', href: '#contact' }
	}
];
