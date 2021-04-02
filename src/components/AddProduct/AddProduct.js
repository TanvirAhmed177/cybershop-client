import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import AdminNavbar from "../AdminNavbar/AdminNavbar";

const AddProduct = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const { handleSubmit, register } = useForm();

  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "03e9b955f285bbd656c109720cb59b3b");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        console.log(response);
        setImageUrl(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onSubmit = (data) => {
    const eventData = {
      name: data.name,
      price: data.price,
      qty: data.qty,
      imageUrl: imageUrl,
    };
    fetch("https://rhubarb-pie-83600.herokuapp.com/addProducts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(eventData),
    })
      .then((res) => res.json())
      .then((data) => {});
  };
  return (
    <Container fluid>
      <Row>
        <Col className="p-0 col-12 ">
          <AdminNavbar></AdminNavbar>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name" className="text-light pt-3 pr-2">
              Product Name:{" "}
            </label>
            <input name="name" ref={register} />
            <br />
            <br />
            <label htmlFor="price" className="text-light pr-3">
              Product Price:{" "}
            </label>

            <input name="price" ref={register} />
            <br />
            <br />
            <label htmlFor="qty" className="text-light pr-3">
              {" "}
              Product Quantity:{" "}
            </label>

            <input name="qty" ref={register} />
            <br />
            <br />
            <label htmlFor="exampleRequired" className="text-light pl-5 pr-2">
              {" "}
              Upload Image:{" "}
            </label>

            <input
              name="exampleRequired"
              type="file"
              onChange={handleImageUpload}
            />
            <br />
            <br />
            <input type="submit" className="btn btn-dark" value="Add Product" />
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddProduct;
