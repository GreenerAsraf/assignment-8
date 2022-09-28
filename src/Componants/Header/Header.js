import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Header = () => {
    return (
      
//         <div>
//           import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// function CollapsibleExample() {
//   return (
    
    <div>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Proactive Acitivity Club</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>

</div>
  );
}


export default Header;