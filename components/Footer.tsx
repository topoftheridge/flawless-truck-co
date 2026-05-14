import { Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 py-12 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <a href="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/flawlesstruckcompanylogo.png"
            alt="Flawless Truck Co"
            width={160}
            height={80}
            className="h-10 w-auto object-contain"
          />
        </a>

        {/* Nav */}
        <div className="flex items-center gap-6 text-xs text-gray-500 uppercase tracking-widest font-bold">
          {["#services", "#gallery", "#about", "#quote"].map((href) => (
            <a key={href} href={href} className="hover:text-white transition-colors">
              {href.replace("#", "")}
            </a>
          ))}
        </div>

        {/* Phone */}
        <a
          href="tel:4352257936"
          className="flex items-center gap-2 text-white font-black text-sm hover:text-[#E63B2E] transition-colors"
        >
          <Phone className="w-4 h-4 text-[#E63B2E]" strokeWidth={2.5} />
          (435) 225-7936
        </a>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/5 text-center text-gray-600 text-xs">
        &copy; {new Date().getFullYear()} Flawless Truck Co. All rights reserved.
      </div>
    </footer>
  );
}
