// Gallery image IDs from Unsplash — truck / paint / auto themed
const GALLERY = [
  { src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80", alt: "Custom truck paint — full respray" },
  { src: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80", alt: "BMW restoration paint" },
  { src: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80", alt: "Truck — side profile custom color" },
  { src: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80", alt: "Performance car detail" },
  { src: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80", alt: "Classic truck restoration" },
  { src: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80", alt: "Lifted truck custom paint" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-[#080808] py-20 sm:py-28 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p className="text-[#E63B2E] text-xs font-bold uppercase tracking-[0.25em] mb-3">Our Work</p>
            <h2 className="text-4xl sm:text-5xl font-black uppercase text-white leading-tight">
              The Results<br />Speak.
            </h2>
          </div>
          <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
            Every photo is a real job off our floor. No stock images, no filters — just the finish.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {GALLERY.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-xl bg-[#111] group ${i === 0 ? "col-span-2 sm:col-span-1 lg:col-span-2 row-span-1" : ""}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-56 sm:h-64 lg:h-72 object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-xs font-bold uppercase tracking-wide">{img.alt}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 text-xs mt-8 uppercase tracking-widest">
          Full portfolio available — ask us when you reach out
        </p>
      </div>
    </section>
  );
}
