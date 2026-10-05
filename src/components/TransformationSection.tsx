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
        {items.map((item) => (
          <li key={item}>
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
        <div className="pair-row" role="row" key={item}>
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
    <section className="transformation-section" aria-labelledby="transformation-title">
      <div className="transformation-content">
        <p className="section-kicker">MÉTODO RENASCENTISTA</p>

        <h2 id="transformation-title" className="transformation-title">
          <span className="title-before">ANTES</span>
          <span className="title-and">E</span>
          <span className="title-after">DEPOIS</span>
        </h2>

        <ComparisonTable />

        <div className="transformation-grid" aria-label="Comparativo antes e depois">
          <ComparisonList title="Antes" tone="before" items={beforeItems} />

          <div className="shift-mark" aria-hidden="true">
            <span>→</span>
          </div>

          <ComparisonList title="Depois" tone="after" items={afterItems} />
        </div>
      </div>
    </section>
  );
}
