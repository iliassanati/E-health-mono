  
import React , { Fragment } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';


// 

const Footer1 = () => {
  return (
    <Fragment>
    <Navbar  expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">E-health</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/contact">Contact</Nav.Link>
          <Nav.Link href="/apropos">Apropos</Nav.Link>
          <NavDropdown title="Services" id="collapsible-nav-dropdown">
            <NavDropdown.Item href="/medcins">Doctors</NavDropdown.Item>
            <NavDropdown.Item href="/patient/rdvs">Rendu-Vous</NavDropdown.Item>
            <NavDropdown.Item href="/patient/login">Login</NavDropdown.Item>
          </NavDropdown> 
          <Nav.Link>
             Copyright &copy; 2021 E-health
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      
    </Navbar>
    </Fragment>
  );
}

export default Footer1;