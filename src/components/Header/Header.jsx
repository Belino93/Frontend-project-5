import "./Header.css";
import {useNavigate} from 'react-router-dom'

function Header() {
    const navigate = useNavigate()

  return <div className="header-container">
    <div className="link-design" onClick={() => navigate('/')}>Home</div>
    <div className="link-design" onClick={() => navigate('/register')}>Register</div>
    <div className="link-design" onClick={() => navigate('/login')}>Login</div>
  </div>;
}

export default Header;
