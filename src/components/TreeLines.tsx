"use client";

import { useEffect, useRef } from "react";

/** Linhas pontilhadas que ligam o título às 3 soluções e "se desenham" ao entrar na tela. */
export function TreeLines() {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      node.dataset.drawn = "true";
      return;
    }
    node.dataset.drawn = "false";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.dataset.drawn = "true";
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(node.parentElement ?? node);
    return () => observer.disconnect();
  }, []);

  const dash = {
    stroke: "currentColor",
    strokeWidth: 2,
    strokeDasharray: "2 8",
    strokeLinecap: "round" as const,
    vectorEffect: "non-scaling-stroke" as const
  };

  return (
    <svg ref={ref} className="tree-lines" viewBox="0 0 1000 80" preserveAspectRatio="none" fill="none" aria-hidden="true">
      <path d="M500 0V80" {...dash} />
      <path d="M500 18C500 52 160 44 160 80" {...dash} />
      <path d="M500 18C500 52 840 44 840 80" {...dash} />
    </svg>
  );
}
