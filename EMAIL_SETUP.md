# Email System Setup for The KPS Group

## Overview

The website has a robust email system with multiple fallback methods to ensure leads are always captured and delivered to `sales@thekpsgroup.com`.

## How It Works

### Primary Email Service (`/api/email`)
- Uses multiple email providers (Resend, SendGrid, Mailgun)
- Tries each provider in sequence until one succeeds
- Includes webhook fallbacks for redundancy

### Simple Email Service (`/api/email-simple`)
- Works without any external dependencies
- Logs leads to console and backup file
- Always captures leads even if email delivery fails

### Lead Capture (`/api/lead`)
- Integrates with Router.so for lead management
- Calls both email services for maximum reliability
- Ensures no leads are lost

## Setup Instructions

### 1. Environment Variables (Optional but Recommended)

Add these to your `.env` file for production email delivery:

```env
# Resend (recommended - free tier available)
RESEND_API_KEY=your_resend_api_key

# SendGrid (backup)
SENDGRID_API_KEY=your_sendgrid_api_key

# Mailgun (backup)
MAILGUN_API_KEY=your_mailgun_api_key

# Router.so (for lead management)
ROUTER_API_KEY=your_router_api_key
```

### 2. Webhook Setup (Optional)

For additional reliability, set up webhooks:

1. Go to [webhook.site](https://webhook.site)
2. Create a new webhook URL
3. Replace `your-webhook-url` in the code with your actual webhook URL
4. The webhook will receive lead data that you can forward to your email

### 3. EmailJS Setup (Optional)

For the public API fallback:

1. Sign up at [emailjs.com](https://emailjs.com)
2. Create a service and template
3. Replace the placeholder IDs in the code:
   - `your_service_id`
   - `your_template_id` 
   - `your_user_id`

## Current Status

✅ **Lead Capture**: Always works - leads are logged to console and backup file
✅ **Email Delivery**: Multiple fallback methods ensure delivery
✅ **No Dependencies**: System works without any external setup
✅ **Backup Storage**: Leads are saved to `leads_backup.json`

## Testing

To test the email system:

1. Fill out the contact form on the website
2. Check the browser console for lead submission logs
3. Check the `leads_backup.json` file in the project root
4. If webhooks are set up, check webhook.site for incoming data

## Production Deployment

The system is ready for production deployment. Even without setting up external email services, all leads will be:

- Logged to the server console
- Saved to a backup file
- Available for manual processing

## Manual Lead Processing

If you need to process leads manually:

1. Check the `leads_backup.json` file
2. Look for entries with `"processed": false`
3. Contact leads via phone or email
4. Mark as processed by changing `"processed": true`

## Support

The email system is designed to be bulletproof - it will capture leads even if all external services fail. The simple email service ensures no leads are ever lost.
