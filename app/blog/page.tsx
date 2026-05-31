import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { blogPosts } from "@/content/blog/posts";

export const metadata: Metadata = {
  title: "Dermatology Blog | Skin, Hair & Aesthetics Insights",
  description:
    "Expert dermatology articles from the Pranava Skin Clinic team. Acne treatment, hair loss, laser resurfacing, melasma, and anti-ageing in Bangalore.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <Nav />
      <main className="pt-16 lg:pt-20">
        {/* Header */}
        <div className="bg-champagne py-16 lg:py-24">
          <div className="max-w-content mx-auto px-6 lg:px-8">
            <p className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-slate-mid mb-4">
              Knowledge &amp; Insights
            </p>
            <h1 className="font-serif text-display-lg text-ink mb-4">
              Dermatology Blog
            </h1>
            <p className="font-sans text-base text-muted max-w-xl leading-relaxed">
              Evidence-based dermatology articles for patients in Bangalore —
              written by our clinical team to help you understand your skin.
            </p>
          </div>
        </div>

        {/* Posts */}
        <div className="max-w-content mx-auto px-6 lg:px-8 py-section">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-ivory border border-border hover:border-slate-light transition-colors"
              >
                {/* Category band */}
                <div className="bg-slate-mist px-5 py-2 flex items-center justify-between">
                  <span className="font-sans text-[10px] font-medium tracking-[0.15em] uppercase text-slate-mid">
                    {post.category}
                  </span>
                  <span className="font-sans text-[10px] text-muted">
                    {post.readingTime} read
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <p className="font-sans text-xs text-muted mb-3">
                    {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <h2 className="font-serif text-lg font-semibold text-ink group-hover:text-slate-deep transition-colors mb-3 leading-snug">
                    {post.title}
                  </h2>
                  <p className="font-sans text-sm text-muted leading-relaxed flex-1">
                    {post.excerpt}
                  </p>

                  <span className="mt-5 font-sans text-xs font-medium text-slate-deep flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    Read article
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                      <path d="M2 6h8M7 3l3 3-3 3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
