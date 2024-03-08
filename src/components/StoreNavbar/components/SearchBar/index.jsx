// Bootstrap Components
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Styles
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <Form style={{display: "flex", alignItems: "center"}} inline>
      <Row>
        <Col xs="auto">
          <Form.Control
            type="text"
            placeholder="Search"
            className=" mr-sm-2"
          />
        </Col>
        <Col xs="auto">
          <Button className={styles.searchButton} type="submit">Search</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBar;