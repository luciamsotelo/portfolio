import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import memoryGameImage from '../images/memorygame.jpg'; 
import wardrobeImage from '../images/wiaw.jpeg';
import sdcp from '../images/sdcp.jpeg';
import packout from '../images/trpo.jpeg';

function ProjectsShowcase() {
  const projects = [
    {
      title: 'Memory Game',
      image: memoryGameImage,
      description: (
        <>
          <p style={{ textAlign: 'justify', fontSize: '0.875rem' }}>
            Click 'Start' to reveal the card board. Select two cards at a time; if they match, they stay face up. If they don’t, they flip back to their original state. Track your time and moves as you play to monitor your progress and efficiency. <br></br><b>Technologies Used:<br></br></b> HTML | CSS | JavaScript.
          </p>
          <p className="text-center">
            <a href="https://luciamsotelo.github.io/Milestone-Project-1/" target="_blank" rel="noopener noreferrer">
              View the game
            </a>
          </p>
        </>
      ),
    },
    {
      title: 'Wear It Again Wardrobe',
      image: wardrobeImage, 
      description: (
        <>
          <p style={{ textAlign: 'justify', fontSize: '0.875rem', fontFamily: 'Ysabeau', fontStyle: 'italic'}}>Team project. Database inactive, May take a few seconds to load.</p>
          <p style={{ textAlign: 'justify', fontSize: '0.875rem' }}>
          This project enables buying, selling, and gifting clothing through a database for item uploads, integrating backend and frontend for smooth transactions and a seamless user experience.
            <br></br>
            <b>Technologies Used:<br></br></b> React | React Bootstrap | Bootstrap | React Router DOM | Web Vitals | Express | Sequelize | PostgreSQL (pg) | dotenv | Nodemon | CORS
          </p>
          <p className="text-center">
            <a href="https://wear-it-again-wardrobe.onrender.com" target="_blank" rel="noopener noreferrer">
              Wear It Again Wardrobe
            </a>
          </p>
        </>
      ),
    },
    {
      title: 'San Diego Coastal Paradise',
      image: sdcp, 
      description: (
        <>
          <p style={{ textAlign: 'justify', fontSize: '0.875rem' }}>
          This app offers a detailed guide to some of San Diego’s top beaches, featuring comprehensive descriptions and highlights of popular destinations for a seamless user experience.
            <br></br>
            <b>Technologies Used:</b> React | React Bootstrap | Bootstrap | React Router DOM | Web Vitals | Express | Sequelize | PostgreSQL (pg) | Axios | Body Parser | dotenv | Nodemon | CORS
          </p>
          <p className="text-center">
            <a href="https://sd-coastal-paradise.onrender.com/" target="_blank" rel="noopener noreferrer">
              San Diego Coastal Paradise
            </a>
          </p>
        </>
      ),
    },
    {
      title: 'The Right Packout',
      image: packout, 
      description: (
        <>
          <p style={{ textAlign: 'justify', fontSize: '0.875rem' }}>
            This website was created to showcase the client's business, highlighting their services and offerings. It includes features that allow customers to easily contact the business through email and phone, providing a seamless communication experience.
            <br></br>
            <b>Technologies Used:</b><br></br>React | React Bootstrap | Bootstrap | React Router DOM | Web Vitals | FontAwesome | Testing Library (Jest, React Testing Library)
          </p>
          <p className="text-center">
            <a href="https://www.therightpackout.com/" target="_blank" rel="noopener noreferrer">
              The Right Packout
            </a>
          </p>
        </>
      ),
    },
    {
      title: 'TITLE',
      image: sdcp, 
      description: (
        <>
          <p style={{ textAlign: 'justify', fontSize: '0.875rem' }}>
            info on project
            <br></br>
            <b>Technologies Used:</b> 
          </p>
          <p className="text-center">
            <a href="https://sd-coastal-paradise.onrender.com/" target="_blank" rel="noopener noreferrer">
              BUTTON
            </a>
          </p>
        </>
      ),
    },
  ];

  return (
    <Container className="my-5">
      <h2 className="text-center mb-5" style={{color: '#1c718e', fontFamily: 'Ysabeau', fontSize: '4rem'}}>From Concepts to Code</h2>
      <Row className="justify-content-center">
        {projects.map((project, index) => (
          <Col xs={12} sm={6} md={4} lg={3} key={index} className="mb-4">
            <Card className="h-100" style={{ border: '6px solid #1c718e', width: '300px', height: '350px' }}>
              <Card.Img variant="top" src={project.image} className="img-fluid" style={{ objectFit: 'cover', padding: '10px', height: '60%' }} />
              <Card.Body style={{ height: '40%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Card.Title className="text-center">{project.title}</Card.Title>
                <Card.Text>
                  {project.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProjectsShowcase;
