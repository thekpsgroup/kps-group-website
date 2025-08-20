'use server';

import { headers } from 'next/headers';
import Stripe from 'stripe';
import { resolveBrand, resolvePriceId, type MBCardKey } from '@kps/config';

export async function createCheckoutSession(payload: { key: MBCardKey }) {
	const headersList = await headers();
	const host = headersList.get('host') || headersList.get('x-forwarded-host') || '';
	const brand = resolveBrand(host);

	if (brand.key !== 'modern-brands') {
		return { error: 'Forbidden', status: 403 } as const;
	}

	const key = payload?.key;
	if (!key) {
		return { error: 'Missing key', status: 400 } as const;
	}

	const priceId = resolvePriceId(key);

	const serverKey = process.env.STRIPE_SECRET_KEY || process.env.STRIPE_RESTRICTED_KEY;
	if (!serverKey) {
		return { error: 'Stripe server key not configured', status: 500 } as const;
	}

	const stripe = new Stripe(serverKey);

	try {
		const origin = headersList.get('x-url-origin') || `https://${brand.domain}`;
		const session = await stripe.checkout.sessions.create({
			mode: 'payment',
			line_items: [{ price: priceId, quantity: 1 }],
			allow_promotion_codes: true,
			success_url: `${origin}/thank-you?brand=modern-brands&session_id={CHECKOUT_SESSION_ID}`,
			cancel_url: `${origin}/pricing?brand=modern-brands`,
			metadata: { brand: 'modern-brands', pkgKey: key, oneTime: 'true' }
		});
		return { sessionId: session.id } as const;
	} catch (err: any) {
		if (err?.code === 'permission_error' || /permission/i.test(String(err?.message || ''))) {
			return { error: 'Stripe key lacks checkout.sessions.create; set STRIPE_SECRET_KEY', status: 500 } as const;
		}
		return { error: 'Failed to create checkout session', status: 500 } as const;
	}
}