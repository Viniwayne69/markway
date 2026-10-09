import type { CSSProperties } from "react";
import { forWhom } from "@/data/site";

export function ForWhomSection() {
  return (
    <section id="para-quem" className="forwhom-section" aria-labelledby="forwhom-title">
      <div className="forwhom-inner">
        <p className="light-kicker" data-reveal>
          PARA QUEM É
        </p>

        <h2 id="forwhom-title" className="light-title" data-reveal data-ring style={{ "--d": "120ms" } as CSSProperties}>
          Feito para marcas que querem ser{" "}
          <span className="marked-word">
            escolhidas
            <svg viewBox="0 0 230 16" aria-hidden="true" focusable="false">
              <path pathLength="1" d="M3 11C32 5 64 14 104 9C148 4 190 13 227 7" />
            </svg>
          </span>
        </h2>

        <div className="forwhom-grid">
          <article className="forwhom-card is-yes" data-reveal style={{ "--d": "100ms" } as CSSProperties}>
            <h3>É para você se</h3>
            <ul>
              {forWhom.yes.map((item) => (
                <li key={item}>
                  <span className="mark" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="forwhom-card is-no" data-reveal style={{ "--d": "220ms" } as CSSProperties}>
            <h3>Ainda não é para você se</h3>
            <ul>
              {forWhom.no.map((item) => (
                <li key={item}>
                  <span className="mark" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
