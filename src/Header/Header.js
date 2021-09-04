import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link to="/">
        <h1>
          RANCID TOMATILLOS
        </h1>
      </Link>
      <Link to="/Favorites">
        <h3>Favorites</h3>
      </Link>
    </header>
  )
}

export default Header;
