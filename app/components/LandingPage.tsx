import Image from "next/image";
import Link from "next/link";
import { sharedBrandLink, type LandingContent } from "../content";

type LandingPageProps = {
  content: LandingContent;
};

function LogoLink() {
  return (
    <Link className="brand" href={sharedBrandLink} target="_blank" rel="noreferrer">
      <Image
        className="brand-logo"
        src="/camellio-logo.jpg"
        alt="Logo de Camellio"
        width={60}
        height={60}
        priority
      />
      <span className="brand-copy">
        <span className="brand-name">Camellio</span>
        <span className="brand-tag">Servicios técnicos hiperlocales</span>
      </span>
    </Link>
  );
}

function TopBar({ roleName }: { roleName: string }) {
  const isEmployee = roleName.toLowerCase() === "empleado";
  const isEmployer = roleName.toLowerCase() === "empleador";
  const empleadoNav = {
    href: isEmployee ? "/" : "/empleado",
    label: isEmployee ? "Inicio" : "Ver empleado",
  };
  const empleadorNav = {
    href: isEmployer ? "/" : "/empleador",
    label: isEmployer ? "Inicio" : "Ver empleador",
  };

  return (
    <header className="topbar">
      <LogoLink />
      <div className="topbar-links">
        <Link className="chip" href={empleadoNav.href}>
          {empleadoNav.label}
        </Link>
        <Link className="chip" href={empleadorNav.href}>
          {empleadorNav.label}
        </Link>
        <Link className="chip chip--primary" href={sharedBrandLink} target="_blank" rel="noreferrer">
          Abrir app
        </Link>
      </div>
    </header>
  );
}

export function LandingPage({ content }: LandingPageProps) {
  return (
    <main className="page-shell">
      <div className="site-shell">
        <TopBar roleName={content.roleName} />

        <section className="hero">
          <div className="hero-panel">
            <span className="eyebrow">{content.roleLabel}</span>
            <h1 className="title">{content.heroTitle}</h1>
            <p className="subtitle">{content.heroSubtitle}</p>

            <div className="hero-actions">
              <Link className="hero-link hero-link--primary" href={content.primaryHref}>
                {content.primaryCta}
              </Link>
              <Link className="hero-link hero-link--secondary" href={content.secondaryHref}>
                {content.secondaryCta}
              </Link>
            </div>

            <Link className="app-link" href={sharedBrandLink} target="_blank" rel="noreferrer">
              {content.appLinkText}
            </Link>
          </div>

          <aside className="hero-card">
            <span className="stack-note">Camellio · {content.roleName}</span>
            <h2>Lo esencial en una experiencia limpia, rápida y territorial</h2>
            <p>
              La misma interfaz funciona para ambos perfiles. Solo cambia el contenido y el enfoque de cada landing.
            </p>
            <ul className="hero-list">
              {content.highlights.slice(0, 4).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </section>

        <div className="panel-grid">
          <section className="section-panel section-panel--full">
            <span className="section-label">{content.introTitle}</span>
            <h2 className="section-title">Una propuesta local pensada para que la confianza crezca por zona</h2>
            <p className="section-copy">{content.introBody}</p>
          </section>

          <section className="section-panel section-panel--full">
            <span className="section-label">{content.highlightsTitle}</span>
            <h2 className="section-title">Una plataforma que resuelve lo importante desde el primer vistazo</h2>
            <div className="feature-grid">
              {content.highlights.map((item) => (
                <article className="feature-card" key={item}>
                  <h3>{item}</h3>
                </article>
              ))}
            </div>
          </section>

          <section id="como-funciona" className="section-panel section-panel--half">
            <span className="section-label">{content.processTitle}</span>
            <h2 className="section-title">Un flujo claro, sin fricción y sin pasos innecesarios</h2>
            <ol className="step-list">
              {content.process.map((item) => (
                <li key={item}>
                  <div>
                    <strong>{item}</strong>
                    <span className="section-copy">Todo dentro de una experiencia simple, visual y orientada a resultados.</span>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section className="section-panel section-panel--half">
            <span className="section-label">{content.trustTitle}</span>
            <h2 className="section-title">Señales de confianza visibles antes de decidir</h2>
            <div className="proof-grid">
              {content.trust.map((item) => (
                <article className="proof-card" key={item}>
                  <h3>{item}</h3>
                </article>
              ))}
            </div>
          </section>

          <section className="section-panel section-panel--full">
            <span className="section-label">{content.testimonialsTitle}</span>
            <h2 className="section-title">Lo que dicen quienes ya necesitan o prestan el servicio</h2>
            <div className="testimonial-grid">
              {content.testimonials.map((item) => (
                <article className="testimonial-card" key={`${item.name}-${item.role}`}>
                  <p className="testimonial-quote">“{item.quote}”</p>
                  <div className="testimonial-meta">
                    {item.name}, {item.role}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="section-panel section-panel--full">
            <div className="spotlight">
              <article className="spotlight-card">
                <span className="section-label" style={{ color: "rgba(255,255,255,0.88)" }}>
                  {content.spotlightTitle}
                </span>
                <ul className="spotlight-body-list">
                  {content.spotlightBodyLines.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>

              <article className="spotlight-card spotlight-card--soft">
                <span className="section-label">Enfoque práctico</span>
                <h2 className="section-title">Qué puedes hacer dentro de la experiencia</h2>
                <ul>
                  {content.spotlightPoints.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </div>
          </section>

          <section id="faq" className="section-panel section-panel--full">
            <span className="section-label">{content.faqTitle}</span>
            <h2 className="section-title">Respuestas rápidas a las dudas más comunes</h2>
            <div className="faq-grid">
              {content.faqs.map((item) => (
                <details className="faq-item" key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="section-panel section-panel--full">
            <div className="cta-band">
              <div>
                <span className="section-label">Camellio</span>
                <h2 className="cta-title">{content.finalTitle}</h2>
              </div>
              <Link className="hero-link hero-link--primary" href={content.finalHref} target="_blank" rel="noreferrer">
                {content.finalCta}
              </Link>
            </div>
            <p className="footer-note">
              La misma base visual se usa para ambas páginas, con contenido ajustado al rol y enlace a la app en {sharedBrandLink}.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}