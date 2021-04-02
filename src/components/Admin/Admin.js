import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import Edit from "../../images/Group 307.png";
import Delete from "../../images/Group 33150.png";
const Admin = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://rhubarb-pie-83600.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const handleDelete = (id) => {
    console.log(id);
    fetch(`https://rhubarb-pie-83600.herokuapp.com/deleteProduct/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => console.log("Deleted Succeed"));
  };
  return (
    <Container fluid>
      <Row>
        <Col className="p-0 col-12 ">
          <AdminNavbar></AdminNavbar>
        </Col>
      </Row>
      <Row>
        <table className="table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>

          {products.map((p) => (
            <tbody>
              <tr>
                <td>{p.name}</td>
                <td>{p.price}</td>
                <td>{p.qty}</td>
                <td>
                  <img
                    style={{ height: "25px", cursor: "pointer" }}
                    className="pr-1"
                    src={Edit}
                    alt=""
                  />
                  <img
                    style={{ height: "25px", cursor: "pointer" }}
                    src={Delete}
                    onClick={() => handleDelete(p._id)}
                    alt=""
                  />
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </Row>
    </Container>
  );
};

export default Admin;
