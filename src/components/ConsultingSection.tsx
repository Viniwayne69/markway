import type { CSSProperties } from "react";
import { applyUrl, consultingSteps } from "@/data/site";
import { UsersIcon } from "@/components/Icons";

export function ConsultingSection() {
  return (
    <section id="consultoria" className="solution-section band-cream section-offset section-pad" aria-labelledby="consulting-title">
      <div className="section-shell is-center">
        <p className="solution-label" data-reveal>
          <UsersIcon /> SOLUÇÃO 2 · CONSULTORIA
        </p>
        <h2 id="consulting-title" className="display-title solution-title" data-reveal style={{ "--d": "80ms" } as CSSProperties}>
          Descubra onde a sua marca está perdendo valor.
        </h2>

        <ol className="steps-list">
          {consultingSteps.map(([title, text], index) => (
            <li key={title} data-reveal style={{ "--d": `${160 + index * 100}ms` } as CSSProperties}>
              <span className="step-num" aria-hidden="true">{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>

        <a className="btn btn-red solution-btn" data-reveal href={applyUrl} target="_blank" rel="noopener noreferrer">
          Quero um diagnóstico
        </a>
      </div>
    </section>
  );
}
