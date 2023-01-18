import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import BlogAuthor from "../blog-author/BlogAuthor";
import "./styles.css";
const MainBlogItem = (props) => {
  const { title, cover, author, id, readTime, content, createdAt } = props;

  return (
    <Link to={`/blogs/${id}`} id="blog-link" style={{ body: "unset" }}>
      <Card className="h-100 bg-dark text-light">
        <Card.Img
          src={cover}
          alt="image"
          className="img-fluid"
          style={{
            objectFit: "cover",
            aspectRatio: 16 / 9,
            height: "100%",
          }}
        />
        <Card.Body>
          <div className="d-flex justify-content-between mb-3">
            <BlogAuthor {...author} {...readTime} />

            <Button
              variant="outline-secondary"
              size="sm"
              className=" mx-2 rounded-3"
              id="follow-button"
            >
              Follow
            </Button>
          </div>
          <Card.Title className="text-truncate">{title}</Card.Title>
          <div id="text-main-blog">
            <p
              dangerouslySetInnerHTML={{
                __html: content,
              }}
              className="text-muted"
            ></p>
          </div>
          <div className="bg-dark">
            <p id="no-p-no-m" className="text-truncate text-muted">
              {new Date(createdAt).toLocaleDateString()} • {readTime.value}{" "}
              {readTime.unit}('s) Read
            </p>
          </div>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default MainBlogItem;
