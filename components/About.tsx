const stats = [
  { value: "10+", label: "Years Painting" },
  { value: "500+", label: "Vehicles Painted" },
  { value: "100%", label: "Paint Focused" },
  { value: "0", label: "Shortcuts Taken" },
];

export default function About() {
  return (
    <section id="about" className="bg-[#0d0d0d] py-20 sm:py-28 px-5 sm:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Image */}
        <div className="relative rounded-2xl overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=900&q=85"
            alt="Painter working in the shop"
            className="w-full h-72 sm:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-5 left-5 bg-[#E63B2E] text-white text-xs font-black uppercase tracking-widest px-4 py-2 rounded">
            Flawless Truck Co.
          </div>
        </div>

        {/* Text */}
        <div>
          <p className="text-[#E63B2E] text-xs font-bold uppercase tracking-[0.25em] mb-4">Who We Are</p>
          <h2 className="text-3xl sm:text-4xl font-black uppercase text-white leading-tight mb-6">
            Obsessed With<br />The Finish.
          </h2>
          <p className="text-gray-400 text-base leading-relaxed mb-4">
            Flawless Truck Co is a custom paint and color matching shop built for people who care. We specialize in trucks — full resprays, custom colors, and dead-on panel matching — and we do the same precision work on BMWs and imports.
          </p>
          <p className="text-gray-400 text-base leading-relaxed mb-10">
            No restoration fluff. Just paint. Prepped right, laid right, finished right. Every panel that rolls out of our shop looks like glass.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {stats.map((s) => (
              <div key={s.label} className="border-t-2 border-[#E63B2E] pt-4">
                <p className="text-white font-black text-2xl mb-1">{s.value}</p>
                <p className="text-gray-500 text-xs uppercase tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
