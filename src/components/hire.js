import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../styles/hire_page.css";

const Hire = () => {
  return (
    <Container className="text-center my-5">
      {/* Intro Section */}
      <Row className="mb-4">
        <Col>
          <h1
            className="display-4"
            style={{
              fontFamily: "Ysabeau",
              color: "#1c718e",
              textShadow:"1px 1px white",
              fontSize: "2.5rem",
            }}
          >
            Looking for a Dedicated Developer?
          </h1>
          <p className="lead" style={{ fontFamily: "allura", fontSize: "2rem" }}>
            I bring creativity, passion, and problem-solving skills to every
            project. Let’s create something amazing together!
          </p>
          <Button
            variant="light"
            size="lg"
            className="mt-3"
            href="/LuciaResume.pdf"
            target="_blank"
          >
            View My Resume
          </Button>
        </Col>
      </Row>

      {/* Skills Showcase */}
      <Row className="justify-content-center">
        {[
          {
            skill: "React",
            description: "Building dynamic and responsive interfaces",
          },
          {
            skill: "JavaScript",
            description: "Efficient and clean code with ES6+",
          },
          {
            skill: "CSS/Bootstrap",
            description: "Responsive designs with CSS frameworks",
          },
          {
            skill: "Git/GitHub",
            description: "Version control and collaboration",
          },
          {
            skill: "Node.js/Express",
            description: "Building RESTful APIs and server-side logic",
          },
          {
            skill: "MongoDB/PostgreSQL",
            description: "Handling databases and data structures",
          },
          {
            skill: "Python",
            description:
              "Programming in Python for data science and web development",
          },
        ].map((item, idx) => (
          <Col
            key={idx}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className="mb-4 d-flex justify-content-center"
          >
            <Card className="skill-card">
              <Card.Body>
                <Card.Title>{item.skill}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* GitHub and LinkedIn Section */}
      <Row className="mt-5">
        <Col>
          <h2 className="mb-3" style={{
              fontFamily: "Ysabeau",
              color: "#e5d3bb ",
              textShadow:"1px 1px black",
              fontSize: "2.5rem",
            }}>Learn More About Me</h2>
          <Button
            variant="dark"
            href="https://github.com/luciamsotelo"
            target="_blank"
            className="me-3 mb-3"
          >
            Check Out My GitHub
          </Button>
          <Button
            variant="info"
            href="https://www.linkedin.com/in/lucia-sotelo/"
            target="_blank"
            className="me-3 mb-3"
          >
            Connect With LinkedIn
          </Button>
        </Col>
      </Row>

      {/* Call to Action */}
      <Row className="mt-5">
        <Col>
          <h2 className="mb-3" style={{
              fontFamily: "Ysabeau",
              color: "#e5d3bb ",
              textShadow:"1px 1px black",
              fontSize: "2.5rem",}}>Ready to Collaborate?</h2>
          <p style={{ fontFamily: "ysabeau", fontSize: "1.5rem" }}>
            Let’s discuss how we can bring your project to life! Click below to
            contact me directly.
          </p>
          <Link to="/contact">
            <Button variant="outline-primary" className="mb-3">
              Get in Touch
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Hire;
