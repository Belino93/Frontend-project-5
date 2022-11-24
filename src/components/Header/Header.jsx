import "./Header.css";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  const navigate = useNavigate();

  

  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Nav className="me-auto">
          <div className="link-design" onClick={() => navigate("/")}>
            Home
          </div>
          <div className="link-design" onClick={() => navigate("/films")}>
            Films
          </div>
          <div className="link-design" onClick={() => navigate("/register")}>
            Register
          </div>
          <div className="link-design" onClick={() => navigate("/login")}>
            Login
          </div>
          {/* <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate('/films')}>Features</Nav.Link>
            <Nav.Link onClick={() => navigate('/login')}>Login</Nav.Link>
            <Nav.Link onClick={() => navigate('/register')}>Register</Nav.Link> */}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
