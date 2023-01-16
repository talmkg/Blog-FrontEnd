import React from "react";
import { Card, Row, Col, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import BlogAuthor from "../blog-author/BlogAuthor";
import "./styles.css";
const SideBlogItem = (props) => {
  const { title, cover, author, id, readTime, content, createdAt } = props;

  return (
    <>
      {/* <Card className="blog-card bg-dark text-light" id="blog-link">
        <Card.Img
          variant="top"
          src={cover}
          style={{ aspectRatio: 16 / 9, objectFit: "cover" }}
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
          <Row className="d-flex align-items-center justify-content-between">
            <Col xs={12}>
              <div className="first_post">
                <p
                  dangerouslySetInnerHTML={{
                    __html: content,
                  }}
                  className="text-muted"
                ></p>
              </div>
            </Col>
          </Row>
          <div>
            <p id="no-p-no-m" className="text-truncate text-muted">
              {new Date(createdAt).toLocaleDateString()} •{readTime.value}{" "}
              {readTime.unit}('s) Read
            </p>
          </div>
        </Card.Body>
      </Card> */}

      <Link to={`/blogs/${id}`} id="blog-link">
        <Container>
          <div
            class="card bg-dark mb-3"
            style={{ maxWidth: "540px", border: "none" }}
          >
            <div class="row g-0">
              <div class="col-md-4">
                <Card.Img
                  src={cover}
                  class="w-100 h-100 rounded-start"
                  alt="..."
                  style={{ aspectRatio: 16 / 9, objectFit: "cover" }}
                />
              </div>
              <div class="col-md-8">
                <div class="card-body text-light">
                  <div className="mb-2">
                    <BlogAuthor {...author} {...readTime} />
                  </div>
                  <h5 class="card-title text-light">{title}</h5>
                  <p class="card-text">
                    <small class="text-muted">
                      {new Date(createdAt).toLocaleDateString()} •{" "}
                      {readTime.value}
                      {readTime.unit}('s) Read
                    </small>
                  </p>
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
