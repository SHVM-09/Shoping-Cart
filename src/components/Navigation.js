import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BsCartCheck } from "react-icons/bs";
import { useContext } from "react";
import Context from "./ContextCart";
import styles from "./Navigation.module.css";

function NavScrollExample({ setShowCart }) {
  const contextData = useContext(Context);
  return (
    <Navbar
      bg="light"
      className={styles.naviB}
      expand="lg"
      style={{ borderRadius: "10px" }}
    >
      <Container fluid>
        <Navbar.Brand onClick={() => setShowCart(true)}>
          Shopify.com
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/Home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/Product" onClick={() => setShowCart(true)}>
              Products
            </Nav.Link>
            <NavDropdown title="Info" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/About">
                About
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Contact">
                Contact
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Text
          style={{ marginLeft: "50px" }}
          onClick={() => setShowCart(false)}
        >
          <BsCartCheck />{" "}
          <strong
            style={{
              color: "white",
              position: "relative",
              left: "-6px",
              top: "-5px",
              borderRadius: "5px",
              padding: "2px",
              backgroundColor: "black",
              paddingLeft: "4px",
              paddingRight: "3px",
            }}
          >
            {contextData.cartValue}
          </strong>
        </Navbar.Text>
      </Container>
    </Navbar>
  );
}
//
export default NavScrollExample;
