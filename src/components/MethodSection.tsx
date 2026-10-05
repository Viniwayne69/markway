import { methodSteps } from "@/data/method";

export function MethodSection() {
  return (
    <section id="metodo" className="method-section" aria-labelledby="method-title">
      <div className="method-inner">
        <p className="method-kicker">O MÉTODO</p>

        <h2 id="method-title" className="method-title">
          Como transformamos a sua marca em <span>desejada</span>
        </h2>

        <p className="method-lead">
          Quatro etapas, da leitura do mercado ao lançamento, para a sua marca ser percebida de outra forma.
        </p>

        <ol className="method-steps">
          {methodSteps.map((step, index) => (
            <li className="method-step" key={step.title}>
              <span className="method-number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>

        <a
          className="primary-cta method-cta"
          href="https://crm-rnsx.vercel.app/aplicar"
          target="_blank"
          rel="noopener noreferrer"
        >
          Iniciar aplicação
        </a>
      </div>
    </section>
  );
}
