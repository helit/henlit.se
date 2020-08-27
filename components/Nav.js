
import styles from '../styles/Nav.module.css'

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.navItem}><a href="/">Home</a></li>
        <li className={styles.navItem}><a href="/">Menu 2</a></li>
        <li className={styles.navItem}><a href="/">Menu 3</a></li>
      </ul>
    </nav>
  )
}
