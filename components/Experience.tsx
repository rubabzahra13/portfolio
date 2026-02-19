'use client';

const ROLES = [
  { title: 'Lead Agentic AI Engineer & Full-Stack Developer', company: 'BrandScaling (UK)', period: 'Jul 2025 — Present', line: 'Agentic AI, AI-Alchemist, automation.' },
  { title: 'Lead Full-Stack Developer', company: 'Adminless (UK)', period: 'Dec 2025 — Present', line: 'Care Property Hub—11 days. GHL CRM, dashboards.' },
  { title: 'AI Intern', company: 'NASTP', period: 'Jun — Aug 2024', line: 'Aerospace & tech park.' },
];

export function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#18181f]">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
          Experience
        </h2>
        <p className="text-zinc-400 mb-10 sm:mb-14 text-sm sm:text-base">
          Where I work and what I focus on.
        </p>
        <div className="divide-y divide-zinc-800">
          {ROLES.map((role, i) => (
            <div key={i} className="py-6 sm:py-8 first:pt-0">
              <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between gap-1 sm:gap-2 mb-2">
                <h3 className="font-display text-base sm:text-lg font-semibold text-white">{role.title}</h3>
                <span className="text-zinc-500 text-sm tabular-nums">{role.period}</span>
              </div>
              <p className="text-zinc-400 text-sm mb-1">{role.company}</p>
              <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">{role.line}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
