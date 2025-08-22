import { writable } from 'svelte/store';
import type { Industry } from '$lib/data/roadmap';

export const selectedPains = writable<string[]>([]);
export const industry = writable<Industry>('hvac');
export const activePreset = writable<string | null>(null);
export const focusedNode = writable<string | null>(null);
export const suiteDrawerOpen = writable<boolean>(false);

// Helper function to get pain node IDs from pain labels
export function getPainNodeIds(painLabels: string[]): string[] {
	return painLabels.map((label, index) => `pain-${index}`);
}

// Helper function to get solution node IDs that connect to selected pains
export function getConnectedSolutions(painLabels: string[]): string[] {
	const painToSolutionMap: Record<string, string[]> = {
		'Brand looks outdated': ['solution-0'],
		'Website doesn\'t convert': ['solution-1'],
		'No cohesive system': ['solution-2'],
		'Admin busywork is expensive': ['solution-3'],
		'No real-time numbers': ['solution-4'],
		'Month-end chaos': ['solution-5'],
		'Manual payroll is risky': ['solution-6'],
		'Overpaying current provider': ['solution-7'],
		'Compliance anxiety': ['solution-8'],
		'Sales team underperforming': ['solution-9'],
		'Ops are a tire fire': ['solution-10'],
		'No playbook, no KPIs': ['solution-11'],
		'Paying for too many tools': ['solution-12'],
		'Off‑the‑shelf doesn\'t fit': ['solution-13'],
		'Nothing talks to each other': ['solution-14']
	};

	const solutionIds: string[] = [];
	painLabels.forEach(pain => {
		const solutions = painToSolutionMap[pain] || [];
		solutionIds.push(...solutions);
	});
	return [...new Set(solutionIds)];
}

// Helper function to get suite node IDs that connect to selected solutions
export function getConnectedSuites(solutionIds: string[]): string[] {
	const solutionToSuiteMap: Record<string, string[]> = {
		'solution-0': ['suite-brands'],
		'solution-1': ['suite-brands'],
		'solution-2': ['suite-brands'],
		'solution-3': ['suite-ledger'],
		'solution-4': ['suite-ledger'],
		'solution-5': ['suite-ledger'],
		'solution-6': ['suite-pay'],
		'solution-7': ['suite-pay'],
		'solution-8': ['suite-pay'],
		'solution-9': ['suite-consulting'],
		'solution-10': ['suite-consulting'],
		'solution-11': ['suite-consulting'],
		'solution-12': ['suite-stack'],
		'solution-13': ['suite-stack'],
		'solution-14': ['suite-stack']
	};

	const suiteIds: string[] = [];
	solutionIds.forEach(solutionId => {
		const suites = solutionToSuiteMap[solutionId] || [];
		suiteIds.push(...suites);
	});
	return [...new Set(suiteIds)];
}
