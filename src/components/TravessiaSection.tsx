import type { CSSProperties } from "react";
import { applyUrl, travessiaCards, travessiaResult } from "@/data/site";
import { CapIcon, ChecklistIcon, PaletteIcon, ShipIcon } from "@/components/Icons";

const icons = [PaletteIcon, CapIcon, ChecklistIcon];

export function TravessiaSection() {
  return (
    <section id="travessia" className="solution-section dark-band section-offset section-pad" aria-labelledby="travessia-title">
      <div className="section-shell is-center">
        <p className="solution-label" data-reveal>
          <ShipIcon /> PARTE 3 · TRAVESSIA
        </p>
        <h2 id="travessia-title" className="display-title solution-title is-wide" data-reveal style={{ "--d": "80ms" } as CSSProperties}>
          Coloque a marca para funcionar na jornada inteira, do anúncio ao pós-venda
        </h2>
        <p className="solution-lead" data-reveal style={{ "--d": "120ms" } as CSSProperties}>
          Colocamos a marca para rodar na identidade, no site e nos conteúdos, treinamos o seu time, alinhamos anúncio, atendimento, loja e pós-venda e acompanhamos a execução durante um mês
        </p>

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
