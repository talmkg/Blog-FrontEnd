import { Container, Row, Col, Button, Form, InputGroup } from "react-bootstrap";
import React from "react";
import { useState } from "react";
import "./styles.css";
import Spinner from "react-bootstrap/Spinner";
import { useDispatch } from "react-redux";
import { SET_USER } from "../../redux/actions";
import { Link } from "react-router-dom";

const SignUp = (props) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [pfp, setPfp] = useState("");
  const [background, setBackground] = useState("");

  React.useEffect(() => {}, []);

  const onChangeHandler = (value, fieldToSet) => {
    fieldToSet(value);
  };
  const pfpChangeHandler = (e) => {
    setPfp(e.target.files[0]);
  };
  const backgroundChangeHandler = (e) => {
    setBackground(e.target.files[0]);
  };
  const itemToSend = {
    name: name,
    surname: surname,
    nickname: nickname,
    password: password,
  };
  const onSubmitHandler = () => {
    setLoading(true);
    const formData1 = new FormData();
    const formData2 = new FormData();
    formData1.append("pfp", pfp);
    formData2.append("background", background);
    newPostAction(formData1, formData2);
  };

  //---------------------------------------------------------------------------------------
  const newPostAction = (formData1, formData2) => {
    const options = {
      method: "POST",
      body: JSON.stringify(itemToSend),
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch("https://main.up.railway.app/users/", options)
      .then((response) => response.json())
      .then((s) => {
        console.log(s);
        dispatch({
          type: SET_USER,
          payload: s,
        });
        return s;
      })
      .then((savedPost) => savedPost.id)
      .then((savedPostId) =>
        fetch(`https://main.up.railway.app/users/${savedPostId}/pfp`, {
          method: "PUT",
          body: formData1,
        }).then(
          (savedPostId) => console.log(savedPostId),
          fetch(`https://main.up.railway.app/users/${savedPostId}/background`, {
            method: "PUT",
            body: formData2,
          }).then((s) => {
            if (s) {
              setLoading(false);

              window.location.replace("/home");
            }
          })
        )
      );
  };
  if (loading) {
    return (
      <div className="text-light" id="full-screen">
        <div className="text-center">
          <h3>Creating your account...</h3>
          <Spinner animation="border" className="mt-2" />
        </div>
      </div>
    );
  } else {
    return (
      <>
        <Container className="w-75 text-light">
          <Form>
            <Form.Group className=" d-flex mt-2" controlId="formBasicEmail">
              <div className="w-50 me-2">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="nickname"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => onChangeHandler(e.target.value, setName)}
                />
              </div>

              <div className="w-50">
                <Form.Label>Surname</Form.Label>
                <Form.Control
                  type="surname"
                  placeholder="Enter your surname"
                  value={surname}
                  onChange={(e) => onChangeHandler(e.target.value, setSurname)}
                />
              </div>
            </Form.Group>
            <Form.Label className="mt-1">Username</Form.Label>
            <InputGroup className="mb-1 ">
              <InputGroup.Text>@</InputGroup.Text>
              <Form.Control
                placeholder="exiting_user"
                aria-label="exiting_user"
                value={nickname}
                onChange={(e) => onChangeHandler(e.target.value, setNickname)}
              />
            </InputGroup>
            <Form.Group className="mb-3 mt-2" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => onChangeHandler(e.target.value, setPassword)}
              />
            </Form.Group>

            <div className="d-flex mb-3 mt-2">
              <div className="justify-content-start w-50 me-2">
                <Form.Label>Upload Your Profile Picture:</Form.Label>

                <Form.Control
                  type="file"
                  // onChange={(e) => posterChangeHandler(e)}
                  accept=".jpg, .jpeg"
                  onChange={(e) => pfpChangeHandler(e)}
                />
              </div>
              <div className="justify-content-start w-50">
                <Form.Label>Upload Your Profile Background:</Form.Label>

                <Form.Control
                  type="file"
                  // onChange={(e) => posterChangeHandler(e)}
                  accept=".jpg, .jpeg"
                  onChange={(e) => backgroundChangeHandler(e)}
                />
              </div>
            </div>
            <div className="d-flex justify-content-end">
              <button
                type="button"
                class="btn btn-outline-light"
                id="login"
                onClick={onSubmitHandler}
              >
                Sign Up
              </button>
            </div>
          </Form>
        </Container>
      </>
    );
  }
};

export default SignUp;
