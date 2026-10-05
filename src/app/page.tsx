import { HeroSection } from "@/components/HeroSection";
import { TransformationSection } from "@/components/TransformationSection";
import { MethodSection } from "@/components/MethodSection";

export default function Home() {
  return (
    <main className="site-shell" aria-label="MARKWAY">
      <HeroSection />
      <TransformationSection />
      <MethodSection />
    </main>
  );
}
