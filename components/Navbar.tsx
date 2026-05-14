"use client";
import { useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Get a Quote", href: "#quote", cta: true },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none">
            <span className="text-white font-black text-xl sm:text-2xl tracking-tight uppercase">Flawless</span>
            <span className="text-[#E63B2E] font-black text-[10px] sm:text-xs tracking-[0.25em] uppercase">Truck Co.</span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold">
            {NAV_LINKS.map((l) =>
              l.cta ? (
                <Link
                  key={l.label}
                  href={l.href}
                  className="bg-[#E63B2E] text-white px-5 py-2 rounded hover:bg-red-700 transition-all uppercase tracking-widest text-xs font-black"
                >
                  {l.label}
                </Link>
              ) : (
                <Link key={l.label} href={l.href} className="text-gray-300 hover:text-white transition-colors uppercase tracking-widest text-xs">
                  {l.label}
                </Link>
              )
            )}
          </div>

          {/* Mobile hamburger */}
          <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-white/10 px-5 pb-5 pt-3 space-y-1">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`block py-3 text-sm font-bold uppercase tracking-widest border-b border-white/10 last:border-0 ${l.cta ? "text-[#E63B2E]" : "text-gray-300 hover:text-white"}`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
