import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 text-center">
      <p className="text-sm font-medium text-gray-500">404</p>
      <h1 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
        This page could not be found
      </h1>
      <p className="mt-3 max-w-md text-sm text-gray-400">
        Check the address, or open the portfolio from the correct dev URL (the
        port shown in your terminal when you run{" "}
        <code className="rounded bg-surface px-1.5 py-0.5 text-gray-300">
          npm run dev
        </code>
        ).
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
