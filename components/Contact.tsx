'use client';

export function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#0f0f14]">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
          Get in touch
        </h2>
        <p className="text-zinc-400 mb-8 sm:mb-10 text-sm sm:text-base">
          Open to full-stack and AI-assisted development roles. Have a project? Say hello.
        </p>
        <a
          href="mailto:rubabzahra248@gmail.com"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm sm:text-base break-all"
          aria-label="Email"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          rubabzahra248@gmail.com
        </a>
        <p className="mt-8 text-zinc-500 text-sm">
          Rawalpindi / Islamabad · Remote or onsite
        </p>
      </div>
    </section>
  );
}
