import type { Config } from '@sveltejs/adapter-vercel';

export const config: Config = {
	isr: {
		expiration: 1800, // 30 minute cache for pricing page
		allowQuery: ['utm_source', 'utm_medium', 'utm_campaign']
	}
};
