'use client';

import { motion } from 'framer-motion';
import { Kalam } from 'next/font/google';

const kalam = Kalam({
  weight: ['400', '700'],
  subsets: ['latin'],
});

type BubbleProps = {
  variant: 'user' | 'villi';
  children: React.ReactNode;
  tail: 'right' | 'left';
  className?: string;
  delay?: number;
};

/** Curved speech tail — vector path like an Illustrator brush stroke, not a CSS triangle. */
function OrganicTail({ toward, stroke, fill }: { toward: 'right' | 'left'; stroke: string; fill: string }) {
  const right = toward === 'right';
  return (
    <svg
      className={`absolute top-[38%] z-0 h-11 w-9 -translate-y-1/2 sm:h-12 sm:w-10 ${right ? '-right-2 sm:-right-2.5' : '-left-2 scale-x-[-1] sm:-left-2.5'}`}
      viewBox="0 0 36 52"
      fill="none"
      aria-hidden
    >
      <path
        d="M4 10 C10 22 12 36 8 48 C14 40 22 30 28 20 C22 24 14 22 6 14 C4 12 4 10 4 10Z"
        fill={fill}
        stroke={stroke}
        strokeWidth={1.35}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 14 C12 20 18 26 24 22"
        stroke={stroke}
        strokeWidth={0.85}
        strokeLinecap="round"
        opacity={0.45}
      />
    </svg>
  );
}

