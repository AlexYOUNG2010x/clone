import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HelpCTA from "@/components/HelpCTA";
import Testimonials from "@/components/Testimonials";
import Universities from "@/components/Universities";
import CTAStrip from "@/components/CTAStrip";
import JoinSection from "@/components/JoinSection";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HelpCTA />
      <Testimonials />
      <Universities />
      <CTAStrip />
      <JoinSection />
      <FAQ />
    </>
  );
}
