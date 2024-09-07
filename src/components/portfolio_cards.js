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
            <a href="https://luciamsotelo.github.io/Milestone-Project-1/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
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
          <p style={{ textAlign: 'justify', fontSize: '0.875rem' }}>
          This project was designed for buying, selling, or gifting clothing. The app uses a database that allows users to upload and manage clothing items, seamlessly connecting the backend functionalities with the frontend for a smooth transaction process.
          <br></br>
          <b>Technologies Used:<br></br></b> React | React Bootstrap | Bootstrap | React Router DOM | Web Vitals | Express | Sequelize | PostgreSQL (pg) | dotenv | Nodemon | Cors

          </p>
          
          <p className="text-center">
            <a href="https://wear-it-again-wardrobe.onrender.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
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
          This app was created to provide a comprehensive guide to some of San Diego’s top beaches. With a focus on detailed descriptions and highlights of some of the most popular destinations in the city. We wanted to provide a seamless user experience in providing a detailed guide to San Diego’s top beaches.
          <br></br>
          <b>Technologies Used:</b> React | React Bootstrap | Bootstrap | React Router DOM | Web Vitals | Express | Sequelize | PostgreSQL (pg) | Axios | Body Parser | dotenv | Nodemon | CORS
          </p>
          
          <p className="text-center">
            <a href="https://sd-coastal-paradise.onrender.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
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
          info on project
          <br></br>
          <b>Technologies Used:</b><br></br>React | React Bootstrap | Bootstrap | React Router DOM | Web Vitals | FontAwesome | Testing Library (Jest, React Testing Library) </p>
          <p className="text-center">
            <a href="https://www.therightpackout.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              The Right Packout</a></p>
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
          <b>Technologies Used:</b> </p>
          <p className="text-center">
            <a href="https://sd-coastal-paradise.onrender.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              BUTTON</a></p>
        </>
      ),
    },
  
  ];

  return (
    <Container className="my-5">
      <h2 className="text-center mb-5">Projects</h2>
      <Row className="justify-content-center">
        {projects.map((project, index) => (
          <Col xs={12} sm={6} md={4} lg={3} key={index} className="mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src={project.image} className="img-fluid" />
              <Card.Body>
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
