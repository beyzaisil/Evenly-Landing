import { FeatureSection } from "@/components/sections/FeatureSection";
import { DemoSection } from "@/components/sections/demo-section"
import { FaqSection } from "@/components/sections/faq-section";
export default function Home() {
  return (
    <>
      
      <FaqSection />
      <FeatureSection />
      <DemoSection />
    </>
  );
}