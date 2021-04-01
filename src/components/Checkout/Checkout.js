import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Col, Container, Row, Button } from "react-bootstrap";
import { UserContext } from "../../App";
import DatePicker from "react-date-picker";

const Checkout = () => {
  const { name } = useParams();
  const [loggedInUser] = useContext(UserContext);

  const [product, setProduct] = useState({});
  const [date, onChange] = useState(new Date());
  const { price, qty } = product;

  useEffect(() => {
    fetch("https://rhubarb-pie-83600.herokuapp.com/products/" + name)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [name]);

  const handleOrder = () => {
    const newOrder = { ...product, ...loggedInUser, date };
    fetch("https://rhubarb-pie-83600.herokuapp.com/addOrders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newOrder),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <Container>
      <Row className=" justify-content-center p-5">
        <Col>
          <div className="table-responsive bg-light">
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1</td>
                  <td>{name}</td>
                  <td>{price}</td>
                  <td>{qty}</td>
                </tr>
              </tbody>
            </table>
            <label htmlFor="date" className="pr-2">
              Date:{" "}
            </label>
            <DatePicker onChange={onChange} value={date} name="date" />

            <Link to="/orders" className=" text-info text-decoration-none">
              <Button className="btn btn-warning ml-2" onClick={handleOrder}>
                Checkout
              </Button>
            </Link>
            <br />
            <br />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Checkout;
