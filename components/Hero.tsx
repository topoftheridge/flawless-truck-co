"use client";
import { useState } from "react";
import { Phone, ChevronDown } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

const SERVICES = [
  "Paint Matching",
  "Custom Two-Tone Paint",
  "Automotive Part Painting",
  "Suspension & Accessory Painting",
  "Custom Designs & Graphics",
  "Color Matched Accessories",
  "Small Job / Custom Project",
  "Not Sure Yet",
];

export default function Hero() {
  const [form, setForm] = useState({ name: "", phone: "", vehicle: "", service: "" });
  const [status, setStatus] = useState<Status>("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    // TODO: wire to email / CRM
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
  }

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative h-[75vh] min-h-[520px] flex items-center justify-center overflow-hidden bg-black">
        {/* Background image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1800&q=85"
          alt="Custom painted truck"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-35"
        />
        {/* Gradient — strong fade at bottom so card overlaps cleanly */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black" />

        {/* Hero copy */}
        <div className="relative z-10 text-center px-5 max-w-3xl mx-auto pt-20 pb-32">

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase leading-none tracking-tight text-white mb-5">
            Built to<br />
            <span className="text-[#E63B2E]">Turn Heads.</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-lg mx-auto mb-8">
            Color matching, two-tones, part painting, graphics, and accessories — paint work done right.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#quote"
              className="bg-[#E63B2E] text-white font-black px-8 py-4 rounded uppercase tracking-widest text-sm hover:bg-red-700 transition-all shadow-lg shadow-red-900/30"
            >
              Get a Free Quote
            </a>
            <a
              href="tel:4352257936"
              className="flex items-center gap-3 border border-white/20 bg-white/5 text-white font-black px-8 py-4 rounded hover:border-white/40 hover:bg-white/10 transition-all"
            >
              <Phone className="w-5 h-5 text-[#E63B2E]" strokeWidth={2.5} />
              <span className="text-lg tracking-wide">(435) 225-7936</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── Quote Card (overlaps hero) ── */}
      <div className="relative z-10 -mt-24 px-5 sm:px-8 pb-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#111] border border-white/8 rounded-2xl shadow-2xl shadow-black/60 overflow-hidden">
            {/* Red top bar */}
            <div className="h-1 w-full bg-[#E63B2E]" />

            <div className="p-7 sm:p-10">
              {status === "success" ? (
                <div className="text-center py-8">
                  <div className="w-14 h-14 rounded-full bg-[#E63B2E]/10 border border-[#E63B2E]/30 flex items-center justify-center mx-auto mb-5">
                    <svg className="w-7 h-7 text-[#E63B2E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-white font-black text-xl uppercase mb-2">Request Received</h3>
                  <p className="text-gray-400 text-sm">We&apos;ll reach out within 24 hours. Talk soon.</p>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <h2 className="text-white font-black text-xl sm:text-2xl uppercase">Get a Fast Quote</h2>
                    <p className="text-gray-500 text-sm mt-1">Tell us about your vehicle and we&apos;ll get back to you fast.</p>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                      {/* Name */}
                      <div>
                        <label className="block text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-2">
                          Your Name <span className="text-[#E63B2E]">*</span>
                        </label>
                        <input
                          name="name" type="text" required
                          value={form.name} onChange={handleChange}
                          placeholder="John Smith"
                          className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#E63B2E] transition-all"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-2">
                          Phone <span className="text-[#E63B2E]">*</span>
                        </label>
                        <input
                          name="phone" type="tel" required
                          value={form.phone} onChange={handleChange}
                          placeholder="(215) 555-0100"
                          className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#E63B2E] transition-all"
                        />
                      </div>

                      {/* Vehicle */}
                      <div>
                        <label className="block text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-2">
                          Vehicle <span className="text-[#E63B2E]">*</span>
                        </label>
                        <input
                          name="vehicle" type="text" required
                          value={form.vehicle} onChange={handleChange}
                          placeholder="2021 F-250, BMW M3..."
                          className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#E63B2E] transition-all"
                        />
                      </div>

                      {/* Service */}
                      <div>
                        <label className="block text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-2">
                          Service Needed <span className="text-[#E63B2E]">*</span>
                        </label>
                        <select
                          name="service" required
                          value={form.service} onChange={handleChange}
                          className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E63B2E] transition-all"
                        >
                          <option value="">Select...</option>
                          {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full bg-[#E63B2E] text-white font-black uppercase tracking-widest py-3.5 rounded-lg hover:bg-red-700 transition-all disabled:opacity-50 flex items-center justify-center gap-2 text-sm shadow-lg shadow-red-900/20"
                    >
                      {status === "submitting" ? (
                        <>
                          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                          </svg>
                          Sending...
                        </>
                      ) : "Get My Free Quote →"}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
