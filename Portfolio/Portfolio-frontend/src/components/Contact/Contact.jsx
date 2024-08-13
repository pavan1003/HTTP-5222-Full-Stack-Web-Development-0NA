import React, { useState, useEffect } from "react";
import Particle from "../Particle";

import { Container, Col, Row, Form, Button } from "react-bootstrap";

function Contact() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      // You can handle the successful form submission here
    }

    setValidated(true);
  };
  return (
    <Container fluid id="contact" className="about-section">
      <Particle />
      <Container>
        <h1 className="display-4 pb-3">
          Let's Talk About <strong className="txt-color">Projects</strong>!
        </h1>
        <Row className="justify-content-center align-items-center pb-5">
          <Col sm={6} md={6} className="text-start px-5">
            <h3 className="mt-3 py-2">
              Get In <strong className="txt-color">Touch</strong>.
            </h3>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="validationName">
                <Form.Label>Name</Form.Label>
                <Form.Control required type="text" placeholder="Enter your name" />
                <Form.Control.Feedback type="invalid">
                  Please provide your name.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="validationEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control required type="email" placeholder="Enter your email" />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid email.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="validationMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control required as="textarea" rows={3} placeholder="Enter your message" />
                <Form.Control.Feedback type="invalid">
                  Please provide a message.
                </Form.Control.Feedback>
              </Form.Group>
              <Button variant="primary" type="submit">
                Send Message
              </Button>
            </Form>
          </Col>
          <Col sm={6} md={6} className="text-start px-5">
            <h3 className="pb-2">
              Let's <strong className="txt-color">Talk</strong>.
            </h3>
            <Row>
              <a
                className="text-white text-decoration-none pb-2"
                href="mailto:pavandm.03@gmail.com"
              >
                pavandm.03@gmail.com
              </a>
              <a className="text-white text-decoration-none" href="tel:+12898879438">
                +1(289)-887-9438
              </a>
            </Row>
            <h3 className="mt-3 py-2">
              Visit <strong className="txt-color">Me</strong>.
            </h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2882.321377706769!2d-79.59565782433776!3d43.74542264646198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3b6cd057312b%3A0xce5c66bb7fcec5ad!2s10%20Garfella%20Dr%2C%20Toronto%2C%20ON%20M9V%202E9!5e0!3m2!1sen!2sca!4v1723592160248!5m2!1sen!2sca"
              width="400"
              height="300"
              // style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
