import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./contactform.styles.css";

const ContactForm = () => {
  return (
    <div id="contact">
      <h1 className="conta pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
      <div className="contact-jumbotron">
        <Row>
          <Col className="d-flex justify-content-center flex-wrap">
          <div className="m-2">
              <a href="https://github.com/SanketUdapi" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-dark" title="some of my projects">
                  <i className="fab fa-github-square"></i> GitHub
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="mailto:sanket.udapi@gmail.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-danger" title="sanket.udapi@gmail.com">
                  <i className="fas fa-envelope-square"></i> Email Me
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://www.linkedin.com/in/sanket-udapi-61b7821a0/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-primary" title="Visit my LinkenIn">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </Button>
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ContactForm;