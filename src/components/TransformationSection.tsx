import type { CSSProperties } from "react";
import { beforeItems, afterItems } from "@/data/transformation";

type ComparisonListProps = {
  title: string;
  tone: "before" | "after";
  items: string[];
};

function ComparisonList({ title, tone, items }: ComparisonListProps) {
  return (
    <article className={`comparison-list ${tone}`}>
      <h3>{title}</h3>
      <ul>
        {items.map((item, index) => (
          <li key={item} style={{ "--i": index } as CSSProperties}>
            <span aria-hidden="true" className="status-icon" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function ComparisonTable() {
  return (
    <div className="comparison-table" role="table" aria-label="Comparativo antes e depois">
      <div className="pair-row pair-head" role="row">
        <span className="pair-cell before" role="columnheader">Antes</span>
        <span className="pair-gap" aria-hidden="true" />
        <span className="pair-cell after" role="columnheader">Depois</span>
      </div>
      {beforeItems.map((item, index) => (
        <div className="pair-row" role="row" key={item} data-reveal style={{ "--d": `${index * 90}ms` } as CSSProperties}>
          <span className="pair-cell before" role="cell">
            <span aria-hidden="true" className="pair-icon" />
            <span>{item}</span>
          </span>
          <span className="pair-gap" aria-hidden="true">→</span>
          <span className="pair-cell after" role="cell">
            <span aria-hidden="true" className="pair-icon" />
            <span>{afterItems[index]}</span>
          </span>
        </div>
      ))}
    </div>
  );
}

export function TransformationSection() {
  return (
    <section id="antes-e-depois" className="transformation-section" aria-labelledby="transformation-title">
      <div className="transformation-content">
        <p className="section-kicker" data-reveal>MÉTODO RENASCENTISTA</p>

        <h2 id="transformation-title" className="transformation-title" data-reveal data-ring style={{ "--d": "120ms" } as CSSProperties}>
          <span className="title-before">ANTES</span>
          <span className="title-and">E</span>
          <span className="title-after marked-word">
            DEPOIS
            <svg viewBox="0 0 230 16" aria-hidden="true" focusable="false">
              <path pathLength="1" d="M3 11C32 5 64 14 104 9C148 4 190 13 227 7" />
            </svg>
          </span>
        </h2>

        <ComparisonTable />

        <div className="transformation-grid" data-reveal aria-label="Comparativo antes e depois">
          <ComparisonList title="Antes" tone="before" items={beforeItems} />

          <div className="shift-mark" aria-hidden="true">
            <span className="arrow-line" />
          </div>

          <ComparisonList title="Depois" tone="after" items={afterItems} />
        </div>
      </div>
    </section>
  );
}
