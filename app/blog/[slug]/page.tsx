import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { blogPosts, getPostBySlug } from "@/content/blog/posts";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: `${post.title} | Pranava Skin Clinic`,
      description: post.metaDescription,
      url: `/blog/${slug}`,
      type: "article",
      publishedTime: post.publishedAt,
    },
  };
}

function renderContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="font-serif text-display-md text-ink mt-10 mb-4">
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="font-serif text-lg font-semibold text-ink mt-7 mb-3">
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith("**") && line.endsWith("**")) {
      elements.push(
        <p key={i} className="font-sans font-semibold text-ink mt-4 mb-2">
          {line.slice(2, -2)}
        </p>
      );
    } else if (line.startsWith("- ")) {
      const listItems: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        listItems.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="space-y-2 my-4">
          {listItems.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 font-sans text-sm text-muted">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-slate-deep flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      );
      continue;
    } else if (line.trim() !== "") {
      elements.push(
        <p key={i} className="font-sans text-base text-muted leading-relaxed my-4">
          {line}
        </p>
      );
    }

    i++;
  }

  return elements;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <Nav />
      <main className="pt-16 lg:pt-20">
        {/* Header */}
        <div className="bg-champagne hex-bg py-16 lg:py-24">
          <div className="max-w-content mx-auto px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 font-sans text-xs text-muted flex-wrap">
                <li>
                  <Link href="/" className="hover:text-ink transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">·</li>
                <li>
                  <Link href="/blog" className="hover:text-ink transition-colors">
                    Blog
                  </Link>
                </li>
                <li aria-hidden="true">·</li>
                <li className="text-ink">{post.category}</li>
              </ol>
            </nav>

            <div className="flex items-center gap-3 mb-4">
              <span className="font-sans text-[10px] font-medium tracking-[0.15em] uppercase text-slate-mid bg-slate-mist px-2.5 py-1">
                {post.category}
              </span>
              <span className="font-sans text-xs text-muted">{post.readingTime} read</span>
            </div>

            <h1 className="font-serif text-display-lg text-ink mb-4 max-w-3xl">
              {post.title}
            </h1>

            <p className="font-sans text-xs text-muted">
              Published{" "}
              {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}{" "}
              &middot; Pranava Skin, Hair &amp; Aesthetics Clinic
            </p>
          </div>
        </div>

        {/* Article body */}
        <div className="max-w-content mx-auto px-6 lg:px-8 py-section">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            <article className="lg:col-span-2 max-w-none">
              {renderContent(post.content)}

              {/* Disclaimer */}
              <div className="mt-12 p-6 bg-champagne border-l-2 border-slate-deep">
                <p className="font-sans text-xs text-muted leading-relaxed">
                  <strong className="text-ink">Medical disclaimer:</strong> This
                  article is for informational purposes only and does not
                  constitute medical advice. Always consult a qualified
                  dermatologist before beginning any treatment.{" "}
                  <Link href="/disclaimer" className="underline underline-offset-2">
                    Full disclaimer
                  </Link>
                  .
                </p>
              </div>
            </article>

            {/* Sidebar */}
            <aside>
              <div className="sticky top-24 space-y-8">
                <div className="bg-ivory border border-border p-6">
                  <h3 className="font-serif text-base font-semibold text-ink mb-3">
                    Consult a Dermatologist
                  </h3>
                  <p className="font-sans text-sm text-muted leading-relaxed mb-5">
                    Questions about your skin? Our dermatologist is here to help.
                  </p>
                  <Link
                    href="/#contact"
                    className="block w-full text-center py-2.5 bg-slate-deep text-ivory font-sans text-sm font-medium hover:bg-slate-mid transition-colors"
                  >
                    Book a Consultation
                  </Link>
                </div>

                {relatedPosts.length > 0 && (
                  <div>
                    <p className="font-sans text-[10px] font-medium tracking-[0.2em] uppercase text-muted mb-4">
                      Related Reading
                    </p>
                    <ul className="space-y-4">
                      {relatedPosts.map((p) => (
                        <li key={p.slug}>
                          <Link
                            href={`/blog/${p.slug}`}
                            className="font-sans text-sm text-muted hover:text-ink transition-colors leading-snug block"
                          >
                            {p.title}
                          </Link>
                          <span className="font-sans text-xs text-muted/60 mt-0.5 block">
                            {p.readingTime} read
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
