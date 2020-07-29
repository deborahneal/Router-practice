import React from 'react';
import {Navbar, NavDropdown, Nav} from 'react-bootstrap';

function NavBar(){
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home"> <h1 className="coder">Deb's</h1>Portfolio✔</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/About">About Me</Nav.Link>
          <Nav.Link href="/Contact">Contact</Nav.Link>
          <NavDropdown title="Projects" id="collasible-nav-dropdown">
          <NavDropdown.Item href="/Projects">Projects</NavDropdown.Item> 
            {/* <NavDropdown.Divider /> */}
            {/* <NavDropdown title="Projects" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/Projects">Project-1</NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown> */}
            {/* <NavDropdown.Item href="#action/3.2">Learning GameApp for Toddlers</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Flower Gallery</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Movie API</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Snake Game</NavDropdown.Item> */}
            
          </NavDropdown> 
          
        </Nav>
        
      </Navbar.Collapse>
    </Navbar>
    )
}


export default NavBar;