"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact Us", href: "/#contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isHome = pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHome
          ? "bg-ink/98 backdrop-blur-md shadow-nav-dark"
          : "bg-ink/60 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-content mx-auto px-6 lg:px-8 h-16 lg:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group" aria-label="Pranava Skin Clinic — Home">
          <Image
            src="/images/logo.svg"
            alt="Pranava Skin, Hair and Aesthetics Clinic"
            width={48}
            height={48}
            className="h-10 w-10 lg:h-12 lg:w-12 object-contain"
            priority
          />
          <div className="ml-2.5 flex flex-col leading-none">
            <span className="font-serif text-base lg:text-lg font-semibold text-ivory tracking-tight group-hover:text-gold transition-colors">
              Pranava
            </span>
            <span className="text-[9px] font-sans text-ivory/40 tracking-[0.15em] uppercase">
              Skin · Hair · Aesthetics
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-8" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-sans text-sm font-medium text-ivory/60 hover:text-ivory transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-gold after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA + Instagram */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://www.instagram.com/pranava_skin/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pranava Skin on Instagram"
            className="text-ivory/50 hover:text-gold transition-colors mr-1"
          >
            <InstagramIcon />
          </a>
          <a
            href="tel:+919483127354"
            className="inline-flex items-center gap-2 px-4 py-2 border border-ivory/25 text-ivory text-sm font-medium hover:border-gold hover:text-gold transition-colors duration-200"
          >
            <PhoneIcon />
            +91 94831 27354
          </a>
          <Link
            href="/#contact"
            className="inline-flex items-center px-5 py-2 bg-gold text-obsidian text-sm font-semibold tracking-wide hover:bg-gold/90 transition-colors duration-200"
          >
            Book
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 -mr-2 text-ivory"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-ink z-40 flex flex-col p-6">
          <ul className="flex flex-col gap-6 mt-4" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-serif text-2xl text-ivory/80 hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-auto flex flex-col gap-3">
            <Link
              href="/#contact"
              onClick={() => setMenuOpen(false)}
              className="w-full text-center py-3 bg-gold text-obsidian text-sm font-semibold tracking-wide"
            >
              Book a Consultation
            </Link>
            <a
              href="tel:+919483127354"
              className="w-full text-center py-3 border border-ivory/25 text-ivory text-sm font-medium tracking-wide"
            >
              Call +91 94831 27354
            </a>
            <a
              href="https://www.instagram.com/pranava_skin/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-sm text-ivory/50"
            >
              <InstagramIcon />
              <span>@pranava_skin</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.6 3.4 2 2 0 0 1 3.59 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l1.62-1.62a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <line x1="3" y1="7" x2="21" y2="7" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="17" x2="21" y2="17" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="18" y1="6" x2="6" y2="18" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
