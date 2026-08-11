/**
 * "Office Plumbing Service" already ends in "Service", so no "Services"
 * suffix is appended — titles and headings stay grammatically correct.
 */
export function servicePageLabel(title: string): string {
  return /[ ]service$/i.test(title) ? title : `${title} Services`;
}
