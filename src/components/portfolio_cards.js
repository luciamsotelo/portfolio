import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import memoryGameImage from '../images/memorygame.jpg'; 
import wardrobeImage from '../images/wiaw.jpeg';
import sdcp from '../images/sdcp.jpeg';
import packout from '../images/trpo.jpeg';
import '../styles/portfolio_cards.css';

function ProjectsShowcase() {
  const projects = [
    {
      title: 'Memory Game',
      image: memoryGameImage,
      description: (
        <>
          <p className="card-description">
            Click 'Start' to reveal the card board. Select two cards at a time; if they match, they stay face up. If they don’t, they flip back to their original state. Track your time and moves as you play to monitor your progress and efficiency.<br /><b>Technologies Used:</b><br /> HTML | CSS | JavaScript.
          </p>
          <p className="text-center">
            <a href="https://luciamsotelo.github.io/Milestone-Project-1/" target="_blank" rel="noopener noreferrer" aria-label="View Memory Game">
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
          <p className="card-description italic-text">Team project. Database inactive, May take a few seconds to load.</p>
          <p className="card-description">
            This project enables buying, selling, and gifting clothing through a database for item uploads, integrating backend and frontend for smooth transactions and a seamless user experience.<br />
            <b>Technologies Used:</b><br /> React | React Bootstrap | Bootstrap | React Router DOM | Web Vitals | Express | Sequelize | PostgreSQL (pg) | dotenv | Nodemon | CORS
          </p>
          <p className="text-center">
            <a href="https://wear-it-again-wardrobe.onrender.com" target="_blank" rel="noopener noreferrer" aria-label="View Wear It Again Wardrobe">
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
          <p className="card-description">
            This app offers a detailed guide to some of San Diego’s top beaches, featuring comprehensive descriptions and highlights of popular destinations for a seamless user experience.<br />
            <b>Technologies Used:</b> React | React Bootstrap | Bootstrap | React Router DOM | Web Vitals | Express | Sequelize | PostgreSQL (pg) | Axios | Body Parser | dotenv | Nodemon | CORS
          </p>
          <p className="text-center">
            <a href="https://sd-coastal-paradise.onrender.com/" target="_blank" rel="noopener noreferrer" aria-label="View San Diego Coastal Paradise">
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
          <p className="card-description">
            This website was created to showcase the client's business, highlighting their services and offerings. It includes features that allow customers to easily contact the business through email and phone, providing a seamless communication experience.<br />
            <b>Technologies Used:</b><br />React | React Bootstrap | Bootstrap | React Router DOM | Web Vitals | FontAwesome | Testing Library (Jest, React Testing Library)
          </p>
          <p className="text-center">
            <a href="https://www.therightpackout.com/" target="_blank" rel="noopener noreferrer" aria-label="View The Right Packout">
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
          <p className="card-description">
            Info on project<br />
            <b>Technologies Used:</b>
          </p>
          <p className="text-center">
            <a href="https://sd-coastal-paradise.onrender.com/" target="_blank" rel="noopener noreferrer" aria-label="View TITLE">
              BUTTON
            </a>
          </p>
        </>
      ),
    },
  ];

  return (
    <Container className="my-5">
      <h1 className="title text-center mb-5 card-title-custom" style={{ textAlign: 'center', fontSize: '3rem', color: '#1c718d', textShadow: '2px 2px #edf2f4' }}>From Concepts to Code</h1>
      <Row className="justify-content-center">
        {projects.map((project, index) => (
          <Col xs={12} sm={6} md={4} lg={3} key={index} className="mb-4 d-flex justify-content-center">
            <Card className="card-custom">
              <Card.Img variant="top" src={project.image} className="card-img-custom" alt={`Image for ${project.title}`} />
              <Card.Body className="card-body-custom">
                <Card.Title className="text-center card-title-custom">{project.title}</Card.Title>
                <Card.Text className="card-description">
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
