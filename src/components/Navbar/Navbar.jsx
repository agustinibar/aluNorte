import styles from '../Navbar/navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
    <div className={styles.navbarLeft}>
      <h2 className={styles.logo}>Alunorte</h2>
    </div>
    <div className={styles.navbarRight}>
      <button>
      Contáctanos ahora mismo!
      </button>
    </div>
  </nav>
  )
}

export default Navbar;