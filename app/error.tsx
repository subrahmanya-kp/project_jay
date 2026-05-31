"use client";

import Link from "next/link";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex-1 flex flex-col items-center justify-center bg-ivory text-center px-6 py-section">
      <span className="font-serif text-6xl text-slate-mist mb-6" aria-hidden="true">
        ◎
      </span>
      <h2 className="font-serif text-display-md text-ink mb-4">
        Something went wrong
      </h2>
      <p className="font-sans text-base text-muted mb-10 max-w-sm leading-relaxed">
        An unexpected error occurred. Please try again or return to the home page.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={reset}
          className="px-7 py-3 bg-slate-deep text-ivory font-sans text-sm font-medium hover:bg-slate-mid transition-colors"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="px-7 py-3 border border-border text-ink font-sans text-sm font-medium hover:border-slate-deep hover:text-slate-deep transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
