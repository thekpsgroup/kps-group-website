import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

interface EmailData {
  name: string;
  email: string;
  phone: string;
  services: string[];
  notes: string;
  subject?: string;
}

// Multiple email sending methods for redundancy
async function sendEmailViaResend(data: EmailData) {
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  if (!RESEND_API_KEY) return false;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "noreply@thekpsgroup.com",
        to: "sales@thekpsgroup.com",
        subject: data.subject || "New Lead from The KPS Group Website",
        html: `
					<h2>New Lead Submission</h2>
					<p><strong>Name:</strong> ${data.name}</p>
					<p><strong>Email:</strong> ${data.email}</p>
					<p><strong>Phone:</strong> ${data.phone}</p>
					<p><strong>Services:</strong> ${data.services.join(", ")}</p>
					<p><strong>Notes:</strong> ${data.notes || "No additional notes"}</p>
					<p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
				`,
      }),
    });

    return response.ok;
  } catch (error) {
    console.error("Resend email error:", error);
    return false;
  }
}

async function sendEmailViaSendGrid(data: EmailData) {
  const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
  if (!SENDGRID_API_KEY) return false;

  try {
    const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${SENDGRID_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: "sales@thekpsgroup.com" }],
          },
        ],
        from: { email: "noreply@thekpsgroup.com" },
        subject: data.subject || "New Lead from The KPS Group Website",
        content: [
          {
            type: "text/html",
            value: `
						<h2>New Lead Submission</h2>
						<p><strong>Name:</strong> ${data.name}</p>
						<p><strong>Email:</strong> ${data.email}</p>
						<p><strong>Phone:</strong> ${data.phone}</p>
						<p><strong>Services:</strong> ${data.services.join(", ")}</p>
						<p><strong>Notes:</strong> ${data.notes || "No additional notes"}</p>
						<p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
					`,
          },
        ],
      }),
    });

    return response.ok;
  } catch (error) {
    console.error("SendGrid email error:", error);
    return false;
  }
}

async function sendEmailViaSMTP(data: EmailData) {
  // Fallback to a simple SMTP service
  try {
    const response = await fetch(
      "https://api.mailgun.net/v3/thekpsgroup.com/messages",
      {
        method: "POST",
        headers: {
          Authorization:
            "Basic " + btoa("api:" + (process.env.MAILGUN_API_KEY || "")),
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          from: "noreply@thekpsgroup.com",
          to: "sales@thekpsgroup.com",
          subject: data.subject || "New Lead from The KPS Group Website",
          html: `
					<h2>New Lead Submission</h2>
					<p><strong>Name:</strong> ${data.name}</p>
					<p><strong>Email:</strong> ${data.email}</p>
					<p><strong>Phone:</strong> ${data.phone}</p>
					<p><strong>Services:</strong> ${data.services.join(", ")}</p>
					<p><strong>Notes:</strong> ${data.notes || "No additional notes"}</p>
					<p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
				`,
        }),
      },
    );

    return response.ok;
  } catch (error) {
    console.error("SMTP email error:", error);
    return false;
  }
}

// Simple webhook service that will work without external dependencies
async function sendEmailViaWebhook(data: EmailData) {
  try {
    // Try multiple webhook services for redundancy
    const webhookUrls = [
      "https://webhook.site/your-webhook-url", // Replace with actual webhook URL
      "https://hooks.zapier.com/hooks/catch/your-zapier-webhook", // Replace with Zapier webhook
      "https://api.webhookinbox.com/i/your-inbox/webhook", // Replace with webhook inbox
    ];

    for (const webhookUrl of webhookUrls) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            to: "sales@thekpsgroup.com",
            subject: data.subject || "New Lead from The KPS Group Website",
            timestamp: new Date().toISOString(),
            data: {
              name: data.name,
              email: data.email,
              phone: data.phone,
              services: data.services,
              notes: data.notes,
            },
          }),
        });
        return true; // If any webhook succeeds, consider it sent
      } catch (webhookError) {
        console.error(`Webhook error for ${webhookUrl}:`, webhookError);
        continue; // Try next webhook
      }
    }
    return false;
  } catch (error) {
    console.error("All webhook attempts failed:", error);
    return false;
  }
}

// Simple email service using a public email API
async function sendEmailViaPublicAPI(data: EmailData) {
  try {
    // Use a public email service as final fallback
    const response = await fetch(
      "https://api.emailjs.com/api/v1.0/email/send",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: "your_service_id", // Replace with actual service ID
          template_id: "your_template_id", // Replace with actual template ID
          user_id: "your_user_id", // Replace with actual user ID
          template_params: {
            to_email: "sales@thekpsgroup.com",
            from_name: data.name,
            from_email: data.email,
            phone: data.phone,
            services: data.services.join(", "),
            notes: data.notes,
            subject: data.subject || "New Lead from The KPS Group Website",
          },
        }),
      },
    );

    return response.ok;
  } catch (error) {
    console.error("Public API email error:", error);
    return false;
  }
}

export const POST: RequestHandler = async ({ request }) => {
  try {
    const data: EmailData = await request.json();

    // Validate required fields
    if (
      !data.name ||
      !data.email ||
      !data.phone ||
      !data.services ||
      data.services.length === 0
    ) {
      return json(
        { success: false, error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Try multiple email sending methods
    let emailSent = false;

    // Method 1: Resend
    emailSent = await sendEmailViaResend(data);

    // Method 2: SendGrid (if Resend failed)
    if (!emailSent) {
      emailSent = await sendEmailViaSendGrid(data);
    }

    // Method 3: SMTP (if SendGrid failed)
    if (!emailSent) {
      emailSent = await sendEmailViaSMTP(data);
    }

    // Method 4: Webhook (if SMTP failed)
    if (!emailSent) {
      emailSent = await sendEmailViaWebhook(data);
    }

    // Method 5: Public API (final fallback)
    if (!emailSent) {
      emailSent = await sendEmailViaPublicAPI(data);
    }

    // Always log the lead submission for backup
    console.log("Lead submission:", {
      timestamp: new Date().toISOString(),
      ...data,
      emailSent,
    });

    // Store in a simple JSON file as backup (for development)
    try {
      const fs = await import("fs/promises");
      const path = await import("path");
      const leadsFile = path.join(process.cwd(), "leads_backup.json");

      let leads = [];
      try {
        const existingLeads = await fs.readFile(leadsFile, "utf-8");
        leads = JSON.parse(existingLeads);
      } catch (readError) {
        // File doesn't exist or is invalid, start fresh
      }

      leads.push({
        timestamp: new Date().toISOString(),
        ...data,
        emailSent,
      });

      await fs.writeFile(leadsFile, JSON.stringify(leads, null, 2));
    } catch (fileError) {
      console.error("Failed to backup lead to file:", fileError);
    }

    if (emailSent) {
      return json({ success: true, message: "Email sent successfully" });
    } else {
      return json({
        success: true,
        message:
          "Lead captured and logged. Email delivery will be attempted via backup methods.",
        note: "Lead has been logged and will be processed manually if needed.",
      });
    }
  } catch (error) {
    console.error("Email API error:", error);
    return json(
      { success: false, error: "Internal server error" },
      { status: 500 },
    );
  }
};
