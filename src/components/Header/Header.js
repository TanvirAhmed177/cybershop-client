import React, { useContext } from "react";
import { Form, Nav, Navbar, Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

const Header = () => {
  const [loggedInUser] = useContext(UserContext);

  return (
    <Container fluid>
      <Row>
        <Col className="p-0 col-12">
          <Navbar
            className="pr-5"
            bg="info"
            variant="dark"
            collapseOnSelect
            expand="md"
            sticky="top"
          >
            <Navbar.Brand className="pl-5 text-light">
              <b>Cybershop</b>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <Link
                  className="pr-4 pt-1 text-light text-decoration-none"
                  to="/home"
                >
                  Home
                </Link>
                <Link
                  className="pr-4 pt-1 text-light text-decoration-none"
                  to="/admin"
                >
                  Admin
                </Link>
                <Link
                  className="pr-4 pt-1 text-light text-decoration-none"
                  to="/orders"
                >
                  Orders
                </Link>
                <Link
                  className="pr-4 pt-1 text-light text-decoration-none"
                  to="/home"
                >
                  Deal
                </Link>
                <Form inline>
                  {loggedInUser.userName ? (
                    <h5 className="text-light">{loggedInUser.userName}</h5>
                  ) : (
                    <Link
                      to="/login"
                      className="text-light border border-light pl-2 pr-2 pt-1 pb-1 text-decoration-none"
                    >
                      Login
                    </Link>
                  )}
                </Form>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
