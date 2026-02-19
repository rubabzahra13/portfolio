'use client';

const TECHS = [
  'React', 'Next.js', 'Tailwind', 'Node.js', 'NestJS', 'Express',
  'PostgreSQL', 'Supabase', 'AWS', 'Cursor', 'Lovable',
  'TypeScript', 'Python', 'REST APIs', 'Webhooks', 'GHL',
];

export function Skills() {
  return (
    <section id="skills" className="py-12 sm:py-16 px-4 sm:px-6 bg-[#0f0f14] border-y border-zinc-800/50">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
          Tools &amp; stack
        </h2>
        <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed break-words">
          {TECHS.join(' · ')}
        </p>
      </div>
    </section>
  );
}
