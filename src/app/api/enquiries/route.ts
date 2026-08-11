import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";
import { enquiries } from "@/db/schema";
import { sendEnquiryNotification } from "@/lib/mail";

export const dynamic = "force-dynamic";

const enquirySchema = z.object({
  name: z.string().trim().min(1).max(100),
  phone: z.string().trim().min(6).max(20),
  email: z
    .union([z.literal(""), z.email()])
    .optional()
    .transform((value) => (value ? value : null)),
  service: z
    .union([z.literal(""), z.string().trim().max(100)])
    .optional()
    .transform((value) => (value ? value : null)),
  message: z
    .union([z.literal(""), z.string().trim().max(2000)])
    .optional()
    .transform((value) => (value ? value : null)),
});

/**
 * Creates an enquiry. Free-tier friendly: persists to Neon Postgres and sends
 * a transactional notification via Resend. Returns 503 until DATABASE_URL /
 * RESEND_API_KEY are configured so the form never hangs or double-submits.
 */
export async function POST(request: Request) {
  if (!db) {
    return NextResponse.json(
      { error: "Enquiry storage is not configured." },
      { status: 503 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }

  const parsed = enquirySchema.safeParse(body);
  if (!parsed.success) {
    const detail = parsed.error.issues[0]?.message ?? "Invalid input.";
    return NextResponse.json({ error: detail }, { status: 400 });
  }

  const { name, phone, email, service, message } = parsed.data;

  try {
    await db.insert(enquiries).values({
      name,
      phone,
      email,
      service,
      message,
    });
  } catch {
    return NextResponse.json(
      { error: "Could not save your enquiry. Please try again." },
      { status: 500 }
    );
  }

  try {
    await sendEnquiryNotification({ name, phone, email, service, message });
  } catch {
    // Email failure must not fail the enquiry — the row is already saved.
  }

  return NextResponse.json({ ok: true });
}
