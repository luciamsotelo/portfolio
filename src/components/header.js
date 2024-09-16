import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import '../styles/header_page.css';

const Header = () => {
  return (
    <Navbar bg="" expand="lg" style={{backgroundColor: '#d2b48c', color: '#8b4513'}}>
      <Container>
        <Navbar.Brand href="/home">Lucia Sotelo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="bar" href="/home">Home</Nav.Link>
            <Nav.Link className="bar" href="/about">About</Nav.Link>
            <Nav.Link className="bar" href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link className="bar" href="/collaboration">Collaboration</Nav.Link>
            <Nav.Link className="bar" href="/contact">Contact</Nav.Link>
          </Nav>
          <Button variant="outline-primary" className="bar_button mt-3" style={{color: 'white', borderColor: '#1c718e'}} href="/hire">
            Hire Me
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
