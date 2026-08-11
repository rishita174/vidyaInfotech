import { Resend } from "resend";
import { site } from "@/data/site";

const apiKey = process.env.RESEND_API_KEY ?? "";

const resend = apiKey.length > 0 ? new Resend(apiKey) : null;

const FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? site.email;

interface EnquiryNotification {
  name: string;
  phone: string;
  email?: string | null;
  service?: string | null;
  message?: string | null;
}

/**
 * Sends a transactional notification to the Vidya Infotech team when a
 * website enquiry is submitted. Returns null when email is not configured.
 */
export async function sendEnquiryNotification(
  input: EnquiryNotification
): Promise<{ sent: boolean }> {
  if (!resend) {
    return { sent: false };
  }

  const serviceLabel = input.service ? ` (${input.service})` : "";

  const { error } = await resend.emails.send({
    from: `Vidya Infotech <${FROM_EMAIL}>`,
    to: site.email,
    subject: `New website enquiry${serviceLabel}`,
    text: [
      `New enquiry from the website contact form.`,
      ``,
      `Name: ${input.name}`,
      `Phone: ${input.phone}`,
      input.email ? `Email: ${input.email}` : `Email: not provided`,
      input.service ? `Service: ${input.service}` : `Service: not selected`,
      input.message ? `Message:\n${input.message}` : `Message: not provided`,
    ].join("\n"),
  });

  return { sent: !error };
}
