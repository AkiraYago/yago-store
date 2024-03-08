// Bootstrap Components
import { NavDropdown } from "react-bootstrap";

const CategoriesList = ({ categories = [{ id: 1, name: "Tech" }, { id: 2, name: "Furniture" }] }) => {
  const categoriesList = categories.map(category =>
    <NavDropdown.Item href={`category/${category.id}`}>
      {category.name}
    </NavDropdown.Item>
  );

  return categoriesList;
}

export default CategoriesList;