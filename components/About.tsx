"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Fraunces } from "next/font/google";
import { Code2, Rocket, Users, Zap, Shield, Sparkles } from "lucide-react";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal"],
  display: "swap",
});

/** Fixed positions for subtle “snow” — stable across SSR. */
const snowSpecks = [
  { left: "4%", top: "8%", s: 1.5, o: 0.35 },
  { left: "12%", top: "22%", s: 1, o: 0.25 },
  { left: "18%", top: "6%", s: 2, o: 0.2 },
  { left: "28%", top: "35%", s: 1.2, o: 0.3 },
  { left: "44%", top: "12%", s: 1.8, o: 0.22 },
  { left: "52%", top: "28%", s: 1, o: 0.28 },
  { left: "63%", top: "18%", s: 2.2, o: 0.18 },
  { left: "71%", top: "42%", s: 1.4, o: 0.26 },
  { left: "82%", top: "9%", s: 1.6, o: 0.2 },
  { left: "91%", top: "31%", s: 1.1, o: 0.32 },
  { left: "8%", top: "58%", s: 1.3, o: 0.2 },
  { left: "35%", top: "68%", s: 1.7, o: 0.24 },
  { left: "58%", top: "72%", s: 1, o: 0.3 },
  { left: "76%", top: "61%", s: 1.9, o: 0.18 },
  { left: "94%", top: "78%", s: 1.2, o: 0.22 },
];

const About = () => {
  const stats = [
    { value: "50+", label: "Projects delivered", icon: Rocket },
    { value: "100%", label: "Client satisfaction", icon: Users },
    { value: "24/7", label: "Support available", icon: Shield },
  ];

  const values = [
    {
      icon: Code2,
      title: "Clean architecture",
      description:
        "Scalable, maintainable systems shaped by the same rigor we bring to product discovery and delivery.",
    },
    {
      icon: Zap,
      title: "Fast delivery",
      description:
        "Tight feedback loops and pragmatic scope so you ship value early, without painting yourself into a corner.",
    },
    {
      icon: Sparkles,
      title: "Innovation first",
      description:
        "Modern stacks and applied AI where they earn their place: clearer UX, safer automation, measurable lift.",
    },
  ];

  return (
    <section
      id="about"
      className="relative scroll-mt-14 overflow-x-clip border-b border-white/[0.06] pt-28 pb-24 sm:scroll-mt-16 sm:pt-32 sm:pb-28 md:pt-36 md:pb-32"
    >
      {/* Continuation of hero artwork — cool, desaturated, “snow field” read */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[56%_center] sm:object-[52%_center] opacity-[0.34] saturate-0 contrast-[0.88] brightness-[1.35] mix-blend-luminosity"
          aria-hidden
        />
        {/* Frost: lift toward grey-white without blowing contrast */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-stone-100/[0.14] via-slate-200/[0.06] to-transparent"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-white/[0.07] via-transparent to-[#0d1117]/80"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-10%,rgba(255,255,255,0.16),transparent_55%)]"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_100%_40%,rgba(226,232,240,0.08),transparent_50%)]"
          aria-hidden
        />
        {/* Anchor back to UI canvas */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-[#0d1117]/88 to-[#0d1117]/65"
          aria-hidden
        />
        {/* Paper grain */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`,
          }}
          aria-hidden
        />
      </div>

      {/* Crystalline specks */}
      <div className="pointer-events-none absolute inset-0 z-[1]" aria-hidden>
        {snowSpecks.map((d, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.35)]"
            style={{
              left: d.left,
              top: d.top,
              width: d.s,
              height: d.s,
              opacity: d.o,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 grid gap-12 lg:mb-20 lg:grid-cols-12 lg:gap-10 lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-40px" }}
            className="lg:col-span-7"
          >
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-12 shrink-0 bg-gradient-to-r from-white/50 to-transparent" aria-hidden />
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-stone-300/90">
                Studio
              </p>
            </div>
            <h2
              className={`mb-6 text-balance font-normal leading-[1.05] tracking-[-0.02em] text-stone-100 sm:mb-8 ${display.className}`}
            >
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] lg:leading-[1.08]">
                About{" "}
                <span className="bg-gradient-to-r from-white via-stone-100 to-stone-400/90 bg-clip-text text-transparent">
                  VelocTech
                </span>
              </span>
            </h2>
            <p className="max-w-xl text-pretty text-base leading-relaxed text-stone-300/95 sm:text-lg">
              VelocTech Inc. is a software engineering studio in Islamabad, Pakistan, focused on{" "}
              <span className="font-medium text-stone-100">full-stack delivery</span> and{" "}
              <span className="font-medium text-stone-100">applied AI systems</span>, with the
              rigor you expect from a product team.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-40px" }}
            className="flex flex-col gap-0 lg:col-span-5"
          >
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="group flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b border-white/[0.08] py-5 first:pt-0 sm:flex-nowrap sm:py-6"
                >
                  <div className="flex min-w-0 flex-1 items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-stone-200/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-colors group-hover:border-cyan-200/25 group-hover:text-cyan-100/90">
                      <Icon className="h-4 w-4" strokeWidth={1.5} aria-hidden />
                    </span>
                    <span className="line-clamp-2 text-sm font-medium tracking-wide text-stone-400 sm:line-clamp-1">
                      {stat.label}
                    </span>
                  </div>
                  <span
                    className={`shrink-0 text-2xl tabular-nums tracking-tight text-stone-100 sm:text-3xl ${display.className}`}
                  >
                    {stat.value}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>

        <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.article
                key={value.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: "-32px" }}
                className="relative overflow-hidden rounded-2xl border border-white/[0.09] bg-gradient-to-br from-white/[0.07] via-white/[0.02] to-transparent p-6 shadow-[0_24px_48px_-24px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md sm:p-7"
              >
                <div
                  className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-cyan-200/10 blur-3xl"
                  aria-hidden
                />
                <div className="relative">
                  <div className="mb-5 flex items-start justify-between gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#0d1117]/50 text-stone-200">
                      <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden />
                    </div>
                    <span className="font-mono text-[10px] font-medium uppercase tracking-widest text-stone-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold tracking-tight text-stone-100">{value.title}</h3>
                  <p className="text-sm leading-relaxed text-stone-400 sm:text-[15px]">{value.description}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
