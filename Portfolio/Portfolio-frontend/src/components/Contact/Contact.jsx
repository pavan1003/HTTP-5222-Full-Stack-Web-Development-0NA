import React, { useState } from "react";
import Particle from "../Particle";
import { Container, Col, Row, Form, Button, Spinner } from "react-bootstrap";

function Contact() {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      setIsLoading(true);
      try {
        const response = await fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setFeedbackMessage("Message sent successfully!");
          setIsSuccess(true);
        } else {
          setFeedbackMessage("Failed to send message.");
          setIsSuccess(false);
        }
      } catch (error) {
        setFeedbackMessage("An error occurred. Please try again.");
        setIsSuccess(false);
      } finally {
        setIsLoading(false);
      }
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
                <Form.Control
                  required
                  className="w-75"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide your name.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="validationEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  className="w-75"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid email.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="validationMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  required
                  className="w-75"
                  as="textarea"
                  rows={3}
                  name="message"
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a message.
                </Form.Control.Feedback>
              </Form.Group>
              <Button variant="primary" type="submit" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                      className="mx-2"
                    />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </Form>
            {feedbackMessage && (
              <p className={`mt-3 ${isSuccess ? "text-success" : "text-danger"}`}>
                {feedbackMessage}
              </p>
            )}
          </Col>
          <Col sm={6} md={6} className="text-start pt-5 px-5">
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
              width="100%"
              height="300"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
