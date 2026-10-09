import type { CSSProperties } from "react";
import { applyUrl } from "@/data/site";

export function FinalCtaSection() {
  return (
    <section id="aplicar" className="final-section" aria-labelledby="final-title">
      <div className="final-inner">
        <p className="light-kicker" data-reveal>
          PRÓXIMO PASSO
        </p>
        <h2 id="final-title" className="light-title final-title" data-reveal style={{ "--d": "120ms" } as CSSProperties}>
          Vamos ver o que a sua marca pode se tornar?
        </h2>
        <p className="final-lead" data-reveal style={{ "--d": "220ms" } as CSSProperties}>
          Conte um pouco sobre o seu negócio. Se fizer sentido, damos o próximo passo juntos.
        </p>
        <a
          className="primary-cta final-cta"
          data-reveal
          style={{ "--d": "320ms" } as CSSProperties}
          href={applyUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Iniciar aplicação
        </a>
        <p className="final-note" data-reveal style={{ "--d": "400ms" } as CSSProperties}>
          Leva menos de 2 minutos
        </p>
      </div>
    </section>
  );
}
