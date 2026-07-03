"use client";

import { useState } from "react";

export default function Home() {
  const [slider, setSlider] = useState(50);

  const services = [
    "Lawn mowing",
    "Mulching",
    "Hedge trimming",
    "Spring cleanup",
    "Fall cleanup",
    "Driveway edging",
  ];

  const reviews = [
    "Andy showed up fast, did clean work, and made the yard look brand new.",
    "Great communication, fair pricing, and the cleanup was perfect.",
    "Reliable, professional, and the before and after difference was huge.",
  ];

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="relative overflow-hidden px-6 py-24 md:px-12">
        <div className="mx-auto max-w-7xl grid gap-12 md:grid-cols-2 items-center">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-green-400">
              Bucksport, Maine
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              Premium lawn care that makes your property look sharp.
            </h1>

            <p className="mt-6 text-lg text-neutral-300 max-w-xl">
              Andy&apos;s Lawn & Landscape provides clean, reliable lawn care,
              mulching, trimming, and seasonal cleanup for homes around
              Bucksport, Maine.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="tel:2076595940"
                className="rounded-full bg-green-500 px-8 py-4 font-bold text-black hover:bg-green-400"
              >
                Call Andy
              </a>
              <a
                href="#work"
                className="rounded-full border border-white/20 px-8 py-4 font-bold hover:bg-white hover:text-black"
              >
                See Work
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 text-center">
              <div className="rounded-2xl bg-white/5 p-4 border border-white/10">
                <p className="text-3xl font-black">5★</p>
                <p className="text-sm text-neutral-400">Local service</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-4 border border-white/10">
                <p className="text-3xl font-black">24hr</p>
                <p className="text-sm text-neutral-400">Fast replies</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-4 border border-white/10">
                <p className="text-3xl font-black">100%</p>
                <p className="text-sm text-neutral-400">Clean finish</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-neutral-900">
           <img
  src="/images/driveway-after.jpg.png"
  alt="Finished landscaping work"
  className="h-[520px] w-full object-cover"
/>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 bg-white text-black">
        <div className="mx-auto max-w-7xl">
          <p className="text-green-700 font-bold uppercase tracking-widest">
            Services
          </p>
          <h2 className="mt-3 text-4xl md:text-6xl font-black">
            Yard work handled right.
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service}
                className="rounded-3xl border border-neutral-200 p-8 shadow-sm hover:shadow-xl transition"
              >
                <p className="text-2xl font-black">{service}</p>
                <p className="mt-3 text-neutral-600">
                  Clean, reliable work with attention to detail from start to
                  finish.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="px-6 py-24 md:px-12 bg-neutral-950">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-green-400 font-bold uppercase tracking-widest">
              Before / After
            </p>
            <h2 className="mt-3 text-4xl md:text-6xl font-black">
              Drag the slider to see the difference.
            </h2>
          </div>

          <div className="relative mt-12 h-[600px] overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-900">
  <img
    src="/images/driveway-after.jpg.png"
    alt="After lawn care"
    className="absolute inset-0 h-full w-full object-cover"
  />

  <div
    className="absolute inset-0 overflow-hidden"
    style={{ width: `${slider}%` }}
  >
    <img
      src="/images/driveway-before.jpg.png"
      alt="Before lawn care"
      className="h-full w-[100vw] max-w-none object-cover"
    />
  </div>

  <div
    className="absolute top-0 h-full w-1 -translate-x-1/2 bg-white"
    style={{ left: `${slider}%` }}
  />

  <input
    type="range"
    min="0"
    max="100"
    value={slider}
    onChange={(e) => setSlider(Number(e.target.value))}
    className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
  />

  <div className="absolute left-6 top-6 rounded-full bg-black/70 px-4 py-2 text-sm font-bold">
    BEFORE
  </div>
  <div className="absolute right-6 top-6 rounded-full bg-black/70 px-4 py-2 text-sm font-bold">
    AFTER
  </div>
</div>
        
        </div>
      </section>

      <section className="px-6 py-24 md:px-12 bg-neutral-900">
        <div className="mx-auto max-w-7xl grid gap-8 md:grid-cols-3">
          <div className="rounded-3xl bg-white/5 p-8 border border-white/10">
            <h3 className="text-2xl font-black">Fast estimates</h3>
            <p className="mt-3 text-neutral-300">
              Call or text and get a clear price without the runaround.
            </p>
          </div>
          <div className="rounded-3xl bg-white/5 p-8 border border-white/10">
            <h3 className="text-2xl font-black">Clean work</h3>
            <p className="mt-3 text-neutral-300">
              Every job is finished with clean edges, cleanup, and detail.
            </p>
          </div>
          <div className="rounded-3xl bg-white/5 p-8 border border-white/10">
            <h3 className="text-2xl font-black">Local and reliable</h3>
            <p className="mt-3 text-neutral-300">
              Serving Bucksport and nearby Maine towns with dependable service.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-12 bg-white text-black">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-6xl font-black">
            What customers say.
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {reviews.map((review) => (
              <div key={review} className="rounded-3xl bg-neutral-100 p-8">
                <p className="text-yellow-500 text-xl">★★★★★</p>
                <p className="mt-5 text-neutral-700 leading-relaxed">
                  “{review}”
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-12 bg-green-500 text-black">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-5xl md:text-7xl font-black">
            Ready to clean up your property?
          </h2>
          <p className="mt-6 text-xl">
            Call Andy today for lawn care, mulching, trimming, and cleanup.
          </p>
          <a
            href="tel:2076595940"
            className="mt-10 inline-block rounded-full bg-black px-10 py-5 text-lg font-black text-white"
          >
            Call (207) 659-5940
          </a>
        </div>
      </section>

      <footer className="bg-black px-6 py-10 md:px-12">
        <div className="mx-auto max-w-7xl flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-2xl font-black">
              Andy&apos;s Lawn & Landscape
            </h3>
            <p className="text-neutral-400 mt-2">
              Lawn care, mulching, hedge trimming, and cleanup in Bucksport,
              Maine.
            </p>
          </div>

          <div className="text-neutral-400">
            <p>Bridge Street, Bucksport, ME</p>
            <p className="mt-2">(207) 659-5940</p>
            <p className="mt-2">Website demo built by Atlas</p>
          </div>
        </div>
      </footer>

      <a
        href="tel:2076595940"
        className="fixed bottom-6 right-6 rounded-full bg-green-500 px-6 py-4 font-black text-black shadow-2xl"
      >
        📞 Call Andy
      </a>
    </main>
  );
}