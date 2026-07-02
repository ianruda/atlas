"use client";

import { useState } from "react";

const services = ["Lawn Care", "Mulching", "Hedge Trimming", "Leaf Cleanup"];

const reviews = [
  "Fast response, fair pricing, and the yard looked great.",
  "Andy did a great job cleaning up our property before summer.",
  "Reliable, easy to contact, and professional work.",
];

export default function Home() {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <main className="min-h-screen bg-[#05081A] text-white scroll-smooth">
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#05081A]/80 border-b border-white/10 px-8 md:px-12 py-5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h2 className="text-2xl md:text-3xl font-black tracking-tight">
            Andy&apos;s Lawn & Landscape
          </h2>

          <a
            href="#contact"
            className="bg-white text-slate-950 px-5 py-3 rounded-full font-bold hover:bg-blue-500 hover:text-white transition"
          >
            Free Estimate
          </a>
        </div>
      </nav>

      <section className="relative overflow-hidden px-8 md:px-12 py-20 md:py-28">
        <div className="absolute top-20 right-0 h-96 w-96 bg-blue-600/30 blur-[120px] rounded-full" />

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-[6px] text-blue-400 font-bold text-sm">
              Bucksport • Maine
            </p>

            <h1 className="text-6xl md:text-8xl font-black leading-[0.95] mt-6 tracking-tight">
              Make Your Yard Look Sharp Again
            </h1>

            <p className="text-gray-300 text-xl mt-8 leading-relaxed max-w-xl">
              Lawn care, mulching, hedge trimming, and seasonal cleanups for
              homeowners around Bucksport.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <a
                href="#contact"
                className="bg-blue-600 px-8 py-4 rounded-full text-lg font-bold text-center hover:bg-blue-500 transition"
              >
                Get Free Estimate
              </a>

              <a
                href="tel:2076595940"
                className="border border-white/20 px-8 py-4 rounded-full text-lg font-bold text-center hover:bg-white hover:text-slate-950 transition"
              >
                Call (207) 659-5940
              </a>
            </div>

            <div className="flex flex-wrap gap-4 mt-10 text-sm text-gray-300">
              <span className="bg-white/10 px-4 py-2 rounded-full">⭐ Local Business</span>
              <span className="bg-white/10 px-4 py-2 rounded-full">🌲 Bucksport</span>
              <span className="bg-white/10 px-4 py-2 rounded-full">🍂 Seasonal Cleanup</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-blue-600/20 blur-3xl rounded-[3rem]" />
            <img
              src="/images/driveway-after.jpg.png"
              className="relative h-[560px] w-full object-cover rounded-[2rem] shadow-2xl border border-white/10"
            />
          </div>
        </div>
      </section>

      <section className="bg-white text-slate-950 px-8 md:px-12 py-28">
        <div className="max-w-7xl mx-auto">
          <p className="uppercase tracking-[6px] text-blue-600 font-bold text-sm">
            Before & After
          </p>

          <h2 className="text-5xl md:text-7xl font-black mt-4 tracking-tight">
            See the difference.
          </h2>

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
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white text-slate-950 h-16 w-16 rounded-full flex items-center justify-center font-black shadow-xl pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              ↔
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 md:px-12 py-28">
        <div className="max-w-7xl mx-auto">
          <p className="uppercase tracking-[6px] text-blue-400 font-bold text-sm">
            Services
          </p>

          <h2 className="text-5xl md:text-7xl font-black mt-4 tracking-tight">
            Built for Maine properties.
          </h2>

          <div className="grid md:grid-cols-4 gap-5 mt-12">
            {services.map((service) => (
              <div
                key={service}
                className="group border border-white/10 bg-white/5 rounded-[2rem] p-8 hover:bg-white hover:text-slate-950 transition duration-300"
              >
                <h3 className="text-2xl font-black">{service}</h3>
                <p className="text-gray-300 group-hover:text-slate-600 mt-5 leading-relaxed">
                  Reliable outdoor service for homeowners around Bucksport.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white text-slate-950 px-8 md:px-12 py-28">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="uppercase tracking-[6px] text-blue-600 font-bold text-sm">
              Free Estimate
            </p>

            <h2 className="text-5xl md:text-7xl font-black mt-4 tracking-tight">
              Need lawn care around Bucksport?
            </h2>

            <p className="text-gray-600 text-xl mt-6 leading-relaxed">
              Call Andy&apos;s Lawn & Landscape or send a quick message about
              your yard, cleanup, mulch, or trimming job.
            </p>

            <a
              href="tel:2076595940"
              className="inline-block mt-8 bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-500 transition"
            >
              Call (207) 659-5940
            </a>
          </div>

          <form className="bg-slate-100 rounded-[2rem] p-8 grid gap-4 shadow-xl">
            <input className="p-4 rounded-xl border" placeholder="Your name" />
            <input className="p-4 rounded-xl border" placeholder="Phone number" />
            <input className="p-4 rounded-xl border" placeholder="Service needed" />
            <textarea
              className="p-4 rounded-xl border"
              placeholder="Tell us about the job"
              rows={5}
            />
            <button className="bg-slate-950 text-white p-4 rounded-full font-black hover:bg-blue-600 transition">
              Request Free Estimate
            </button>
          </form>
        </div>
      </section>

      <section className="px-8 md:px-12 py-28">
        <div className="max-w-7xl mx-auto">
          <p className="uppercase tracking-[6px] text-blue-400 font-bold text-sm">
            Reviews
          </p>

          <h2 className="text-5xl md:text-7xl font-black mt-4 tracking-tight">
            Trusted locally.
          </h2>

          <div className="grid md:grid-cols-3 gap-5 mt-12">
            {reviews.map((review) => (
              <div key={review} className="bg-white/5 border border-white/10 rounded-[2rem] p-8">
                <p className="text-yellow-400 text-xl">★★★★★</p>
                <p className="text-gray-300 mt-5 leading-relaxed">“{review}”</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-black text-white px-8 md:px-12 py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
          <div>
            <h3 className="text-2xl font-black">Andy&apos;s Lawn & Landscape</h3>
            <p className="text-gray-400 mt-2">
              Lawn care, mulching, hedge trimming, and leaf cleanup in Bucksport, Maine.
            </p>
          </div>

          <div className="text-gray-300">
            <p>Bridge Street, Bucksport, ME</p>
            <p className="mt-2">(207) 659-5940</p>
            <p className="mt-2">Website demo built by Atlas</p>
          </div>
        </div>
      </footer>

      <a
        href="tel:2076595940"
        className="fixed bottom-6 right-6 bg-blue-600 text-white px-6 py-4 rounded-full font-black shadow-2xl hover:bg-blue-500 transition"
      >
        📞 Call Andy
      </a>
    </main>
  );
}