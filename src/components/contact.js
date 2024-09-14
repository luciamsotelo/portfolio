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
    // Return a class based on whether the message is the current one
    return index === currentMessageIndex ? 'fade-in' : 'fade-out';
  };

  return (
    <Container
      className="contact-container my-5"
      style={{
        border: "10px solid #1c718e",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
        backgroundColor: "rgb(234, 221, 207)",
        position: "relative",
      }}
    >
      <h1
        className="text-center contact-title"
        style={{
          fontFamily: "ysabeau, cursive",
          fontSize: "4rem",
          textShadow: "2px 2px white",
          position: "relative",
          top: "10px",
          transform: "translateX(-50%)",
          zIndex: 10,
          width: "100%",
          textAlign: "center",
        }}
      >
        Let's Collaborate!
      </h1>

      <Row className="justify-content-center" style={{ marginTop: "5px"}}>
        <Col xs={12} md={6}>
          <Form className="contact-form" style={{border: "6px inset hotpink", borderRadius: "1px"}} onSubmit={handleSubmit}>
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
              style={{ marginTop: "20px" }}
            >
              Let's Build Together
            </Button>
          </Form>
          {status && <p className="text-center mt-3">{status}</p>}
        </Col>

        {/* Contact Information Section */}
        <Col xs={12} md={6} className="my-5">
          <Row className="g-3">
            {/* Email */}
            <Col xs={12}>
              <Button
                variant="outline-secondary"
                href="mailto:luciamsotelo@yahoo.com"
                className="w-100"
                style={{ marginTop: "-10px", marginBottom: "1px" }}
              >
                <FaEnvelope className="me-2" /> Email: luciamsotelo@yahoo.com
              </Button>
            </Col>
            {/* Phone Number */}
            <Col xs={12}>
              <Button
                variant="outline-success"
                href="tel:+1234567890"
                className="w-100"
                style={{ marginBottom: "1px" }} 
              >
                <FaPhone className="me-2" /> Phone: (619) 343-3533
              </Button>
            </Col>
            {/* GitHub */}
            <Col xs={12}>
              <Button
                variant="outline-dark"
                href="https://github.com/luciamsotelo"
                target="_blank"
                className="w-100"
                style={{ marginBottom: "1px" }} 
              >
                <FaGithub className="me-2" /> GitHub: luciamsotelo
              </Button>
            </Col>
            {/* LinkedIn */}
            <Col xs={12}>
              <Button
                variant="outline-primary"
                href="https://www.linkedin.com/in/lucia-sotelo/"
                target="_blank"
                className="w-100"
                style={{ marginBottom: "1px" }} 
              >
                <FaLinkedin className="me-2" /> LinkedIn: lucia-sotelo
              </Button>
            </Col>
            {/* Random Messages Section */}
            <Col xs={12} className="my-4" style={{ padding: "45px"}}>
              <div className="messages" style={{ textAlign: "center", fontSize: "2.5rem", fontFamily: "allura, cursive", color: "hotpink", textShadow: "1px 1px white" }}>
                {messages.map((message, index) => (
                  <p key={index} className={`message ${getMessageClass(index)}`}>
                    {message}
                  </p>
                ))}
              </div>
            </Col>
          </Row>
        </Col>
        <p className="text-center contact-subtitle" style={{padding: "1px 50px", fontFamily: "ysabeau, cursive", fontSize: "1.5rem"}}>
          I’d love to hear from you! Whether you’re part of a company looking
          for a skilled developer or an individual seeking web design services,
          feel free to reach out. Drop me a message, and I’ll get back to you as
          soon as possible!
        </p>
      </Row>
    </Container>
  );
}

export default ContactPage;
