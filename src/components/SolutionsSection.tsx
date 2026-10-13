import type { CSSProperties, ReactNode } from "react";
import { TreeLines } from "@/components/TreeLines";
import { applyUrl, solutions } from "@/data/site";
import { AnchorIcon, ChevronIcon, CompassIcon, ShipIcon } from "@/components/Icons";

const icons: Record<string, ReactNode> = {
  porto: <AnchorIcon />,
  rota: <CompassIcon />,
  travessia: <ShipIcon />
};

export function SolutionsSection() {
  return (
    <section id="solucoes" className="solutions-section section-offset section-pad" aria-labelledby="solutions-title">
      <div className="section-shell">
        <div className="solutions-head">
          <h2 id="solutions-title" className="display-title solutions-title" data-reveal>
            Como transformamos a sua marca em uma das mais desejadas?
          </h2>
          <p className="solutions-sub" data-reveal style={{ "--d": "100ms" } as CSSProperties}>
            Método SPEARE
          </p>
        </div>

        <div className="solutions-wrap">
          <TreeLines />
          <div className="solutions-grid">
            {solutions.map((card, index) => (
              <a
                key={card.key}
                href={`#${card.key}`}
                className={`solution-card tone-${card.tone}`}
                data-reveal
                style={{ "--d": `${250 + index * 140}ms` } as CSSProperties}
              >
                <span className="icon-badge">{icons[card.key]}</span>
                <div className="solution-body">
                  <h3>{card.title}</h3>
                  <p className="solution-sub">{card.subtitle}</p>
                  <span className="solution-rule" aria-hidden="true" />
                  <p className="solution-text">{card.text}</p>
                </div>
                <span className="solution-chevron" aria-hidden="true"><ChevronIcon /></span>
              </a>
            ))}
          </div>
        </div>

        <div className="solutions-foot" data-reveal>
          <p>Não é um retoque: o Método SPEARE melhora e evolui a sua marca de ponta a ponta</p>
          <a className="btn" href={applyUrl} target="_blank" rel="noopener noreferrer">
            Iniciar aplicação
          </a>
        </div>
      </div>
    </section>
  );
}
