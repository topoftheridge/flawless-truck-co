const services = [
  {
    icon: "🎨",
    title: "Custom Paint",
    desc: "Full custom color work — single stage, base/clear, candy, pearl, metallics. Your color, your vision, flawless execution.",
  },
  {
    icon: "🔬",
    title: "Paint Matching",
    desc: "Dead-on OEM and custom color matching. Whether it's a panel, a full respray, or blending into existing paint — you won't find the seam.",
  },
  {
    icon: "🚛",
    title: "Trucks",
    desc: "Our bread and butter. F-250s, Silverados, Rams, Tacomas — full resprays, color changes, and custom finishes on anything with a bed.",
  },
  {
    icon: "🏎️",
    title: "BMW & European",
    desc: "Precision paint work on BMWs and European imports. OEM match or full custom color — same standard of finish either way.",
  },
  {
    icon: "💥",
    title: "Panel & Spot Work",
    desc: "Single panel, partial respray, or blend work. We'll match it so clean you won't know which panel was painted.",
  },
  {
    icon: "✨",
    title: "Prep & Finish",
    desc: "The prep is where paint jobs are won or lost. We don't skip steps — every surface is ready before a drop of paint goes down.",
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
            Every Panel.<br />Flawless Finish.
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
