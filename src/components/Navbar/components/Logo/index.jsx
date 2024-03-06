// Styles
import styles from "./Logo.module.css";

// React Router DOM
import { Link } from "react-router-dom";

const Logo = ({ img = "" }) => {
  return (
    <Link className={styles.logoContainer} to="/">
      <img className={styles.logoImg} src={img} alt="Imagen del Logo" />
      <h1 className={styles.storeName}>YagoStore</h1>
    </Link>
  );
}

export default Logo;