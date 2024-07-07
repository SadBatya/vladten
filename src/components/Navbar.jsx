import { Link, Outlet } from "react-router-dom";
import styles from "./NavBar.module.scss";

export default function Navbar() {
  return (
    <>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link className={styles.navigation__text} to="/video">
              <button className={styles.navigation__button}>Видео</button>
            </Link>
          </li>
          <li>
            <Link className={styles.navigation__text} to="/posts">
              <button className={styles.navigation__button}>Посты</button>
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
