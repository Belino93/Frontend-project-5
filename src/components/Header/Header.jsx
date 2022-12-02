import "./Header.css";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {useJwt} from 'react-jwt'

function Header() {
  const navigate = useNavigate();

  const token = localStorage.getItem( 'token')
const {decodedToken} = useJwt (token)

const logout = () => {
localStorage. removeItem ('token');
navigate('/');
}

if (decodedToken) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
      <Container>

        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="link-design" onClick={() => navigate("/")}>Home</Nav.Link>
            <Nav.Link className="link-design" onClick={() => navigate("/films")}>Films</Nav.Link>
            <Nav.Link className="link-design" onClick={() => navigate("/register")}>Register</Nav.Link>
            <Nav.Link className="link-design" onClick={() => navigate("/login")}>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>


      </Container>
    </Navbar>
  );
}


  return (
    <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="link-design" onClick={() => navigate("/")}>Home</Nav.Link>
            <Nav.Link className="link-design" onClick={() => navigate("/films")}>Films</Nav.Link>
            <Nav.Link className="link-design" onClick={() => navigate("/register")}>Register</Nav.Link>
            <Nav.Link className="link-design" onClick={() => navigate("/login")}>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default Header;
