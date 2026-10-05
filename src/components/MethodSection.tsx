import { methodSteps } from "@/data/method";

export function MethodSection() {
  return (
    <section id="metodo" className="method-section" aria-labelledby="method-title">
      <div className="method-inner">
        <p className="method-kicker">O MÉTODO</p>

        <h2 id="method-title" className="method-title">
          Quatro etapas para uma marca{" "}
          <span className="marked-word">
            desejada
            <svg viewBox="0 0 230 68" aria-hidden="true" focusable="false">
              <path d="M16 42C27 13 76 5 132 10C190 15 223 31 216 46C209 61 151 62 96 58C43 54 6 55 16 42Z" />
            </svg>
          </span>
        </h2>

        <ol className="method-list">
          {methodSteps.map((step) => (
            <li className="method-row" key={step.title}>
              <span className="method-numeral" aria-hidden="true">
                {step.numeral}
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
