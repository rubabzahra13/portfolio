import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Villi AI Chat",
  description:
    "Chat with Villi, VelocTech Inc.'s AI assistant, to explore the portfolio, projects, and how we can help build your product.",
  robots: {
    index: false,
    follow: true,
    googleBot: { index: false, follow: true },
  },
  openGraph: {
    title: `Villi AI Chat | ${siteConfig.name}`,
    description:
      "Interactive AI assistant to explore VelocTech Inc. services and portfolio.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Villi AI Chat | ${siteConfig.name}`,
    description:
      "Interactive AI assistant to explore VelocTech Inc. services and portfolio.",
  },
};

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
