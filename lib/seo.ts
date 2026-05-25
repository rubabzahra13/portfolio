import { projects } from "@/lib/data";
import { siteConfig, getSiteUrl } from "@/lib/site-config";

export function getOrganizationJsonLd(siteUrl: string) {
  const orgId = `${siteUrl}/#organization`;

  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": orgId,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    alternateName: [...siteConfig.alternateNames],
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/favicon.png`,
    },
    image: `${siteUrl}/favicon.png`,
    description: siteConfig.defaultDescription,
    email: siteConfig.email,
    areaServed: "Worldwide",
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location.city,
      addressCountry: siteConfig.location.countryCode,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: siteConfig.email,
      availableLanguage: ["English"],
    },
    knowsAbout: [
      "Software engineering",
      "Web development",
      "Next.js",
      "React",
      "TypeScript",
      "Artificial intelligence",
      "eCommerce development",
    ],
    ...(siteConfig.sameAs.length > 0 ? { sameAs: siteConfig.sameAs } : {}),
  };
}

export function getWebSiteJsonLd(siteUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: siteConfig.name,
    alternateName: [...siteConfig.alternateNames],
    url: siteUrl,
    description: siteConfig.defaultDescription,
    inLanguage: "en-US",
    publisher: { "@id": `${siteUrl}/#organization` },
  };
}

export function getWebPageJsonLd(siteUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteUrl}/#webpage`,
    url: siteUrl,
    name: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": `${siteUrl}/#organization` },
    inLanguage: "en-US",
  };
}

export function getProjectsItemListJsonLd(siteUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "VelocTech Inc. portfolio projects",
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: project.title,
      description: project.description,
      url: project.liveUrl.startsWith("http") ? project.liveUrl : siteUrl,
    })),
  };
}

export function getAllJsonLd(siteUrl: string = getSiteUrl()) {
  return [
    getOrganizationJsonLd(siteUrl),
    getWebSiteJsonLd(siteUrl),
    getWebPageJsonLd(siteUrl),
    getProjectsItemListJsonLd(siteUrl),
  ];
}
