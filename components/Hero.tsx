'use client';

import Image from 'next/image';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center bg-[#0f0f14] pt-28 pb-20 px-6"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          <div className="order-2 lg:order-1 text-center lg:text-left lg:max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-500 px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-400" aria-hidden />
              <span className="text-zinc-400 text-sm font-medium">Available for new projects</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight">
              Building products that <span className="text-gradient">ship.</span>
            </h1>
            <p className="mt-6 text-zinc-400 text-lg leading-relaxed">
              Full-stack and AI-assisted development—from idea to working prototype in days. SaaS dashboards, CRM flows, and AI tools that scale.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-lg border border-zinc-500 bg-white text-[#0f0f14] px-6 py-3 text-sm font-semibold hover:bg-zinc-100 transition-colors w-full sm:w-auto"
              >
                View my work
              </a>
              <a
                href="https://github.com/rubabzahra13"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-500 bg-transparent text-white px-6 py-3 text-sm font-semibold hover:bg-white/5 transition-colors w-full sm:w-auto"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                GitHub
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end mt-10 lg:mt-0">
            <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] lg:w-[400px] lg:h-[400px]">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-violet-500/30 to-pink-500/30 blur-xl" aria-hidden />
              <div className="relative rounded-2xl overflow-hidden border border-zinc-700/50">
                <Image
                  src="/images/me/me.jpeg?v=hero"
                  alt="Nuzhat Rubab Zahra"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover object-[center_22%]"
                  priority
                  sizes="(max-width: 1024px) 340px, 400px"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 pt-12">
                  <p className="text-white font-semibold">Nuzhat Rubab Zahra</p>
                  <p className="text-zinc-300 text-sm">Vibe Coder & AI-Assisted Full-Stack</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
