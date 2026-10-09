"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "Soluções", href: "#solucoes" },
  { label: "Método", href: "#metodo" },
  { label: "Antes e Depois", href: "#antes-e-depois" },
  { label: "Perguntas", href: "#perguntas" }
];

const applyUrl = "https://crm-rnsx.vercel.app/aplicar";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible?.target.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const close = () => setOpen(false);

  return (
    <>
      <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
        <a href="#conteudo" className="skip-link">
          Pular para o conteúdo
        </a>
        <div className="section-shell header-bar">
          <a className="header-logo" href="#inicio" aria-label="SPEARE — início">
            <img src="/images/speare-wordmark.png" alt="SPEARE" width={719} height={138} />
          </a>

          <nav className="header-nav" aria-label="Menu principal">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className={active === item.href ? "is-active" : undefined}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <a className="btn header-cta" href={applyUrl} target="_blank" rel="noopener noreferrer">
              Iniciar aplicação
            </a>
            <button className="menu-toggle" type="button" aria-label="Abrir menu" onClick={() => setOpen(true)}>
              <span />
            </button>
          </div>
        </div>
      </header>

      <div className={`menu-overlay${open ? " is-open" : ""}`} aria-hidden={!open}>
        <div className="section-shell">
          <div className="menu-overlay-top">
            <img src="/images/speare-wordmark.png" alt="SPEARE" width={719} height={138} style={{ height: "1.6rem", width: "auto" }} />
            <button className="menu-close" type="button" aria-label="Fechar menu" onClick={close}>
              ×
            </button>
          </div>
          <nav className="menu-links" aria-label="Menu mobile">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="menu-link" onClick={close}>
                {item.label}
              </a>
            ))}
            <a className="btn btn-arrow" href={applyUrl} target="_blank" rel="noopener noreferrer" onClick={close}>
              Iniciar aplicação
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
