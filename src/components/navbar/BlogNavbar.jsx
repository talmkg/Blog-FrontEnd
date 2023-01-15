import { Container, Navbar, NavDropdown, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.css";
import { CgProfile } from "react-icons/cg";
import { GiSecretBook } from "react-icons/gi";
import { IoMdAddCircleOutline } from "react-icons/io";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
const NavBar = (props) => {
  const [value, setValue] = useState("");

  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex " id="navbar-logo">
            <h2 className="m-0 p-0 me-2">ComfyBlog</h2>
            <h2 className="m-0 p-0">
              <GiSecretBook size={30} />
            </h2>
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="hide-on-mobile"
          />
          <Navbar.Collapse id="basic-navbar-nav" className="hide-on-mobile">
            <Nav className="me-auto">
              <Link
                to="/"
                className="nav-links text-center mx-2"
                id="only-md-screens"
              >
                Home
              </Link>
              <Link
                to="/bookmarks"
                className="nav-links text-center mx-2"
                id="only-md-screens"
              >
                Bookmarks
              </Link>
            </Nav>
            <Nav className="d-flex">
              <Button
                as={Link}
                to="/search"
                className="blog-navbar-add-button btn-dark me-2"
                size="md"
                id="post-button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  class="bi bi-search me-1"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
                Search
              </Button>

              <Button
                as={Link}
                to="/new"
                className="blog-navbar-add-button btn-dark me-2"
                size="md"
                id="post-button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-plus-lg me-1"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z" />
                </svg>
                Post Article
              </Button>
              <Link
                to="/new"
                className="nav-links text-center d-none"
                id="only-md-screens"
              >
                Post Article
              </Link>
              <div className="d-flex align-items-center justify-content-center  ">
                <Link
                  to="/profile"
                  className="nav-links d-none"
                  id="only-md-screens"
                >
                  Profile
                </Link>
              </div>

              <form
                class="d-flex show-on-md m-2"
                role="search"
                id="nav-search2"
              >
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
              <Link to="/profile">
                <img
                  src="https://i.pinimg.com/564x/e8/93/19/e893198660cca7281077197df5a75f14.jpg"
                  style={{ width: "40px", borderRadius: "50%" }}
                  className="hide-on-mobile hide-on-md"
                />
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
