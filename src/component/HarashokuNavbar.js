import React from 'react'
import {Nav, NavDropdown, Navbar} from 'react-bootstrap'

const HarashokuNavbar = () => {
    
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Navbar.Brand href="/detect">Harashoku</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <NavDropdown title="More about us" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">About Harashoku</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Contact us</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Japan Halal Facebook Page</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>  
    )
}

export default HarashokuNavbar
