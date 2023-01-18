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
  const user = useSelector((state) => state.user);

  React.useEffect(() => {
    dispatch(getBlogs());
    console.log();
  });
  return (
    <Container className="new-blog-container text-light pt-4">
      <Row className="d-flex justify-content-center mb-5">
        <Col xs={12} id="profile-pictures">
          <div className="position-relative w-100 d-flex justify-content-center">
            <img
              src={user.background}
              className="w-100 rounded-4"
              id="background-image"
            />

            <img
              src={user.pfp}
              className="rounded-circle position-absolute"
              style={{ bottom: "-30%", objectFit: "cover" }}
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
          <h3>{user.nickname}</h3>
          <h6>
            {user.name} {user.surname}
          </h6>
          <h6>0 followers • 0 following</h6>
          <h6 style={{ fontSize: "14px" }} className="text-muted">
            1 view this month
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
