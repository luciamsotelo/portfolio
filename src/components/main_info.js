import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Updated import path for the image
import headshot from '../images/headshot2.png';

const MainInfo = () => {
  return (
    <Container className="mt-5">
      <Row className="align-items-center">
        <Col md={6}>
          <div className="content-container position-relative">
            <div className="overlay-text" style={{border: '3px solid #e5d3bb', backgroundColor: '#71aabd', borderRadius: '10px', textAlign: 'center', padding: '15px'}}>
              <h1  className="name" style ={{color: '#e5d3bb'}}>Lucia Sotelo</h1>
              <h2 className='title'>Software Developer</h2>
              <p>HTML | CSS | UX UI | JavaScript | Python | React | Node | PostgreSQL</p>
            </div>
          </div>
          {/* Buttons updated below */}
          <div className="mt-3" style={{display: 'flex', justifyContent: 'center'}}>
            <Button 
              style={{ backgroundColor: '#d2b48c', color: '#8b4513', borderColor: '#8b4513' }} 
              href="/portfolio" 
              className="me-2"
            >
              See Portfolio
            </Button>
            <Button 
              style={{ backgroundColor: '#add8e6', color: '#1c718e', borderColor: '#1c718e' }} 
              href="/contact"
            >
              Contact Me
            </Button>
          </div>
        </Col>
        <Col md={6} className="text-center">
          <img 
            style={{ 
              height: '35vh',
              borderRadius: '10px',
              boxShadow: '0 8px 10px 0 rgba(0, 0, 0, 0.9), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
            }}
            src={headshot} 
            alt="Lucia Sotelo" 
            className="img-fluid"
          />
        </Col>
        <p className="summary_container mt-5" style={{textAlign: 'justify'}}>
          "With a strong foundation in Food and Beverage Management and recent top grades in Software Development from the University of San Diego, I am pivoting into project management and tech innovation. My journey reflects a passion for optimizing operations, enhancing profitability, and solving complex challenges. I'm excited to bring my unique blend of leadership, organization, and technical expertise to cutting-edge projects in software development."
        </p>
      </Row>
      {/* Icons Section */}
      <Row className="icons_container d-flex justify-content-center mt-4">
  <Col xs={12} className="d-flex justify-content-center flex-wrap">
    <i className="devicon-html5-plain colored icon-light-one m-2"></i>
    <i className="devicon-css3-plain colored icon-light-one m-2"></i>
    <i className="devicon-javascript-plain colored icon-light-one m-2"></i>
    <i className="devicon-react-original colored icon-light-one m-2"></i>
    <i className="devicon-postgresql-plain colored icon-light-one m-2"></i>
    <i className="devicon-mongodb-plain colored icon-light-one m-2"></i>
    <i className="devicon-nodejs-plain colored icon-light-one m-2"></i>
    <i className="devicon-git-plain colored icon-light-one m-2"></i>
    <i className="devicon-sequelize-plain colored icon-light-one m-2"></i>
    <i className="devicon-bootstrap-plain colored icon-light-one m-2"></i>
    <i className="devicon-github-original colored icon-light-one m-2"></i>
    <i className="devicon-express-original colored icon-light-one m-2"></i>
    <i className="devicon-react-original colored icon-light-one m-2"></i>
    <i className="devicon-python-plain colored icon-light-one m-2"></i>
  </Col>
</Row>

    </Container>
  );
}

export default MainInfo;
