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
        className="w-100 text-center"
      >{`${new Date().getFullYear()} - © Tim's Projects |  @talmkg`}</Container>
    </footer>
  );
};

export default Footer;
