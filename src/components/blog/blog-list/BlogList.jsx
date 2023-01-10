import React from "react";
import { Col, Row } from "react-bootstrap";
import posts from "../../../data/posts.json";
import BlogItem from "../blog-item/BlogItem";
import { useState, useEffect } from "react";
const BlogList = (props) => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetchBlogs();
  });
  const fetchBlogs = async () => {
    const options = {
      method: "GET",
    };
    try {
      const response = await fetch(
        "https://damiansapi-production.up.railway.app/books",
        options
      );
      if (response.ok) {
        const data = await response.json();
        setNews(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Row>
      {posts.map((post) => (
        <Col
          md={4}
          style={{
            marginBottom: 50,
          }}
        >
          <BlogItem key={post.title} {...post} />
          {news.map(<p>{news}</p>)}
          {console.log(news)}
        </Col>
      ))}
    </Row>
  );
};

export default BlogList;
