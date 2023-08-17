import React from 'react';
import './Ecocard.css';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import phd1 from './img/placeholder1.png';
import phd2 from './img/placeholder2.png';
import phd3 from './img/placeholder3.png';


function Ecocard() {
  return (
    <div className='ecocard'>
    <Container>
    <CardGroup>
      <Card style={{width: '18rem'}} className='me-3'>
        <Card.Img variant="top" src={phd1} />
        <Card.Body>
          <Card.Title>Research Centers</Card.Title>
          <Card.Text>
          Startup Framework works fine on devices supporting Retina Desplay. Feel the clarity!
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant='primary'>Learn More</Button>
        </Card.Footer>
      </Card>
      <Card style={{width: '18rem'}} className='me-3'>
        <Card.Img variant="top" src={phd2} />
        <Card.Body>
          <Card.Title>Research Themes</Card.Title>
          <Card.Text>
          Startup Framework works fine on devices supporting Retina Desplay. Feel the clarity!
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant='primary'>Learn More</Button>        
        </Card.Footer>
      </Card>
      <Card style={{width: '18rem'}}>
        <Card.Img variant="top" src={phd3} />
        <Card.Body>
          <Card.Title>Blog</Card.Title>
          <Card.Text>
          Startup Framework works fine on devices supporting Retina Desplay. Feel the clarity!
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant='primary'>Learn More</Button>        
        </Card.Footer>
      </Card>
    </CardGroup>
    <CardGroup>
      <Card style={{width: '18rem'}} className='me-3'>
        <Card.Img variant="top" src={phd1} />
        <Card.Body>
          <Card.Title>Laboratories and Facilities</Card.Title>
          <Card.Text>
          Startup Framework works fine on devices supporting Retina Desplay. Feel the clarity!
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant='primary'>Learn More</Button>        
        </Card.Footer>
      </Card>
      <Card style={{width: '18rem'}} className='me-3'>
        <Card.Img variant="top" src={phd2} />
        <Card.Body>
          <Card.Title>Research Outcomes</Card.Title>
          <Card.Text>
          Startup Framework works fine on devices supporting Retina Desplay. Feel the clarity!
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant='primary'>Learn More</Button>        
        </Card.Footer>
      </Card>
      <Card style={{width: '18rem'}}>
        <Card.Img variant="top" src={phd3} />
        <Card.Body>
          <Card.Title>Research Experiences</Card.Title>
          <Card.Text>
          Startup Framework works fine on devices supporting Retina Desplay. Feel the clarity!
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant='primary'>Learn More</Button>        
        </Card.Footer>
      </Card>
    </CardGroup>
    </Container>
    </div>
  );
}

export default Ecocard;