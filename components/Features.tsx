import styles from "./Features.module.css";

const services = [
  {
    number: "01",
    title: "Seguro de Vida",
    description:
      "Proteção e tranquilidade para os colaboradores e suas famílias.",
    image: "photo-1497366754035-f200968a6e72",
  },
  {
    number: "02",
    title: "Seguro Empresarial",
    description:
      "Soluções para proteger o patrimônio e o crescimento da sua empresa.",
    image: "photo-1497366811353-6870744d04b2",
  },
];

const questions = [
  "Por que contratar um seguro empresarial?",
  "Como funciona o seguro de vida coletivo?",
  "Como solicitar uma cotação?",
];

export default function Features() {
  return (
    <>
      <section className={styles.about} id="about">
        <div className={styles.aboutImage}></div>

        <div className={styles.aboutContent}>
          <span className={styles.label}>SOBRE A ZELLO</span>
          <h2>Mais do que seguros, construímos confiança.</h2>
          <p>
            Acreditamos que proteger pessoas e empresas é construir um futuro
            melhor. Trabalhamos com responsabilidade, transparência e dedicação.
          </p>

          <div className={styles.values}>
            <div>
              <strong>Missão</strong>
              <p>Proteger pessoas e empresas.</p>
            </div>
            <div>
              <strong>Visão</strong>
              <p>Ser referência em proteção.</p>
            </div>
            <div>
              <strong>Valores</strong>
              <p>Ética, confiança e cuidado.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.services} id="services">
        <div className={styles.heading}>
          <span className={styles.label}>NOSSAS SOLUÇÕES</span>
          <h2>Proteção feita para você.</h2>
        </div>

        <div className={styles.cards}>
          {services.map((service) => (
            <article className={styles.card} key={service.number}>
              <img
                src={`https://images.unsplash.com/${service.image}?w=900`}
                alt={service.title}
              />
              <div className={styles.cardContent}>
                <span>{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#contact">Saiba mais ↗</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.stats}>
        <div>
          <strong>+500</strong>
          <span>Clientes atendidos</span>
        </div>
        <div>
          <strong>+10 mil</strong>
          <span>Vidas protegidas</span>
        </div>
        <div>
          <strong>+50</strong>
          <span>Empresas parceiras</span>
        </div>
        <div>
          <strong>100%</strong>
          <span>Compromisso com você</span>
        </div>
      </section>

      <section className={styles.partners}>
        <span className={styles.label}>NOSSOS PARCEIROS</span>
        <div>
          <strong>SEGURADORA</strong>
          <strong>PROTEGE</strong>
          <strong>GLOBAL</strong>
          <strong>SEGUROS+</strong>
        </div>
      </section>

      <section className={styles.faq} id="faq">
        <div>
          <span className={styles.label}>DÚVIDAS FREQUENTES</span>
          <h2>Como podemos ajudar?</h2>
          <p>Confira algumas das perguntas mais frequentes.</p>
        </div>

        <div className={styles.questions}>
          {questions.map((question) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>
                Entre em contato com nossa equipe para receber informações e
                encontrar a melhor solução para sua empresa.
              </p>
            </details>
          ))}
        </div>
      </section>

      <section className={styles.contact} id="contact">
        <div>
          <span className={styles.label}>FALE CONOSCO</span>
          <h2>Vamos proteger o seu futuro?</h2>
          <p>Entre em contato com nossa equipe de especialistas.</p>
          <a href="mailto:contato@zello.com.br">Enviar mensagem ↗</a>
        </div>
        <div className={styles.contactImage}></div>
      </section>
    </>
  );
}
