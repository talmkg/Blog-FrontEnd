import React from "react";
import { Col, Row } from "react-bootstrap";

import BlogItem from "../blog-item/BlogItem";
import { useState, useEffect } from "react";
const BlogList = (props) => {
  const [news, setNews] = useState([]);

  React.useEffect(() => {
    const fetching = async () => {
      let response = await fetch(
        "https://backendhw122-production.up.railway.app/blogs"
      );
      if (response.ok) {
        const fetchedData = await response.json();
        setNews(fetchedData);
      } else {
        console.log("error");
      }
    };
    fetching();
  }, []);

  console.log(news);

  return (
    <Row>
      {news?.map((blog) => (
        <Col
          md={3}
          style={{
            marginBottom: 50,
          }}
        >
          <BlogItem key={blog.title} {...blog} />
        </Col>
      ))}
    </Row>
  );
};

export default BlogList;
