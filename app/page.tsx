import { FeatureSection } from "@/components/sections/FeatureSection";
import { DemoSection } from "@/components/sections/demo-section"
import { FaqSection } from "@/components/sections/faq-section";
import { FooterSection } from "@/components/sections/footer-section";
import { AdvantageSections } from "@/components/sections/advantage-section";
export default function Home() {
  return (
    <>
      <FaqSection />
      <FeatureSection />
      <DemoSection />
      <FooterSection />
      <AdvantageSections />
    </>
  );
}