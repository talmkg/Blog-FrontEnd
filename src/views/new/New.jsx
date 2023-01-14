import { convertToHTML } from "draft-convert";
import { EditorState } from "draft-js";
import React, { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
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
  const AUTHOR_NAME = "Koho";
  const AUTHOR_SURNAME = "L.";

  const SPACE = " ";
  // old one (end)
  const JokesOnYou = async () => {
    const postInfo = {
      title: document.querySelector("#blog-form").value,
      category: document.querySelector("#blog-category").value,
      content: `${html}`,
      cover: `https://picsum.photos/id/${getRandomInt(80)}/1280/720`,
      readTime: { value: 2, unit: "minute" },
      author: {
        name: AUTHOR_NAME,
        avatar: `https://ui-avatars.com/api/?${AUTHOR_NAME}+${AUTHOR_SURNAME}`,
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
          <Form.Control size="lg" placeholder="Title" />
        </Form.Group>
        <Form.Group controlId="blog-category" className="mt-3">
          <Form.Label>Category</Form.Label>
          <Form.Control size="lg" as="select">
            <option>Category1</option>
            <option>Category2</option>
            <option>Category3</option>
            <option>Category4</option>
            <option>Category5</option>
          </Form.Control>
        </Form.Group>
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
