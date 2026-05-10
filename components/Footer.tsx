"use client";

import { Heart, Code2, Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-x-clip border-t border-border bg-elevated py-12 sm:py-14">
      <div className="relative z-10 mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 grid grid-cols-1 gap-10 sm:grid-cols-2 md:mb-12 md:grid-cols-3 md:gap-12">
          <div>
            <h3 className="mb-2 text-lg font-semibold tracking-tight text-text-primary sm:text-xl">
              VelocTech Inc<span className="text-accent">.</span>
            </h3>
            <p className="mb-4 max-w-xs text-sm leading-relaxed text-text-secondary">
              Software engineering studio—shipping reliable products with clear communication.
            </p>
            <div className="flex items-center gap-2 text-sm font-medium text-text-muted">
              <Code2 className="h-4 w-4 shrink-0 text-accent" aria-hidden />
              <span>Engineering &amp; product</span>
            </div>
          </div>

          <div>
            <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-text-muted">
              <Sparkles className="h-4 w-4 text-accent" aria-hidden />
              Navigate
            </h4>
            <ul className="space-y-2 text-sm">
              {["About", "Skills", "Projects", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-text-secondary transition-colors hover:text-accent"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-muted">Contact</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>
                <a href="mailto:hello@veloctech.com" className="hover:text-accent">
                  hello@veloctech.com
                </a>
              </li>
              <li>Islamabad, PK</li>
              <li className="font-medium text-success">Accepting new work</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-center text-sm text-text-muted md:flex-row md:text-left">
          <p className="max-w-prose">
            © {new Date().getFullYear()}{" "}
            <span className="font-medium text-text-primary">VelocTech Inc.</span> All rights reserved.
          </p>
          <p className="flex flex-wrap items-center justify-center gap-1.5 md:justify-end">
            Built with Next.js &amp; TypeScript
            <Heart className="text-accent" size={14} fill="currentColor" aria-hidden />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;