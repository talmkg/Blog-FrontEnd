import React from "react";
import { Container } from "react-bootstrap";
import BlogList from "../../components/blog/blog-list/BlogList";
import "./styles.css";
import { useState } from "react";
const Home = (props) => {
  return (
    <Container fluid="sm">
      <h1 className="blog-main-title"></h1>
      <BlogList />
    </Container>
  );
};

export default Home;
