import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import Home from './Home';
import Contact from './Contact'
import Projects from './Projects'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

export default function Header() {






return (
  <div>
    <Router>
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">Tyler Williams</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/Projects">Projects</Nav.Link>
      <Nav.Link href="/Contact">Contact</Nav.Link>
    </Nav> 
</Navbar>
<Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/Projects'>
        <Projects />
      </Route>
      <Route path='/Contact'>
        <Contact />
      </Route>
    </Switch>
  </Router>
</div>
)
}