import { Container, Row, Col, Button, Form } from "react-bootstrap";
import React from "react";
import { useState } from "react";
import "./styles.css";
import Spinner from "react-bootstrap/Spinner";
import { useDispatch } from "react-redux";
import { SET_USER } from "../../redux/actions";
import { Link } from "react-router-dom";

const Login = (props) => {
  const dispatch = useDispatch();
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  React.useEffect(() => {
    fetchDatabase();
  }, []);

  const [responseJSON, setResponseJSON] = useState([]);

  const fetchDatabase = async () => {
    const response = await fetch("https://main.up.railway.app/users");
    const responseUnboxed = await response.json();
    setResponseJSON(responseUnboxed);
  };

  const fetchLogin = async () => {
    function isUser(user) {
      return user.nickname === nickname && user.password === password;
    }

    const user = responseJSON.find(isUser);

    if (user === undefined) {
      console.log("Wrong password!");
    } else {
      console.log("Welcome, user");
      setLoggedIn(true);

      dispatch({
        type: SET_USER,
        payload: user,
      });
    }
  };
  const redirectme = () => {
    // setTimeout(() => {
    //
    // }),
    //   3000;
    setTimeout(() => {
      window.location.replace("/home");
    }, 1300);
  };
  const onChangeHandler = (value, fieldToSet) => {
    fieldToSet(value);
  };
  if (loggedIn) {
    return (
      <>
        <div className="mt-5 mb-5 text-light d-flex justify-content-center">
          Welcome, {nickname}!{}
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <Spinner animation="border" />
        </div>
        {redirectme()}
      </>
    );
  } else {
    return (
      <Container className="w-75 text-light mt-5">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nickname</Form.Label>
            <Form.Control
              type="nickname"
              placeholder="Enter your nickname"
              value={nickname}
              onChange={(e) => onChangeHandler(e.target.value, setNickname)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => onChangeHandler(e.target.value, setPassword)}
            />
          </Form.Group>

          <div className="d-flex justify-content-between">
            <div className="d-flex align-items-center">
              Or, &nbsp;
              <Link to="sign-up" className="text-light">
                <h6 className="p-0 m-0"> Sign-up</h6>
              </Link>
            </div>
            <button
              type="button"
              class="btn btn-outline-light"
              id="login"
              onClick={fetchLogin}
            >
              Login
            </button>
          </div>
        </Form>
      </Container>
    );
  }
};

export default Login;
