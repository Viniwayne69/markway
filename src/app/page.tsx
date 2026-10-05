import { HeroSection } from "@/components/HeroSection";
import { TransformationSection } from "@/components/TransformationSection";

export default function Home() {
  return (
    <main className="site-shell" aria-label="MARKWAY">
      <HeroSection />
      <TransformationSection />
    </main>
  );
}
