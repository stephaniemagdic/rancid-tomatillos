import './Header.css';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link to="/">
        <h1>
          RANCID TOMATILLOS
        </h1>
      </Link>
      <div id="linkContainer">
        <NavLink 
          exact to="/"
          activeStyle={{
            fontWeight: "bolder",
            textDecoration: "underline",
            textDecorationColor: "#AB2300"
          }}
          >
          <h3 
          className="headerLink"
          >Home
          </h3>
        </NavLink>
        <NavLink 
          exact to="/Favorites"
          activeStyle={{
            fontWeight: "bolder",
            textDecoration: "underline",
            textDecorationColor: "#AB2300"
          }}>
          <h3 className="headerLink"
          >Favorites</h3>
        </NavLink>
      </div>
    </header>
  )
}

export default Header;
