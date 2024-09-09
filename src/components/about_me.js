import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import family from '../images/family.jpeg';
import fandb from '../images/fandb.jpeg';
import homeless from '../images/homeless.jpeg';
import pets from '../images/pets.jpeg';
import { Card } from 'react-bootstrap';

function AboutPage() {
  return (
    <div className="d-flex flex-wrap justify-content-center p-4">
      {/* Card 1 */}
      <Card className="m-3" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={pets} style={{ height: '150px', objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title>Hunter Dog & Purdey Girl</Card.Title>
          <Card.Text>
            This card highlights a project focused on helping stray dogs by providing shelter and care.
          </Card.Text>
          <small className="text-muted">Last updated 3 days ago</small>
        </Card.Body>
      </Card>

      {/* Card 2 */}
      <Card className="m-3" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={family} style={{ height: '150px', objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title>Supporting Families</Card.Title>
          <Card.Text>
            This card describes a family support initiative offering resources for underprivileged families.
          </Card.Text>
          <small className="text-muted">Last updated 2 days ago</small>
        </Card.Body>
      </Card>

      {/* Card 3 */}
      <Card className="m-3" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={fandb} style={{ height: '250px', objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title>Food & Beverage Program</Card.Title>
          <Card.Text>
            An outreach project to provide meals and beverages to homeless individuals in the community.
          </Card.Text>
          <small className="text-muted">Last updated 1 day ago</small>
        </Card.Body>
      </Card>

      {/* Card 4 */}
      <Card className="m-3" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={homeless} style={{ height: '150px', objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title>Helping the Homeless</Card.Title>
          <Card.Text>
            A program that provides essentials and shelter for the homeless population.
          </Card.Text>
          <small className="text-muted">Last updated 5 days ago</small>
        </Card.Body>
      </Card>
    </div>
  );
}

export default AboutPage;
