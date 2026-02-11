import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>Контакти</h3>
          <p>Email: hello@studio.com</p>
          <p>Телефон: +380 XX XXX XX XX</p>
        </div>
        <div className={styles.footerSection}>
          <h3>Соціальні мережі</h3>
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">LinkedIn</a>
        </div>
        <div className={styles.footerSection}>
          <h3>Адреса</h3>
          <p>
            м. Київ
            <br />
            вул. Прикладна, 1
          </p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>© 2024 Digital Studio. Всі права захищено.</p>
      </div>
    </footer>
  )
}
