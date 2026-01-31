"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-black pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/20 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-4 text-center text-sm font-medium text-indigo-400">
          10,000+ focus sessions completed
        </p>
        <h1 className="mx-auto max-w-3xl text-center text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Save for Desktop
        </h1>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="https://chromewebstore.google.com/detail/tabai/fiogakiegoacaiplkdnjildblhfhchfi"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white hover:bg-indigo-500"
          >
            Get Extension
          </Link>
          <Link
            href="/pricing"
            className="rounded-lg border border-white/20 px-6 py-3 text-base font-semibold text-white hover:bg-white/5"
          >
            See Pricing
          </Link>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
          <a
            href="https://chromewebstore.google.com/detail/tabai/fiogakiegoacaiplkdnjildblhfhchfi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 hover:bg-white/10"
          >
            <span className="text-sm text-zinc-300">Available on Chrome Web Store</span>
          </a>
          <a
            href="https://peerlist.io/igorblink/project/tabai"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 hover:bg-white/10"
          >
            <span className="text-sm text-zinc-300">Peerlist Weekly Winner</span>
          </a>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5">
            <div className="aspect-[4/3] bg-zinc-800" />
            <p className="p-4 text-sm text-zinc-400">TabAI user - focus productivity</p>
          </div>
          <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5">
            <div className="aspect-[4/3] bg-zinc-800" />
            <p className="p-4 text-sm text-zinc-400">TabAI user - AI focus features</p>
          </div>
          <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5">
            <div className="aspect-[4/3] bg-zinc-800" />
            <p className="p-4 text-sm text-zinc-400">TabAI user - tab manager</p>
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <a
            href="https://www.youtube.com/watch?v=ltfS2PzfSTc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3 text-white hover:bg-white/5"
          >
            <span className="text-lg">▶</span> Watch video
          </a>
        </div>
      </div>
    </section>
  );
}
