"use client";

import { useState } from "react";

export default function Home() {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <main className="min-h-screen bg-[#05081A] text-white">
      <nav className="flex justify-between items-center px-12 py-8">
        <h2 className="text-3xl font-bold">Andy&apos;s Lawn & Landscape</h2>
        <a href="#contact" className="bg-blue-600 px-6 py-3 rounded-xl font-semibold">
          Free Estimate
        </a>
      </nav>

      <section className="grid lg:grid-cols-2 gap-16 px-12 py-20 items-center">
        <div>
          <p className="uppercase tracking-[5px] text-blue-400 font-semibold">
            Bucksport • Lawn Care
          </p>

          <h1 className="text-7xl font-bold leading-tight mt-5">
            Make Your Yard <br /> Stand Out Again
          </h1>

          <p className="text-gray-300 text-xl mt-8 leading-relaxed">
            Professional lawn care, hedge trimming, mulch installation, and
            seasonal cleanups throughout Bucksport and surrounding areas.
          </p>

          <div className="flex gap-5 mt-10">
            <a href="#contact" className="bg-blue-600 px-8 py-4 rounded-xl text-lg font-semibold">
              Get Free Estimate
            </a>
            <a href="tel:2076595940" className="border border-gray-500 px-8 py-4 rounded-xl text-lg">
              (207) 659-5940
            </a>
          </div>
        </div>

        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
          <img src="/images/driveway-after.jpg.png" className="h-[520px] w-full object-cover" />
        </div>
      </section>

      <section className="bg-white text-slate-950 px-12 py-24">
        <div className="max-w-7xl mx-auto">
          <p className="uppercase tracking-[5px] text-blue-600 font-semibold">
            Before & After
          </p>
          <h2 className="text-5xl font-bold mt-4">See the difference in one cleanup</h2>

          <div className="mt-12 relative h-[650px] rounded-[2rem] overflow-hidden shadow-2xl border">
            <img
              src="/images/driveway-before.jpg.png"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div
              className="absolute inset-0 overflow-hidden border-r-4 border-white"
              style={{ width: `${sliderPosition}%` }}
            >
             <img
  src="/images/driveway-after.jpg.png"
  className="h-full w-[calc(100vw-6rem)] max-w-none object-cover"
/>
            </div>

            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
            />

            <div
              className="absolute top-0 h-full w-1 bg-white pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            />

            <div
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white text-slate-950 h-16 w-16 rounded-full flex items-center justify-center font-bold shadow-xl pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              ↔
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#05081A] text-white px-12 py-24">
        <div className="max-w-7xl mx-auto">
          <p className="uppercase tracking-[5px] text-blue-400 font-semibold">Services</p>
          <h2 className="text-5xl font-bold mt-4">
            Lawn care services built for Maine properties
          </h2>

          <div className="grid md:grid-cols-4 gap-5 mt-12">
            {["Leaf Cleanup", "Hedge Trimming", "Lawn Care", "Mulching"].map((service) => (
              <div key={service} className="border border-white/10 bg-white/5 rounded-3xl p-8">
                <h3 className="text-2xl font-bold">{service}</h3>
                <p className="text-gray-300 mt-4">
                  Reliable outdoor service for homeowners around Bucksport.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white text-slate-950 px-12 py-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14">
          <div>
            <p className="uppercase tracking-[5px] text-blue-600 font-semibold">
              Free Estimate
            </p>
            <h2 className="text-5xl font-bold mt-4">
              Need lawn care around Bucksport?
            </h2>
            <p className="text-gray-600 text-xl mt-6 leading-relaxed">
              Call Andy&apos;s Lawn & Landscape or send a quick message.
            </p>
            <a href="tel:2076595940" className="inline-block mt-8 bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold">
              Call (207) 659-5940
            </a>
          </div>

          <form className="bg-slate-100 rounded-3xl p-8 grid gap-4">
            <input className="p-4 rounded-xl border" placeholder="Your name" />
            <input className="p-4 rounded-xl border" placeholder="Phone number" />
            <input className="p-4 rounded-xl border" placeholder="Service needed" />
            <textarea className="p-4 rounded-xl border" placeholder="Tell us about the job" rows={5} />
            <button className="bg-slate-950 text-white p-4 rounded-xl font-bold">
              Request Free Estimate
            </button>
          </form>
        </div>
      </section>

      <a
        href="tel:2076595940"
        className="fixed bottom-6 right-6 bg-blue-600 text-white px-6 py-4 rounded-full font-bold shadow-2xl"
      >
        📞 Call Andy
      </a>
    </main>
  );
}