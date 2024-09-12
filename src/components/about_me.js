import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import family from '../images/family.jpeg';
import fandb from '../images/fandb.jpeg';
import homeless from '../images/homeless.jpeg';
import pets from '../images/pets.jpeg';
import wineTasting from '../images/tasting.jpeg';
import ocean from '../images/ocean.jpeg';
import { Card } from 'react-bootstrap';


function AboutPage() {
  return (
    <div>
    <h1 className="title m-3" style={{ textAlign: 'center', fontSize: '3rem', color: '#d2b48c', textShadow: '2px 2px #8b4513' }}>From Passions to Purpose: My journey</h1>
    <div className="about-card d-flex flex-wrap justify-content-center p-4">
      {/* Card 1 */}
      <Card className="dog-card m-3"  style={{ width: '25rem' }}>
        <Card.Img variant="top" src={pets} style={{ height: '40vh', objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title>My Furry Companions</Card.Title>
          <Card.Text>
          As a lifelong dog lover, I’ve been fortunate to share my world with two incredible pups—Purdey, my loyal and affectionate girl, and Hunter, my playful adventurer. They bring boundless energy, joy, and unconditional love into my life, reminding me of the simple pleasures of companionship.
          </Card.Text>
          <small className="text-muted">Whoever said diamonds are a girl’s best friend never owned a dog.</small>
        </Card.Body>
      </Card>

      {/* Card 2 */}
      <Card className="family-card m-3" style={{ width: '25rem' }}>
        <Card.Img variant="top" src={family} style={{ height: '40vh', objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title>Family First</Card.Title>
          <Card.Text>
          Family and friends are the heart of my life, offering endless love, support, and happiness. Among all my roles, being an aunt is the one I cherish most. Watching my nieces and nephews grow, and being actively involved in their lives, fills me with profound joy and pride.
          </Card.Text>
          <small className="text-muted">The best part of family? Being an aunt, it's like having all the love without the rules!</small>
        </Card.Body>
      </Card>

      {/* Card 3 */}
      <Card className="fandb-card m-3" style={{ width: '25rem' }}>
        <Card.Img variant="top" src={fandb} style={{ height: '40vh', objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title>A Lifetime in Food & Beverage</Card.Title>
          <Card.Text>
          The food and beverage industry has been woven into the fabric of my life since my teenage years—it’s more than just a career, it’s a passion. From managing restaurants to curating memorable dining experiences, I’m constantly inspired by this ever-evolving world. I even married a chef, which only deepened our shared love for great food and hospitality!
          </Card.Text>
          <small className="text-muted">Good food is all the sweeter when shared with good friends.</small>
        </Card.Body>
      </Card>

      {/* Card 4 */}
      <Card className="community-card m-3" style={{ width: '25rem' }}>
        <Card.Img variant="top" src={homeless} style={{ height: '40vh', objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title>Giving Back: Community and Companion</Card.Title>
          <Card.Text>
          At Calvary IB, I’m blessed to be part of a compassionate team that serves the homeless. Together, we do more than provide meals—we share fellowship, faith, and create lasting bonds with the community. It’s deeply fulfilling to not only make a difference but also to spread God’s word and build meaningful connections with the people we serve.
          </Card.Text>
          <small className="text-muted">Blessed to serve and share God’s love with our community.</small>
        </Card.Body>
      </Card>

      {/* Card 5 */}
      <Card className="evolving-card m-3" style={{ width: '25rem' }}>
        <Card.Img variant="top" src={ocean} style={{ height: '40vh', objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title>Always Evolving: Learning and Growth</Card.Title>
          <Card.Text>
          With every new experience, I find opportunities to grow. From mastering the food and beverage industry to exploring the ever-changing world of web development, I embrace challenges and am committed to continuously learning and evolving in all aspects of life.
          </Card.Text>
          <small className="text-muted">Growth happens when you embrace the unknown and keep learning along the way.</small>
        </Card.Body>
      </Card>

      {/* Card 6 */}
      <Card className="hobbies-card m-3" style={{ width: '25rem' }}>
        <Card.Img variant="top" src={wineTasting} style={{ height: '40vh', objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title>Passions and Pastimes</Card.Title>
          <Card.Text>
          From savoring a fine wine and exploring new destinations to curling up with a good book or binge-watching favorite shows, I cherish the simple joys and relaxing moments that add richness to life.
          </Card.Text>
          <small className="text-muted">Hobbies: because life is too short for just work and no play!</small>
        </Card.Body>
      </Card>
    </div>
    </div>
  );
}

export default AboutPage;
