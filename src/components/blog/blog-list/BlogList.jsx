import React from "react";
import { Col, Row, Button, Container, Card } from "react-bootstrap";
import BlogItem from "../blog-item/BlogItem";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getBlogs } from "../../../redux/actions";
import Spinner from "react-bootstrap/Spinner";
import "./styles.css";
import MainBlogItem from "../main-blog-item/MainBlogItem";
import SideBlogItem from "../side-blog-items/SideBlogItem";

const BlogList = (props) => {
  // const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs);
  const loading = useSelector((state) => state.isLoading);

  React.useEffect(() => {
    dispatch(getBlogs());
  }, []);

  let reverseArray = blogs.map(
    (blog, index) => blogs[blogs.length - 1 - index]
  );
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
      <>
        <Row className="g-1">
          <Col xs={12} md={12} lg={7} className="text-light">
            {reverseArray?.map((blog, index) => {
              if (index == 0) {
                return <MainBlogItem key={blog.id} {...blog} />;
              }
            })}
          </Col>
          <Col
            xs={12}
            md={12}
            lg={5}
            className="text-left"
            id="md-breakpoint-fix"
          >
            {reverseArray?.map((blog, index) => {
              if (index > 0 && index < 5) {
                return <SideBlogItem key={blog.id} {...blog} />;
              }
            })}
          </Col>
        </Row>
        <div className="d-flex justify-content-between mt-5 mb-3 align-items-center">
          <h3 className="text-light p-0 m-0">Latest Articles</h3>
          <Button variant="outline-secondary">See All</Button>
        </div>
        <Row>
          {reverseArray?.slice(0, 15).map((blog, index) => {
            if (index > 5) {
              return (
                <Col xs={12} s={6} md={6} lg={4} className="mb-2">
                  <BlogItem key={blog.id} {...blog} />
                </Col>
              );
            }
          })}
        </Row>
      </>
    );
  }
};

export default BlogList;
