import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/contact-links";

/**
 * Floating WhatsApp button — desktop/tablet only.
 * Hidden on mobile so it never competes with the sticky mobile CTA bar.
 */
export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-colors hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 lg:flex"
    >
      <MessageCircle aria-hidden="true" className="h-7 w-7" />
    </a>
  );
}
