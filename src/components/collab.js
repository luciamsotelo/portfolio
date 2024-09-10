// PartnerSection.js (or any other page)
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaGithub, FaEnvelope, FaPhone, FaLink } from 'react-icons/fa'; // Ensure to install react-icons
import Carlos from '../images/carlos-portfolio.png'; // Path to your image
import WordCloud from './wordCloud'; // Import the WordCloud component

const PartnerSection = () => {
  return (
    <div className="mt-5">
      <Container className="p-4" style={{ margin: '225px auto' , borderRadius: '10px' }}>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card 
              className="text-center" 
              style={{
                backgroundImage: `url(${Carlos})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
                borderRadius: '10px', 
                overflow: 'hidden'
              }}
            >
              <Card.Body 
                className="p-4" 
                style={{ 
                  backgroundColor: 'rgba(0, 0, 0, 0.5)', 
                  color: 'white'
                }}
              >
                <Card.Title className="mb-4" style={{ fontFamily: 'Allura, cursive', fontSize: '3.5rem' }}>Project Partner</Card.Title>
                <h3 className="mb-4" style={{ fontFamily: 'Ysabeau, sans-serif' }}>Carlos Hernandez</h3>
                <Row className="g-3">
                  {/* Email */}
                  <Col xs={12} md={6}>
                    <Button 
                      variant="outline-primary" 
                      href="mailto:redbluecanary@outlook.com" 
                      className="w-100"
                    >
                      <FaEnvelope className="me-2" /> Email: redbluecanary@outlook.com
                    </Button>
                  </Col>
                  {/* Phone Number */}
                  <Col xs={12} md={6}>
                    <Button 
                      variant="outline-success" 
                      href="tel:+6199406042" 
                      className="w-100"
                    >
                      <FaPhone className="me-2" /> Phone Number: (619) 940-6042
                    </Button>
                  </Col>
                </Row>
                <Row className="g-3 mt-3">
                  {/* GitHub */}
                  <Col xs={12} md={6}>
                    <Button 
                      variant="outline-light" 
                      href="https://github.com/GHRepoCarlos-H" 
                      target="_blank" 
                      className="w-100"
                    >
                      <FaGithub className="me-2" /> GitHub: GHRepoCarlos-H
                    </Button>
                  </Col>
                  {/* Portfolio Link */}
                  <Col xs={12} md={6}>
                    <Button 
                      variant="outline-info" 
                      href="https://mywebsite-3kev.onrender.com/" 
                      target="_blank" 
                      className="w-100"
                    >
                      <FaLink className="me-2" /> Portfolio: mywebsite-3kev
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <WordCloud /> {/* Add the WordCloud component here */}
    </div>
  );
}

export default PartnerSection;
