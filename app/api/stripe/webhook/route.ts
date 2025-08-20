import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
	const sig = req.headers.get('stripe-signature');
	const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
	const serverKey = process.env.STRIPE_SECRET_KEY || process.env.STRIPE_RESTRICTED_KEY;

	if (!sig || !webhookSecret || !serverKey) {
		return new NextResponse('Unauthorized', { status: 401 });
	}

	const stripe = new Stripe(serverKey);

	const rawBody = await req.text();
	let event: Stripe.Event;
	try {
		event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);
	} catch (err) {
		return new NextResponse('Invalid signature', { status: 400 });
	}

	switch (event.type) {
		case 'checkout.session.completed': {
			const session = event.data.object as Stripe.Checkout.Session;
			console.log('stripe_event', { type: event.type, id: event.id });
			try {
				const to = (session.customer_details?.email || '').trim();
				if (to && process.env.RESEND_API_KEY) {
					const { Resend } = await import('resend');
					const resend = new Resend(process.env.RESEND_API_KEY);
					await resend.emails.send({
						from: process.env.EMAIL_FROM || 'sales@thekpsgroup.com',
						to: [to, 'sales@thekpsgroup.com'],
						subject: 'Modern Brands — Order Confirmation',
						html: `<p>Thank you! Your order is confirmed.</p><p>Ref: ${session.id}</p>`,
						text: `Thank you! Your order is confirmed. Ref: ${session.id}`
					});
				}
			} catch {}
			break;
		}
		default: {
			console.log('stripe_event', { type: event.type, id: event.id });
		}
	}

	return NextResponse.json({ received: true });
}