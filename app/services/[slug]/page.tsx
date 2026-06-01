import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { services, getServiceBySlug } from "@/content/services";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.title,
    description: service.metaDescription,
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      title: `${service.title} | Pranava Skin Clinic Bangalore`,
      description: service.metaDescription,
      url: `/services/${slug}`,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <Nav />
      <main className="pt-16 lg:pt-20">
        {/* Hero band */}
        <div className="bg-champagne hex-bg py-16 lg:py-24">
          <div className="max-w-content mx-auto px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 font-sans text-xs text-muted">
                <li>
                  <Link href="/" className="hover:text-ink transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">·</li>
                <li>
                  <Link href="/#services" className="hover:text-ink transition-colors">
                    Services
                  </Link>
                </li>
                <li aria-hidden="true">·</li>
                <li className="text-ink">{service.title}</li>
              </ol>
            </nav>

            <span
              className="text-3xl text-slate-mid mb-4 block"
              aria-hidden="true"
            >
              {service.icon}
            </span>
            <h1 className="font-serif text-display-lg text-ink mb-4">
              {service.title}
            </h1>
            <p className="font-sans text-base text-muted leading-relaxed max-w-xl">
              {service.shortDescription}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-content mx-auto px-6 lg:px-8 py-section">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Main content */}
            <div className="lg:col-span-2">
              <p className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-slate-mid mb-4">
                About This Treatment
              </p>
              <div className="font-sans text-base text-muted leading-relaxed space-y-4">
                {service.fullDescription.split("\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

            </div>

            {/* Sidebar */}
            <aside>
              <div className="sticky top-24 space-y-6">
                {/* Other services */}
                <div>
                  <p className="font-sans text-[10px] font-medium tracking-[0.2em] uppercase text-muted mb-3">
                    Other Services
                  </p>
                  <ul className="space-y-2">
                    {services
                      .filter((s) => s.slug !== service.slug)
                      .slice(0, 4)
                      .map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={`/services/${s.slug}`}
                            className="font-sans text-sm text-muted hover:text-ink transition-colors flex items-center gap-2"
                          >
                            <span className="text-slate-light" aria-hidden="true">
                              {s.icon}
                            </span>
                            {s.title}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
