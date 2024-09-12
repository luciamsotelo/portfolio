import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
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
    <Container className="contact-container my-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <h1 className="text-center contact-title">Let's Get in Touch!</h1>
          <p className="text-center contact-subtitle">We’d love to hear from you. Drop us a message and we’ll get back to you as soon as possible!</p>
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
            <Button variant="primary" type="submit" className="w-100 contact-button">
              Send Message
            </Button>
          </Form>
          {status && <p className="text-center mt-3">{status}</p>}
        </Col>
      </Row>
    </Container>
  );
}

export default ContactPage;
