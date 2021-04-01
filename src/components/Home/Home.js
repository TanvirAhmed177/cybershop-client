import React, { useEffect, useState } from "react";
import "./Home.css";
import {
  Container,
  Row,
  Spinner,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import Products from "../Products/Products";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(true);
      });
  }, []);
  return (
    <Container fluid className="home-container">
      <Form inline className="justify-content-center p-5">
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2 mb-1 mb-lg-0"
        />
        <Button variant="outline-info" className="bg-info text-light">
          Search
        </Button>
      </Form>
      {loading ? (
        <Row className="justify-content-center p-5">
          {products.map((p) => (
            <Products products={p}></Products>
          ))}
        </Row>
      ) : (
        <Spinner animation="border" variant="secondary" />
      )}
    </Container>
  );
};

export default Home;
