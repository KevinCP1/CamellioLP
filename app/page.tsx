import Link from "next/link";
import Image from "next/image";
import { sharedBrandLink } from "./content";

export default function HomePage() {
  return (
    <main className="page-shell">
      <div className="site-shell">
        <header className="topbar">
          <Link className="brand" href={sharedBrandLink} target="_blank" rel="noreferrer">
            <Image
              className="brand-logo"
              src="/camellio-logo.jpg"
              alt="Logo de Camellio"
              width={120}
              height={120}
              priority
            />
            <span className="brand-copy">
              <span className="brand-name">Camellio</span>
              <span className="brand-tag">Servicios técnicos hiperlocales</span>
            </span>
          </Link>

          <div className="topbar-links">
            <Link className="chip" href="/empleado">
              Ver empleado
            </Link>
            <Link className="chip" href="/empleador">
              Ver empleador
            </Link>
            <Link className="chip chip--primary" href={sharedBrandLink} target="_blank" rel="noreferrer">
              Abrir app
            </Link>
          </div>
        </header>

        <section className="choice-panel">
          <span className="eyebrow">Bienvenido a Camellio</span>
          <div className="page-intro">
            <h1>¿Soy un?</h1>
            <p>
              Elige tu perfil para entrar a la landing que mejor explica cómo Camellio te ayuda.
            </p>
          </div>

          <div className="choice-grid">
            <article className="choice-card choice-card--center">
              <h2>Empleado</h2>
              <p>
                Crea tu perfil, muestra tu trabajo y recibe solicitudes de clientes cerca de ti.
              </p>
              <Link className="choice-action" href="/empleado">
                Ir a la landing de empleado
              </Link>
            </article>

            <article className="choice-card choice-card--center">
              <h2>Empleador</h2>
              <p>
                Encuentra técnicos confiables, compara perfiles y contacta al trabajador adecuado.
              </p>
              <Link className="choice-action choice-action--alternate" href="/empleador">
                Ir a la landing de empleador
              </Link>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}