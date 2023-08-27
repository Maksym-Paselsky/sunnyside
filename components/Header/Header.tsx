import styles from "./Header.module.scss";
export default function Header() {
  return (
    <nav>
      <ul className={styles.list}>
        <li>
          <a className={styles.link} href="/">
            About
          </a>
        </li>
        <li>
          <a className={styles.link} href="/">
            Services
          </a>
        </li>
        <li>
          <a className={styles.link} href="/">
            Projects
          </a>
        </li>
        <li>
          <a className={styles.link} href="/">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
