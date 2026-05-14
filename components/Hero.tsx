import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background — full bleed truck image from Unsplash */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1800&q=85"
        alt="Custom painted truck"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-30"
      />

      {/* Gradient overlay — dark at bottom for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/90" />

      {/* Content */}
      <div className="relative z-10 text-center px-5 max-w-4xl mx-auto pt-24">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#E63B2E]/10 border border-[#E63B2E]/30 rounded-full px-4 py-1.5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] animate-pulse" />
          <span className="text-[#E63B2E] text-xs font-bold uppercase tracking-[0.2em]">Custom Paint & Restoration</span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-8xl font-black uppercase leading-none tracking-tight text-white mb-6">
          Built to<br />
          <span className="text-[#E63B2E]">Turn Heads.</span>
        </h1>

        <p className="text-gray-300 text-base sm:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
          Custom paint. Full restorations. From full-size trucks to classic BMWs — we make your vision flawless.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#quote"
            className="bg-[#E63B2E] text-white font-black px-8 py-4 rounded uppercase tracking-widest text-sm hover:bg-red-700 transition-all shadow-lg shadow-red-900/30"
          >
            Get a Free Quote
          </Link>
          <Link
            href="#gallery"
            className="border border-white/30 text-white font-bold px-8 py-4 rounded uppercase tracking-widest text-sm hover:border-white hover:bg-white/5 transition-all"
          >
            View Our Work
          </Link>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-white text-xs uppercase tracking-widest">Scroll</span>
        <svg className="w-4 h-4 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
