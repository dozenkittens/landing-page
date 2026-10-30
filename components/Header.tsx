import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <a href="#" className={styles.logo}>
        zello<span>.</span>
      </a>

      <nav className={styles.nav}>
        <a href="#">Início</a>
        <a href="#about">Sobre</a>
        <a href="#services">Serviços</a>
        <a href="#faq">Dúvidas</a>
      </nav>

      <a href="#contact" className={styles.button}>
        Fale com um especialista ↗
      </a>
    </header>
  );
}
