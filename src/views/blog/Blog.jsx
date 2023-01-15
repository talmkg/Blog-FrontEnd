import React, { useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import BlogAuthor from "../../components/blog/blog-author/BlogAuthor";
import BlogLike from "../../components/likes/BlogLike";
import Spinner from "react-bootstrap/Spinner";
import "./styles.css";
const Blog = (props) => {
  const [blog, setBlog] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const { id } = params;
    const fetching = async () => {
      let response = await fetch(`https://main.up.railway.app/blogs/${id}`);
      if (response.ok) {
        const fetchedData = await response.json();
        console.log(fetchedData);
        setBlog(fetchedData);
        setLoading(false);
      } else {
        console.log("error");
        navigate("/404");
        setLoading(false);
      }
    };

    fetching();
  }, []);
  //----------------------
  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        id="full-screen"
      >
        <Spinner animation="border" />
      </div>
    );
  } else {
    return (
      <div className="blog-details-root">
        <Container>
          <Image className="blog-details-cover" src={blog.cover} fluid />
          <h1 className="blog-details-title">{blog.title}</h1>
          <div className="blog-details-container">
            <div className="blog-details-author">
              <BlogAuthor {...blog.author} />
            </div>
            <div className="blog-details-info">
              <div>{blog.createdAt}</div>
              <div className="d-flex">
                <div>{`${blog.readTime.value} ${blog.readTime.unit} read`}</div>
              </div>
              <div
                style={{
                  marginTop: 20,
                }}
              >
                <BlogLike defaultLikes={["123"]} onChange={console.log} />
              </div>
            </div>
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: blog.content,
            }}
          ></div>
        </Container>
      </div>
    );
  }
};

export default Blog;
