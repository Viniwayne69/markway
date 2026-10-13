import { HeroSection } from "@/components/HeroSection";
import { TransformationSection } from "@/components/TransformationSection";
import { SolutionsSection } from "@/components/SolutionsSection";
import { PortoSection } from "@/components/PortoSection";
import { RotaSection } from "@/components/RotaSection";
import { TravessiaSection } from "@/components/TravessiaSection";
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
    "Criamos marcas desejadas, do destino à prática, em um único serviço de posicionamento de marca com três partes: Porto, Rota e Travessia.",
  serviceType: "Posicionamento de marca",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviço SPEARE",
    itemListElement: ["Porto", "Rota", "Travessia"].map((name) => ({
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
      <PortoSection />
      <RotaSection />
      <TravessiaSection />
      <TransformationSection />
      <ForWhomSection />
      <FaqSection />
      <FinalCtaSection />
    </main>
    <Footer />
    </>
  );
}
