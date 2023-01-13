import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import "./styles.css";

const BlogAuthor = (props) => {
  const { name, avatar, value, unit } = props;
  return (
    <Row>
      <Col xs={12} className="d-flex align-items-center justify-content-start">
        <Image className="blog-author me-1" src={avatar} roundedCircle />
        <p id="no-p-no-m" className="text-truncate">
          by {name}
        </p>
      </Col>
    </Row>
  );
};

export default BlogAuthor;
