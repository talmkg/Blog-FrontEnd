import React from "react";
import { Container } from "react-bootstrap";

const Footer = (props) => {
  return (
    <footer
      style={{
        paddingTop: 50,
        paddingBottom: 70,
      }}
    >
      <Container
        style={{ position: "relative", bottom: 0 }}
        className="w-100 text-center  text-light"
      >{`${new Date().getFullYear()} - © Comfy Blog `}</Container>
    </footer>
  );
};

export default Footer;
