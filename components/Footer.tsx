import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-6 sm:py-8 px-4 sm:px-6 bg-[#0f0f14]">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs sm:text-sm text-zinc-500 text-center sm:text-left">
        <p>© {new Date().getFullYear()} Nuzhat Rubab Zahra. All rights reserved.</p>
        <Link href="#contact" className="hover:text-zinc-400 transition-colors">
          Contact
        </Link>
      </div>
    </footer>
  );
}
