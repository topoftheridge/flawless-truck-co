const services = [
  {
    icon: "🎨",
    title: "Custom Paint Jobs",
    desc: "Full custom color work — single stage, base/clear, candy, metallics, and more. Your color, your vision.",
  },
  {
    icon: "🔧",
    title: "Full Restorations",
    desc: "Bare metal to showroom. We strip it down, fix it right, and lay paint that lasts decades.",
  },
  {
    icon: "🚛",
    title: "Trucks & Work Rigs",
    desc: "Our bread and butter. F-250s, Silverados, Rams, Tacomas — we know trucks inside and out.",
  },
  {
    icon: "🏎️",
    title: "European & Import",
    desc: "Specialty work on BMWs, Mercedes, and imports. OEM color match or full respray, done right.",
  },
  {
    icon: "💥",
    title: "Collision Repair",
    desc: "More than cosmetic — structural repair, filler work, and a paint match you can't find the seam on.",
  },
  {
    icon: "✨",
    title: "Detail & Prep",
    desc: "Every job includes a full paint correction and detail. We don't rush the prep — it shows in the finish.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#0a0a0a] py-20 sm:py-28 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <p className="text-[#E63B2E] text-xs font-bold uppercase tracking-[0.25em] mb-3">What We Do</p>
          <h2 className="text-4xl sm:text-5xl font-black uppercase text-white leading-tight">
            Every Job.<br />Flawless Finish.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-[#111] border border-white/5 rounded-xl p-7 hover:border-[#E63B2E]/40 hover:bg-[#161616] transition-all group"
            >
              <span className="text-3xl mb-5 block">{s.icon}</span>
              <h3 className="text-white font-black text-lg uppercase mb-2 group-hover:text-[#E63B2E] transition-colors">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
