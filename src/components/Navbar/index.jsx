// Styles
import styles from "./Navbar.module.css";

// Components
import Cart from "./components/Cart";
import Categories from "./components/Categories";
import Favorites from "./components/Favorites";
import Logo from "./components/Logo";
import SearchBar from "./components/SearchBar";

const Navbar = ({ logoImg, categories, searchBarProps }) => {
  return (
    <nav className={styles.navbar}>
      <section className={styles.leftSection}>
        <Logo img={logoImg} />
        <Categories categories={categories} />
        <Favorites />
      </section>
      <section className={styles.rightSection}>
        <SearchBar />
        <Cart />
      </section>
    </nav>
  );
}

export default Navbar;