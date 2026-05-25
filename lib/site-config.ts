/**
 * Central SEO / site identity. Set NEXT_PUBLIC_SITE_URL in production
 * (e.g. https://yourdomain.com) so canonical URLs, OG tags, and sitemap are correct.
 */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) {
    return explicit.replace(/\/$/, "");
  }
  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) {
    const host = vercel.replace(/^https?:\/\//, "");
    return `https://${host}`;
  }
  /* Default dev origin; align with `npm run dev` port in package.json */
  return "http://localhost:3050";
}

export const siteConfig = {
  name: "VelocTech Inc.",
  /** Primary keyword-focused title for the homepage */
  defaultTitle: "VelocTech Inc. | Software Engineering Studio & Portfolio",
  titleTemplate: "%s | VelocTech Inc.",
  defaultDescription:
    "VelocTech Inc. is an AI-powered software engineering studio. We ship production-ready web apps with Next.js, React, and modern cloud architecture—portfolio, projects, and contact.",
  /** Comma-separated themes for meta keywords (legacy crawlers only; harmless) */
  keywords: [
    "software engineering studio",
    "web development portfolio",
    "Next.js developer",
    "React development",
    "AI-powered development",
    "full-stack engineering",
    "VelocTech Inc.",
    "Villi AI",
    "custom web applications",
  ],
  locale: "en_US",
  /** Optional: @handle without @ */
  twitterHandle: process.env.NEXT_PUBLIC_TWITTER_HANDLE?.replace(/^@/, ""),
  /** Optional Google Search Console */
  googleSiteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
} as const;
