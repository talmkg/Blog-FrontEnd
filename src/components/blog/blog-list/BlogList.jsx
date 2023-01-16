import React from "react";
import { Col, Row } from "react-bootstrap";
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
  const blogs = useSelector((state) => state.blogs.blogs);
  const loading = useSelector((state) => state.blogs.isLoading);

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
        <div className="d-flex ">
          <Col xs={7} className="mb-2">
            {reverseArray?.map((blog, index) => {
              if (index == 0) {
                return <MainBlogItem key={blog.id} {...blog} />;
              }
            })}
          </Col>
          <Col xs={5}>
            {reverseArray?.map((blog, index) => {
              if (index > 0 && index < 5) {
                return <SideBlogItem key={blog.id} {...blog} />;
              }
            })}
          </Col>
        </div>
        <Row>
          {reverseArray?.map((blog, index) => {
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
