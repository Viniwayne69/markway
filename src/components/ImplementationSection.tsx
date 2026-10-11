import type { CSSProperties } from "react";
import { applyUrl, implementationCards } from "@/data/site";
import { ChecklistIcon, GearIcon, MegaphoneIcon, MonitorIcon, PaletteIcon } from "@/components/Icons";

const icons = [PaletteIcon, MonitorIcon, MegaphoneIcon, ChecklistIcon];

export function ImplementationSection() {
  return (
    <section id="implementacao" className="solution-section dark-band section-offset section-pad" aria-labelledby="implementation-title">
      <div className="section-shell is-center">
        <p className="solution-label" data-reveal>
          <GearIcon /> SOLUÇÃO 3 · IMPLEMENTAÇÃO
        </p>
        <h2 id="implementation-title" className="display-title solution-title" data-reveal style={{ "--d": "80ms" } as CSSProperties}>
          Marca pronta para o mercado, do logo à última página.
        </h2>

        <div className="feature-grid">
          {implementationCards.map(([title, text], index) => {
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

        <a className="btn solution-btn" data-reveal href={applyUrl} target="_blank" rel="noopener noreferrer">
          Quero minha marca pronta
        </a>
      </div>
    </section>
  );
}
