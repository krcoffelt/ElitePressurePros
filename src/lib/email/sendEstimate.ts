import type { EstimateLead } from "@/types/estimate";

type EmailResult = {
  messageId: string;
};

const RESEND_ENDPOINT = "https://api.resend.com/emails";

function buildEmailHtml(lead: EstimateLead): string {
  return `
    <h2>New Free Estimate Request</h2>
    <p><strong>Name:</strong> ${lead.name}</p>
    <p><strong>Phone:</strong> ${lead.phone}</p>
    <p><strong>Address:</strong> ${lead.address}</p>
    <p><strong>Service:</strong> ${lead.serviceType}</p>
    <p><strong>Project Details:</strong></p>
    <p>${lead.details.replace(/\n/g, "<br />")}</p>
  `;
}

export async function sendEstimateEmail(lead: EstimateLead): Promise<EmailResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.ESTIMATE_TO_EMAIL;
  const fromEmail = process.env.ESTIMATE_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    throw new Error("Email provider is not configured. Set RESEND_API_KEY, ESTIMATE_TO_EMAIL, ESTIMATE_FROM_EMAIL.");
  }

  const response = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      subject: `Free Estimate Request: ${lead.serviceType}`,
      html: buildEmailHtml(lead),
      reply_to: process.env.NEXT_PUBLIC_BUSINESS_EMAIL || undefined
    })
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`Email send failed: ${response.status} ${details}`);
  }

  const result = (await response.json()) as { id?: string };

  return {
    messageId: result.id || `resend-${Date.now()}`
  };
}
