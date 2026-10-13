import type { CSSProperties } from "react";
import { applyUrl, rotaSteps, rotaResult } from "@/data/site";
import { CompassIcon } from "@/components/Icons";

export function RotaSection() {
  return (
    <section id="rota" className="solution-section band-cream section-offset section-pad" aria-labelledby="rota-title">
      <div className="section-shell is-center">
        <p className="solution-label" data-reveal>
          <CompassIcon /> PARTE 2 · ROTA
        </p>
        <h2 id="rota-title" className="display-title solution-title is-wide" data-reveal style={{ "--d": "80ms" } as CSSProperties}>
          Ocupe o lugar que só a sua marca pode ocupar e saia da comparação por preço
        </h2>
        <p className="solution-lead" data-reveal style={{ "--d": "120ms" } as CSSProperties}>
          Definimos o posicionamento, os valores, a mensagem e o cliente certo da sua marca, tiramos dela tudo o que faz parecer igual às outras e fazemos uma limpa nos processos que estavam travando o crescimento
        </p>

        <ol className="steps-list">
          {rotaSteps.map(([title, text], index) => (
            <li key={title} data-reveal style={{ "--d": `${160 + index * 100}ms` } as CSSProperties}>
              <span className="step-num" aria-hidden="true">{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>

        <p className="solution-result" data-reveal>
          Resultado: <strong>{rotaResult}</strong>
        </p>

        <a className="btn btn-red solution-btn" data-reveal href={applyUrl} target="_blank" rel="noopener noreferrer">
          Quero traçar minha rota
        </a>
      </div>
    </section>
  );
}
