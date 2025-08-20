'use server';

import { z } from 'zod';

// Validation schema for lead submission
const LeadSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  source: z.string().optional(),
  brand: z.string().optional(),
});

export type LeadData = z.infer<typeof LeadSchema>;

// Simple lead notification
async function sendEmail(data: LeadData) {
  const leadInfo = {
    name: data.name,
    email: data.email,
    phone: data.phone || 'Not provided',
    company: data.company || 'Not provided',
    message: data.message,
    source: data.source || 'Website',
    brand: data.brand || 'KPS Group',
    timestamp: new Date().toISOString()
  };

  // Always log the lead submission
  console.log('🎯 NEW LEAD SUBMISSION:', JSON.stringify(leadInfo, null, 2));
  
  // Option 1: Send to webhook (you can set up a simple webhook to receive leads)
  try {
    // You can replace this URL with your own webhook endpoint
    const webhookUrl = process.env.LEAD_WEBHOOK_URL || 'https://webhook.site/e0a1bda3-6f05-4ac9-88b5-71a6cf3cfe15';
    
    if (webhookUrl !== 'https://webhook.site/your-unique-url') {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(leadInfo)
      });
      console.log('✅ Lead sent to webhook');
    }
  } catch (error) {
    console.log('Webhook not configured or failed');
  }

  // Option 2: Send to Discord webhook (if you want instant notifications)
  try {
    const discordWebhook = process.env.DISCORD_WEBHOOK_URL;
    if (discordWebhook) {
      const discordMessage = {
        embeds: [{
          title: '🎯 New Lead from KPS Website',
          color: 0x00ff00,
          fields: [
            { name: 'Name', value: data.name, inline: true },
            { name: 'Email', value: data.email, inline: true },
            { name: 'Phone', value: data.phone || 'Not provided', inline: true },
            { name: 'Company', value: data.company || 'Not provided', inline: true },
            { name: 'Brand', value: data.brand || 'KPS Group', inline: true },
            { name: 'Source', value: data.source || 'Website', inline: true },
            { name: 'Message', value: data.message, inline: false }
          ],
          timestamp: new Date().toISOString()
        }]
      };

      await fetch(discordWebhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(discordMessage)
      });
      console.log('✅ Lead sent to Discord');
    }
  } catch (error) {
    console.log('Discord webhook not configured or failed');
  }

  // Send email directly to your inbox using Resend API
  try {
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      const emailContent = `New Lead from KPS Website

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || 'Not provided'}
Company: ${data.company || 'Not provided'}
Message: ${data.message}
Source: ${data.source || 'Website'}
Brand: ${data.brand || 'KPS Group'}
Timestamp: ${new Date().toLocaleString()}

---
This lead was submitted from the KPS website.`.trim();

      const resendResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: 'KPS Website <noreply@thekpsgroup.com>',
          to: ['sales@thekpsgroup.com'], // Change this to your email address
          subject: `🎯 New Lead: ${data.name} - ${data.company || 'No Company'}`,
          text: emailContent,
          html: `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; }
        .header { background: #1e3a8a; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { padding: 20px; background: #f9fafb; border: 1px solid #e5e7eb; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #374151; }
        .value { color: #111827; }
        .message-box { background: white; padding: 15px; border-radius: 6px; border-left: 4px solid #1e3a8a; margin-top: 10px; }
        .footer { margin-top: 20px; padding-top: 15px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280; }
    </style>
</head>
<body>
    <div class="header">
        <h1>🎯 New Lead from KPS Website</h1>
    </div>
    <div class="content">
        <div class="field">
            <div class="label">Name:</div>
            <div class="value">${data.name}</div>
        </div>
        <div class="field">
            <div class="label">Email:</div>
            <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
        </div>
        <div class="field">
            <div class="label">Phone:</div>
            <div class="value">${data.phone || 'Not provided'}</div>
        </div>
        <div class="field">
            <div class="label">Company:</div>
            <div class="value">${data.company || 'Not provided'}</div>
        </div>
        <div class="field">
            <div class="label">Source:</div>
            <div class="value">${data.source || 'Website'}</div>
        </div>
        <div class="field">
            <div class="label">Brand:</div>
            <div class="value">${data.brand || 'KPS Group'}</div>
        </div>
        <div class="field">
            <div class="label">Message:</div>
            <div class="message-box">${data.message.replace(/\n/g, '<br>')}</div>
        </div>
        <div class="footer">
            This lead was submitted from the KPS website at ${new Date().toLocaleString()}
        </div>
    </div>
</body>
</html>`
        })
      });

      if (resendResponse.ok) {
        console.log('✅ Lead sent via Resend API');
      } else {
        const errorData = await resendResponse.text();
        console.log('Resend API failed:', errorData);
      }
    } else {
      console.log('RESEND_API_KEY not found in environment variables');
    }
  } catch (error) {
    console.log('Resend API failed:', error instanceof Error ? error.message : String(error));
  }

  return true;
}

export async function submitLead(formData: FormData) {
  try {
    // Parse and validate the form data
    const rawData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string || undefined,
      company: formData.get('company') as string || undefined,
      message: formData.get('message') as string,
      source: formData.get('source') as string || undefined,
      brand: formData.get('brand') as string || undefined,
    };

    const validatedData = LeadSchema.parse(rawData);

    // Send the email
    await sendEmail(validatedData);

    return {
      success: true,
      message: 'Thank you! Your message has been sent successfully.',
    };
  } catch (error) {
    console.error('Lead submission error:', error);
    
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: 'Please check your information and try again.',
        errors: error.errors,
      };
    }

    return {
      success: false,
      message: 'Sorry, there was an error sending your message. Please try again or contact us directly.',
    };
  }
}

// Alternative function for JSON data
export async function submitLeadJSON(data: LeadData) {
  try {
    const validatedData = LeadSchema.parse(data);
    await sendEmail(validatedData);

    return {
      success: true,
      message: 'Thank you! Your message has been sent successfully.',
    };
  } catch (error) {
    console.error('Lead submission error:', error);
    
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: 'Please check your information and try again.',
        errors: error.errors,
      };
    }

    return {
      success: false,
      message: 'Sorry, there was an error sending your message. Please try again or contact us directly.',
    };
  }
}
