import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { send } from "@emailjs/browser"; 
import "../styles/contact_page.css";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const messages = [
    "Let's Build Something Great!",
    "Collaborate for Success!",
    "Your Ideas, My Code!",
    "Let's Make Magic Happen!",
    "Transforming Ideas into Reality!",
    "Innovation Through Collaboration!",
    "Crafting Solutions Together!",
    "Building Dreams, One Line at a Time!",
    "Let's Create Something Amazing!",
    "Your Vision, Our Expertise!",
    "Empowering Ideas, Inspiring Results!",
    "Let’s Design the Future Together!",
    "Turning Concepts into Code!",
    "Collaborate, Innovate, Achieve!",
    "Bringing Your Vision to Life!",
    "Creating Impact Through Code!",
    "Where Creativity Meets Expertise!",
    "Shaping Tomorrow, Today!",
    "Making Ideas Work Wonders!"
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 3000); // Change message every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [messages.length]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      process.env.REACT_APP_EMAILJS_USER_ID
    ).then(
      (result) => {
        console.log("SUCCESS:", result.text);
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      },
      (error) => {
        console.log("FAILED:", error.text);
        setStatus("Failed to send message. Please try again.");
      }
    );
  };

  const getMessageClass = (index) => {
    return index === currentMessageIndex ? 'fade-in' : 'fade-out';
  };

  return (
    <Container className="contact-container my-5">
      <h1 className="text-center contact-title">
        Let's Collaborate!
      </h1>

      <Row className="justify-content-center" >
        <Col xs={12} md={6}>
          <Form className="contact-form" style={{ background: "#e5d3bb" }} onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Your message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className="w-100 contact-button"
            >
              Let's Build Together
            </Button>
          </Form>
          {status && <p className="text-center mt-3">{status}</p>}
        </Col>

        <Col xs={12} md={6} className="contact-info">
          <Row className="g-3 mt-3">
            <Col xs={12}>
              <Button variant="outline-secondary" href="mailto:luciamsotelo@yahoo.com" className="w-100">
                <FaEnvelope className="me-2" /> Email: luciamsotelo@yahoo.com
              </Button>
            </Col>
            <Col xs={12}>
              <Button variant="outline-success" href="tel:+1234567890" className="w-100">
                <FaPhone className="me-2" /> Phone: (619) 343-3533
              </Button>
            </Col>
            <Col xs={12}>
              <Button variant="outline-dark" href="https://github.com/luciamsotelo" target="_blank" className="w-100">
                <FaGithub className="me-2" /> GitHub: luciamsotelo
              </Button>
            </Col>
            <Col xs={12}>
              <Button variant="outline-primary" href="https://www.linkedin.com/in/lucia-sotelo/" target="_blank" className="w-100">
                <FaLinkedin className="me-2" /> LinkedIn: lucia-sotelo
              </Button>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="my-4">
              <div className="messages">
                {messages.map((message, index) => (
                  <p key={index} className={`message ${getMessageClass(index)}`}>
                    {message}
                  </p>
                ))}
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      <p className="text-center" style={{ color: "#1c718e"}}>
        I’d love to hear from you! Whether you’re part of a company looking
        for a skilled developer or an individual seeking web design services,
        feel free to reach out. Drop me a message, and I’ll get back to you as
        soon as possible!
      </p>
    </Container>
  );
}

export default ContactPage;
