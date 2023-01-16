import React from "react";
import { Card, Row, Col, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import BlogAuthor from "../blog-author/BlogAuthor";
import "./styles.css";
const SideBlogItem = (props) => {
  const { title, cover, author, id, readTime, content, createdAt } = props;

  return (
    <>
      <Link
        to={`/blogs/${id}`}
        id="blog-link"
        className="d-flex align-items-end"
      >
        <Container>
          <div class="card bg-dark">
            <div class="row g-0">
              <div class="col-md-5">
                <Card.Img
                  src={cover}
                  class="w-100 h-100 img-fluid rounded-start"
                  alt="..."
                  style={{ objectFit: "cover", aspectRatio: 16 / 9 }}
                />
              </div>
              <div class="col-md-7">
                <div class="card-body text-light">
                  <div className="mb-2">
                    <BlogAuthor {...author} {...readTime} />
                  </div>
                  <h5 class="card-title text-light text-truncate">{title}</h5>

                  <small>
                    <p class="text-muted card-text text-truncate">
                      {new Date(createdAt).toLocaleDateString()} •{" "}
                      {readTime.value} {readTime.unit}('s) Read
                    </p>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Link>
    </>
  );
};

export default SideBlogItem;
