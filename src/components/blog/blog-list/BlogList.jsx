import React from "react";
import { Col, Row } from "react-bootstrap";
import BlogItem from "../blog-item/BlogItem";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getBlogs } from "../../../redux/actions";


const BlogList = (props) => {
  // const [blogs, setBlogs] = useState([]);

  // React.useEffect(() => {
  //   const fetching = async () => {
  //     let response = await fetch("https://main.up.railway.app/blogs");
  //     if (response.ok) {
  //       const fetchedData = await response.json();
  //       setBlogs(fetchedData);
  //     } else {
  //       console.log("error");
  //     }
  //   };
  //   fetching();
  // }, []);

  const dispatch = useDispatch();
  const blogs = useSelector(state => state.blogs.blogs);

  React.useEffect(() => {
    dispatch(getBlogs())
  }, [])

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
