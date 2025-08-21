import { json } from '@sveltejs/kit';
import Stripe from 'stripe';

// Only initialize Stripe if we have the secret key
const stripe = process.env.STRIPE_SECRET_KEY ? new Stripe(process.env.STRIPE_SECRET_KEY) : null;
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || 'whsec_xSXjuWrVMSZ0llmZTSXGcMeAYlklWEXO';

export async function POST({ request }) {
    // Return early if Stripe is not configured
    if (!stripe) {
        console.warn('Stripe not configured - webhook disabled');
        return json({ error: 'Stripe not configured' }, { status: 503 });
    }

    const body = await request.text();
    const signature = request.headers.get('stripe-signature');

    let event;

    try {
        event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (err) {
        console.error('Webhook signature verification failed:', err.message);
        return json({ error: 'Webhook signature verification failed' }, { status: 400 });
    }

    console.log('Received webhook event:', event.type);

    switch (event.type) {
        case 'checkout.session.completed':
            const session = event.data.object;
            console.log('Payment completed for session:', session.id);
            
            // Send notification to sales@thekpsgroup.com
            // You can integrate with your email service here
            console.log('Customer email:', session.customer_details?.email);
            console.log('Amount paid:', session.amount_total);
            console.log('Currency:', session.currency);
            break;
        
        case 'payment_intent.succeeded':
            const paymentIntent = event.data.object;
            console.log('Payment intent succeeded:', paymentIntent.id);
            break;

        case 'invoice.payment_succeeded':
            const invoice = event.data.object;
            console.log('Invoice payment succeeded:', invoice.id);
            break;

        default:
            console.log(`Unhandled event type: ${event.type}`);
    }

    return json({ received: true });
}
