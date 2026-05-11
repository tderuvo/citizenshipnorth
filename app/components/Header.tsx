"use client";

import { useState } from "react";

const navLinks = [
  { label: "Citizenship by Descent", href: "#ancestry" },
  { label: "Pathways", href: "#pathways" },
  { label: "FAQ", href: "#faq" },
  { label: "Updates", href: "#updates" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-offwhite/95 backdrop-blur-sm border-b border-stone">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-6">
        <a href="/" className="flex items-center gap-2.5 shrink-0">
          <span className="w-1.5 h-5 bg-red rounded-full" />
          <span
            className="text-navy font-semibold text-base tracking-tight"
            style={{ fontFamily: "var(--font-lora)" }}
          >
            Citizenship North
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7 flex-1 justify-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink/60 hover:text-navy transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#ancestry"
          className="hidden lg:inline-flex items-center gap-1.5 bg-navy text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-navy-dark transition-colors shrink-0"
        >
          Check Eligibility
        </a>

        <button
          className="lg:hidden p-1.5 text-navy rounded-md hover:bg-stone transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3 3l12 12M15 3L3 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M2.5 4.5h13M2.5 9h13M2.5 13.5h13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t border-stone bg-offwhite px-4 sm:px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-ink/70 hover:text-navy py-2 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-stone mt-2">
            <a
              href="#ancestry"
              onClick={() => setMenuOpen(false)}
              className="block text-center bg-navy text-white text-sm font-medium px-4 py-2.5 rounded-lg hover:bg-navy-dark transition-colors"
            >
              Check Eligibility
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
