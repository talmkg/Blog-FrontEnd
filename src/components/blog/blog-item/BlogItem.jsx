import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import BlogAuthor from "../blog-author/BlogAuthor";
import "./styles.css";
const BlogItem = (props) => {
  const { title, cover, author, id, readTime } = props;

  return (
    <Link to={`blogs/${id}`} className="blog-link">
      <Card className="blog-card">
        <Card.Img variant="top" src={cover} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
        </Card.Body>

        <Card.Footer>
          <BlogAuthor {...author} {...readTime} />
        </Card.Footer>
      </Card>
    </Link>
  );
};

export default BlogItem;
