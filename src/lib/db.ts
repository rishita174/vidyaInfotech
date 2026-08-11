import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "@/db/schema";

const connectionString = process.env.DATABASE_URL ?? "";

/**
 * Shared server-side database client. Uses Neon's HTTP driver (serverless,
 * pooled) via Drizzle. The client is only created when DATABASE_URL is set;
 * the enquiry API returns 503 until the environment is configured.
 */
export const db =
  connectionString.length > 0
    ? drizzle(neon(connectionString), { schema })
    : null;
