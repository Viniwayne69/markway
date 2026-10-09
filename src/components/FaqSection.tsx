import type { CSSProperties } from "react";
import { faqItems } from "@/data/site";

export function FaqSection() {
  return (
    <section id="perguntas" className="faq-section" aria-labelledby="faq-title">
      <div className="faq-inner">
        <p className="method-kicker" data-reveal>
          PERGUNTAS FREQUENTES
        </p>
        <h2 id="faq-title" className="method-title" data-reveal data-ring style={{ "--d": "120ms" } as CSSProperties}>
          O que você precisa saber antes de{" "}
          <span className="marked-word">
            aplicar
            <svg viewBox="0 0 230 16" aria-hidden="true" focusable="false">
              <path pathLength="1" d="M3 11C32 5 64 14 104 9C148 4 190 13 227 7" />
            </svg>
          </span>
        </h2>

        <div className="faq-list">
          {faqItems.map((item, index) => (
            <details className="faq-item" key={item.q} data-reveal style={{ "--d": `${index * 80}ms` } as CSSProperties}>
              <summary>
                <span>{item.q}</span>
                <span className="faq-icon" aria-hidden="true" />
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
