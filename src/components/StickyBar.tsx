"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Método", href: "#metodo" },
  { label: "Perguntas", href: "#perguntas" }
];

export function StickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`sticky-bar${visible ? " is-visible" : ""}`}>
      <a className="sticky-brand" href="#inicio" aria-label="SPEARE">
        <img src="/images/speare-wordmark.png" alt="SPEARE" width={719} height={138} />
      </a>
      <nav className="sticky-nav" aria-label="Navegação fixa">
        {links.map((item) => (
          <a href={item.href} key={item.label}>
            {item.label}
          </a>
        ))}
      </nav>
      <a
        className="primary-cta sticky-cta"
        href="https://crm-rnsx.vercel.app/aplicar"
        target="_blank"
        rel="noopener noreferrer"
      >
        Iniciar aplicação
      </a>
    </div>
  );
}
