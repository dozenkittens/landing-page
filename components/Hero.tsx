import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <span className={styles.label}>PROTEÇÃO PARA O SEU FUTURO</span>

        <h1>
          Proteção que gera
          <span> confiança.</span>
        </h1>

        <p>
          Soluções inteligentes em seguros para empresas que valorizam pessoas e
          constroem um futuro seguro.
        </p>

        <a href="#contact" className={styles.button}>
          Fale com um especialista ↗
        </a>

        <div className={styles.note}>
          <span>✓</span> Cuidado, segurança e confiança em cada escolha.
        </div>
      </div>

      <div className={styles.image}>
        <div className={styles.imageText}>
          <span>SEGUROS CORPORATIVOS</span>
          <strong>Seu futuro protegido.</strong>
        </div>
      </div>
    </section>
  );
}
