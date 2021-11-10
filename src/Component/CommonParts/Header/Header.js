import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
  const {user, logOut} = useAuth()
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" sticky="top" variant="dark">
        <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/all_watch">All Watch</Nav.Link>
            {
              user?.email ?<>
               <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
               <p className="userName text-white mt-2">{user.displayName}</p>
               <Nav.Link onClick={logOut}>LogOut</Nav.Link>
               </>
              :
              <Nav.Link as={Link} to="/login">login</Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;