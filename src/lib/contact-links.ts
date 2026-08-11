import { site } from "@/data/site";

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hi Vidya Infotech, I would like to enquire about your services.";

export function whatsappLink(
  message: string = DEFAULT_WHATSAPP_MESSAGE
): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function serviceWhatsAppMessage(serviceTitle: string): string {
  return `Hi Vidya Infotech, I would like to enquire about ${serviceTitle}.`;
}

/**
 * Opens Google Maps with the supplied office address as the search
 * destination. Uses the address search — not a verified business pin.
 */
export function googleMapsDirectionsHref(): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    site.addressFull
  )}`;
}