function DoodleBubble({ variant, children, tail, className = '', delay = 0 }: BubbleProps) {
  const user = variant === 'user';
  const tailRight = tail === 'right';

  const fill = user ? 'rgba(22, 27, 34, 0.96)' : 'rgba(24, 30, 40, 0.97)';
  const stroke = user ? 'rgba(201, 209, 217, 0.42)' : 'rgba(121, 192, 255, 0.55)';
  const strokeSoft = user ? 'rgba(139, 148, 158, 0.22)' : 'rgba(88, 166, 255, 0.22)';
  const ink = user ? 'rgba(0, 0, 0, 0.35)' : 'rgba(0, 0, 0, 0.32)';
  const rimLight = user ? 'rgba(255, 255, 255, 0.07)' : 'rgba(121, 192, 255, 0.12)';

  return (
    <motion.div
      initial={{ opacity: 0, y: 12, rotate: user ? -2.2 : 2.2 }}
      whileInView={{ opacity: 1, y: 0, rotate: user ? -1.4 : 1.4 }}
      viewport={{ once: true, margin: '-32px' }}
      transition={{ delay, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`relative ${
        user
          ? 'max-w-[min(11rem,42vw)] sm:max-w-[14rem] lg:max-w-[15.5rem]'
          : 'max-w-[min(11rem,42vw)] sm:max-w-[17rem] lg:max-w-[21rem]'
      } ${className}`}
    >
      {/* Offset “ink pass” — second trace like duplicated stroke in Illustrator */}
      <div
        className="pointer-events-none absolute inset-0 translate-x-[3px] translate-y-[3px] rounded-[1.85rem_2.35rem_1.95rem_2.05rem] border border-dashed opacity-[0.18]"
        style={{ borderColor: ink }}
        aria-hidden
      />

      {/* Soft outer bloom */}
      <div
        className="pointer-events-none absolute -inset-1 rounded-[2rem_2.45rem_2.05rem_2.15rem] opacity-50 blur-[1.5px]"
        style={{
          background: user
            ? 'radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.06), transparent 62%)'
            : 'radial-gradient(ellipse at 70% 15%, rgba(88,166,255,0.14), transparent 58%)',
        }}
        aria-hidden
      />

      <OrganicTail toward={tailRight ? 'right' : 'left'} stroke={stroke} fill={fill} />

      {/* Paper / card body */}
      <div
        className={`pointer-events-none relative z-[1] overflow-hidden rounded-[1.85rem_2.35rem_1.95rem_2.05rem] border px-3.5 py-2.5 sm:px-4 sm:py-3 ${kalam.className}`}
        style={{
          backgroundColor: fill,
          borderColor: strokeSoft,
          boxShadow: `
            inset 0 1px 0 ${rimLight},
            inset 0 -1px 0 rgba(0,0,0,0.18),
            0 14px 32px -10px rgba(0,0,0,0.55),
            0 0 0 1px ${user ? 'rgba(48,54,61,0.6)' : 'rgba(58,90,120,0.35)'}
          `,
          backgroundImage: `
            linear-gradient(168deg, ${rimLight} 0%, transparent 42%),
            radial-gradient(120% 80% at 0% 0%, ${user ? 'rgba(255,255,255,0.05)' : 'rgba(121,192,255,0.08)'} 0%, transparent 52%),
            url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E")
          `,
        }}
      >
        {/* Hand-lettered label — title case reads more “poster” than all-caps */}
        <span
          className={`mb-1 block text-[13px] font-bold leading-none sm:text-sm ${
            user ? 'text-gray-400' : 'text-tertiary'
          }`}
        >
          {user ? 'You' : 'Villi'}
        </span>
        <p
          className={`text-left text-[14px] leading-snug sm:text-[15px] ${
            user ? 'text-gray-200' : 'text-gray-100'
          }`}
        >
          {children}
        </p>
      </div>

      {/* Ink outline — dashed stroke scales with card (Illustrator “stroke” pass) */}
      <svg
        className="pointer-events-none absolute inset-0 z-[2] h-full w-full overflow-visible"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden
      >
        <rect
          x="1.2"
          y="1.2"
          width="97.6"
          height="97.6"
          rx="22"
          ry="24"
          fill="none"
          stroke={stroke}
          strokeWidth={0.9}
          strokeDasharray="4.2 3.2 1.8 3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={0.88}
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </motion.div>
  );
}

function DoodleSpark({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden>
      <path
        d="M20 4l2 8 8 2-8 2-2 8-2-8-8-2 8-2 2-8z"
        stroke="rgb(121, 192, 255)"
        strokeWidth={1.2}
        strokeLinejoin="round"
        opacity={0.5}
      />
      <path
        d="M8 28c4-6 10-8 16-6M26 32c-2-4 0-8 4-10"
        stroke="rgb(63, 185, 80)"
        strokeWidth={1}
        strokeLinecap="round"
        opacity={0.35}
      />
    </svg>
  );
}

export default function ClarrieDialogueDoodles({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto flex w-full flex-col items-center gap-3 sm:flex-row sm:items-stretch sm:gap-6 sm:px-1 md:gap-8 lg:gap-10 lg:px-2 xl:gap-14">
      {/* Villi — left column: bubble aligned with mascot head (same vertical band, column unchanged) */}
      <div className="pointer-events-none relative hidden min-h-0 flex-1 flex-col items-end justify-start pt-6 pb-4 sm:flex sm:pt-8 md:pt-10 lg:pt-12 xl:pt-14">
        <DoodleSpark className="absolute left-0 top-4 h-9 w-9 opacity-50 sm:top-6 lg:top-8" />
        <DoodleBubble variant="villi" tail="right" delay={0.15}>
          I&apos;m Villi—VelocTech Inc.&apos;s AI guide on this site. Ask about our services, proof, or how we work; I answer while you explore.
        </DoodleBubble>
      </div>

      {/* Mobile — Villi only, split above mascot */}
      <div className="flex w-full max-w-lg flex-col gap-3 px-1 sm:hidden">
        <div className="flex items-end justify-between gap-3">
          <DoodleBubble variant="villi" tail="right" delay={0.12} className="max-w-[min(11.5rem,46vw)]">
            I&apos;m Villi—your AI guide here. Ask about VelocTech anytime.
          </DoodleBubble>
          <DoodleBubble variant="villi" tail="left" delay={0.22} className="max-w-[min(11.5rem,46vw)]">
            Tell me your goal—I&apos;ll map next steps and point you to proof, here or in chat.
          </DoodleBubble>
        </div>
      </div>

      <div className="relative z-20 mx-2 flex h-full min-h-0 shrink-0 items-end justify-center self-stretch sm:mx-6 md:mx-8 lg:mx-12 xl:mx-14">
        {children}
      </div>

      {/* Villi — right of mascot */}
      <div className="pointer-events-none relative hidden min-w-0 flex-1 flex-col items-start justify-end pb-8 sm:flex sm:pb-10 lg:pb-12">
        <DoodleBubble variant="villi" tail="left" delay={0.35}>
          Tell me your goal—I&apos;ll mirror how we&apos;d help, send you to the right pages here, and continue in chat for detail.
        </DoodleBubble>
        <DoodleSpark className="absolute bottom-14 right-0 h-10 w-10 opacity-50 lg:bottom-20" />
      </div>
    </div>
  );
}
