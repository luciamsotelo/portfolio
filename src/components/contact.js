import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'; // Import React icons
import { send } from '@emailjs/browser'; // Updated import
import '../styles/contact_page.css';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
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
        message: formData.message
      },
      process.env.REACT_APP_EMAILJS_USER_ID
    )
      .then((result) => {
        console.log('SUCCESS:', result.text);
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      }, (error) => {
        console.log('FAILED:', error.text);
        setStatus('Failed to send message. Please try again.');
      });
  };

  return (
    <Container className="contact-container my-5" style={{border: '10px solid #1c718e', borderRadius: '1px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',backgroundColor: 'rgb(234, 221, 207)'}}>
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <h1 className="text-center contact-title" style={{fontFamily: 'ysabeau, cursive', fontSize: '3.5rem', textShadow: '2px 2px #7F00FF'}}>Let's Collaborate!</h1>
          <p className="text-center contact-subtitle">I’d love to hear from you! Whether you’re part of a company looking for a skilled developer or an individual seeking web design services, feel free to reach out. Drop me a message, and I’ll get back to you as soon as possible!</p>
          <Form className="contact-form" onSubmit={handleSubmit}>
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
            <Button variant="primary" type="submit" className="w-100 contact-button"style={({ marginTop: '20px' })}>
              Let's Build Together
            </Button>
          </Form>
          {status && <p className="text-center mt-3">{status}</p>}
        </Col>
      </Row>

      {/* Contact Information Section */}
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={8} lg={6}>
          <h3 className="text-center" style={{color: '#e5d3bb', fontFamily: 'ysabeau, cursive', fontSize: '3.5rem', textShadow: '2px 2px #7F00FF'}}>My Contact Information</h3>
          <Row className="g-3">
            {/* Email */}
            <Col xs={12} md={6}>
              <Button 
                variant="outline-primary" 
                href="mailto:youremail@example.com" 
                className="w-100"
              >
                <FaEnvelope className="me-2" /> Email: luciamsotelo@yahoo.com
              </Button>
            </Col>
            {/* Phone Number */}
            <Col xs={12} md={6}>
              <Button 
                variant="outline-success" 
                href="tel:+1234567890" 
                className="w-100"
              >
                <FaPhone className="me-2" /> Phone: (619) 343-3533
              </Button>
            </Col>
          </Row>
          <Row className="g-3 mt-3">
            {/* GitHub */}
            <Col xs={12} md={6}>
              <Button 
                variant="outline-dark" 
                href="https://github.com/luciamsotelo" 
                target="_blank" 
                className="w-100"
              >
                <FaGithub className="me-2" /> GitHub: luciamsotelo
              </Button>
            </Col>
            {/* LinkedIn */}
            <Col xs={12} md={6}>
              <Button 
                variant="outline-info" 
                href="https://www.linkedin.com/in/lucia-sotelo/" 
                target="_blank" 
                className="w-100"
              >
                <FaLinkedin className="me-2" /> LinkedIn: lucia-sotelo
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactPage;
