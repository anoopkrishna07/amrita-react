import React from 'react';
import './Spotcard.css';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import spot1 from './img/spot1.png';
import spot2 from './img/spot2.png';
import spot3 from './img/spot3.png';
import spot4 from './img/spot4.png';


function SpotCard() {
  return (
    <div className='spotcard'>
    <Container>
    <CardGroup>
      <Card style={{width: '18rem'}} className='me-3'>
        <Card.Img variant="top" src={spot1} />
        <Card.Body>
          <Card.Title>Venomics</Card.Title>
          <Card.Text>
          Snake bite is a significant problem faced by both developed and developing countries, 
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant='primary'>Learn More</Button>
        </Card.Footer>
      </Card>
      <Card style={{width: '18rem'}} className='me-3'>
        <Card.Img variant="top" src={spot2} />
        <Card.Body>
          <Card.Title>Applied Biochemistry</Card.Title>
          <Card.Text>
          Applied Biochemistry Lab focuses on the qualitative and quantitative Biochemistry and Molecular 
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant='primary'>Learn More</Button>        
        </Card.Footer>
      </Card>
      <Card style={{width: '18rem'}} className='me-3'>
        <Card.Img variant="top" src={spot3} />
        <Card.Body>
          <Card.Title>Cancer Biology</Card.Title>
          <Card.Text>
          Our research focus is to screen molecules with anti-cancer properties and understand their 
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant='primary'>Learn More</Button>        
        </Card.Footer>
      </Card>
      <Card style={{width: '18rem'}} className='me-3'>
        <Card.Img variant="top" src={spot4} />
        <Card.Body>
          <Card.Title>Cell Biology</Card.Title>
          <Card.Text>
          Biomedical Engineering and Cell Biology Labs was set up at the Amritapuri campus of Amrita Vishwa Vidyapeetham 
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant='primary'>Learn More</Button>
        </Card.Footer>
      </Card>
    </CardGroup>
    <CardGroup>
      <Card style={{width: '18rem'}} className='me-3'>
        <Card.Img variant="top" src={spot1} />
        <Card.Body>
          <Card.Title>Venomics</Card.Title>
          <Card.Text>
          Snake bite is a significant problem faced by both developed and developing countries, 
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant='primary'>Learn More</Button>
        </Card.Footer>
      </Card>
      <Card style={{width: '18rem'}} className='me-3'>
        <Card.Img variant="top" src={spot2} />
        <Card.Body>
          <Card.Title>Applied Biochemistry</Card.Title>
          <Card.Text>
          Applied Biochemistry Lab focuses on the qualitative and quantitative Biochemistry and Molecular 
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant='primary'>Learn More</Button>        
        </Card.Footer>
      </Card>
      <Card style={{width: '18rem'}} className='me-3'>
        <Card.Img variant="top" src={spot3} />
        <Card.Body>
          <Card.Title>Cancer Biology</Card.Title>
          <Card.Text>
          Our research focus is to screen molecules with anti-cancer properties and understand their 
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant='primary'>Learn More</Button>        
        </Card.Footer>
      </Card>
      <Card style={{width: '18rem'}} className='me-3'>
        <Card.Img variant="top" src={spot4} />
        <Card.Body>
          <Card.Title>Cell Biology</Card.Title>
          <Card.Text>
          Biomedical Engineering and Cell Biology Labs was set up at the Amritapuri campus of Amrita Vishwa Vidyapeetham 
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

export default SpotCard;