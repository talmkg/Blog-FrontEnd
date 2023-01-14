import React from "react";
import { Col, Row } from "react-bootstrap";

import BlogItem from "../blog-item/BlogItem";
import { useState, useEffect } from "react";
const BlogList = (props) => {
  const [blogs, setBlogs] = useState([]);

  React.useEffect(() => {
    const fetching = async () => {
      let response = await fetch("https://main.up.railway.app/blogs");
      if (response.ok) {
        const fetchedData = await response.json();
        setBlogs(fetchedData);
      } else {
        console.log("error");
      }
    };
    fetching();
  }, []);

  console.log(blogs);

  return (
    <Row>
      {blogs?.map((blog) => (
        <Col xs={12} s={6} md={6} lg={4} className="mb-2">
          <BlogItem key={blog.title} {...blog} />
        </Col>
      ))}
    </Row>
  );
};

export default BlogList;
