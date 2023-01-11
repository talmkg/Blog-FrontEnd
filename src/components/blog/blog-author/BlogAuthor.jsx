import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import "./styles.css";

const BlogAuthor = (props) => {
  const { name, avatar, value, unit } = props;
  return (
    <Row>
      <Col xs={2}>
        <Image className="blog-author" src={avatar} roundedCircle />
      </Col>
      <Col>
        <p className="p-0 m-0">
          Read-time: {value} {unit}
        </p>
        <p className="p-0 m-0">by {name}</p>
      </Col>
    </Row>
  );
};

export default BlogAuthor;
