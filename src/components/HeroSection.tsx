import type { CSSProperties } from "react";
import { CountUp } from "@/components/CountUp";
import { applyUrl } from "@/data/site";

const words = ["Fazemos", "da", "sua", "marca", "uma", "das", "mais", "desejadas", "da", "sua", "geração."];

const stats = [
  { value: "4", label: "etapas no método" },
  { value: "3", label: "linhas de solução" },
  { value: "2 min", label: "para aplicar" }
];

export function HeroSection() {
  return (
    <section id="inicio" className="hero-section" aria-labelledby="hero-title">
      <div className="hero-light" aria-hidden="true" />

      <div className="hero-copy">
        <div className="hero-text">
          <h1 id="hero-title" className="hero-title">
            {words.map((word, index) => (
              <span key={`${word}-${index}`}>
                <span className="enter-word" style={{ "--d": `${250 + index * 70}ms` } as CSSProperties}>
                  {word === "desejadas" ? (
                    <span className="marked-word">
                      desejadas
                      <svg viewBox="0 0 230 16" aria-hidden="true" focusable="false">
                        <path pathLength="1" d="M3 11C32 5 64 14 104 9C148 4 190 13 227 7" />
                      </svg>
                    </span>
                  ) : (
                    word
                  )}
                </span>{" "}
              </span>
            ))}
          </h1>

          <p className="hero-lead enter" style={{ "--d": "700ms" } as CSSProperties}>
            Criamos e aceleramos marcas que atraem os clientes certos, elevam o valor percebido e vendem mais.
          </p>

          <div className="hero-ctas enter" style={{ "--d": "850ms" } as CSSProperties}>
            <a className="btn btn-arrow" href={applyUrl} target="_blank" rel="noopener noreferrer">
              Iniciar aplicação
            </a>
            <a className="btn btn-outline" href="#solucoes">
              Conhecer as soluções
            </a>
          </div>

          <div className="hero-stats enter" style={{ "--d": "1000ms" } as CSSProperties}>
            {stats.map((stat, index) => (
              <div className="hero-stat" key={stat.label}>
                <strong>
                  <CountUp value={stat.value} delay={1150 + index * 120} />
                </strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-note-script enter" style={{ "--d": "1300ms" } as CSSProperties} aria-hidden="true">
          <span>Marcas</span>
          <span>que atraem</span>
          <span>os clientes</span>
          <span>certos</span>
          <svg viewBox="0 0 80 16" fill="none">
            <path d="M4 10c18 4 42 3 72-4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </section>
  );
}
