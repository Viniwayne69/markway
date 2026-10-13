import type { CSSProperties } from "react";
import { applyUrl, portoCards, portoResult } from "@/data/site";
import { CompassIcon, ChatIcon, GemIcon, TargetIcon } from "@/components/Icons";

const icons = [TargetIcon, ChatIcon, GemIcon];

export function PortoSection() {
  return (
    <section id="porto" className="solution-section band-carmine section-offset section-pad" aria-labelledby="porto-title">
      <div className="section-shell is-center">
        <p className="solution-label" data-reveal>
          <CompassIcon /> PARTE 1 · PORTO
        </p>
        <h2 id="porto-title" className="display-title solution-title is-wide" data-reveal style={{ "--d": "80ms" } as CSSProperties}>
          Descubra o que está travando a sua empresa e para onde ela precisa ir
        </h2>
        <p className="solution-lead" data-reveal style={{ "--d": "120ms" } as CSSProperties}>
          Para enxergar onde a empresa está perdendo cliente hoje e para onde ela precisa ir
        </p>

        <div className="feature-grid is-three">
          {portoCards.map((card, index) => {
            const Icon = icons[index];
            return (
              <article className="feature-card" key={card.title} data-reveal style={{ "--d": `${150 + index * 90}ms` } as CSSProperties}>
                <span className="icon-badge"><Icon /></span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            );
          })}
        </div>

        <p className="solution-result" data-reveal>
          Resultado: <strong>{portoResult}</strong>
        </p>

        <a className="btn solution-btn" data-reveal href={applyUrl} target="_blank" rel="noopener noreferrer">
          Quero definir meu destino
        </a>
      </div>
    </section>
  );
}
