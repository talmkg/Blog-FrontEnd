import React from "react";
import { Button, Container, Navbar, Footer } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.css";
import { IoMdAddCircleOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { AiOutlineSearch, AiOutlineHome } from "react-icons/ai";
const Navbarmobile = (props) => {
  return (
    <footer
      className="fixed-bottom d-flex justify-content-center bg-light p-2 mb-2 me-2 mx-2 "
      style={{ borderRadius: "20px" }}
      id="navbar-mobile"
    >
      {/*------------------------------------------------------------------------ movile-version */}
      <div
        id="navbar-post-mobile"
        className="w-100 d-flex justify-content-around"
      >
        <Link to="/home" className="text-dark" id="nav-link">
          <AiOutlineHome size={30} />
        </Link>
        <Link to="/search" className="text-dark" id="nav-link">
          <AiOutlineSearch size={30} />
        </Link>

        <Link to="/new" className="text-dark" id="nav-link">
          <IoMdAddCircleOutline size={30} />
        </Link>

        <Link to="/profile" className="text-dark" id="nav-link">
          <CgProfile size={30} />
        </Link>
      </div>
    </footer>
  );
};
export default Navbarmobile;
