import type { RequestHandler } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
	try {
		const body = await request.json();
		const name: string | undefined = body.name ?? body.Name;
		const email: string | undefined = body.email ?? body.Email;
		const phone: string | undefined = body.phone ?? body['Phone Number'];
		const servicesInput = body.services ?? body['Service(s) interested in?'];

		if (!name || !email) {
			return json({ error: 'Name and email are required' }, { status: 400 });
		}

		// Normalize services to comma-separated string
		let servicesStr = '';
		if (Array.isArray(servicesInput)) {
			servicesStr = servicesInput.join(', ');
		} else if (typeof servicesInput === 'string') {
			servicesStr = servicesInput;
		}

		// Build Router.so payload with exact schema keys
		const routerPayload: Record<string, string> = {
			Name: name,
			'Phone Number': phone ?? '',
			Email: email,
			'Service(s) interested in?': servicesStr
		};

		const endpoint = 'https://app.router.so/api/endpoints/wfk5gdct';
		const apiKey = process.env.ROUTER_API_KEY;

		if (!apiKey) {
			// Fallback: log and succeed to avoid blocking leads during setup
			console.log('Lead (no ROUTER_API_KEY set):', routerPayload);
			return json({ success: true, note: 'Router API key not configured. Lead logged server-side.' });
		}

		const res = await fetch(endpoint, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${apiKey}`
			},
			body: JSON.stringify(routerPayload)
		});

		const text = await res.text();
		return new Response(text, { status: res.status });
	} catch (error) {
		console.error('Lead submission error:', error);
		return json({ error: 'Failed to submit lead' }, { status: 500 });
	}
};
