import type { CSSProperties } from "react";
import { methodSteps } from "@/data/method";

export function MethodSection() {
  return (
    <section id="metodo" className="method-section" aria-labelledby="method-title">
      <div className="method-inner">
        <p className="method-kicker" data-reveal>O MÉTODO</p>

        <h2 id="method-title" className="method-title" data-reveal data-ring style={{ "--d": "120ms" } as CSSProperties}>
          Quatro etapas para uma marca{" "}
          <span className="marked-word">
            desejada
            <svg viewBox="0 0 230 16" aria-hidden="true" focusable="false">
              <path pathLength="1" d="M3 11C32 5 64 14 104 9C148 4 190 13 227 7" />
            </svg>
          </span>
        </h2>

        <ol className="method-list">
          {methodSteps.map((step, index) => (
            <li className="method-row" key={step.title} data-reveal style={{ "--d": `${index * 110}ms` } as CSSProperties}>
              <span className="method-line" aria-hidden="true" />
              <span className="method-numeral" aria-hidden="true">
                {step.numeral}
              </span>
              <h3>{step.title}</h3>
              <div className="method-text">
                <p>{step.text}</p>
                <p className="method-deliver">
                  <span>Entrega</span> {step.delivery}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <a
          className="primary-cta method-cta" data-reveal
          href="https://crm-rnsx.vercel.app/aplicar"
          target="_blank"
          rel="noopener noreferrer"
        >
          Iniciar aplicação
        </a>
      </div>
    </section>
  );
}
