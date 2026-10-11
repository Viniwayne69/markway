"use client";

/** Botão de menu da tela inicial: abre o mesmo menu em tela cheia do cabeçalho fixo. */
export function HeroMenuButton() {
  return (
    <button
      className="mobile-menu"
      type="button"
      aria-label="Abrir menu"
      onClick={() => window.dispatchEvent(new Event("speare:open-menu"))}
    >
      <span />
      <span />
      <span />
    </button>
  );
}
