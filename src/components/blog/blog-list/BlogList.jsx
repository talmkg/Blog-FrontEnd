import React from "react";
import { Col, Row } from "react-bootstrap";

import BlogItem from "../blog-item/BlogItem";
import { useState, useEffect } from "react";
const BlogList = (props) => {
  // useEffect(() => {
  //   fetchBlogs();
  // }, []);

  // if (news.isEmpty()) {
  //   fetchBlogs();
  // } else {
  //   console.log(`news is not empty ${news}`);
  // }
  // const GetSlides = (props) => {
  //   const [data, setData] = useState();

  //   useEffect(() => {
  //     async function getData() {
  //       const request = fetch(API);
  //       const response = await request;
  //       const parsed = await response.json();
  //       setData(parsed);
  //     }

  //     getData();
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []);

  //

  // const fetchBlogs = async () => {
  //   const response = await fetch(
  //     "https://damiansapi-production.up.railway.app/books"
  //   );

  //   const data = await response.json();
  //   setNews(data);
  //   console.log(news);
  // };
  // fetchBlogs();
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
          <BlogItem key={blog.title} {...blog} index={"12"} />
        </Col>
      ))}
    </Row>
  );
};

export default BlogList;
