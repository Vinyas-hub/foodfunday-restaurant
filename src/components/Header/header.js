import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './header.css';
var logo = require('../../images/logo.png')
function Header() {
    const navStyle = {
        background: 'rgba(0, 0, 0, 0.6)' 
      };
    return (
        <>
            <Navbar fixed="top" style={navStyle}>
      <Container>
        <Navbar.Brand>
          <a href="#">
            <img src={logo} className="logo-header" />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav className="ml-auto">
            <Nav.Link href="#banner" >Home</Nav.Link>
            <Nav.Link href="#about">About us</Nav.Link>
            <Nav.Link href="#menu">Menu  </Nav.Link>
            <Nav.Link href="#reservation">Reservation  </Nav.Link>
            <Nav.Link href="#footer">Contact us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

        </>
    );
}

export default Header;