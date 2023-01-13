import React from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.css";
import { GiSecretBook } from "react-icons/gi";
const NavBar = (props) => {
  return (
    <Navbar expand="lg" className="blog-navba bg-dark" fixed="top">
      <Container className="justify-content-between">
        <Navbar.Brand as={Link} to="/" className="d-flex  text-light">
          <h2 className="m-0 p-0 me-2">ComfyBlog</h2>
          <h2 className="m-0 p-0 me-2">
            <GiSecretBook size={30} />
          </h2>
        </Navbar.Brand>

        <Button
          as={Link}
          to="/new"
          className="blog-navbar-add-button bg-dark"
          size="lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-plus-lg"
            viewBox="0 0 16 16"
          >
            <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z" />
          </svg>
          Post Article
        </Button>
      </Container>
    </Navbar>
  );
};

export default NavBar;
