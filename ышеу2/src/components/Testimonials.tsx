"use client";

const testimonials = [
  {
    quote:
      "Recently I found a convenient tool called TabAI. It sorts tabs into groups, has timers, notes, and much more. I think its a must-have for everyone who struggles to stay focused on their tasks🔥",
    name: "Sultan Karilov",
    role: "AI Engineer, Runner, Startup Founder",
    avatar: "https://pbs.twimg.com/profile_images/1949548319736266752/4CTgorEC_400x400.jpg",
  },
  {
    quote:
      "So I was just tryna find a tool that would help me focus on my tasks while I'm locked in, and I found TabAI. It helps me sort my tabs on Comet and block all unnecessary websites that could break my lock in mode",
    name: "Bizhan",
    role: "CEO, Startup Founder",
    avatar: "https://tabai.dev/avatars/user4.png",
  },
  {
    quote:
      "As an early investor, I've seen a lot of \"productivity\" startups miss the mark. TabAI is one of the few that actually gets user behavior right. Smart, simple, sticky.",
    name: "Nurdaulet Bazylbekov",
    role: "Angel Investor, CEO Eurasian Hub",
    avatar: "https://pbs.twimg.com/profile_images/1952493667681181696/oVlsHI_k_400x400.jpg",
  },
  {
    quote:
      "It's pretty useful to track the time and keep myself in track. I really love this extension. Currently using it for two days so trying to know more about it and to keep using it to its maximum potential.",
    name: "Sabin Son",
    role: "Regular User",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVeBSsLKcWUN3dWRiqLQr0h1fd91QGQEarp-H5G8i3PJu1KE1TA=s96-w96-h96",
  },
  {
    quote:
      "Super useful. I was getting lost in tabs before, but now it's much easier to navigate them with this app.",
    name: "Salos List",
    role: "Regular User",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXGjrtGmzVGXQuzL1Pn3QdaePdJZ4sdfmn3brAYWdagzLVNB6g=s96-w96-h96",
  },
  {
    quote:
      "TabAI is a game-changer for studying! It helps me organize research tabs, block distracting sites during study sessions, and stay focused on my coursework. My grades improved significantly since I started using it.",
    name: "Alyona Korsun",
    role: "My girlfriend, 24/7 Grinding Student",
    avatar: "https://tabai.dev/user.png",
  },
  {
    quote:
      "As a student juggling multiple projects, TabAI is essential. The timer feature keeps me on track during study sessions, and tab grouping helps me separate assignments by subject. Perfect tool for serious students.",
    name: "Milan Gorislavets",
    role: "TabAI Intern, Hard Grinding Student",
    avatar: "https://tabai.dev/avatars/user6.png",
  },
  {
    quote:
      "TabAI turned my browser from a mess into a productivity powerhouse. The tab notes feature is perfect for keeping context without cluttering my workspace.",
    name: "Elena Volkov",
    role: "Marketing Director",
    avatar: "https://randomuser.me/api/portraits/women/27.jpg",
  },
  {
    quote:
      "Been using TabAI for 3 months now. Can't imagine working without it. The way it handles tab organization is exactly what I've been looking for.",
    name: "David Kim",
    role: "Freelance Consultant",
    avatar: "https://randomuser.me/api/portraits/men/18.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="border-b border-white/10 bg-black py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
          What our users say
        </h2>
        <p className="mt-4 text-center text-zinc-400">
          See what focused people tell about TabAI.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name + t.role}
              className="rounded-xl border border-white/10 bg-white/5 p-6 transition hover:border-white/20"
            >
              <p className="text-zinc-300">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-4 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-sm text-zinc-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
