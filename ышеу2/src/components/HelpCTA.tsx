import Link from "next/link";

export default function HelpCTA() {
  return (
    <section className="border-b border-white/10 bg-black py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Need help getting started? Book a free call with me
        </h2>
        <p className="mt-4 text-zinc-400">
          30-minute personal onboarding · Setup assistance · Live Q&A · 100% Free
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#"
            className="rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-500"
          >
            Schedule a Call
          </Link>
          <a
            href="mailto:support@tabai.dev"
            className="rounded-lg border border-white/20 px-6 py-3 font-semibold text-white hover:bg-white/5"
          >
            Email Me
          </a>
        </div>
      </div>
    </section>
  );
}
