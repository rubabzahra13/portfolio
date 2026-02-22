'use client';

const SKILL_GROUPS = [
  {
    label: 'Vibe coding / AI-assisted dev',
    tools: ['Cursor', 'Claude Code', 'Lovable', 'Replit', 'Rapid prototyping', 'Prompt engineering', 'AI-augmented workflows'],
  },
  {
    label: 'Frontend',
    tools: ['React', 'Next.js', 'Tailwind CSS', 'Component-driven UI', 'UX principles', 'Wireframing', 'Figma'],
  },
  {
    label: 'Backend',
    tools: ['Node.js', 'NestJS', 'Express.js', 'REST APIs', 'Webhooks', 'Auth (JWT)', 'Event-driven triggers'],
  },
  {
    label: 'GenAI',
    tools: ['OpenAI', 'Claude', 'DeepSeek', 'Gemini', 'RAG', 'LangChain', 'Multi-LLM routing', 'Web search tooling'],
  },
  {
    label: 'Data',
    tools: ['PostgreSQL', 'Supabase', 'MySQL', 'AWS Aurora/RDS', 'pgvector', 'ChromaDB'],
  },
  {
    label: 'Cloud & deploy',
    tools: ['AWS Amplify', 'AWS App Runner', 'Docker', 'Vercel', 'CI/CD pipelines', 'HTTPS', 'RLS'],
  },
  {
    label: 'CRM / automation',
    tools: ['GoHighLevel (GHL)', 'Lifecycle triggers', 'Notification workflows'],
  },
];

const EXECUTION = [
  {
    title: 'Speed',
    line: 'Built Care Property Hub end-to-end in 11 days with Cursor—frontend, backend, auth, PostgreSQL, GHL webhooks, AWS deployment.',
  },
  {
    title: 'Rapid prototyping',
    line: 'Portfolio and live demos aligned to role requirements; demo-first execution.',
  },
  {
    title: 'Autonomy',
    line: 'Designed backend architecture, data models, Supabase RLS, JWT flows, and AWS deployment strategy across SaaS systems.',
  },
  {
    title: 'Collaboration',
    line: 'Coordinated with AWS engineer, GHL specialist, iOS developer; daily PM reporting and iterative demos.',
  },
  {
    title: 'Demo-driven iteration',
    line: 'Functional MVPs over docs; live feature updates in stakeholder sessions, including 10‑minute automation builds from feedback.',
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#0f0f14] border-y border-zinc-800/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
          Skills &amp; execution
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base mb-12 max-w-2xl">
          Technical stack and how I ship: tools, GenAI, and execution style.
        </p>

        {/* Technical skills: category cards with pill tags */}
        <div className="mb-14">
          <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-6">
            Technical skills
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {SKILL_GROUPS.map((group) => (
              <div
                key={group.label}
                className="rounded-xl bg-[#18181f] border border-zinc-800 p-4 sm:p-5"
              >
                <p className="text-white font-semibold text-sm mb-3">{group.label}</p>
                <div className="flex flex-wrap gap-2">
                  {group.tools.map((tool) => (
                    <span
                      key={tool}
                      className="inline-block px-2.5 py-1 rounded-md bg-zinc-800/80 text-zinc-300 text-xs font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Execution style: short cards */}
        <div>
          <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-6">
            Execution style
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {EXECUTION.map((item) => (
              <div
                key={item.title}
                className="rounded-xl bg-[#18181f] border border-zinc-800 p-4 sm:p-5 flex flex-col"
              >
                <p className="text-orange-400 font-semibold text-sm mb-1.5">{item.title}</p>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">{item.line}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
