import { HeroSection } from "@/components/HeroSection";
import { TransformationSection } from "@/components/TransformationSection";
import { SolutionsSection } from "@/components/SolutionsSection";
import { TrainingSection } from "@/components/TrainingSection";
import { ConsultingSection } from "@/components/ConsultingSection";
import { ImplementationSection } from "@/components/ImplementationSection";
import { MethodSection } from "@/components/MethodSection";
import { ForWhomSection } from "@/components/ForWhomSection";
import { FaqSection } from "@/components/FaqSection";
import { FinalCtaSection } from "@/components/FinalCtaSection";
import { Footer } from "@/components/Footer";
import { ScrollEffects } from "@/components/ScrollEffects";
import { Header } from "@/components/Header";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "SPEARE",
  description:
    "Criamos e aceleramos marcas que atraem os clientes certos, elevam o valor percebido e vendem mais.",
  serviceType: "Posicionamento de marca",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Soluções SPEARE",
    itemListElement: ["Treinamento", "Consultoria", "Implementação"].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name }
    }))
  }
};

export default function Home() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <ScrollEffects />
    <Header />
    <main id="conteudo" className="site-shell" aria-label="SPEARE">
      <HeroSection />
      <SolutionsSection />
      <TrainingSection />
      <ConsultingSection />
      <ImplementationSection />
      <MethodSection />
      <TransformationSection />
      <ForWhomSection />
      <FaqSection />
      <FinalCtaSection />
    </main>
    <Footer />
    </>
  );
}
