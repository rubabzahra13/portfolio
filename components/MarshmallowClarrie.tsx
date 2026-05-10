'use client';

import Image from 'next/image';
import Link from 'next/link';

interface MarshmallowClarrieProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Kept for API compatibility; idle motion comes from ClarrieShowcase `.mascot-breathe`. */
  animate?: boolean;
  /** Tap target for the mascot; defaults to Villi AI chat. */
  href?: string;
}

const DISPLAY_WIDTH: Record<NonNullable<MarshmallowClarrieProps['size']>, number> = {
  sm: 140,
  md: 200,
  lg: 280,
  xl: 360,
};

/** Source asset `public/clarrie-firefly.png` — Firefly render, transparent BG (912×1157). */
const SRC_W = 912;
const SRC_H = 1157;

/**
 * Villi mascot from `/public/clarrie-firefly.png` (synced from Firefly_remove background asset).
 */
export default function MarshmallowClarrie({ size = 'md', href = '/chat' }: MarshmallowClarrieProps) {
  const displayW = DISPLAY_WIDTH[size];
  const displayH = Math.round(displayW * (SRC_H / SRC_W));
  const pad = Math.round(displayW * 0.12);

  return (
    <div
      className="relative flex items-end justify-center"
      style={{ width: displayW + pad * 2, minHeight: displayH + pad }}
    >
      <div
        className="relative z-10 flex flex-col items-center justify-end"
        style={{ width: displayW, minHeight: displayH }}
      >
        <Link
          href={href}
          className="group relative block max-w-full cursor-pointer rounded-xl outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          aria-label="Open Villi AI chat"
        >
          <Image
            src="/clarrie-firefly.png"
            width={SRC_W}
            height={SRC_H}
            alt="Villi, VelocTech Inc. AI assistant — robot mascot with glowing cyan-blue eyes"
            className="h-auto w-full max-w-full object-contain object-center drop-shadow-[0_16px_36px_rgba(0,0,0,0.5)] transition-transform duration-300 ease-out group-hover:scale-[1.02] group-active:scale-[0.99]"
            sizes={`(max-width: 640px) ${displayW}px, ${Math.min(displayW, 400)}px`}
            priority={size === 'lg' || size === 'xl'}
          />
        </Link>
      </div>
    </div>
  );
}
