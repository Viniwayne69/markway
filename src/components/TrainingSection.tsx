import type { CSSProperties } from "react";
import { applyUrl, trainingCards } from "@/data/site";
import { CapIcon, ChatIcon, GemIcon, LinkIcon, TargetIcon } from "@/components/Icons";

const icons = [TargetIcon, ChatIcon, GemIcon, LinkIcon];

export function TrainingSection() {
  return (
    <section id="treinamento" className="solution-section band-carmine section-offset section-pad" aria-labelledby="training-title">
      <div className="section-shell">
        <p className="solution-label" data-reveal>
          <CapIcon /> SOLUÇÃO 1 · TREINAMENTO
        </p>
        <h2 id="training-title" className="display-title solution-title" data-reveal style={{ "--d": "80ms" } as CSSProperties}>
          Um time que conhece a marca comunica melhor e vende mais valor.
        </h2>

        <div className="feature-grid">
          {trainingCards.map((card, index) => {
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

        <a className="btn solution-btn" data-reveal href={applyUrl} target="_blank" rel="noopener noreferrer">
          Quero treinar meu time
        </a>
      </div>
    </section>
  );
}
