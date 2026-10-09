export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <a className="footer-brand" href="#inicio" aria-label="SPEARE — voltar ao início">
          <img src="/images/speare-wordmark.png" alt="SPEARE" width={719} height={138} />
        </a>
        <p className="footer-tag">Marcas que atraem os clientes certos.</p>
        <nav className="footer-nav" aria-label="Rodapé">
          <a href="#inicio">Início</a>
          <a href="#metodo">Método</a>
          <a href="#para-quem">Para quem é</a>
          <a href="#perguntas">Perguntas</a>
        </nav>
        <p className="footer-copy">© {new Date().getFullYear()} SPEARE. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
