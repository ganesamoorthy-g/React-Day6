import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar style={{ backgroundColor: '#f0f8ff',padding:'10px' }} expand="lg">
      <Container fluid>
      <img src={"https://www.guvi.in/blog/wp-content/uploads/2022/04/Guvi-blog-logo.png"} alt="Logo" style={{ height: '30px', marginRight: '10px' }} />
        <Navbar.Brand>guvi management</Navbar.Brand>
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link as={Link} to="/home ">HOME</Nav.Link>
            <Nav.Link as={Link} to="/FSD">FULL STACK DEVEOPMENT</Nav.Link>
            <Nav.Link as={Link} to="/data-science">DATA SCIENCE</Nav.Link>
            <Nav.Link as={Link} to="/cyber-security">CYBER SECURITY</Nav.Link>
            <Nav.Link as={Link} to="/career">CAREER</Nav.Link>
           
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
