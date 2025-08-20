'use server';

import { headers } from 'next/headers';
import { resolveBrand, getMessageTypes } from '@kps/config';
import { sendLeadEmail } from '@kps/email';

export async function sendLead(formData: FormData) {
  const headersList = await headers();
  const brandKey = headersList.get('x-brand') || 'kps-group';
  const brand = resolveBrand(undefined, brandKey as any);

  try {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const company = formData.get('company') as string;
    const services = formData.get('services') as string;
    const budget = formData.get('budget') as string;
    const timeline = formData.get('timeline') as string;
    const consentChecked = formData.get('consentChecked') === 'true';
    const newsletter = formData.get('newsletter') === 'true';

    if (!consentChecked) {
      throw new Error('SMS consent is required');
    }

    // Log the lead data
    console.log('Lead submission:', {
      name,
      email,
      phone,
      company,
      services,
      budget,
      timeline,
      brandKey: brand.key,
      consentChecked,
      newsletter,
      timestamp: new Date().toISOString()
    });

    // Send email to sales@thekpsgroup.com
    await sendLeadEmail({
      name,
      email,
      phone: phone || 'Not provided',
      services: `${services}\n\nCompany: ${company || 'Not provided'}\nBudget: ${budget || 'Not specified'}\nTimeline: ${timeline || 'Not specified'}\nNewsletter: ${newsletter ? 'Yes' : 'No'}`,
      brandKey: brand.key,
      consentChecked,
      consentText: 'I agree to be contacted about my project. We respect your privacy and will never share your information.',
      privacyUrl: `https://${brand.domain}/privacy`,
      typesOfMessages: 'Email and phone calls',
      requestUrl: `https://${brand.domain}/contact`
    });

    return { success: true, redirect: '/thank-you' };
  } catch (error) {
    console.error('Lead submission error:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}