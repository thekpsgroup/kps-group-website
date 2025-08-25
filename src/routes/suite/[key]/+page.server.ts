import { SUITE } from '$lib/data/suite';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const suite = SUITE.find(s => s.key === params.key);
	
	if (!suite) {
		throw error(404, 'Suite not found');
	}
	
	return {
		suite,
		meta: {
			title: `${suite.name} | ${suite.tag} - The KPS Group`,
			description: suite.description,
			ogTitle: `${suite.name} | ${suite.tag}`,
			ogDescription: suite.description,
			ogUrl: `https://thekpsgroup.com/suite/${suite.key}`,
			canonical: `https://thekpsgroup.com/suite/${suite.key}`
		}
	};
};
