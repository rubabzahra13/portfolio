import Link from "next/link";

/** Server-only: avoid client chunks here so a broken dev cache still renders this page (not Next’s minimal 404). */
export default function NotFound() {
  return (
    <main className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">VelocTech portfolio</p>
      <p className="mt-3 text-sm font-medium text-gray-500">404</p>
      <h1 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
        This page could not be found
      </h1>
      <p className="mt-3 max-w-md text-sm text-gray-400">
        Valid routes are{" "}
        <code className="rounded bg-surface px-1.5 py-0.5 text-gray-300">/</code> and{" "}
        <code className="rounded bg-surface px-1.5 py-0.5 text-gray-300">/chat</code>. If you see
        this at <code className="rounded bg-surface px-1.5 py-0.5 text-gray-300">/</code> in dev,
        stop other Next servers, then run{" "}
        <code className="rounded bg-surface px-1.5 py-0.5 text-gray-300">npm run dev:clean</code>{" "}
        and open the URL printed in the terminal (include the port).
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
        >
          Back to home
        </Link>
        <Link
          href="/chat"
          className="rounded-xl border border-gray-600 bg-surface px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-accent hover:text-accent"
        >
          Villi AI chat
        </Link>
      </div>
    </main>
  );
}
