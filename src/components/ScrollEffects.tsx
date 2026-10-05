"use client";

import { useEffect } from "react";

export function ScrollEffects() {
  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    let observer: IntersectionObserver | null = null;

    if (reduce || !("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-in"));
    } else {
      root.classList.add("fx");
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-in");
              observer?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
      );
      targets.forEach((el) => observer?.observe(el));
    }

    // linha de progressão do Método
    const rows = Array.from(document.querySelectorAll<HTMLElement>(".method-row"));
    const update = () => {
      const mark = window.innerHeight * 0.62;
      const lit = rows.map((row) => {
        const n = row.querySelector<HTMLElement>(".method-numeral");
        if (!n) return false;
        const r = n.getBoundingClientRect();
        return r.top + r.height / 2 <= mark;
      });
      rows.forEach((row, i) => {
        row.classList.toggle("is-lit", lit[i]);
        row.classList.toggle("is-through", Boolean(lit[i + 1]));
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      root.classList.remove("fx");
    };
  }, []);

  return null;
}
