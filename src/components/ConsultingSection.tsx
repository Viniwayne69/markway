import type { CSSProperties } from "react";
import { applyUrl, consultingSteps } from "@/data/site";
import { UsersIcon } from "@/components/Icons";

export function ConsultingSection() {
  return (
    <section id="consultoria" className="solution-section band-cream section-offset section-pad" aria-labelledby="consulting-title">
      <div className="section-shell consulting-grid">
        <div className="consulting-copy">
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
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ol>

          <a className="btn btn-red solution-btn" data-reveal href={applyUrl} target="_blank" rel="noopener noreferrer">
            Quero um diagnóstico
          </a>
        </div>

        <div className="consulting-media" data-reveal style={{ "--d": "140ms" } as CSSProperties}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/consultoria.jpg" alt="Estátua renascentista diante de um corredor de arcos, símbolo de uma marca com presença" width={1200} height={900} loading="lazy" />
        </div>
      </div>
    </section>
  );
}
