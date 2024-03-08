// Styles
import styles from "./Logo.module.css";

const Logo = ({ img = "" }) => {
  return (
    <div className={styles.logoContainer}>
      <img className={styles.logoImg} src={img} alt="Imagen del Logo" />
      <h1 className={styles.storeName}>YagoStore</h1>
    </div>
  );
}

export default Logo;