export type NodeType = 'pain' | 'solution' | 'suite';
export type Industry = 'hvac' | 'electrical' | 'plumbing' | 'other';

export interface Node {
	id: string;
	type: NodeType;
	label: string;
	icon?: string;
	col: 0 | 1 | 2;
	row: number;
	ariaDesc?: string;
}

export interface Edge {
	from: string;
	to: string;
	weight?: number;
}

export interface Preset {
	id: string;
	label: string;
	pains: string[];
	industry: Industry;
}

// All unique pain points from the suite
const allPains = [
	'Brand looks outdated',
	'Website doesn\'t convert',
	'No cohesive system',
	'Admin busywork is expensive',
	'No real-time numbers',
	'Month-end chaos',
	'Manual payroll is risky',
	'Overpaying current provider',
	'Compliance anxiety',
	'Sales team underperforming',
	'Ops are a tire fire',
	'No playbook, no KPIs',
	'Paying for too many tools',
	'Off‑the‑shelf doesn\'t fit',
	'Nothing talks to each other'
];

// All unique solutions from the suite
const allSolutions = [
	'Modern brand identity',
	'Conversion-focused sites',
	'Complete brand systems',
	'Automated reconciliations',
	'Clean monthly closes',
	'Decision-ready dashboards',
	'Fully managed payroll',
	'Transparent pricing',
	'HR compliance guardrails',
	'Training + playbooks',
	'Process design',
	'Accountability systems',
	'Stack audit + cost reduction',
	'Custom apps & integrations',
	'Automations & AI copilots'
];

// Generate nodes for pains (column 0)
const painNodes: Node[] = allPains.map((pain, index) => ({
	id: `pain-${index}`,
	type: 'pain',
	label: pain,
	col: 0,
	row: index,
	ariaDesc: `Pain point: ${pain}`
}));

// Generate nodes for solutions (column 1)
const solutionNodes: Node[] = allSolutions.map((solution, index) => ({
	id: `solution-${index}`,
	type: 'solution',
	label: solution,
	col: 1,
	row: index,
	ariaDesc: `Solution: ${solution}`
}));

// Generate nodes for suites (column 2)
const suiteNodes: Node[] = [
	{ id: 'suite-brands', type: 'suite', label: 'Modern Brands', col: 2, row: 0, ariaDesc: 'Modern Brands - logos, websites, brand systems' },
	{ id: 'suite-ledger', type: 'suite', label: 'Modern Ledger', col: 2, row: 1, ariaDesc: 'Modern Ledger - books without drama' },
	{ id: 'suite-pay', type: 'suite', label: 'Modern Pay', col: 2, row: 2, ariaDesc: 'Modern Pay - payroll that behaves' },
	{ id: 'suite-consulting', type: 'suite', label: 'Modern Consulting', col: 2, row: 3, ariaDesc: 'Modern Consulting - sell + operate smart' },
	{ id: 'suite-stack', type: 'suite', label: 'Modern Stack', col: 2, row: 4, ariaDesc: 'Modern Stack - audit, fix, build' }
];

export const NODES: Node[] = [...painNodes, ...solutionNodes, ...suiteNodes];

