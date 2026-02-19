'use client';

import Link from 'next/link';
import { PROJECTS_FEATURED } from '@/data/projects';

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-[#18181f]">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-14">
          <div>
            <h2 className="font-display text-3xl font-bold text-white mb-2">
              Selected work
            </h2>
            <p className="text-zinc-400 max-w-xl">
              Recent projects on SaaS platforms, automation, and AI integration.
            </p>
          </div>
          <a href="#contact" className="text-zinc-400 hover:text-white text-sm font-medium flex items-center gap-1">
            View all
            <span aria-hidden>→</span>
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROJECTS_FEATURED.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl overflow-hidden bg-[#22222c] border border-zinc-800 flex flex-col text-left hover:border-zinc-600 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-[#18181f]"
            >
              <div className={`h-28 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                <span className="text-white/80 font-mono text-2xl">&#62;_</span>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tags.map((t) => (
                    <span key={t} className="text-zinc-500 text-xs">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-white font-semibold mb-2">{project.name}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed line-clamp-3 flex-1">
                  {project.description}
                </p>
                <span className="text-violet-400 text-sm font-medium mt-3 inline-flex items-center gap-1">
                  View details
                  <span aria-hidden>→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
