import { headers } from "next/headers";
import { getSiteUrl } from "@/lib/site-config";

/**
 * Canonical origin for the current request (dev-safe when PORT ≠ 3000).
 * Falls back to getSiteUrl() during prerender / when headers are unavailable.
 */
export function resolveSiteUrl(): string {
  try {
    const h = headers();
    const host = h.get("x-forwarded-host")?.split(",")[0]?.trim() || h.get("host");
    if (host) {
      const forwarded = h.get("x-forwarded-proto")?.split(",")[0]?.trim();
      const proto =
        forwarded ?? (host.startsWith("localhost") || host.startsWith("127.") ? "http" : "https");
      return `${proto}://${host}`;
    }
  } catch {
    /* headers() unavailable outside a request */
  }
  return getSiteUrl();
}
