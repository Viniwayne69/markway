import type { CSSProperties } from "react";
import { applyUrl } from "@/data/site";
import { methodSteps } from "@/data/method";

export function MethodSection() {
  return (
    <section id="metodo" className="method-section" aria-labelledby="method-title">
      <div className="method-inner">
        <p className="light-kicker" data-reveal>O MÉTODO</p>

        <h2 id="method-title" className="light-title" data-reveal data-ring style={{ "--d": "120ms" } as CSSProperties}>
          Da primeira conversa a uma marca{" "}
          <span className="marked-word">
            desejada
            <svg viewBox="0 0 230 16" aria-hidden="true" focusable="false">
              <path pathLength="1" d="M3 11C32 5 64 14 104 9C148 4 190 13 227 7" />
            </svg>
          </span>
        </h2>

        <ol className="method-steps" data-reveal style={{ "--d": "200ms" } as CSSProperties}>
          {methodSteps.map((step, index) => (
            <li className="method-step" key={step.title} style={{ "--i": index } as CSSProperties}>
              <span className="method-dot" aria-hidden="true">{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
              <span className="method-tag">{step.solution}</span>
            </li>
          ))}
        </ol>

        <a className="btn btn-red method-cta" data-reveal href={applyUrl} target="_blank" rel="noopener noreferrer">
          Iniciar aplicação
        </a>
      </div>
    </section>
  );
}
