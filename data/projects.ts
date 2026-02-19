import type { ProjectDetailData } from '@/components/ProjectDetail';

export const PROJECTS_FEATURED: (ProjectDetailData & { tags: string[] })[] = [
  {
    id: 'care-property-hub',
    name: 'Care Property Hub',
    tagline: 'UK property management platform — TypeScript, React, Express.js, PostgreSQL (Supabase), AWS',
    description: 'Full-stack matching platform connecting UK care providers with landlords. Built in 11 days with Cursor; delivered as an MVP foundation engineers can scale and secure.',
    points: [
      'Maps, documents, bookings, and client/admin dashboards.',
      'Role-based auth, JWT sessions, and Row Level Security (RLS) for secure access control.',
      'Integrated GoHighLevel (GHL) CRM + webhooks and event-driven triggers for user notifications and operational workflows.',
      'Deployed on AWS Amplify + App Runner with CI/CD; production-ready foundation for future scaling.',
    ],
    tech: ['TypeScript', 'React', 'Express.js', 'PostgreSQL', 'Supabase', 'GHL', 'AWS Amplify', 'App Runner'],
    links: [
      { label: 'Live App', href: 'https://app.carepropertyhub.co.uk/' },
      { label: 'Admin Dashboard', href: 'https://admin.carepropertyhub.co.uk/' },
    ],
    screenshotsCaption: 'Client (landlord / care provider) and admin dashboards from Care Property Hub.',
    images: [
      { src: '/images/carepropertyhub/screencapture-app-carepropertyhub-co-uk-dashboard-2026-02-19-09_22_51.png', alt: 'Care Property Hub — app dashboard' },
      { src: '/images/carepropertyhub/screencapture-app-carepropertyhub-co-uk-dashboard-2026-02-19-09_25_48.png', alt: 'Care Property Hub — app dashboard' },
      { src: '/images/carepropertyhub/screencapture-app-carepropertyhub-co-uk-dashboard-2026-02-19-09_26_28.png', alt: 'Care Property Hub — app dashboard' },
      { src: '/images/carepropertyhub/screencapture-app-carepropertyhub-co-uk-dashboard-2026-02-19-09_26_55.png', alt: 'Care Property Hub — app dashboard' },
      { src: '/images/carepropertyhub/screencapture-app-carepropertyhub-co-uk-landlord-dashboard-2026-02-19-09_28_12.png', alt: 'Care Property Hub — landlord / care provider dashboard' },
      { src: '/images/carepropertyhub/screencapture-app-carepropertyhub-co-uk-landlord-dashboard-2026-02-19-09_28_37.png', alt: 'Care Property Hub — landlord / care provider dashboard' },
      { src: '/images/carepropertyhub/screencapture-app-carepropertyhub-co-uk-landlord-dashboard-2026-02-19-09_30_11.png', alt: 'Care Property Hub — landlord / care provider dashboard' },
      { src: '/images/carepropertyhub/screencapture-app-carepropertyhub-co-uk-landlord-dashboard-2026-02-19-09_32_45.png', alt: 'Care Property Hub — landlord / care provider dashboard' },
      { src: '/images/carepropertyhub/landlord-dashboard.png', alt: 'Care Property Hub — landlord / care provider dashboard' },
      { src: '/images/carepropertyhub/screencapture-admin-carepropertyhub-co-uk-dashboard-2026-02-19-09_35_00.png', alt: 'Care Property Hub — admin dashboard' },
      { src: '/images/carepropertyhub/screenshot-cph-1.png', alt: 'Care Property Hub — client or admin dashboard' },
      { src: '/images/carepropertyhub/screenshot-cph-2.png', alt: 'Care Property Hub — client or admin dashboard' },
      { src: '/images/carepropertyhub/screenshot-cph-3.png', alt: 'Care Property Hub — client or admin dashboard' },
      { src: '/images/carepropertyhub/screenshot-cph-4.png', alt: 'Care Property Hub — client or admin dashboard' },
      { src: '/images/carepropertyhub/screenshot-cph-5.png', alt: 'Care Property Hub — client or admin dashboard' },
      { src: '/images/carepropertyhub/screenshot-cph-6.png', alt: 'Care Property Hub — client or admin dashboard' },
      { src: '/images/carepropertyhub/screenshot-cph-7.png', alt: 'Care Property Hub — client or admin dashboard' },
      { src: '/images/carepropertyhub/screenshot-cph-8.png', alt: 'Care Property Hub — client or admin dashboard' },
      { src: '/images/carepropertyhub/screenshot-cph-9.png', alt: 'Care Property Hub — client or admin dashboard' },
      { src: '/images/carepropertyhub/screenshot-cph-10.png', alt: 'Care Property Hub — client or admin dashboard' },
      { src: '/images/carepropertyhub/carepropertyhub-image.png', alt: 'Care Property Hub — client or admin dashboard' },
      { src: '/images/carepropertyhub/carepropertyhub-image-copy.png', alt: 'Care Property Hub — client or admin dashboard' },
    ],
    gradient: 'from-blue-600 to-violet-600',
    tags: ['SaaS', 'Dashboard', 'Full-stack'],
  },
  {
    id: 'ai-alchemist',
    name: 'AI Alchemist',
    tagline: 'Psychology-driven decision support — Multi-LLM, NestJS, Node.js, Supabase, AWS',
    description: 'Agentic AI system for emotional support, behavioral insights, and decision guidance. Multi-model routing and full-stack deployment with iOS companion.',
    points: [
      'Custom dataset from psychological theories and peer-reviewed research for behavioral reasoning and response grounding.',
      'Multi-model routing (OpenAI, Claude, DeepSeek, Gemini) for emotional support and decision guidance.',
      'Full-stack app with Supabase Auth and Aurora/PostgreSQL for user management and session memory.',
      'Deployed via AWS Amplify (frontend) + AWS App Runner (backend) with CI/CD pipelines.',
      'iOS companion app (Swift/SwiftUI) via secure APIs; backend proxy for authentication, rate-limiting, and session management.',
    ],
    tech: ['NestJS', 'Node.js', 'Supabase', 'AWS Amplify', 'App Runner', 'Multi-LLM'],
    links: [
      { label: 'Live Demo', href: 'https://main.d3970mma5pzr9g.amplifyapp.com/' },
    ],
    images: [],
    gradient: 'from-violet-600 to-pink-600',
    tags: ['AI', 'Multi-LLM', 'NestJS'],
  },
  {
    id: 'content-strategist',
    name: 'AI Content Strategist Agent',
    tagline: 'Python, RAG, Web/PDF ingestion',
    description: 'Multimodal content strategy agent that ingests websites and PDFs to learn brand identity, products, and target audiences.',
    points: [
      'Generates full content calendars (holidays, angles, keyword themes, conversion-focused ideas) comparable to senior strategist outputs.',
      'Multi-model inference plus embeddings for brand-aligned retrieval and higher factual consistency.',
    ],
    tech: ['Python', 'RAG', 'Web/PDF ingestion', 'Multi-model inference'],
    links: [],
    images: [
      { src: '/images/contentStrategist/screencapture-localhost-5001-2026-02-19-10_02_42.png', alt: 'Content Strategy Generator UI' },
    ],
    gradient: 'from-orange-500 to-red-500',
    tags: ['Python', 'RAG', 'AI'],
  },
  {
    id: 'ppf-website',
    name: 'PPF For Humanity',
    tagline: 'Non-profit solidarity & advocacy — React, Tailwind, Figma',
    description: 'Full-site for humanitarian organization: mission pillars, impact stats, volunteer and donate flows, FAQ, and contact.',
    points: [
      'Mission pillars, impact statistics, and clear calls to action for volunteer and donate.',
      'FAQ accordion and contact form. Dark theme with strong visual hierarchy and conversion-focused UX.',
    ],
    tech: ['React', 'Tailwind', 'Component-driven UI', 'Figma'],
    links: [],
    images: [
      { src: '/images/PPFWebsite/ppf-hero.jpeg', alt: 'PPF For Humanity hero and impact' },
    ],
    gradient: 'from-amber-600 to-orange-600',
    tags: ['React', 'Non-profit', 'UX'],
  },
];

export function getProjectById(id: string): (ProjectDetailData & { tags: string[] }) | undefined {
  return PROJECTS_FEATURED.find((p) => p.id === id);
}
