import type { CSSProperties, ReactNode } from "react";
import { solutions } from "@/data/site";

const icons: Record<string, ReactNode> = {
  treinamento: (
    <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false">
      <path d="M6 18 24 8l18 10M10 20v16M19 20v16M29 20v16M38 20v16M6 40h36M8 36h32" />
    </svg>
  ),
  consultoria: (
    <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false">
      <path d="M12 6h17l9 9v27H12zM29 6v9h9M18 24h14M18 30h14M18 36h9" />
    </svg>
  ),
  implementacao: (
    <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false">
      <circle cx="24" cy="24" r="7" />
      <path d="M24 6v6M24 36v6M6 24h6M36 24h6M11.3 11.3l4.2 4.2M32.5 32.5l4.2 4.2M11.3 36.7l4.2-4.2M32.5 15.5l4.2-4.2" />
    </svg>
  )
};

export function SolutionsSection() {
  return (
    <section id="solucoes" className="solutions-section" aria-labelledby="solutions-title">
      <div className="solutions-inner">
        <p className="light-kicker" data-reveal>
          O QUE FAZEMOS
        </p>
        <h2 id="solutions-title" className="light-title" data-reveal data-ring style={{ "--d": "120ms" } as CSSProperties}>
          <span className="marked-word">
            Soluções
            <svg viewBox="0 0 230 16" aria-hidden="true" focusable="false">
              <path pathLength="1" d="M3 11C32 5 64 14 104 9C148 4 190 13 227 7" />
            </svg>
          </span>
        </h2>

        <div className="solutions-grid">
          {solutions.map((solution, index) => (
            <article className="solution-card" key={solution.key} data-reveal style={{ "--d": `${120 + index * 130}ms` } as CSSProperties}>
              <span className="solution-icon">{icons[solution.key]}</span>
              <h3>{solution.title}</h3>
              <p className="solution-tagline">{solution.tagline}</p>
              <ul>
                {solution.items.map((item) => (
                  <li key={item}>
                    <span className="mark" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
