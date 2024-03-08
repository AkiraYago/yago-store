// Styles
import styles from "./Navbar.module.css";

// Assets
import cartIcon from "../../assets/icons/cart.svg";

// Components
import CategoriesList from "./components/Categories";
import Logo from "./components/Logo";
import SearchBar from "./components/SearchBar";

// Bootstrap Components
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const StoreNavbar = ({ logoImg, categories, searchBarProps }) => {
  return (
    <Navbar expand="lg" className={styles.navbar}>
      <Container>
        <Navbar.Brand href="/">
          <Logo img={logoImg} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto w-50">
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <CategoriesList categories={categories} />
            </NavDropdown>
            <Nav.Link href="/favorites">Favorites</Nav.Link>
          </Nav>
          <Nav className="me-auto w-50">
            <SearchBar />
            <Nav.Link href="/cart">
              <img className={styles.cartIcon} src={cartIcon} alt="" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default StoreNavbar;