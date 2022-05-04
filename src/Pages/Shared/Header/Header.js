import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo/logo-1.png';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth);
    }
    return (
        <>
        
        <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
  <Container>
  <Navbar.Brand as={Link}  to="/">
      <img src={logo} height='35' ></img>
      Laptop Inventories
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link className='text-white' href="home#inventories">Inventory Items</Nav.Link>
      <Nav.Link className='text-white' href="home#explore">Explore</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link className='text-white' as={Link} to="/blogs">Blogs</Nav.Link>
      {
          user ?
            <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Log Out</button>
          :
          <Nav.Link className='text-white' as={Link} to="/login">
        Login
      </Nav.Link>}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
</>
    );
};

export default Header;