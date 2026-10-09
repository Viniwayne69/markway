import { HeroSection } from "@/components/HeroSection";
import { TransformationSection } from "@/components/TransformationSection";
import { SolutionsSection } from "@/components/SolutionsSection";
import { MethodSection } from "@/components/MethodSection";
import { ForWhomSection } from "@/components/ForWhomSection";
import { FaqSection } from "@/components/FaqSection";
import { FinalCtaSection } from "@/components/FinalCtaSection";
import { Footer } from "@/components/Footer";
import { ScrollEffects } from "@/components/ScrollEffects";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <>
    <ScrollEffects />
    <Header />
    <main id="conteudo" className="site-shell" aria-label="SPEARE">
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