// Generate edges based on suite relationships
export const EDGES: Edge[] = [
	// Brand-related connections
	{ from: 'pain-0', to: 'solution-0' }, // Brand looks outdated -> Modern brand identity
	{ from: 'pain-1', to: 'solution-1' }, // Website doesn't convert -> Conversion-focused sites
	{ from: 'pain-2', to: 'solution-2' }, // No cohesive system -> Complete brand systems
	{ from: 'solution-0', to: 'suite-brands' },
	{ from: 'solution-1', to: 'suite-brands' },
	{ from: 'solution-2', to: 'suite-brands' },

	// Ledger-related connections
	{ from: 'pain-3', to: 'solution-3' }, // Admin busywork -> Automated reconciliations
	{ from: 'pain-4', to: 'solution-4' }, // No real-time numbers -> Clean monthly closes
	{ from: 'pain-5', to: 'solution-5' }, // Month-end chaos -> Decision-ready dashboards
	{ from: 'solution-3', to: 'suite-ledger' },
	{ from: 'solution-4', to: 'suite-ledger' },
	{ from: 'solution-5', to: 'suite-ledger' },

	// Pay-related connections
	{ from: 'pain-6', to: 'solution-6' }, // Manual payroll -> Fully managed payroll
	{ from: 'pain-7', to: 'solution-7' }, // Overpaying provider -> Transparent pricing
	{ from: 'pain-8', to: 'solution-8' }, // Compliance anxiety -> HR compliance guardrails
	{ from: 'solution-6', to: 'suite-pay' },
	{ from: 'solution-7', to: 'suite-pay' },
	{ from: 'solution-8', to: 'suite-pay' },

	// Consulting-related connections
	{ from: 'pain-9', to: 'solution-9' }, // Sales team underperforming -> Training + playbooks
	{ from: 'pain-10', to: 'solution-10' }, // Ops are a tire fire -> Process design
	{ from: 'pain-11', to: 'solution-11' }, // No playbook, no KPIs -> Accountability systems
	{ from: 'solution-9', to: 'suite-consulting' },
	{ from: 'solution-10', to: 'suite-consulting' },
	{ from: 'solution-11', to: 'suite-consulting' },

	// Stack-related connections
	{ from: 'pain-12', to: 'solution-12' }, // Paying for too many tools -> Stack audit + cost reduction
	{ from: 'pain-13', to: 'solution-13' }, // Off-the-shelf doesn't fit -> Custom apps & integrations
	{ from: 'pain-14', to: 'solution-14' }, // Nothing talks to each other -> Automations & AI copilots
	{ from: 'solution-12', to: 'suite-stack' },
	{ from: 'solution-13', to: 'suite-stack' },
	{ from: 'solution-14', to: 'suite-stack' }
];

export const PRESETS: Preset[] = [
	{
		id: 'brand-refresh',
		label: 'Brand Refresh',
		pains: ['Brand looks outdated', 'Website doesn\'t convert', 'No cohesive system'],
		industry: 'other'
	},
	{
		id: 'books-cleanup',
		label: 'Books Cleanup',
		pains: ['Admin busywork is expensive', 'No real-time numbers', 'Month-end chaos'],
		industry: 'other'
	},
	{
		id: 'payroll-switch',
		label: 'Payroll Switch',
		pains: ['Manual payroll is risky', 'Overpaying current provider', 'Compliance anxiety'],
		industry: 'other'
	},
	{
		id: 'sales-lift',
		label: 'Sales Lift',
		pains: ['Sales team underperforming', 'No playbook, no KPIs'],
		industry: 'other'
	},
	{
		id: 'ops-overhaul',
		label: 'Ops Overhaul',
		pains: ['Ops are a tire fire', 'No playbook, no KPIs'],
		industry: 'other'
	},
	{
		id: 'stack-consolidation',
		label: 'Stack Consolidation',
		pains: ['Paying for too many tools', 'Nothing talks to each other'],
		industry: 'other'
	},
	{
		id: 'custom-build',
		label: 'Custom Build',
		pains: ['Off‑the‑shelf doesn\'t fit', 'Nothing talks to each other'],
		industry: 'other'
	}
];

export const INDUSTRY_OVERRIDES: Record<Industry, Record<string, string>> = {
	hvac: {
		'Sales team underperforming': 'Techs not selling upgrades',
		'Ops are a tire fire': 'Dispatch chaos, no scheduling',
		'No playbook, no KPIs': 'No service standards, no tracking'
	},
	electrical: {
		'Sales team underperforming': 'Estimators missing opportunities',
		'Ops are a tire fire': 'Project management nightmare',
		'No playbook, no KPIs': 'No safety protocols, no metrics'
	},
	plumbing: {
		'Sales team underperforming': 'Plumbers not upselling',
		'Ops are a tire fire': 'Emergency calls overwhelming',
		'No playbook, no KPIs': 'No quality standards, no tracking'
	},
	other: {}
};
