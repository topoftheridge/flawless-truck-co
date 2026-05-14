"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
];

const PHONE = "4352257936";
const PHONE_DISPLAY = "(435) 225-7936";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">

          {/* Logo */}
          <Link href="/">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/flawlesstruckcompanylogo.png"
              alt="Flawless Truck Co"
              width={160}
              height={80}
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <Link key={l.label} href={l.href} className="text-gray-300 hover:text-white transition-colors uppercase tracking-widest text-xs font-bold">
                {l.label}
              </Link>
            ))}

            {/* Phone */}
            <a
              href={`tel:${PHONE}`}
              className="flex items-center gap-2 text-white font-black text-sm hover:text-[#E63B2E] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#E63B2E]" strokeWidth={2.5} />
              {PHONE_DISPLAY}
            </a>

            {/* CTA */}
            <a
              href="#quote"
              className="bg-[#E63B2E] text-white px-5 py-2 rounded uppercase tracking-widest text-xs font-black hover:bg-red-700 transition-all"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile hamburger */}
          <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
              className="block py-3 text-sm font-bold uppercase tracking-widest border-b border-white/10 text-gray-300 hover:text-white"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={`tel:${PHONE}`}
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 py-3 border-b border-white/10 text-white font-black text-sm"
          >
            <Phone className="w-4 h-4 text-[#E63B2E]" strokeWidth={2.5} />
            {PHONE_DISPLAY}
          </a>
          <a
            href="#quote"
            onClick={() => setOpen(false)}
            className="block py-3 text-[#E63B2E] font-black text-sm uppercase tracking-widest"
          >
            Get a Quote →
          </a>
        </div>
      )}
    </nav>
  );
}
