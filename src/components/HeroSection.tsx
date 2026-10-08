const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Método", href: "#metodo" },
  { label: "Clube", href: "#" }
];

function MarkedWord() {
  return (
    <span className="marked-word">
      DESEJADAS
      <svg viewBox="0 0 230 16" aria-hidden="true" focusable="false">
        <path pathLength="1" d="M3 11C32 5 64 14 104 9C148 4 190 13 227 7" />
      </svg>
    </span>
  );
}

export function HeroSection() {
  return (
    <section id="inicio" className="hero-section" aria-labelledby="hero-title">
      <div className="hero-light" aria-hidden="true" />

      <header className="hero-header" aria-label="Cabeçalho">
        <a className="brand-mark" href="#" aria-label="SPEARE">
          <img src="/images/speare-wordmark.png" alt="SPEARE" width={719} height={138} />
        </a>

        <div className="header-right">
          <nav className="desktop-nav" aria-label="Navegação principal">
            {navItems.map((item) => (
              <a href={item.href} key={item.label}>
                {item.label}
              </a>
            ))}
          </nav>

          <button className="mobile-menu" type="button" aria-label="Abrir menu">
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className="hero-copy">
        <h1 id="hero-title" className="hero-title">
          <span className="desktop-line">FAZEMOS DA SUA MARCA</span>
          <span className="desktop-line">
            UMA DAS MAIS <MarkedWord />
          </span>
          <span className="desktop-line">DA SUA GERAÇÃO</span>

          <span className="mobile-line">FAZEMOS DA SUA</span>
          <span className="mobile-line">MARCA UMA</span>
          <span className="mobile-line">
            DAS MAIS <MarkedWord />
          </span>
          <span className="mobile-line">DA SUA GERAÇÃO</span>
        </h1>

        <p className="hero-lead">
          Criamos e aceleramos marcas que atraem os clientes certos, elevam o valor percebido e vendem mais.
        </p>

        <a className="primary-cta" href="https://crm-rnsx.vercel.app/aplicar" target="_blank" rel="noopener noreferrer">
          Iniciar aplicação
        </a>
        <p className="hero-note">Leva menos de 2 minutos</p>
      </div>

    </section>
  );
}
