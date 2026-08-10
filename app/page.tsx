const pillars = [
  {
    letter: "P",
    title: "Prospectar con IA",
    text: "Ordena la información de una propiedad, detecta vacíos y formula mejores hipótesis sobre el comprador.",
  },
  {
    letter: "R",
    title: "Relacionarte con clientes",
    text: "Convierte consultas en conversaciones claras, humanas y orientadas al siguiente paso.",
  },
  {
    letter: "O",
    title: "Optimizar contenido y procesos",
    text: "Transforma una propiedad bien entendida en piezas, mensajes y seguimiento sin empezar de cero.",
  },
  {
    letter: "P",
    title: "Presentar y cerrar con IA",
    text: "Presenta con claridad y ayuda a que el prospecto tome una decisión mejor informada.",
  },
];

const outcomes = [
  "Un Diagnóstico Comercial P.R.O.P. para una propiedad real.",
  "Un perfil de comprador prioritario y un ángulo comercial definido.",
  "Mensajes de WhatsApp que abren y continúan conversaciones.",
  "Un kit de contenido, Brief Visual y piezas inmobiliarias.",
  "Una presentación comercial breve y un plan de implementación de 7 días.",
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="inicio">
        <nav className="nav shell" aria-label="Navegación principal">
          <a className="brand" href="#inicio">MÉTODO <span>P.R.O.P.</span></a>
          <a className="nav-link" href="#inscripcion">INSCRIBIRME <span>↗</span></a>
        </nav>

        <div className="hero-grid shell">
          <div className="hero-copy">
            <p className="eyebrow">WORKSHOP INTENSIVO · EN VIVO ONLINE</p>
            <h1>Inteligencia Artificial para Asesores Inmobiliarios.</h1>
            <p className="hero-lead">Multiplica tu capacidad como asesor inmobiliario con Inteligencia Artificial.</p>
            <p className="hero-detail">No es un curso de herramientas ni una colección de prompts. Es una forma práctica de convertir cada propiedad en un sistema comercial.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#inscripcion">QUIERO INSCRIBIRME <span>↓</span></a>
              <a className="button button-secondary" href="#metodo">CONOCER EL MÉTODO</a>
            </div>
            <div className="hero-meta">
              <span>PRIMERA GENERACIÓN FUNDADORA</span>
              <strong>$999 <small>MXN</small></strong>
            </div>
          </div>
          <div className="hero-art" aria-label="Sistema comercial inmobiliario P.R.O.P.">
            <img src="/hero-system-v2.png" alt="Composición editorial del Método P.R.O.P. aplicada al negocio inmobiliario" />
          </div>
        </div>
      </section>

      <section className="manifesto shell">
        <p className="section-kicker">UNA NUEVA FORMA DE TRABAJAR</p>
        <div className="manifesto-grid">
          <h2>Tu próxima venta no empieza con una publicación.</h2>
          <div>
            <p className="large-copy">Empieza cuando entiendes qué propiedad tienes, para quién es y qué conversación debe iniciar.</p>
            <p>La Inteligencia Artificial no reemplaza el criterio, la relación ni la validación profesional del asesor. Te devuelve tiempo para hacer mejor esa parte del trabajo.</p>
          </div>
        </div>
      </section>

      <section className="method-section" id="metodo">
        <div className="shell">
          <div className="section-header">
            <p className="section-kicker">EL MÉTODO</p>
            <h2>Una propiedad.<br/>Cuatro decisiones.</h2>
            <p>El Método P.R.O.P. te da una ruta para pasar de una ficha inicial a una conversación comercial con dirección.</p>
          </div>
          <div className="pillars">
            {pillars.map((pillar, index) => (
              <article className="pillar" key={`${pillar.letter}-${index}`}>
                <span className="pillar-index">0{index + 1}</span>
                <div className="pillar-letter">{pillar.letter}</div>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
                <span className="pillar-line" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="experience shell" id="experiencia">
        <div className="experience-card">
          <p className="section-kicker">LO QUE VAS A HACER</p>
          <h2>No vienes a escuchar.<br/><span>Vienes a construir.</span></h2>
          <p>Trabajarás una propiedad real durante el workshop. Con ella crearás el sistema comercial que podrás replicar en tu cartera.</p>
        </div>
        <ol className="outcome-list">
          {outcomes.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}
        </ol>
      </section>

      <section className="schedule-section">
        <div className="shell schedule-grid">
          <div>
            <p className="section-kicker">DOS SESIONES EN VIVO</p>
            <h2>De la ficha original al sistema comercial.</h2>
          </div>
          <div className="sessions">
            <article>
              <p>SESIÓN 01</p>
              <h3>Prospectar y relacionarte con IA</h3>
              <span>Diagnóstico P.R.O.P. · comprador prioritario · mensajes y seguimiento</span>
            </article>
            <article>
              <p>SESIÓN 02</p>
              <h3>Optimizar, visualizar, presentar y avanzar</h3>
              <span>Contenido · Brief Visual · presentación comercial · plan de 7 días</span>
            </article>
          </div>
        </div>
      </section>

      <section className="for-you shell">
        <p className="section-kicker">ESTE WORKSHOP ES PARA TI SI...</p>
        <div className="for-you-grid">
          <p>Quieres trabajar mejor, no solamente más rápido.</p>
          <p>Tienes propiedades, prospectos o contenido que requieren más claridad comercial.</p>
          <p>Buscas aplicar IA con criterio y resultados útiles desde el primer día.</p>
        </div>
      </section>

      <section className="enroll" id="inscripcion">
        <div className="shell enroll-grid">
          <div>
            <p className="section-kicker">PRIMERA GENERACIÓN FUNDADORA</p>
            <h2>Esto no es el siguiente curso de IA.</h2>
            <p>Es la puerta de entrada a una nueva forma de trabajar en bienes raíces.</p>
          </div>
          <div className="offer-card">
            <p>INVERSIÓN FUNDADORA</p>
            <div className="price"><small>$</small>999 <em>MXN</em></div>
            <ul>
              <li>Workshop en vivo</li>
              <li>Material de trabajo y prompts</li>
              <li>Metodología P.R.O.P.</li>
              <li>Plantillas y piezas aplicables</li>
            </ul>
            <a className="button button-primary full" href="https://wa.me/5217713653473?text=Hola%2C%20quiero%20recibir%20informaci%C3%B3n%20para%20inscribirme%20al%20Workshop%20Intensivo%20de%20Inteligencia%20Artificial%20para%20Asesores%20Inmobiliarios." target="_blank" rel="noreferrer">SOLICITAR INSCRIPCIÓN <span>↗</span></a>
            <p className="micro">Al enviar tu solicitud, recibirás los siguientes pasos de inscripción.</p>
          </div>
        </div>
      </section>

      <footer className="footer shell">
        <div><strong>LUIS FERNANDO<br/>MORÁN TURCOTT</strong><span>Workshop Intensivo · IA Inmobiliaria</span></div>
        <p>La Inteligencia Artificial no reemplaza al asesor inmobiliario. Reemplaza parte del trabajo repetitivo que le quita tiempo para lo que realmente importa.</p>
      </footer>
    </main>
  );
}
