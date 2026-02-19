'use client';

export function Resume() {
  return (
    <section id="resume" className="py-20 px-6 bg-[#18181f]">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-display text-2xl font-bold text-white mb-4">
          CV
        </h2>
        <p className="text-zinc-400 mb-8">
          Full CV available on request.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8">
          <a
            href="https://www.linkedin.com/in/nuzhat-rubab-zahra-ab553b237"
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-400 font-medium hover:text-violet-300"
          >
            LinkedIn
          </a>
          <a
            href="mailto:rubabzahra248@gmail.com?subject=CV request"
            className="text-violet-400 font-medium hover:text-violet-300"
          >
            Email for CV
          </a>
        </div>
      </div>
    </section>
  );
}
