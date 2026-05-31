import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for could not be found.",
};

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="flex-1 flex flex-col items-center justify-center bg-ivory pt-16 text-center px-6 py-section">
        <span className="font-serif text-6xl text-slate-mist mb-6" aria-hidden="true">
          ◇
        </span>
        <h1 className="font-serif text-display-md text-ink mb-4">
          Page Not Found
        </h1>
        <p className="font-sans text-base text-muted mb-10 max-w-sm leading-relaxed">
          The page you&rsquo;re looking for doesn&rsquo;t exist or may have been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-7 py-3 bg-slate-deep text-ivory font-sans text-sm font-medium hover:bg-slate-mid transition-colors"
        >
          Back to Home
        </Link>
      </main>
      <Footer />
    </>
  );
}
