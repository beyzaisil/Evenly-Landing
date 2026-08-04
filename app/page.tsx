import { FeatureSection } from "@/components/sections/FeatureSection";
import { DemoSection } from "@/components/sections/demo-section"
import { FaqSection } from "@/components/sections/faq-section";
import { FooterSection } from "@/components/sections/footer-section";
import { AdvantageSections } from "@/components/sections/advantage-section";
import { MovingCards } from "@/components/sections/moving-section";

import { HeroSection } from "@/components/sections/hero-section";
import { FinalCtaSection } from "@/components/sections/last-cta-section"

export default function Home() {
  return (
    <>
      <MovingCards />
      <FaqSection />
      <HeroSection />
      <FeatureSection />
      <AdvantageSections />
      <DemoSection />
      <FaqSection />
      <FinalCtaSection />
      <FooterSection />


    </>
  );
}