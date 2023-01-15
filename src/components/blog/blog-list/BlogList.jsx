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
  // const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs.blogs);
  const loading = useSelector((state) => state.blogs.isLoading);

  React.useEffect(() => {
    dispatch(getBlogs());
  }, []);

  let reverseArray = [];
  let length = blogs.length;
  for (let i = length - 1; i >= 0; i--) {
    reverseArray.push(blogs[i]);
  }

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
        {reverseArray?.map((blog) => (
          <Col xs={12} s={6} md={6} lg={4} className="mb-2">
            <BlogItem key={blog.id} {...blog} />
          </Col>
        ))}
      </Row>
    );
  }
};

export default BlogList;
