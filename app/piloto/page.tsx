import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Sesión demostrativa | IA para Asesores Inmobiliarios",
  description:
    "Descubre cómo convertir la información de una propiedad en un sistema comercial con IA.",
  openGraph: {
    title: "Sesión demostrativa | IA para Asesores Inmobiliarios",
    description:
      "Lunes 17 de agosto · 18:00 h · Google Meet · Cupo limitado a 20 participantes.",
    images: ["/hero-piloto-ia.png"],
  },
};

const whatsappLink =
  "https://wa.me/5217713653473?text=Hola%2C%20quiero%20reservar%20mi%20lugar%20para%20la%20Sesi%C3%B3n%20Demostrativa%20de%20IA%20para%20Asesores%20Inmobiliarios%20del%2017%20de%20agosto.";

const outcomes = [
  "Ordenar la información disponible de una propiedad sin inventar datos.",
  "Construir un mensaje comercial claro y verificable.",
  "Preparar preguntas de WhatsApp que abran conversaciones.",
  "Ver cómo se genera una landing para promover una propiedad.",
];

export default function PilotPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero} id="inicio">
        <nav className={`${styles.nav} ${styles.shell}`} aria-label="Navegación principal">
          <a className={styles.brand} href="#inicio">LFMS <span>BIENES RAÍCES</span></a>
          <a className={styles.navLink} href="#registro">RESERVAR LUGAR ↗</a>
        </nav>

        <div className={`${styles.heroGrid} ${styles.shell}`}>
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>SESIÓN DEMOSTRATIVA EN VIVO</p>
            <h1>IA para Asesores Inmobiliarios.</h1>
            <p className={styles.lead}>
              Descubre cómo convertir la información de una propiedad en un sistema comercial más claro.
            </p>
            <p className={styles.detail}>
              Una demostración práctica del método P.R.O.P. para ordenar datos, preparar conversaciones y crear activos comerciales con criterio.
            </p>
            <div className={styles.eventMeta} aria-label="Detalles del evento">
              <strong>LUN 17 AGO</strong><span>18:00 H</span><span>GOOGLE MEET</span>
            </div>
            <div className={styles.actions}>
              <a className={`${styles.button} ${styles.buttonPrimary}`} href={whatsappLink} target="_blank" rel="noreferrer">
                RESERVAR MI LUGAR <span>↗</span>
              </a>
              <a className={`${styles.button} ${styles.buttonSecondary}`} href="#veras">VER LA DEMOSTRACIÓN ↓</a>
            </div>
            <p className={styles.capacity}>CUPO LIMITADO A 20 PARTICIPANTES</p>
          </div>
          <div className={styles.heroVisual}>
            <img src="/hero-piloto-ia.png" alt="De ficha de propiedad a landing inmobiliaria con IA" />
          </div>
        </div>
      </section>

      <section className={`${styles.manifesto} ${styles.shell}`}>
        <p className={styles.kicker}>NO ES UNA CLASE DE HERRAMIENTAS</p>
        <div>
          <h2>Una propiedad no es solo una ficha. Puede ser el inicio de un sistema comercial.</h2>
          <p>
            La IA no sustituye tu criterio ni la relación con tus clientes. Te ayuda a trabajar con información más clara para que cada conversación tenga una dirección.
          </p>
        </div>
      </section>

      <section className={styles.demo} id="veras">
        <div className={styles.shell}>
          <p className={styles.kicker}>LO QUE VERÁS EN 75 MINUTOS</p>
          <h2>De una propiedad real a activos que ayudan a avanzar.</h2>
          <div className={styles.outcomes}>
            {outcomes.map((outcome, index) => (
              <article key={outcome}>
                <span>0{index + 1}</span>
                <p>{outcome}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.sequence} ${styles.shell}`}>
        <div>
          <p className={styles.kicker}>LA DEMOSTRACIÓN</p>
          <h2>Ficha → criterio → conversación → landing.</h2>
        </div>
        <div className={styles.sequenceList}>
          <p><span>01</span>Partimos de información y recursos reales de una propiedad.</p>
          <p><span>02</span>Separamos hechos verificados, hipótesis y datos faltantes.</p>
          <p><span>03</span>Construimos un mensaje comercial y un siguiente paso claro.</p>
          <p><span>04</span>Generamos una landing para promover esa propiedad.</p>
        </div>
      </section>

      <section className={styles.guardrail}>
        <div className={styles.shell}>
          <p>La demostración enseña el resultado y el proceso comercial. La publicación, hosting, dominios y operación técnica de la landing no forman parte de esta sesión.</p>
        </div>
      </section>

      <section className={styles.register} id="registro">
        <div className={`${styles.shell} ${styles.registerGrid}`}>
          <div>
            <p className={`${styles.kicker} ${styles.lightKicker}`}>SESIÓN EN VIVO · GOOGLE MEET</p>
            <h2>Conoce el alcance. Después, constrúyelo con nosotros.</h2>
            <p>La sesión es una demostración práctica del método que podrás profundizar en el Workshop Intensivo de Inteligencia Artificial para Asesores Inmobiliarios.</p>
          </div>
          <div className={styles.registerAction}>
            <strong>LUNES 17 DE AGOSTO<br />18:00 H · CIUDAD DE MÉXICO</strong>
            <a className={`${styles.button} ${styles.buttonLight}`} href={whatsappLink} target="_blank" rel="noreferrer">QUIERO RESERVAR MI LUGAR</a>
            <small>20 LUGARES DISPONIBLES · REGISTRO POR WHATSAPP</small>
          </div>
        </div>
      </section>

      <footer className={`${styles.footer} ${styles.shell}`}>
        <span>Presentado y respaldado por LFMS Bienes Raíces</span>
        <span>Workshop Intensivo · Inteligencia Artificial para Asesores Inmobiliarios</span>
      </footer>
    </main>
  );
}
