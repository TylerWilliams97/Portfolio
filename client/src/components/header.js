import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Home from './links';
import Contact from './Contact'
import Projects from './Projects'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

export default function Header() {






return (
  <div>
    <Router>
    <Nav fill variant="tabs" defaultActiveKey="/">
  <Nav.Item>
    <Link  to="/" >About Me</Link>
  </Nav.Item>
  <Nav.Item>
    
    <Link to="/Projects">Projects</Link>
  </Nav.Item>
  <Nav.Item>
    <Link to="/Contact">Contact</Link>
  </Nav.Item>
</Nav>
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