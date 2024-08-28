import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import yourImage from '../images/portfolioBackground.jpeg';  // Replace with the path to your image

const MainInfo = () => {
  return (
    <Container className="text-center mt-5 content-container position-relative">
      <img src={yourImage} fluid className="rounded shadow w-100" alt="Main Portfolio Image" />
      <div className="overlay-text">
        <h1>Your Main Title</h1>
        <p>Your subtitle or description goes here.</p>
      </div>
    </Container>
  );
}

export default MainInfo;
