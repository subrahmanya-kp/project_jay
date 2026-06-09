"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Results", href: "/#results" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/#contact" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="hdr" style={{ zIndex: 10000 }}>
        <div className="hdr-in wrap">
          <Link href="/" className="logo" aria-label="Pranava Skin Clinic — Home">
            <Image src="/images/logo.svg" alt="Pranava" width={38} height={38} className="mark" priority />
            <div className="name">
              Pranava
              <small>Skin · Hair · Aesthetics</small>
            </div>
          </Link>

          <nav className="nav" aria-label="Main navigation">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href}>{l.label}</Link>
            ))}
          </nav>

          <div className="hdr-actions">
            <a href="tel:+919483127354" className="hdr-phone">
              <PhoneIcon />
              +91 94831 27354
            </a>
            <Link href="/#contact" className="btn btn-primary" style={{ fontSize: "14px", padding: "10px 22px" }}>
              Book
            </Link>
          </div>

          <button
            className="hdr-burger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            style={{ zIndex: 10001 }}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>

      {mounted && menuOpen && createPortal(
        <div style={{
          position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: 9999,
          backgroundColor: "rgba(255,255,255,0.97)",
          backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)",
          display: "flex", flexDirection: "column",
          padding: "96px 28px 40px", overflowY: "auto",
        }}>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "28px" }}>
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} onClick={() => setMenuOpen(false)} style={{
                  display: "block",
                  fontFamily: "var(--font-display)",
                  fontSize: "2.25rem", fontWeight: 800,
                  color: "var(--ink)", textDecoration: "none",
                  letterSpacing: "-0.03em", lineHeight: 1.08,
                }}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "12px", paddingTop: "32px" }}>
            <Link href="/#contact" onClick={() => setMenuOpen(false)} style={{
              display: "block", textAlign: "center", padding: "16px",
              borderRadius: "999px", backgroundColor: "var(--primary)",
              color: "#ffffff", fontSize: "15.5px", fontWeight: 700, textDecoration: "none",
            }}>
              Book a Consultation
            </Link>
            <a href="tel:+919483127354" style={{
              display: "block", textAlign: "center", padding: "14px 16px",
              borderRadius: "999px", border: "1.5px solid var(--line)",
              color: "var(--ink)", fontSize: "15px", textDecoration: "none",
            }}>
              Call +91 94831 27354
            </a>
            <a href="https://www.instagram.com/pranava_skin/" target="_blank" rel="noopener noreferrer" style={{
              display: "flex", alignItems: "center", justifyContent: "center",
              gap: "8px", fontSize: "14px", color: "var(--muted)", textDecoration: "none",
            }}>
              <InstagramIcon />
              @pranava_skin
            </a>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}

function PhoneIcon() {
  return (
    <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.6 3.4 2 2 0 0 1 3.59 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l1.62-1.62a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <line x1="3" y1="7" x2="21" y2="7" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="17" x2="21" y2="17" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <line x1="6" y1="6" x2="18" y2="18" /><line x1="18" y1="6" x2="6" y2="18" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
