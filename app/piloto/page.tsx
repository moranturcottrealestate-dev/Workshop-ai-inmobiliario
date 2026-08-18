import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Sesión demostrativa gratuita | IA para Asesores Inmobiliarios",
  description:
    "Una demostración en vivo para convertir los datos de una propiedad en un sistema comercial con IA.",
  openGraph: {
    title: "Sesión demostrativa gratuita | IA para Asesores Inmobiliarios",
    description:
      "Miércoles 19 de agosto · 18:00 h · Google Meet · Cupo limitado a 20 participantes.",
    images: ["/hero-piloto-ia.png"],
  },
};

const whatsappLink =
  "https://wa.me/5217713653473?text=Hola%2C%20quiero%20reservar%20mi%20lugar%20para%20la%20Sesi%C3%B3n%20Demostrativa%20Gratuita%20de%20IA%20para%20Asesores%20Inmobiliarios%20del%2019%20de%20agosto.";

const outcomes = [
  ["01", "Ficha", "Ordenamos información real sin inventar datos."],
  ["02", "Mensaje", "La traducimos en una propuesta comercial clara."],
  ["03", "Conversación", "Definimos preguntas que abren WhatsApp."],
  ["04", "Landing", "Ves cómo nace una página para promover la propiedad."],
];

export default function PilotPage() {
  return (
    <main className={styles.page}>
      <div className={styles.freeRibbon}>
        <span>✦</span> 100% GRATIS <span>✦</span> SESIÓN DEMOSTRATIVA EN VIVO <span>✦</span> CUPO PARA 20 ASESORES <span>✦</span>
      </div>

      <section className={styles.hero} id="inicio">
        <nav className={`${styles.nav} ${styles.shell}`} aria-label="Navegación principal">
          <a className={styles.brand} href="#inicio">LFMS<span>BIENES RAÍCES</span></a>
          <a className={styles.navLink} href="#registro">RESERVA TU ACCESO <b>↗</b></a>
        </nav>
        <div className={`${styles.heroGrid} ${styles.shell}`}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}><i /> GOOGLE MEET · EN VIVO · 75 MINUTOS</p>
            <h1>IA PARA<br />ASESORES<br /><em>INMOBILIARIOS</em></h1>
            <p>Descubre cómo convertir la información de una propiedad en una conversación comercial y una landing que ayuda a avanzar.</p>
            <div className={styles.heroStats}>
              <div><span>FECHA</span><strong>MIÉ 19 AGO</strong></div>
              <div><span>HORA</span><strong>18:00 H · CDMX</strong></div>
            </div>
          </div>

          <div className={styles.heroVisual} aria-label="De ficha de propiedad a landing inmobiliaria">
            <img className={styles.heroArtwork} src="/hero-prop-transformacion.png" alt="Una propiedad transforma sus datos y planos en una presentación digital" />
            <div className={styles.floatingTag}>FICHA <b>→</b> LANDING</div>
          </div>
        </div>
      </section>

      <section className={styles.dateBanner}>
        <div className={`${styles.dateBannerInner} ${styles.shell}`}>
          <div><span>CASO DEMOSTRATIVO</span><strong>DEPARTAMENTO EN VENTA · JURIQUILLA CENTRO, QUERÉTARO</strong></div>
          <div><span>INFORMACIÓN BASE</span><strong>2 RECÁMARAS · 2 BAÑOS · 90 M² DE CONSTRUCCIÓN</strong></div>
          <div><span>PRECIO DECLARADO</span><strong>$3,023,000 MXN · VIGENCIA POR CONFIRMAR</strong></div>
        </div>
      </section>

      <section className={styles.intro}>
        <div className={`${styles.introGrid} ${styles.shell}`}>
          <div><p className={styles.eyebrow}><i /> NO ES UNA CLASE DE HERRAMIENTAS</p><h2>Vas a ver<br /><em>un sistema</em><br />aplicado.</h2></div>
          <div className={styles.introSide}><p>Partimos de una propiedad real. Con criterio, no con promesas vacías, separamos datos, construimos un mensaje y llegamos a un activo comercial que se puede revisar y mejorar.</p><img src="/ilustracion-proceso-prop.png" alt="Plano, conversación y página web conectados como parte de un mismo proceso" /></div>
        </div>
      </section>

      <section className={styles.process} id="proceso">
        <div className={`${styles.processHead} ${styles.shell}`}><p className={styles.eyebrow}><i /> LA DEMOSTRACIÓN</p><h2>Cuatro movimientos.<br />Una propiedad lista para avanzar.</h2></div>
        <div className={`${styles.outcomeGrid} ${styles.shell}`}>
          {outcomes.map(([number, title, copy]) => <article key={number}><span>{number}</span><div className={styles.icon}>{number === "01" ? "▤" : number === "02" ? "✦" : number === "03" ? "◌" : "↗"}</div><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>

      <section className={styles.note}><div className={styles.shell}><span>NOTA CLARA</span><p>La sesión muestra cómo construir una landing. La publicación, dominio, hosting y operación técnica se trabajan después, dentro del programa de formación.</p></div></section>

      <section className={styles.register} id="registro">
        <div className={`${styles.registerGrid} ${styles.shell}`}>
          <div><p className={styles.eyebrow}><i /> TU PRIMER PASO NO TIENE COSTO</p><h2>RESERVA<br /><em>TU ACCESO.</em></h2><p className={styles.registerText}>Conoce el alcance del método antes de decidir si el Workshop es el siguiente paso para tu operación inmobiliaria.</p></div>
          <div className={styles.ticket}>
            <div className={styles.ticketHead}><span>SESIÓN DEMOSTRATIVA</span><strong>GRATIS</strong></div>
            <div className={styles.ticketBody}><strong>MIÉRCOLES<br />19 DE AGOSTO</strong><span>18:00 H · CIUDAD DE MÉXICO<br />GOOGLE MEET · 75 MINUTOS</span></div>
            <a href={whatsappLink} target="_blank" rel="noreferrer">RESERVAR POR WHATSAPP <b>↗</b></a>
            <small>20 LUGARES · RECIBIRÁS EL ENLACE AL CONFIRMAR</small>
          </div>
        </div>
      </section>
      <footer className={`${styles.footer} ${styles.shell}`}><span>LFMS BIENES RAÍCES</span><span>INTELIGENCIA ARTIFICIAL PARA ASESORES INMOBILIARIOS · 2026</span></footer>
    </main>
  );
}
