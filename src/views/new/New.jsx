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
  const [imageBlog, setImageBlog] = useState(null);
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
        window.location.replace("/");
      } else {
        throw new Error("Error while uploading information");
      }
    } catch (error) {
      console.log(error);
    }
    //---------------------------------------------------------------------------------------

    // const formData2 = new FormData();

    // formData2.append("blog", imageBlog);

    // const options3 = {
    //   method: "POST",
    //   body: formData2,
    // };

    // try {
    //   const endpoint = `https://main.up.railway.app/files/${idd.id}/blog`;
    //   const response = await fetch(endpoint, options3);
    // } catch (error) {
    //   console.log(error);
    // }

    //---------------------------------------------------------------------------------------
  };

  return (
    <Container className="new-blog-container text-light">
      <Form className="mt-3">
        <Form.Group controlId="blog-form">
          <Form.Label>Title</Form.Label>
          <Form.Control size="lg" placeholder="Title of your blog" />
        </Form.Group>
        <Row>
          <Col>
            <Form.Group controlId="name" className="mt-3 ">
              <Form.Label>Name</Form.Label>
              <Form.Control size="md" placeholder="Anthony Stark" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="nickname" className="mt-3 ">
              <Form.Label>Nickame</Form.Label>
              <Form.Control size="md" placeholder="@jasonbourne" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="time" className="mt-3">
              <Form.Label>Read-Time</Form.Label>
              <Form.Control size="md" placeholder="2" />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mt-4 d-flex flex-column">
          <Form.Label>Post Cover</Form.Label>
          <input
            type="file"
            id="blog"
            onChange={(e) => setImageBlog(e.target.files[0])}
          ></input>
        </Form.Group>
        <div>
          <div id="hide-on-mobile">
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
          <div className="d-none" id="show-on-mobile">
            <Form.Group className="mb-3" controlId="blog-content">
              <Form.Label>Blog Content</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </div>
        </div>
        <Form.Group className="d-flex mt-3 justify-content-end">
          <Button type="reset" size="lg" variant="outline-light">
            Reset
          </Button>
          <Button
            type="submit"
            size="lg"
            id="submit_button"
            variant="light"
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
