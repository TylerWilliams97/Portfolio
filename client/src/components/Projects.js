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
  <Card.Img variant="top" src="assets/image/song.jpeg" />
  <Card.Body>
    <Card.Title>Song Translator</Card.Title>
    <Card.Text>
     Translate your favorite songs into wacky languages like yoda and groot!
    </Card.Text>
    <Button variant="primary" href="https://github.com/Curtis-Hatter/Song-Translation-Application">GitHub</Button>
  </Card.Body>
</Card>
</Col>
<Col>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="assets/image/password.png" />
  <Card.Body>
    <Card.Title>Password Ganerator</Card.Title>
    <Card.Text>
      Simple app to create a randomly generated password 
    </Card.Text>
    <Button variant="primary" href="https://github.com/TylerWilliams97/Password_Generator">Github</Button>
  </Card.Body>
</Card>
</Col>
</Row>
</Container>
</div>
    )
}