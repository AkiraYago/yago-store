// Components
import StoreNavbar from "../../components/StoreNavbar";

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
      <StoreNavbar logoImg={logoImg} />
    </>
  );
}

export default Home;