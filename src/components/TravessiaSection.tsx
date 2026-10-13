import type { CSSProperties } from "react";
import { applyUrl, travessiaCards, travessiaResult } from "@/data/site";
import { ChatIcon, ChecklistIcon, PaletteIcon, ShipIcon } from "@/components/Icons";

const icons = [PaletteIcon, ChatIcon, ChecklistIcon];

export function TravessiaSection() {
  return (
    <section id="travessia" className="solution-section dark-band section-offset section-pad" aria-labelledby="travessia-title">
      <div className="section-shell is-center">
        <p className="solution-label" data-reveal>
          <ShipIcon /> PARTE 3 · TRAVESSIA
        </p>
        <h2 id="travessia-title" className="display-title solution-title is-wide" data-reveal style={{ "--d": "80ms" } as CSSProperties}>
          Estratégia no papel não vende. Então, a gente faz a travessia até a prática
        </h2>

        <div className="feature-grid is-three">
          {travessiaCards.map(([title, text], index) => {
            const Icon = icons[index];
            return (
              <article className="feature-card is-light" key={title} data-reveal style={{ "--d": `${150 + index * 90}ms` } as CSSProperties}>
                <span className="icon-badge"><Icon /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            );
          })}
        </div>

        <p className="solution-result" data-reveal>
          Resultado: <strong>{travessiaResult}</strong>
        </p>

        <a className="btn solution-btn" data-reveal href={applyUrl} target="_blank" rel="noopener noreferrer">
          Quero minha marca em prática
        </a>
      </div>
    </section>
  );
}
