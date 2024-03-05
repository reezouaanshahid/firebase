import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Image } from 'react-bootstrap';

function CardExample() {
  return (
    <div style={{ backgroundColor: '#F7F1EF' }}>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="col">
            <Card style={{ width: '18rem' }}>
              <Image src={require('./2.jpeg')} fluid />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardExample;
