import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProjectById } from '@/data/projects';

type Props = { params: Promise<{ id: string }> };

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) notFound();

  return (
    <div className="min-h-screen bg-[#0f0f14]">
      {/* Top bar: full width, clear navigation */}
      <header className="border-b border-zinc-800 bg-[#0f0f14]/95 backdrop-blur">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-3">
          <Link href="/" className="font-display text-base sm:text-lg font-semibold text-white hover:text-zinc-300 truncate min-w-0">
            Nuzhat Rubab Zahra
          </Link>
          <Link
            href="/#projects"
            className="text-zinc-400 hover:text-white text-xs sm:text-sm font-medium transition-colors shrink-0"
          >
            ← Back to portfolio
          </Link>
        </div>
      </header>

      {/* Hero: image + overlay for Care Property Hub, gradient for others */}
      {project.id === 'care-property-hub' ? (
        <section className="relative min-h-[320px] sm:min-h-[380px] flex flex-col justify-end">
          <div className="absolute inset-0">
            <Image
              src="/images/carepropertyhub/hero-bg.png"
              alt=""
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/30" aria-hidden />
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-28">
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              {project.name}
            </h1>
            {project.tagline && (
              <p className="mt-3 sm:mt-4 text-white/90 text-base sm:text-lg max-w-2xl">
                {project.tagline}
              </p>
            )}
          </div>
        </section>
      ) : (
        <section className={`bg-gradient-to-br ${project.gradient} py-16 sm:py-20 md:py-28`}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              {project.name}
            </h1>
            {project.tagline && (
              <p className="mt-3 sm:mt-4 text-white/90 text-base sm:text-lg max-w-2xl">
                {project.tagline}
              </p>
            )}
          </div>
        </section>
      )}

      {/* Main content: readable width, clear sections */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <p className="text-zinc-300 text-base sm:text-lg leading-relaxed mb-10 sm:mb-14">
          {project.description}
        </p>

        {project.links.length > 0 && (
          <div className="mb-14">
            <a
              href={project.links[0].href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-white text-[#0f0f14] px-6 py-3 text-sm font-semibold hover:bg-zinc-100 transition-colors"
            >
              {project.links[0].label}
              <span aria-hidden>→</span>
            </a>
            {project.links.length > 1 && (
              <span className="ml-4">
                {project.links.slice(1).map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-violet-400 hover:text-violet-300 font-medium text-sm"
                  >
                    {link.label} →
                  </a>
                ))}
              </span>
            )}
          </div>
        )}

        {project.points.length > 0 && (
          <section className="mb-14">
            <h2 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-6">
              What I built
            </h2>
            <ul className="space-y-4">
              {project.points.map((point, i) => (
                <li key={i} className="text-zinc-300 leading-relaxed flex gap-3">
                  <span className="text-violet-400 shrink-0 mt-0.5">•</span>
                  {point}
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="mb-14">
          <h2 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-4">
            Tech & stack
          </h2>
          <p className="text-zinc-400">
            {project.tech.join(' · ')}
          </p>
        </section>
      </div>

      {/* Screenshots: full-bleed section, large images */}
      {project.images.length > 0 && (
        <section className="border-t border-zinc-800 bg-[#18181f] py-12 sm:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-2">
              Screenshots
            </h2>
            {project.screenshotsCaption ? (
              <p className="text-zinc-400 text-sm mb-10">{project.screenshotsCaption}</p>
            ) : (
              <div className="mb-10" />
            )}
            <div className="space-y-12">
              {project.images.map((img, i) => (
                <figure key={i} className="overflow-hidden rounded-xl">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={1200}
                    height={720}
                    className="w-full h-auto object-cover"
                    sizes="(max-width: 1024px) 100vw, 1024px"
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom nav */}
      <footer className="border-t border-zinc-800 py-8 sm:py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <Link
            href="/#projects"
            className="text-zinc-400 hover:text-white text-sm font-medium transition-colors"
          >
            ← Back to portfolio
          </Link>
        </div>
      </footer>
    </div>
  );
}

export function generateStaticParams() {
  return [
    { id: 'care-property-hub' },
    { id: 'ai-alchemist' },
    { id: 'content-strategist' },
    { id: 'ppf-website' },
    { id: 'video-transcription' },
    { id: 'zoom-summaries-downloader' },
    { id: 'ecommerce-mvp' },
    { id: 'image-to-forms-automation' },
    { id: 'portfolio-3d-mascot' },
  ];
}
