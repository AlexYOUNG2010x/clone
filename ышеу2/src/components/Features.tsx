const features = [
  {
    title: "Automatic Task Collection",
    description:
      "Your tasks live in different places. TabAI pulls them into one view and tracks what's due, so nothing slips through.",
    bullets: ["Syncs Todoist, Notion, Google Calendar", "See what's due without switching apps"],
  },
  {
    title: "Context-Aware Blocking",
    description:
      "AI understands what you're working on and blocks distractions based on your current task context.",
    bullets: ["Learns your work patterns", "Automatic distraction detection"],
  },
  {
    title: "Smart Tab Organization",
    description:
      "AI automatically groups and organizes tabs by work context, keeping your browser clean.",
    bullets: ["Auto-grouping by project", "Duplicate tab detection"],
  },
  {
    title: "Turn Any Text Into a Task",
    description:
      "Select text anywhere on the web—an email, a Slack message, a doc—and create a task instantly with AI.",
    bullets: ["Works on any webpage", "AI extracts context automatically"],
  },
  {
    title: "Focus Sessions & Pomodoro",
    description:
      "Built-in Pomodoro timer with automatic blocking during focus sessions for deep work.",
    bullets: ["Customizable work sessions", "Smart break reminders"],
  },
  {
    title: "Productivity Analytics",
    description:
      "Track focus time, blocked distractions, and productivity patterns with unified analytics.",
    bullets: ["Focus time tracking", "Distraction insights"],
  },
];

export default function Features() {
  return (
    <section className="border-b border-white/10 bg-black py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-white/10 bg-white/5 p-6 transition hover:border-white/20"
            >
              <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
              <p className="mt-3 text-sm text-zinc-400">{feature.description}</p>
              <ul className="mt-4 space-y-1">
                {feature.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-2 text-sm text-zinc-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
