import { Container, InputGroup, Form, Col, Row } from "react-bootstrap";
import "./styles.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BsSearch } from "react-icons/bs";
import { useEffect, useState } from "react";
import { getBlogs } from "../../redux/actions";
import BlogItem from "../../components/blog/blog-item/BlogItem";
import Spinner from "react-bootstrap/Spinner";
const Search = () => {
  const [query, setQuery] = useState("");
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    console.log(query);
  });
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs);

  React.useEffect(() => {
    dispatch(getBlogs()).then(setLoading(false));
  }, []);
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
      <Container className="new-blog-container pe-4 px-4">
        <InputGroup className="pt-5" onSubmit={handleSubmit}>
          <Form.Control
            type="text"
            value={query}
            onChange={handleChange}
            class="form-control"
            placeholder="Type a title of a Blog 🔎"
            aria-label="Search 🔎"
            aria-describedby="basic-addon2"
          />
        </InputGroup>

        <Container>
          {(() => {
            if (query === "") {
              return (
                <h4 className="text-center m-5">Type something to search!</h4>
              );
            } else {
              return (
                <Row className="pt-4">
                  {blogs
                    ?.filter(function (blog) {
                      return blog.title
                        .toLowerCase()
                        .includes(query.toLowerCase());
                    })
                    .map((blog) => (
                      <Col xs={12} s={6} md={6} lg={4} className="mb-2">
                        <BlogItem key={blog.title} {...blog} />
                      </Col>
                    ))}
                </Row>
              );
            }
          })()}
        </Container>
      </Container>
    );
  }
};

export default Search;
