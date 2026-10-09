import type { CSSProperties } from "react";
import { applyUrl } from "@/data/site";

export function FinalCtaSection() {
  return (
    <section id="aplicar" className="final-section" aria-labelledby="final-title">
      <div className="final-inner">
        <p className="method-kicker" data-reveal>
          PRÓXIMO PASSO
        </p>
        <h2 id="final-title" className="method-title final-title" data-reveal data-ring style={{ "--d": "120ms" } as CSSProperties}>
          Vamos ver o que a sua marca pode se{" "}
          <span className="marked-word">
            tornar?
            <svg viewBox="0 0 230 16" aria-hidden="true" focusable="false">
              <path pathLength="1" d="M3 11C32 5 64 14 104 9C148 4 190 13 227 7" />
            </svg>
          </span>
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
