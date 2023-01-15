import React from "react";
import { Container } from "react-bootstrap";

const About = () => {
  return (
    <Container fluid="sm" id="container">
      <form method="POST" action="/upload" enctype="multipart/form-data">
        <input type="file" name="image" id="image_input" />
        <input type="submit" />
      </form>
    </Container>
  );
};

export default About;
