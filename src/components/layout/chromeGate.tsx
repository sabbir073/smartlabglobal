"use client";

/**
 * ChromeGate — conditionally hides global Header/Footer for landing pages
 * that ship their own chrome (e.g. /shopify).
 *
 * Why this exists:
 *   The Shopify landing page (and any future campaign landing page) must have
 *   a completely different header & footer per the PRD. Rather than refactor
 *   every route into a (main) group, we gate the global chrome by pathname.
 */
import { usePathname } from "next/navigation";

const HIDDEN_PATH_PREFIXES = ["/shopify"];

export default function ChromeGate({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname() || "";
  const hideChrome = HIDDEN_PATH_PREFIXES.some((p) => pathname.startsWith(p));
  if (hideChrome) return null;
  return <>{children}</>;
}
