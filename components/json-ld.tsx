import { getSiteUrl, siteConfig } from "@/lib/site-config";

export function JsonLd() {
  const url = getSiteUrl();

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url,
    description: siteConfig.defaultDescription,
    logo: `${url}/logo.svg`,
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url,
    description: siteConfig.defaultDescription,
    publisher: { "@type": "Organization", name: siteConfig.name },
    inLanguage: "en-US",
  };

  const payload = [organization, website];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
