import React from "react";
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";

const About = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    return setCount(count + 1);
  };
  const decreaseCount = () => {
    return setCount(count - 1);
  };

  return (
    <Container fluid="sm" id="container">
      <h1> Count {count} </h1>
      <button onClick={increaseCount}>+</button>
      <button onClick={decreaseCount}>-</button>
    </Container>
  );
};

export default About;
