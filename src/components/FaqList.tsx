"use client";

import { useState } from "react";

type Item = { q: string; a: string };

export function FaqList({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div className={`faq-item${isOpen ? " is-open" : ""}`} key={item.q}>
            <h3>
              <button
                type="button"
                id={`faq-q-${index}`}
                aria-expanded={isOpen}
                aria-controls={`faq-a-${index}`}
                onClick={() => setOpen(isOpen ? null : index)}
              >
                <span>{item.q}</span>
                <span className="faq-icon" aria-hidden="true" />
              </button>
            </h3>
            <div className="faq-panel" id={`faq-a-${index}`} role="region" aria-labelledby={`faq-q-${index}`}>
              <div>
                <p>{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
