import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import BlogAuthor from "../blog-author/BlogAuthor";
import "./styles.css";
const BlogItem = (props) => {
  const {
    title,
    cover,
    img,
    asin,
    author,
    _id,
    index,
    price,
    category,
    readTime,
  } = props;

  return (
    <Link to={`books/${_id}`} className="blog-link">
      <Card className="blog-card">
        <Card.Img
          variant="top"
          src={`https://picsum.photos/id/${_id}${_id}/900/900`}
        />
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
