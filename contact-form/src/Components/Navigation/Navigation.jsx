import { AiOutlineMenu } from "react-icons/ai";
import styles from "./Navigation.module.css";

function Navigation() {
  return (
    <nav className={`${styles.navigation} container`}>
      <div className={styles.logo}>
        <img src="/logo.png" alt="logo" />
      </div>


      <div className={styles.menuIcon}>
        <AiOutlineMenu size={28} />
      </div>

      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
