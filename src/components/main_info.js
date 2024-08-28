import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Updated import path for the image
import headshot from '../images/head.jpg';

const MainInfo = () => {
  return (
    <Container className="mt-5">
      <Row className="align-items-center">
        <Col md={6}>
          <div className="content-container position-relative">
            <div className="overlay-text" style={{border: '10px solid lightblue', backgroundColor: 'lightblue', borderRadius: '10px', textAlign: 'center'}}>
              <h1>Lucia Sotelo</h1>
              <h2>Software Developer</h2>
              <p>HTML | CSS | UX UI | JavaScript | Python | React | Node</p>
            </div>
          </div>
           {/* Buttons added below */}
              <div className="mt-3" style={{display: 'flex', justifyContent: 'center'}}>
                <Button variant="primary" href="#portfolio" className="me-2">See Portfolio</Button>
                <Button variant="outline-primary" href="#contact">Contact Me</Button>
              </div>
        </Col>
        <Col md={6} className="text-center">
          <img 
            style={{border: '10px solid lightblue'}}
            src={headshot} 
            alt="Lucia Sotelo" 
            className="img-fluid responsive-img"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default MainInfo;
