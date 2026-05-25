import { siteConfig } from "@/lib/site-config";
import { resolveSiteUrl } from "@/lib/resolve-site-url";

export function JsonLd() {
  const url = resolveSiteUrl();

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
