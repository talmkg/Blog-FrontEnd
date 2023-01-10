import React from "react";
import { Container } from "react-bootstrap";
import BlogList from "../../components/blog/blog-list/BlogList";
import "./styles.css";
import { useState } from "react";
const Home = (props) => {
  const [news, setNews] = useState([]);

  return (
    <Container fluid="sm">
      <h1 className="blog-main-title">Welcome to the Epicode Blog!</h1>
      <BlogList />
    </Container>
  );
};

export default Home;
