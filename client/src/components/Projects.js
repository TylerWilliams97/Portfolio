import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Projects() {
    return(
        <div>
            <Container>
                <Row>
                    <Col>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src='assets/image/chefskiss.png'/>
  <Card.Body>
    <Card.Title>Chefs Kiss</Card.Title>
    <Card.Text>
      A place to share and find recipes.
    </Card.Text>
    <Button variant="primary" href="https://github.com/TylerWilliams97/Chefs-Kiss">Github</Button>
  </Card.Body>
</Card>
</Col>
<Col>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="assets/image/bubblegames.png" />
  <Card.Body>
    <Card.Title>Bubble Games</Card.Title>
    <Card.Text>
    Find some Drinking Games for you and your friends
    </Card.Text>
    <Button variant="primary" href="https://github.com/TylerWilliams97/BubbleGames">Github</Button>
  </Card.Body>
</Card>
</Col>
</Row>
<Row>
    <Col>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</Col>
<Col>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</Col>
</Row>
</Container>
</div>
    )
}