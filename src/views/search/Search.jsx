import { Container, InputGroup, Form, Button } from "react-bootstrap";
import "./styles.css";
import { BsSearch } from "react-icons/bs";
import { useEffect, useState } from "react";
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
  return (
    <Container className="new-blog-container">
      <InputGroup className="mt-5 pt-5" onSubmit={handleSubmit}>
        <Form.Control
          type="text"
          value={query}
          onChange={handleChange}
          class="form-control"
          placeholder="Type a title of a Blog 🔎"
          aria-label="Search 🔎"
          aria-describedby="basic-addon2"
        />
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button">
            Search
          </button>
        </div>
      </InputGroup>
    </Container>
  );
};

export default Search;
