import { Palette, Layers, Wrench, Settings, PenTool, Sparkles, Hammer } from "lucide-react";

const services = [
  {
    Icon: Palette,
    title: "Paint Matching",
    desc: "Factory-style color matching for mirrors, handles, trim, small parts, accessories, and vehicle components. Dead-on every time.",
  },
  {
    Icon: Layers,
    title: "Custom Two-Tone Paint",
    desc: "Two-tone layouts and accent paint work for trucks, cars, and custom builds. Clean breaks, sharp lines, flawless blends.",
  },
  {
    Icon: Wrench,
    title: "Automotive Part Painting",
    desc: "Mirrors, handles, mud flaps, trim pieces, grilles, bumpers, brackets — if it comes off the vehicle, we can paint it.",
  },
  {
    Icon: Settings,
    title: "Suspension & Accessory Painting",
    desc: "Custom painted springs, suspension pieces, brackets, and visible accessories for a cleaner, more intentional build.",
  },
  {
    Icon: PenTool,
    title: "Custom Designs & Graphics",
    desc: "One-off designs, lettering, hood art, panel work, logos, and custom paint concepts. Bring an idea or start from scratch.",
  },
  {
    Icon: Sparkles,
    title: "Color Matched Accessories",
    desc: "Accessories painted to match your vehicle's exact body color for a seamless, more complete finished look.",
  },
  {
    Icon: Hammer,
    title: "Small Jobs & Custom Projects",
    desc: "Individual parts, specialty pieces, touch-up work, and unique requests. No job too small — if it needs paint, we'll talk.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#0a0a0a] py-20 sm:py-28 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <p className="text-[#E63B2E] text-xs font-bold uppercase tracking-[0.25em] mb-3">What We Do</p>
          <h2 className="text-4xl sm:text-5xl font-black uppercase text-white leading-tight">
            Every Panel.<br />Flawless Finish.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="bg-[#111] border border-white/5 rounded-xl p-7 hover:border-[#E63B2E]/40 hover:bg-[#161616] transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-[#E63B2E]/10 flex items-center justify-center mb-5">
                <Icon className="w-5 h-5 text-[#E63B2E]" strokeWidth={2} />
              </div>
              <h3 className="text-white font-black text-base uppercase mb-2 group-hover:text-[#E63B2E] transition-colors">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
