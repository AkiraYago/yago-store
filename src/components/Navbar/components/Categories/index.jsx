// Hooks
import { useState } from "react";

// Styles
import styles from "./Categories.module.css";

// React Router DOM
import { useNavigate } from "react-router-dom";

// Assets
import dropdownArrow from "../../../../assets/icons/caret-down.svg";
import dropdownArrowFill from "../../../../assets/icons/caret-down-fill.svg";

const Categories = ({ categories = [{id: 1, name: "Tech"}, {id: 3, name: "Furniture"}] }) => {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    setIsClicked(!isClicked);
  }

  const handleDropdownItemClick = (categoryName) => {
    navigate(`/category/${categoryName}`);
  }

  const renderDropdownMenu = () => {
    const categoriesList = categories.map(category =>
      <li
        key={`category-${category.id}`}
        className={styles.dropdownItem}
        onClick={() => handleDropdownItemClick(category.name)}
      >
        {category.name}
      </li>
    );

    return isClicked &&
      <ul className={styles.dropdownMenu}>
        {categoriesList}
      </ul>
  }

  return (
    <div className={styles.dropdownContainer}>
      <button className={styles.dropdownButton} onClick={handleButtonClick}>
        <span>Categories</span>
        <span>
          <img className={styles.dropdownIcon} src={isClicked ? dropdownArrow : dropdownArrowFill} alt="Icono botón dropdown" />
        </span>
      </button>
      {renderDropdownMenu()}
    </div>
  );
}

export default Categories;