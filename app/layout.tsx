import type { Metadata } from 'next';
import { Fraunces, DM_Sans } from 'next/font/google';
import './globals.css';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Nuzhat Rubab Zahra | AI-Assisted Full-Stack & Vibe Coding',
  description:
    'Portfolio of Nuzhat Rubab Zahra — Vibe Coder & AI-Assisted Full-Stack Developer. React, Next.js, Cursor, Lovable. SaaS dashboards, CRM integrations, rapid prototypes.',
  openGraph: {
    title: 'Nuzhat Rubab Zahra | Vibe Coder & Full-Stack Developer',
    description: 'Portfolio: Care Property Hub, AI-Alchemist, Content Strategy Agent. Shipping production-ready foundations in days.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${dmSans.variable} scroll-smooth`}
    >
      <body className="font-sans min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
