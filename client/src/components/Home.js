import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
export default function Home() {
    
    
    
    
    
    
    
    
    
    
    
    return (
        <div>
    <Jumbotron fluid>
         <Container>
    <h1>Tyler Williams</h1>
    <p>
      Full Stack Web Developer
    </p>
         </Container>
    </Jumbotron>
    <Card>
  <Card.Body>
    <Card.Title>GitHub</Card.Title>
    <Card.Text>
     The center to find all of my projects and future work
    </Card.Text>
    <Button variant="secondary" href="https://github.com/TylerWilliams97">Check it out!</Button>
  </Card.Body>
</Card>  
<Card>
  <Card.Body>
    <Card.Title>Linked in</Card.Title>
    <Card.Text>
      Anything you need to know about me can be found here
    </Card.Text>
    <Button variant="secondary" href="https://www.linkedin.com/in/tyler-williams-25328b160/">Check it out!</Button>
  </Card.Body>
</Card>
<Card>
  <Card.Body>
    <Card.Title>Resume</Card.Title>
    <Card.Text>
      Grab a copy of my Resume here
    </Card.Text>
    <Button variant="secondary" href="/Resume.pdf" download>Download</Button>
  </Card.Body>
</Card>
        </div>
    ) 
}