import { convertToHTML } from "draft-convert";
import { EditorState } from "draft-js";
import React, { useEffect, useState } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./styles.css";
const NewBlogPost = (props) => {
  //-------------------NEW-----------------------
  // old one
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
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

    console.log(html);
  }, [editorState]);

  const JokesOnYou = async () => {
    const global_name = document.querySelector("#name").value;
    const allSpacesRemoved = global_name.replaceAll(" ", "");
    const postInfo = {
      title: document.querySelector("#blog-form").value,
      nickname: document.querySelector("#nickname").value,
      content: `${html}`,
      cover: `https://picsum.photos/id/${getRandomInt(80)}/1280/720`,
      readTime: {
        value: document.querySelector("#time").value,
        unit: "minute",
      },
      author: {
        name: global_name,
        avatar: `https://ui-avatars.com/api/?${allSpacesRemoved}`,
      },
    };

    const options = {
      method: "POST",
      body: JSON.stringify(postInfo),
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const endpoint = `https://main.up.railway.app/blogs`;
      const response = await fetch(endpoint, options);
      if (response.ok) {
        console.log(response);
        alert("Posted!");
      } else {
        throw new Error("Error while uploading information");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="new-blog-container">
      <Form className="mt-5">
        <Form.Group controlId="blog-form" className="mt-3">
          <Form.Label>Title</Form.Label>
          <Form.Control size="lg" placeholder="Title of your blog" />
        </Form.Group>
        <Row>
          <Col>
            <Form.Group controlId="name" className="mt-3 ">
              <Form.Label>Preferred Name</Form.Label>
              <Form.Control size="md" placeholder="Example: Anthony Stark" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="nickname" className="mt-3 ">
              <Form.Label>Your Nickame</Form.Label>
              <Form.Control size="md" placeholder="Example: @jasonbourne" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="time" className="mt-3">
              <Form.Label>Expected Read-Time</Form.Label>
              <Form.Control
                size="md"
                placeholder="Example: 2 or 3 (in minutes)  "
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group
          controlId="blog-content"
          style={{ backgroundColor: "white" }}
          className="mt-3 p-2 rounded"
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
        <Form.Group className="d-flex mt-3 justify-content-end">
          <Button type="reset" size="lg" variant="outline-dark">
            Reset
          </Button>
          <Button
            type="submit"
            size="lg"
            id="submit_button"
            variant="dark"
            style={{
              marginLeft: "1em",
            }}
            onClick={JokesOnYou}
          >
            Submit
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default NewBlogPost;
