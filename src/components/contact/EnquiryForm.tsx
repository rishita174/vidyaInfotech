"use client";

import { useState } from "react";
import { Phone } from "lucide-react";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { whatsappLink } from "@/lib/contact-links";
import { CTAButton } from "@/components/shared/CTAButton";

interface EnquiryFormProps {
  defaultService?: string;
}

type SubmitStatus = "idle" | "submitting" | "success" | "error";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/";
const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID ?? "";

/**
 * Enquiry form wired to a Formspree form (free tier).
 *
 * The form only submits when a Form ID is provided via the
 * `NEXT_PUBLIC_FORMSPREE_FORM_ID` environment variable (see `.env.example`).
 * Without one the form stays inert and shows a notice — Call / WhatsApp
 * remain available as fallback actions in every state.
 */
export function EnquiryForm({ defaultService }: EnquiryFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(defaultService ?? "");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const notConfigured = formId.trim().length === 0;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (notConfigured) {
      setStatus("idle");
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch(`${FORMSPREE_ENDPOINT}${formId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          email,
          service,
          message,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setName("");
        setPhone("");
        setEmail("");
        setService("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-espresso-950">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="w-full rounded-md border border-slate-300 px-3 py-2.5 text-slate-900 focus:border-espresso-500 focus:outline-none focus:ring-2 focus:ring-espresso-200"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium text-espresso-950">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            className="w-full rounded-md border border-slate-300 px-3 py-2.5 text-slate-900 focus:border-espresso-500 focus:outline-none focus:ring-2 focus:ring-espresso-200"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-espresso-950">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full rounded-md border border-slate-300 px-3 py-2.5 text-slate-900 focus:border-espresso-500 focus:outline-none focus:ring-2 focus:ring-espresso-200"
          />
        </div>
        <div>
          <label htmlFor="service" className="mb-1 block text-sm font-medium text-espresso-950">
            Service
          </label>
          <select
            id="service"
            name="service"
            value={service}
            onChange={(event) => setService(event.target.value)}
            className="w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-slate-900 focus:border-espresso-500 focus:outline-none focus:ring-2 focus:ring-espresso-200"
          >
            <option value="">Select a service</option>
            {services.map((item) => (
              <option key={item.slug} value={item.slug}>
                {item.title}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="message" className="mb-1 block text-sm font-medium text-espresso-950">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className="w-full rounded-md border border-slate-300 px-3 py-2.5 text-slate-900 focus:border-espresso-500 focus:outline-none focus:ring-2 focus:ring-espresso-200"
          />
        </div>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-rosewood-700 px-5 py-2.5 text-sm font-semibold text-cream-50 transition-colors hover:bg-rosewood-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rosewood-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? "Submitting..." : "Submit Enquiry"}
        </button>
      </form>

      {notConfigured ? (
        <p
          role="status"
          className="mt-4 rounded-md border border-amber-300 bg-amber-50 p-3 text-sm text-amber-800"
        >
          Online form submission is not yet connected. Please call or message us
          on WhatsApp instead.
        </p>
      ) : null}

      {status === "success" ? (
        <p
          role="status"
          className="mt-4 rounded-md border border-emerald-300 bg-emerald-50 p-3 text-sm text-emerald-800"
        >
          Thank you — your enquiry has been sent. The Vidya Infotech team will
          get back to you shortly.
        </p>
      ) : null}

      {status === "error" ? (
        <p
          role="status"
          className="mt-4 rounded-md border border-red-300 bg-red-50 p-3 text-sm text-red-800"
        >
          Something went wrong and your enquiry could not be sent. Please try
          again, or call or message us on WhatsApp instead.
        </p>
      ) : null}

      <div className="mt-6 flex flex-wrap justify-center gap-3 border-t border-slate-200 pt-6">
        <CTAButton href={site.phoneHref} variant="outline">
          <Phone aria-hidden="true" className="h-4 w-4" />
          Call {site.phone}
        </CTAButton>
        <CTAButton href={whatsappLink()}>WhatsApp Enquiry</CTAButton>
      </div>
    </div>
  );
}
