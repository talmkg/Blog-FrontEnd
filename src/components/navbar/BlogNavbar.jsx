import { Container, Navbar, Dropdown, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.css";
import { CgProfile } from "react-icons/cg";
import { GiSecretBook } from "react-icons/gi";
import { IoMdAddCircleOutline } from "react-icons/io";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
const NavBar = (props) => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </a>
  ));

  const CustomMenu = React.forwardRef(
    ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
      return (
        <div
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}
        >
          <ul className="list-unstyled">
            {React.Children.toArray(children).filter(
              (child) =>
                !value || child.props.children.toLowerCase().startsWith(value)
            )}
          </ul>
        </div>
      );
    }
  );

  return (
    <>
      <Navbar>
        <Container id="navbar" className="d-flex justify-content-between">
          <div>
            <Navbar.Brand as={Link} to="/" className="d-flex" id="navbar-logo">
              <h2 className="m-0 p-0 me-2">ComfyBlog</h2>
              <h2 className="m-0 p-0">
                <GiSecretBook size={30} />
              </h2>
            </Navbar.Brand>
          </div>
          <div id="hide-on-mobile">
            <Form.Control
              autoFocus
              className="mx-3 my-2 w-auto"
              placeholder="Type to filter..."
              onChange={(e) => setValue(e.target.value)}
              value={value}
            />
          </div>
          <div id="hide-on-mobile">
            <Navbar.Collapse id="navbar-post">
              <Link to="/" className="text-dark" id="nav-link">
                <IoMdAddCircleOutline size={38} />
              </Link>
              <Dropdown id="nav-link">
                <Dropdown.Toggle as={CustomToggle}>
                  <img
                    src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
                    style={{ width: "39px", borderRadius: "50%" }}
                  />
                </Dropdown.Toggle>

                <Dropdown.Menu as={CustomMenu} className="mt-2">
                  <Dropdown.Item eventKey="1">Profile</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Useful Link</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Suggest Changes</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
