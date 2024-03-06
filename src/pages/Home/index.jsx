// Components
import Navbar from "../../components/Navbar";

// Assets
import logoImg from "/yagostore-logo.svg"

const Home = () => {
  return (
    <>
      {
      /* Debo pasarle:
        - logo img (logoProps)
        - lista de categorias (categoriesProps)
        - lista de la API de la tienda (searchBarProps)
      */
      }
      <Navbar logoImg={logoImg} />
    </>
  );
}

export default Home;