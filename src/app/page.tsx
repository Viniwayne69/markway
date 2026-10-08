import { HeroSection } from "@/components/HeroSection";
import { TransformationSection } from "@/components/TransformationSection";
import { MethodSection } from "@/components/MethodSection";
import { ScrollEffects } from "@/components/ScrollEffects";
import { StickyBar } from "@/components/StickyBar";

export default function Home() {
  return (
    <main className="site-shell" aria-label="SPEARE">
      <StickyBar />
      <ScrollEffects />
      <HeroSection />
      <TransformationSection />
      <MethodSection />
    </main>
  );
}
