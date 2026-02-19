'use client';

import Image from 'next/image';
import { useEffect } from 'react';

export type ProjectDetailData = {
  id: string;
  name: string;
  tagline?: string;
  description: string;
  points: string[];
  tech: string[];
  links: { label: string; href: string }[];
  images: { src: string; alt: string }[];
  /** Optional caption for the screenshots section (e.g. "Client (landlord / care provider) and admin dashboards") */
  screenshotsCaption?: string;
  gradient: string;
};

type Props = {
  project: ProjectDetailData | null;
  onClose: () => void;
};

export function ProjectDetail({ project, onClose }: Props) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-detail-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[85vh] sm:max-h-[90vh] overflow-y-auto rounded-xl sm:rounded-2xl bg-[#18181f] border border-zinc-800 shadow-2xl mx-2 sm:mx-0"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors z-10 touch-manipulation"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className={`h-24 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
          <span className="text-white/80 font-mono text-3xl">&#62;_</span>
        </div>

        <div className="p-4 sm:p-6 md:p-8">
          <h2 id="project-detail-title" className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
            {project.name}
          </h2>
          {project.tagline && (
            <p className="text-zinc-400 text-sm mb-6">{project.tagline}</p>
          )}
          <p className="text-zinc-300 leading-relaxed mb-6">
            {project.description}
          </p>

          {project.points.length > 0 && (
            <div className="mb-8">
              <h3 className="text-white font-semibold mb-3">Details</h3>
              <ul className="space-y-2">
                {project.points.map((point, i) => (
                  <li key={i} className="flex gap-2 text-zinc-400 text-sm leading-relaxed">
                    <span className="text-violet-400 shrink-0">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
              <span key={t} className="px-2.5 py-1 rounded-md bg-zinc-800 text-zinc-300 text-xs font-medium">
                {t}
              </span>
            ))}
          </div>

          {project.links.length > 0 && (
            <div className="flex flex-wrap gap-4 mb-8">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-400 font-medium text-sm hover:text-violet-300 inline-flex items-center gap-1"
                >
                  {link.label}
                  <span aria-hidden>→</span>
                </a>
              ))}
            </div>
          )}

          {project.images.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-white font-semibold">Screenshots</h3>
              {project.screenshotsCaption && (
                <p className="text-zinc-400 text-sm">{project.screenshotsCaption}</p>
              )}
              <div className="grid gap-4">
                {project.images.map((img, i) => (
                  <div key={i} className="rounded-lg overflow-hidden border border-zinc-800">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={800}
                      height={480}
                      className="w-full h-auto object-cover"
                      sizes="(max-width: 768px) 100vw, 800px"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
