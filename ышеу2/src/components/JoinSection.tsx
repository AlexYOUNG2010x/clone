import Link from "next/link";

const benefits = [
  "Never lose time again — End the daily frustration of hunting through tab chaos.",
  "Know yourself better — Discover exactly where your time goes and when you're most productive.",
  "Laser-sharp focus — Instantly silence all distractions with military precision.",
];

const listItems = [
  "No setup, no hassle",
  "No credit card required",
  "Cancel anytime, no worries",
  "Works on any device",
  "Instant access, no waiting",
  "Friendly support, real humans",
  "Secure and private by default",
  "Regular updates",
  "Save 50+ hours a week by focusing",
];

export default function JoinSection() {
  return (
    <section className="border-b border-white/10 bg-black py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Join 10000+ users who&apos;ve already transformed their workflow with TabAI
        </h2>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {benefits.map((b) => {
            const [title, desc] = b.split(" — ");
            return (
              <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm text-zinc-400">{desc}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white">
            Try a free extension and see how much you can get done.
          </h3>
          <Link
            href="https://chromewebstore.google.com/detail/tabai/fiogakiegoacaiplkdnjildblhfhchfi"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-lg bg-indigo-600 px-8 py-4 text-lg font-semibold text-white hover:bg-indigo-500"
          >
            Try for free
          </Link>
          <p className="mt-4 text-zinc-400">4.8/5 from real users (50+ reviews)</p>
          <ul className="mt-6 grid list-none gap-2 text-left sm:mx-auto sm:max-w-md sm:grid-cols-2 lg:max-w-2xl lg:grid-cols-3">
            {listItems.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-zinc-400">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
