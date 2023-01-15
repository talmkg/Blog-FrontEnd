import React from "react";
import { Col, Row } from "react-bootstrap";
import BlogItem from "../blog-item/BlogItem";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getBlogs } from "../../../redux/actions";
import Spinner from "react-bootstrap/Spinner";
import "./styles.css";

const BlogList = (props) => {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs.blogs);

  React.useEffect(() => {
    dispatch(getBlogs()).then(setLoading(false));
  }, []);
  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        id="spinner"
      >
        <Spinner animation="border" />
      </div>
    );
  } else {
    return (
      <Row>
        {blogs?.reverse().map((blog) => (
          <Col xs={12} s={6} md={6} lg={4} className="mb-2">
            <BlogItem key={blog.title} {...blog} />
          </Col>
        ))}
      </Row>
    );
  }
};

export default BlogList;
