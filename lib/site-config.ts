/**
 * Central SEO / site identity. Set NEXT_PUBLIC_SITE_URL in production
 * (e.g. https://veloctech.com) so canonical URLs, OG tags, and sitemap are correct.
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

function parseSameAs(): string[] {
  const urls = [
    process.env.NEXT_PUBLIC_LINKEDIN_URL,
    process.env.NEXT_PUBLIC_GITHUB_URL,
  ]
    .map((u) => u?.trim())
    .filter((u): u is string => Boolean(u && u.startsWith("http")));

  return urls;
}

export const siteConfig = {
  name: "VelocTech Inc.",
  legalName: "VelocTech Inc.",
  /** Spelling variants Google may match to branded queries */
  alternateNames: [
    "VelocTech",
    "Veloc Tech Inc",
    "VelocTech Inc",
    "veloctech inc",
    "veloctech",
    "Veloc Tech",
  ],
  /** Brand-first title for homepage (matches "veloctech inc" searches) */
  defaultTitle: "VelocTech Inc. | Software Engineering Studio",
  titleTemplate: "%s | VelocTech Inc.",
  defaultDescription:
    "VelocTech Inc. is a software engineering studio in Islamabad, Pakistan. VelocTech builds production web apps, eCommerce platforms, and AI products with Next.js, React, TypeScript, and modern cloud architecture.",
  keywords: [
    "VelocTech Inc",
    "veloctech inc",
    "VelocTech",
    "veloctech",
    "Veloc Tech Inc",
    "software engineering studio",
    "web development Pakistan",
    "Next.js development",
    "React development company",
    "AI software studio",
    "full-stack engineering",
    "Villi AI",
    "custom web applications",
    "eCommerce development",
  ],
  locale: "en_US",
  email: "hello@veloctech.com",
  location: {
    city: "Islamabad",
    country: "Pakistan",
    countryCode: "PK",
  },
  twitterHandle: process.env.NEXT_PUBLIC_TWITTER_HANDLE?.replace(/^@/, ""),
  googleSiteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  sameAs: parseSameAs(),
} as const;
