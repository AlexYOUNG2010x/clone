import Link from "next/link";

const productLinks = [
  { label: "Home", href: "/" },
  { label: "Pricing", href: "/pricing" },
  { label: "Apply for Beta", href: "/early" },
  { label: "Chrome Extension", href: "#" },
];

const resourcesLinks = [
  { label: "Blog", href: "#" },
  { label: "Free Pomodoro Timer", href: "#" },
  { label: "Contact Support", href: "mailto:support@tabai.dev" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Refund Policy", href: "#" },
  { label: "Terms of Use", href: "#" },
];

const companyLinks = [
  { label: "Dashboard", href: "#" },
  { label: "Twitter", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <span className="text-xl font-semibold text-indigo-400">TabAI Inc.</span>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-400">
              Product
            </h3>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-zinc-400 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-400">
              Resources
            </h3>
            <ul className="space-y-2">
              {resourcesLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-zinc-400 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-400">
              Legal
            </h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-zinc-400 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-400">
              Company
            </h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-zinc-400 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-zinc-500">
          Copyright © 2026 TabAI. All rights reserved.
        </div>
        <p className="mt-2 text-center text-sm text-zinc-500">Follow us on social media</p>
      </div>
    </footer>
  );
}
