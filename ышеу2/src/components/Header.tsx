"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 text-xl font-semibold text-white">
          <span className="text-indigo-400">TabAI</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/" className="text-sm text-zinc-300 hover:text-white">
            Home
          </Link>
          <Link href="/pricing" className="text-sm text-zinc-300 hover:text-white">
            Pricing
          </Link>
          <Link href="/early" className="text-sm text-zinc-300 hover:text-white">
            Future of TabAI
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="#"
            className="rounded-lg px-4 py-2 text-sm font-medium text-zinc-300 hover:text-white"
          >
            Sign in
          </Link>
          <Link
            href="#"
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500"
          >
            Get Started
          </Link>
          <Link
            href="https://chromewebstore.google.com/detail/tabai/fiogakiegoacaiplkdnjildblhfhchfi"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-white/20 px-4 py-2 text-sm font-medium text-white hover:bg-white/5"
          >
            Get Extension
          </Link>
        </div>
      </div>
    </header>
  );
}
