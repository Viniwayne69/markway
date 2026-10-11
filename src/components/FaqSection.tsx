import type { CSSProperties } from "react";
import { faqItems } from "@/data/site";
import { FaqList } from "@/components/FaqList";

export function FaqSection() {
  return (
    <section id="perguntas" className="faq-section" aria-labelledby="faq-title">
      <div className="faq-inner">
        <p className="light-kicker" data-reveal>
          PERGUNTAS FREQUENTES
        </p>
        <h2 id="faq-title" className="light-title" data-reveal data-ring style={{ "--d": "120ms" } as CSSProperties}>
          O que você precisa saber antes de{" "}
          <span className="marked-word">
            aplicar
            <svg viewBox="0 0 230 16" aria-hidden="true" focusable="false">
              <path pathLength="1" d="M3 11C32 5 64 14 104 9C148 4 190 13 227 7" />
            </svg>
          </span>
        </h2>

        <div data-reveal style={{ "--d": "200ms" } as CSSProperties}>
          <FaqList items={faqItems} />
        </div>
      </div>
    </section>
  );
}
