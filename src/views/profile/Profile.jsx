import { Container, Row, Col } from "react-bootstrap";
import "./styles.css";
const Profile = (props) => {
  return (
    <Container className="new-blog-container text-dark pt-4 mt-4">
      <Row>
        <Col xs={12} className="d-flex justify-content-center ">
          <img
            src="https://media1.giphy.com/media/4ilFRqgbzbx4c/giphy.gif?cid=ecf05e471i2iokfwcwadmzr90y0sacj22k5bk9aopmbj16sp&rid=giphy.gif&ct=g"
            className=" rounded-circle"
            style={{ height: "250px", width: "250px", objectFit: "cover" }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
