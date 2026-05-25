"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import TechCube from "./TechCube";
import { ArrowDown, Bot } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="relative overflow-x-clip border-b border-border bg-background pt-14 pb-20 sm:pt-16 sm:pb-24 lg:flex lg:min-h-[100dvh] lg:items-center lg:pb-32">
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/hero-bg.png"
          alt="VelocTech Inc. software engineering studio background"
          fill
          priority
          className="object-cover object-[56%_center] sm:object-[52%_center]"
          sizes="100vw"
        />
        {/* Light veil: mostly transparent so the artwork reads; slightly stronger on the left for copy */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-background/75 via-background/35 to-transparent sm:from-background/60 sm:via-background/28 sm:to-transparent"
          aria-hidden
        />
        <div className="absolute inset-0 bg-[#0d1117]/12 sm:bg-[#0d1117]/8" aria-hidden />
      </div>

      <div className="relative z-10 mx-auto w-full min-w-0 max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        <div className="flex flex-col items-stretch gap-10 sm:gap-12 md:grid md:grid-cols-2 md:items-center md:gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="order-2 w-full md:order-1"
          >
            <p className="mb-4 inline-flex items-center rounded-md border border-border bg-elevated px-2.5 py-1 text-xs font-medium uppercase tracking-widest text-text-muted">
              VelocTech Inc. software studio
            </p>

            <motion.h1
              className="mb-4 text-balance font-semibold leading-[1.12] tracking-tight text-text-primary sm:mb-5"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.45 }}
            >
              <span className="block text-[clamp(1.75rem,3.5vw+0.5rem,2.5rem)] text-accent">
                VelocTech Inc.
              </span>
              <span className="mt-2 block text-[clamp(1.5rem,3vw+0.35rem,2.125rem)] text-text-primary">
                Production web products,{" "}
                <span className="text-text-secondary">shipped with care</span>
              </span>
            </motion.h1>

            <motion.p
              className="mb-8 max-w-xl text-pretty text-base leading-relaxed text-text-secondary sm:text-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.14, duration: 0.45 }}
            >
              VelocTech Inc. delivers full-stack engineering and applied AI, with clear scope,
              measurable outcomes, and maintainable codebases.
            </motion.p>

            <motion.ul
              className="mb-8 flex flex-wrap gap-2 text-sm text-text-muted"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.45 }}
            >
              {["Next.js & React", "TypeScript", "Cloud-native"].map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-border bg-surface/80 px-2.5 py-1 font-medium text-text-secondary"
                >
                  {item}
                </li>
              ))}
            </motion.ul>

            <motion.div
              className="flex w-full max-w-full flex-col gap-3 pb-2 sm:flex-row sm:items-center sm:pb-0"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.26, duration: 0.45 }}
            >
              <Link
                href="/chat"
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-md border border-border-strong bg-accent px-5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:h-10 sm:w-auto sm:px-4"
              >
                <Bot className="h-4 w-4 shrink-0 opacity-95" aria-hidden />
                Meet Villi AI
              </Link>

              <motion.button
                type="button"
                onClick={scrollToProjects}
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-md border border-border bg-transparent px-5 text-sm font-semibold text-text-primary transition-colors hover:bg-subtle sm:h-10 sm:w-auto sm:px-4"
                whileTap={{ scale: 0.99 }}
              >
                View work
                <ArrowDown className="h-4 w-4 opacity-80" aria-hidden />
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="order-1 flex h-[200px] w-full min-h-0 items-center justify-center sm:h-[280px] md:order-2 md:h-[min(52vh,480px)]"
          >
            <div className="flex h-full w-full max-w-[min(100%,24rem)] origin-center scale-[0.78] items-center justify-center sm:scale-[0.88] md:scale-100">
              <TechCube />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.button
        type="button"
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 rounded-full p-2 text-text-muted transition-colors hover:bg-subtle hover:text-text-primary lg:flex lg:bottom-10"
        animate={{ y: [0, 4, 0] }}
        transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
        aria-label="Scroll to About"
      >
        <ArrowDown className="h-5 w-5" />
      </motion.button>
    </section>
  );
};

export default Hero;
