import "./Header.css";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useJwt } from "react-jwt";

function Header() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const { decodedToken } = useJwt(token);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  if (decodedToken?.user_role === 2) {
    return (
      <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="link-design" onClick={() => navigate("/")}>
                Home
              </Nav.Link>
              <Nav.Link
                className="link-design"
                onClick={() => navigate("/films")}
              >
                Films
              </Nav.Link>
              <Nav.Link
                className="link-design"
                onClick={() => navigate("/profile")}
              >
                Profile
              </Nav.Link>
              <Nav.Link
                className="link-design"
                onClick={() => logout()}
              >
                Logout
              </Nav.Link>
              
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  if (decodedToken?.user_role === 1) {
    return (
      <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="link-design" onClick={() => navigate("/")}>
                Home
              </Nav.Link>
              <Nav.Link
                className="link-design"
                onClick={() => navigate("/films")}
              >
                Films
              </Nav.Link>
              <Nav.Link
                className="link-design"
                onClick={() => navigate("/profile")}
              >
                Profile
              </Nav.Link>
              <Nav.Link
                className="link-design"
                onClick={() => logout()}
              >
                Logout
              </Nav.Link>
              <Nav.Link
                className="link-design"
                onClick={() => navigate('/admin')}
              >
                Admin
              </Nav.Link>
              
              
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
            <Nav.Link className="link-design" onClick={() => navigate("/")}>
              Home
            </Nav.Link>
            <Nav.Link
              className="link-design"
              onClick={() => navigate("/films")}
            >
              Films
            </Nav.Link>
            <Nav.Link
              className="link-design"
              onClick={() => navigate("/register")}
            >
              Register
            </Nav.Link>
            <Nav.Link
              className="link-design"
              onClick={() => navigate("/login")}
            >
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// return (
//   <Navbar expand="large" bg="black" variant="dark">
//     <Container>
//       <Nav className="my-4 d-flex flex-row me-auto bg-black ">

//         <div className="link-design" onClick={() => navigate("/")}>
//           Home
//         </div>
//         <div className="link-design" onClick={() => navigate("/films")}>
//           Films
//         </div>
//         <div className="link-design" onClick={() => navigate("/register")}>
//           Register
//         </div>
//         <div className="link-design" onClick={() => navigate("/login")}>
//           Login
//         </div>
//         {/* <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
//           <Nav.Link onClick={() => navigate('/films')}>Features</Nav.Link>
//           <Nav.Link onClick={() => navigate('/login')}>Login</Nav.Link>
//           <Nav.Link onClick={() => navigate('/register')}>Register</Nav.Link> */}
//       </Nav>
//     </Container>
//   </Navbar>
// );
// }

export default Header;
