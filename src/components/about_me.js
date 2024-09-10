import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import family from '../images/family.jpeg';
import fandb from '../images/fandb.jpeg';
import homeless from '../images/homeless.jpeg';
import pets from '../images/pets.jpeg';
import { Card } from 'react-bootstrap';

function AboutPage() {
  return (
    <div className="about-card d-flex flex-wrap justify-content-center p-4">
      {/* Card 1 */}
      <Card className="dog-card m-3"  style={{ width: '18rem' }}>
        <Card.Img variant="top" src={pets} style={{ height: '150px', objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title>My Furry Companions</Card.Title>
          <Card.Text>
          As a lifelong dog lover, I’m lucky to have shared my life with two amazing pups—Purdey, my sweet and loyal girl, and Hunter, my playful and adventurous boy. They filled my days with joy, energy, and unconditional love.
          </Card.Text>
          <small className="text-muted">Whoever said diamonds are a girl’s best friend never owned a dog.</small>
        </Card.Body>
      </Card>

      {/* Card 2 */}
      <Card className="family-card m-3" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={family} style={{ height: '150px', objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title>Family First</Card.Title>
          <Card.Text>
          Family and friends are everything to me—they are my biggest source of love, support, and joy. Of all the roles I play in life, being an aunt is the one I’m most proud of. Watching my nieces and nephews grow and being a part of their lives brings me the greatest happiness.
          </Card.Text>
          <small className="text-muted">The best part of family? Being an aunt, it's like having all the love without the rules!</small>
        </Card.Body>
      </Card>

      {/* Card 3 */}
      <Card className="fandb-card m-3" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={fandb} style={{ height: '250px', objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title>A Lifetime in Food & Beverage</Card.Title>
          <Card.Text>
          I’ve been in the food and beverage world since my teenage years, and it’s safe to say it’s become a way of life—I even married a chef! From running restaurants to crafting dining experiences, my love for this industry just keeps growing, just like our collection of cookbooks!
          </Card.Text>
          <small className="text-muted">Good food is all the sweeter when shared with good friends.</small>
        </Card.Body>
      </Card>

      {/* Card 4 */}
      <Card className="community-card m-3" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={homeless} style={{ height: '150px', objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title>Giving Back: Community and Companion</Card.Title>
          <Card.Text>
          At Calvary IB, my church, I’m privileged to work alongside a dedicated team to feed the homeless and create lasting memories with both our community and those we serve. It’s a true blessing to make a difference with the wonderful people I’m honored to work with. Together, we’re not just providing meals; we’re sharing the word of God and building meaningful connections.
          </Card.Text>
          <small className="text-muted">Blessed to serve and share God’s love with our community.</small>
        </Card.Body>
      </Card>
    </div>
  );
}

export default AboutPage;
