"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How does TabAI collect tasks automatically?",
    a: "TabAI connects to your productivity tools like Todoist, Notion, and Google Calendar to automatically pull all your tasks into one unified view. It syncs in real-time, tracks deadlines, and keeps everything organized so you never miss what needs doing.",
  },
  {
    q: "What integrations does TabAI support?",
    a: "TabAI currently integrates with Todoist, Notion, and Google Calendar. These integrations allow you to see all your tasks and events from different platforms in one place, without switching between apps.",
  },
  {
    q: "Can I create tasks from any text on the web?",
    a: "Yes! Simply select any text on any webpage—an email, a Slack message, a document—and TabAI's AI will instantly turn it into a task with context automatically extracted. Works everywhere in your browser.",
  },
  {
    q: "Is TabAI free to use?",
    a: "Yes! TabAI offers a free tier with core features including smart tab search, duplicate detection, and basic tab grouping. Premium features like AI-powered auto-grouping and advanced Pomodoro sessions are available in our Pro plan.",
  },
  {
    q: "How does the AI tab organization work?",
    a: "TabAI uses advanced machine learning to analyze tab content, URLs, and your browsing patterns. It automatically groups related tabs together, suggests optimal organization structures, and learns from your preferences over time to provide increasingly accurate suggestions.",
  },
  {
    q: "Will TabAI slow down my browser?",
    a: "No. TabAI is built with performance in mind and uses minimal system resources. The extension is optimized to run efficiently in the background without impacting your browsing speed or Chrome performance.",
  },
  {
    q: "Is my browsing data private and secure?",
    a: "Absolutely. TabAI processes all data locally on your device. We never collect, store, or share your browsing history or personal information. Your privacy is our top priority, and all AI processing happens entirely within your browser.",
  },
  {
    q: "Can I use TabAI on multiple devices?",
    a: "Yes! Your settings and preferences sync across all your devices where Chrome is installed. Simply sign in with the same account, and your custom tab groups, filters, and preferences will be available everywhere.",
  },
  {
    q: "What browsers does TabAI support?",
    a: "TabAI is currently available for Google Chrome and Chromium-based browsers (Edge, Brave, Opera). Support for Firefox and Safari is coming soon.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="border-b border-white/10 bg-black py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-center text-zinc-400">
          Everything you need to know about TabAI and how it transforms your browsing experience.
        </p>
        <div className="mt-12 space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={faq.q}
              className="rounded-lg border border-white/10 bg-white/5 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-4 text-left font-medium text-white hover:bg-white/5"
              >
                {faq.q}
                <span className="text-xl text-zinc-400">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>
              {openIndex === i && (
                <div className="border-t border-white/10 px-6 py-4 text-zinc-400">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-zinc-400">
          Can&apos;t find what you&apos;re looking for? Contact our{" "}
          <a href="mailto:support@tabai.dev" className="text-indigo-400 hover:underline">
            customer support team
          </a>
        </p>
      </div>
    </section>
  );
}
