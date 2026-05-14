"use client";
import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

const SERVICES = [
  "Custom Paint Job",
  "Color Change (Full Respray)",
  "OEM / Paint Matching",
  "Panel or Spot Repaint",
  "BMW / European Paint",
  "Truck Paint",
  "Prep & Paint Correction",
  "Other / Not Sure Yet",
];

const VEHICLE_TYPES = [
  "Full-Size Truck (F-250, Ram 2500, Silverado HD, etc.)",
  "Half-Ton Truck (F-150, Silverado 1500, Tacoma, etc.)",
  "SUV / 4x4",
  "BMW",
  "European / Import",
  "Classic / Muscle Car",
  "Van / Work Vehicle",
  "Other",
];

export default function QuoteForm() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "",
    vehicleType: "", year: "", makeModel: "",
    service: "", description: "", budget: "",
  });
  const [status, setStatus] = useState<FormState>("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    // TODO: wire to email / CRM
    await new Promise((r) => setTimeout(r, 1400));
    setStatus("success");
  }

  return (
    <section id="quote" className="bg-[#0a0a0a] py-20 sm:py-28 px-5 sm:px-8 border-t border-white/5">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#E63B2E] text-xs font-bold uppercase tracking-[0.25em] mb-3">Free Quote</p>
          <h2 className="text-4xl sm:text-5xl font-black uppercase text-white leading-tight mb-4">
            Let&apos;s Talk<br />About Your Build.
          </h2>
          <p className="text-gray-400 text-base max-w-lg mx-auto">
            Fill this out and we&apos;ll get back to you with a quote — usually within 24 hours. No fluff, just numbers.
          </p>
        </div>

        {status === "success" ? (
          <div className="bg-[#111] border border-white/10 rounded-2xl p-12 text-center max-w-lg mx-auto">
            <div className="w-16 h-16 rounded-full bg-[#E63B2E]/10 border border-[#E63B2E]/30 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-[#E63B2E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-white font-black text-2xl uppercase mb-3">Request Received</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              We&apos;ll review your details and reach out within 24 hours. Talk soon.
            </p>
            <button
              onClick={() => { setStatus("idle"); setForm({ name: "", email: "", phone: "", vehicleType: "", year: "", makeModel: "", service: "", description: "", budget: "" }); }}
              className="border border-white/20 text-gray-400 text-xs font-bold uppercase tracking-widest px-6 py-3 rounded hover:border-white/40 hover:text-white transition-all"
            >
              Submit Another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-[#111] border border-white/5 rounded-2xl p-7 sm:p-10 space-y-7">

            {/* Contact info */}
            <div>
              <p className="text-white text-xs font-black uppercase tracking-widest mb-5 border-b border-white/10 pb-3">Your Info</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {[
                  { id: "name", label: "Full Name", placeholder: "John Smith", required: true, type: "text" },
                  { id: "email", label: "Email", placeholder: "you@email.com", required: true, type: "email" },
                  { id: "phone", label: "Phone", placeholder: "(215) 555-0100", required: false, type: "tel" },
                ].map((f) => (
                  <div key={f.id}>
                    <label htmlFor={f.id} className="block text-gray-400 text-xs uppercase tracking-widest mb-2">
                      {f.label} {f.required && <span className="text-[#E63B2E]">*</span>}
                    </label>
                    <input
                      id={f.id} name={f.id} type={f.type} required={f.required}
                      value={form[f.id as keyof typeof form]} onChange={handleChange}
                      placeholder={f.placeholder}
                      className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#E63B2E] transition-all"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Vehicle info */}
            <div>
              <p className="text-white text-xs font-black uppercase tracking-widest mb-5 border-b border-white/10 pb-3">Your Vehicle</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div className="sm:col-span-1">
                  <label htmlFor="year" className="block text-gray-400 text-xs uppercase tracking-widest mb-2">Year</label>
                  <input
                    id="year" name="year" type="text"
                    value={form.year} onChange={handleChange}
                    placeholder="e.g. 2019"
                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#E63B2E] transition-all"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="makeModel" className="block text-gray-400 text-xs uppercase tracking-widest mb-2">
                    Make & Model <span className="text-[#E63B2E]">*</span>
                  </label>
                  <input
                    id="makeModel" name="makeModel" type="text" required
                    value={form.makeModel} onChange={handleChange}
                    placeholder="e.g. Ford F-250 Super Duty, BMW M3..."
                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#E63B2E] transition-all"
                  />
                </div>
                <div className="sm:col-span-3">
                  <label htmlFor="vehicleType" className="block text-gray-400 text-xs uppercase tracking-widest mb-2">Vehicle Type</label>
                  <select
                    id="vehicleType" name="vehicleType"
                    value={form.vehicleType} onChange={handleChange}
                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E63B2E] transition-all"
                  >
                    <option value="">Select vehicle type...</option>
                    {VEHICLE_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
              </div>
            </div>

            {/* Job info */}
            <div>
              <p className="text-white text-xs font-black uppercase tracking-widest mb-5 border-b border-white/10 pb-3">The Job</p>
              <div className="space-y-5">
                <div>
                  <label htmlFor="service" className="block text-gray-400 text-xs uppercase tracking-widest mb-2">
                    Service Needed <span className="text-[#E63B2E]">*</span>
                  </label>
                  <select
                    id="service" name="service" required
                    value={form.service} onChange={handleChange}
                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E63B2E] transition-all"
                  >
                    <option value="">Select a service...</option>
                    {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="description" className="block text-gray-400 text-xs uppercase tracking-widest mb-2">
                    Describe the Job <span className="text-[#E63B2E]">*</span>
                  </label>
                  <textarea
                    id="description" name="description" required rows={5}
                    value={form.description} onChange={handleChange}
                    placeholder="Tell us what you're going for — color ideas, condition of the vehicle, any bodywork needed, timeline, anything that helps..."
                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#E63B2E] transition-all resize-none"
                  />
                </div>
                <div>
                  <label htmlFor="budget" className="block text-gray-400 text-xs uppercase tracking-widest mb-2">Budget Range <span className="text-gray-600 normal-case tracking-normal">(optional)</span></label>
                  <select
                    id="budget" name="budget"
                    value={form.budget} onChange={handleChange}
                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E63B2E] transition-all"
                  >
                    <option value="">Prefer not to say</option>
                    <option>Under $2,000</option>
                    <option>$2,000 – $5,000</option>
                    <option>$5,000 – $10,000</option>
                    <option>$10,000 – $20,000</option>
                    <option>$20,000+</option>
                  </select>
                </div>
              </div>
            </div>

            {status === "error" && (
              <p className="text-[#E63B2E] text-sm">Something went wrong. Give us a call directly.</p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full bg-[#E63B2E] text-white font-black uppercase tracking-widest py-4 rounded-lg hover:bg-red-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-sm shadow-lg shadow-red-900/20"
            >
              {status === "submitting" ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  Sending...
                </>
              ) : "Request My Quote"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
