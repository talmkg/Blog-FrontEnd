import { Container, Row, Col, Button } from "react-bootstrap";
import "./styles.css";
import BlogItem from "../../components/blog/blog-item/BlogItem";
import { useEffect } from "react";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getBlogs } from "../../redux/actions";
const Profile = (props) => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs.blogs);

  React.useEffect(() => {
    dispatch(getBlogs());
  }, []);
  return (
    <Container className="new-blog-container text-dark pt-4">
      <Row className="d-flex justify-content-center mb-5">
        <Col xs={12} id="profile-pictures">
          <div className="position-relative w-100 d-flex justify-content-center">
            <img
              src="https://images6.alphacoders.com/129/1297927.png"
              className="w-100 rounded-4"
              id="background-image"
            />

            <img
              src="https://media1.giphy.com/media/4ilFRqgbzbx4c/giphy.gif?cid=ecf05e471i2iokfwcwadmzr90y0sacj22k5bk9aopmbj16sp&rid=giphy.gif&ct=g"
              className="rounded-circle position-absolute"
              style={{ bottom: "-30%" }}
              id="profile-picture"
            />
          </div>
        </Col>
      </Row>
      <Container
        className="d-flex justify-content-center"
        id="content-under-images"
      >
        <div className="text-center">
          <h3>@talmkg</h3>
          <h6>Birds born in cage think flying is an illness.</h6>
          <h6>3 followers • 7 following</h6>
          <h6 style={{ fontSize: "14px" }} className="text-muted">
            640 views this month
          </h6>
        </div>
      </Container>
      <Container className="w-25 d-flex justify-content-center">
        <Button variant="dark" className="m-1" id="profile-buttons">
          Share
        </Button>
        <Button variant="dark" className="m-1" id="profile-buttons">
          Edit
        </Button>
      </Container>
      <Container className="d-flex justify-content-center mt-5 mb-5">
        <div className="m-2">
          <a className="no-underline active">Created</a>
        </div>
        <div className="m-2">
          <a className="no-underline ">Saved</a>
        </div>
      </Container>
      <Container>
        <Row>
          {blogs
            ?.filter(function (blog) {
              return blog.author.name === "Tim Afanasiev";
            })
            .map((blog) => (
              <Col xs={12} s={6} md={6} lg={4} className="mb-2">
                <BlogItem key={blog.title} {...blog} />
              </Col>
            ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Profile;
