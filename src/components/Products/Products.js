import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import cart from "../../images/shopping-cart 1.png";

const Products = ({ products }) => {
  const { name, price, qty, imageUrl } = products;

  return (
    <div>
      <Col className="m-lg-2 m-1 m-sm-2 m-md-3 p-lg-2 p-1 p-sm-2 p-md-3 col-lg-4 col-6 col-sm-8 col-md-4">
        <Card
          style={{
            width: "18rem",
          }}
          className="p-3"
        >
          <Card.Img variant="top" src={imageUrl} />
          <Card.Body>
            <Card.Title>Name: {name}</Card.Title>
            <Card.Title>Price: {price}</Card.Title>
            <Card.Title>Quantity: {qty}</Card.Title>
          </Card.Body>
          <Link
            to={`/checkout/${name}`}
            className=" text-info text-decoration-none"
          >
            <Button className="btn btn-info">
              Buy Now{" "}
              <img
                style={{ height: "20px", width: "20px" }}
                src={cart}
                alt=""
              />
            </Button>
          </Link>
        </Card>
      </Col>
    </div>
  );
};

export default Products;
