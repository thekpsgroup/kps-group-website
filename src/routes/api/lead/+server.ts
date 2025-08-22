import type { RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request, fetch, url }) => {
	try {
		const body = await request.json();
		
		// Validate required fields
		if (!body.name || !body.email || !body.phone || !body.services || body.services.length === 0) {
			return new Response(JSON.stringify({ error: 'Missing required fields' }), {
				status: 400,
				headers: { 'Content-Type': 'application/json' }
			});
		}
		
		// Router.so endpoint
		const endpoint = 'https://app.router.so/api/endpoints/wfk5gdct';
		
		// Prepare the payload for Router.so
		const payload = {
			name: body.name,
			email: body.email,
			phone: body.phone,
			services: body.services.join(', '),
			notes: body.notes || '',
			source: 'KPS Group Website',
			timestamp: new Date().toISOString()
		};
		
		const res = await fetch(endpoint, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${process.env.ROUTER_API_KEY ?? ''}`
			},
			body: JSON.stringify(payload)
		});
		
		if (!res.ok) {
			console.error('Router.so API error:', res.status, res.statusText);
			return new Response(JSON.stringify({ error: 'Failed to submit lead' }), {
				status: 500,
				headers: { 'Content-Type': 'application/json' }
			});
		}
		
		const responseText = await res.text();
		
		return new Response(responseText, {
			status: res.status,
			headers: { 'Content-Type': 'application/json' }
		});
		
	} catch (error) {
		console.error('Lead submission error:', error);
		return new Response(JSON.stringify({ error: 'Internal server error' }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' }
		});
	}
};
