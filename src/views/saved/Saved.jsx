import React from "react";
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import { IoConstructOutline } from "react-icons/io5";
import "./style.css";
const Saved = () => {
  return (
    <Container fluid="sm" id="container" className="text-light">
      <div id="full-screen" className="text-center ">
        <h4 className="mb-4">Still working...</h4>
        <IoConstructOutline size={50} className="text-warning" />
      </div>
    </Container>
  );
};

export default Saved;
