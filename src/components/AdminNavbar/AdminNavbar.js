import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Grid from "../../images/grid 1.png";
import Add from "../../images/plus 1.png";
import Edit from "../../images/edit 1.png";

const AdminNavbar = () => {
  return (
    <div>
      <Navbar
        className="pl-5"
        bg="dark"
        variant="dark"
        collapseOnSelect
        expand="md"
        sticky="top"
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto active ">
            <Link className="pr-4 text-light text-decoration-none " to="/admin">
              <img
                style={{ height: "20px", width: "20px" }}
                src={Grid}
                alt=""
              />
              Manage Product
            </Link>
            <Link
              className="pr-4 text-light text-decoration-none"
              to="/addProduct"
            >
              <img style={{ height: "20px", width: "20px" }} src={Add} alt="" />
              Add Product
            </Link>
            <Link
              className="pr-4  text-light text-decoration-none"
              to="/orders"
            >
              <img
                style={{ height: "20px", width: "20px" }}
                src={Edit}
                alt=""
              />
              Edit Product
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default AdminNavbar;
