'use client';

const TECHS = ['React', 'Node.js', 'TypeScript', 'AI Agents', 'Next.js', 'Tailwind', 'PostgreSQL', 'AWS'];

export function TechStrip() {
  return (
    <section className="py-6 px-6 bg-[#0f0f14] border-y border-zinc-800/50">
      <div className="max-w-5xl mx-auto">
        <p className="text-zinc-500 text-sm text-center tracking-wider uppercase">
          {TECHS.join(' · ')}
        </p>
      </div>
    </section>
  );
}
