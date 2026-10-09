import type { CSSProperties, ReactNode } from "react";
import { TreeLines } from "@/components/TreeLines";
import { applyUrl, solutions } from "@/data/site";

const icons: Record<string, ReactNode> = {
  treinamento: (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M22 10 12 5 2 10l10 5 10-5zM6 12v5c3 2 9 2 12 0v-5" />
    </svg>
  ),
  consultoria: (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" />
    </svg>
  ),
  implementacao: (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1" />
    </svg>
  )
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
            Temos 3 linhas de soluções
          </p>
        </div>

        <div className="solutions-wrap">
          <TreeLines />
          <div className="solutions-grid">
            {solutions.map((card, index) => (
              <article
                key={card.key}
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
              </article>
            ))}
          </div>
        </div>

        <div className="solutions-foot" data-reveal>
          <p>Contrate em conjunto ou separadamente.</p>
          <a className="btn" href={applyUrl} target="_blank" rel="noopener noreferrer">
            Iniciar aplicação
          </a>
        </div>
      </div>
    </section>
  );
}
