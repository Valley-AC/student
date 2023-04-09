import React from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';
import leadership from  "../../assets/leadership.png"
import markDigital from  "../../assets/makDigital.png"
const ExcCourses = () => {
    return (
        <Container>
            <h2>Promotions et meilleurs retours des étudiant(e)s</h2>
        <CardGroup>
      <Card>
        <Card.Img variant="top" src={leadership} />
        <Card.Body>
          <Card.Title>Formation en Leadership certifiante</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={markDigital} />
        <Card.Body>
          <Card.Title>Formation en Marketing Digital certifiante</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
   
    </CardGroup>
        </Container>
    );
}

export default ExcCourses;
