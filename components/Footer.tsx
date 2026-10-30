import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div>
          <a href="#" className={styles.logo}>
            zello<span>.</span>
          </a>
          <p>Proteção, confiança e tranquilidade para pessoas e empresas.</p>
        </div>

        <div>
          <h3>Navegação</h3>
          <a href="#about">Sobre nós</a>
          <a href="#services">Serviços</a>
          <a href="#faq">Dúvidas</a>
        </div>

        <div>
          <h3>Contato</h3>
          <a href="mailto:contato@zello.com.br">E-mail</a>
          <a href="#contact">Fale conosco</a>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© 2026 Zello. Todos os direitos reservados.</span>
        <span>Desenvolvido com dedicação.</span>
      </div>
    </footer>
  );
}
