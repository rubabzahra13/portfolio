import { getAllJsonLd } from "@/lib/seo";
import { resolveSiteUrl } from "@/lib/resolve-site-url";

export function JsonLd() {
  const url = resolveSiteUrl();
  const payload = getAllJsonLd(url);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
