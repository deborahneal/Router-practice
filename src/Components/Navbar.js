import React from 'react';
import {Navbar, NavDropdown, Nav} from 'react-bootstrap';

function NavBar(){
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">Deboraht's Portfolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/About">About Me</Nav.Link>
          <NavDropdown title="Projects" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/Projects">Projects</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.2">Project 1</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Project 2</NavDropdown.Item>
            
            <NavDropdown.Item href="#action/3.4">Project 3</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        
      </Navbar.Collapse>
    </Navbar>
    )
}


export default NavBar;