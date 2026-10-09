import { HeroSection } from "@/components/HeroSection";
import { TransformationSection } from "@/components/TransformationSection";
import { SolutionsSection } from "@/components/SolutionsSection";
import { MethodSection } from "@/components/MethodSection";
import { ForWhomSection } from "@/components/ForWhomSection";
import { FaqSection } from "@/components/FaqSection";
import { FinalCtaSection } from "@/components/FinalCtaSection";
import { Footer } from "@/components/Footer";
import { ScrollEffects } from "@/components/ScrollEffects";
import { StickyBar } from "@/components/StickyBar";

export default function Home() {
  return (
    <>
    <main className="site-shell" aria-label="SPEARE">
      <StickyBar />
      <ScrollEffects />
      <HeroSection />
      <SolutionsSection />
      <MethodSection />
      <TransformationSection />
      <FaqSection />
      <ForWhomSection />
      <FinalCtaSection />
    </main>
    <Footer />
    </>
  );
}
