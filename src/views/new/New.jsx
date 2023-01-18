import { convertToHTML } from "draft-convert";
import { EditorState } from "draft-js";
import React, { useEffect, useState } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { newPostAction } from "../../redux/actions";
import { addCoverAction } from "../../redux/actions";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Spinner from "react-bootstrap/Spinner";
import "./styles.css";
const NewBlogPost = (props) => {
  let [loading, setLoading] = useState(false);
  const [poster, setPoster] = useState([]);
  const [title, setTitle] = useState("");
  const [nickname, setNickname] = useState("");
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [html, setHTML] = useState(null);
  useEffect(() => {
    let html = convertToHTML(editorState.getCurrentContent());
    setHTML(html);
    document
      .querySelector("#submit_button")
      .addEventListener("click", function (event) {
        event.preventDefault();
      });

    console.log(poster);
  }, [editorState]);
  const itemToSend = {
    title: title,
    nickname: nickname,
    content: `${html}`,
    author: {
      name: name,
      avatar: "https://ui-avatars.com/api/?tim",
    },
    readTime: {
      value: value,
      unit: "minute",
    },
  };
  const posterChangeHandler = (e) => {
    setPoster(e.target.files[0]);
  };
  const onChangeHandler = (value, fieldToSet) => {
    fieldToSet(value);
  };
  const onSubmitHandler = () => {
    setLoading(true);
    const formData = new FormData();
    console.log(poster);
    formData.append("cover", poster);
    console.log(formData);
    newPostAction(formData);
  };

  //---------------------------------------------------------------------------------------
  const newPostAction = (formData) => {
    const options = {
      method: "POST",
      body: JSON.stringify(itemToSend),
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch("https://main.up.railway.app/blogs/", options)
      .then((response) => response.json())
      .then((s) => {
        console.log(s);
        return s;
      })
      .then((savedPost) => savedPost.id)
      .then((savedPostId) =>
        fetch(`https://main.up.railway.app/blogs/${savedPostId}/cover`, {
          method: "PUT",
          body: formData,
        })
          .then((response) => response.json())
          .then((s) => {
            if (s) {
              // setLoading(false);
              window.location.replace("/home");
            }
          })
      );
  };
  if (loading === true) {
    return (
      <div className="text-light" id="full-screen">
        <div className="text-center">
          <h3>Posting...</h3>
          <Spinner animation="border" className="mt-2" />
        </div>
      </div>
    );
  } else {
    return (
      <Container className="new-blog-container text-light">
        <Form className="mt-3">
          <Form.Group controlId="blog-form">
            <Form.Label>Title</Form.Label>
            <Form.Control
              size="lg"
              placeholder="Title of your blog"
              value={title}
              onChange={(e) => onChangeHandler(e.target.value, setTitle)}
            />
          </Form.Group>
          <Row>
            <Col>
              <Form.Group controlId="name" className="mt-3 ">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  size="md"
                  placeholder="Anthony Stark"
                  value={name}
                  onChange={(e) => onChangeHandler(e.target.value, setName)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="nickname" className="mt-3 ">
                <Form.Label>Nickame</Form.Label>
                <Form.Control
                  size="md"
                  placeholder="@jasonbourne"
                  value={nickname}
                  onChange={(e) => onChangeHandler(e.target.value, setNickname)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="time" className="mt-3">
                <Form.Label>Read-Time</Form.Label>
                <Form.Control
                  size="md"
                  placeholder="2"
                  value={value}
                  onChange={(e) => onChangeHandler(e.target.value, setValue)}
                />
              </Form.Group>
            </Col>
          </Row>

          <div>
            <div>
              <Form.Group
                controlId="blog-content"
                className="mt-3 p-2 rounded bg-light text-dark"
                id="content"
              >
                <Form.Label>Blog Content</Form.Label>
                <Editor
                  editorState={editorState}
                  toolbarClassName="toolbarClassName"
                  wrapperClassName="wrapperClassName"
                  editorClassName="editorClassName"
                  onEditorStateChange={setEditorState}
                />
              </Form.Group>
            </div>
          </div>
          <div className="d-flex justify-content-start w-100 p-2">
            <Row className="d-flex">
              <Col xs={4}>
                <Form.Label>Upload Your cover:</Form.Label>
              </Col>
              <Col xs={8}>
                <Form.Control
                  type="file"
                  onChange={(e) => posterChangeHandler(e)}
                  accept=".jpg, .jpeg"
                />
              </Col>
            </Row>
          </div>
          <Form.Group className="d-flex mt-3 justify-content-end">
            <Button type="reset" size="lg" variant="outline-light">
              Reset
            </Button>

            <Button
              // type="submit"
              size="lg"
              id="submit_button"
              variant="light"
              style={{
                marginLeft: "1em",
              }}
              onClick={onSubmitHandler}
            >
              Submit
            </Button>
          </Form.Group>
        </Form>
      </Container>
    );
  }
};

export default NewBlogPost;
