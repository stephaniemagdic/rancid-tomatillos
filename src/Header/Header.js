import './Header.css';
import { Link, NavLink } from 'react-router-dom';

import React from 'react'
import ReactPlayer from 'react-player'

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
      {/* <div className="banner">
          <ReactPlayer 
              url='https://www.youtube.com/watch?v=cDTg62vsV4U'
              className="react-player"
              width="100%"
              height="100%"
              controls={false}
              muted={true}
              playing={true}
              loop={true}
              config={{
                youtube: {
                  playerVars: {
                    disablekb: 1,
                    fs: 0,
                    iv_load_policy: 3,
                    modestbranding: 1,
                  },
                },
              }}
          />  
        </div> */}
      <Link to="/Favorites">
        <h3>Favorites</h3>
      </Link>
    </header>
  )
}

export default Header;
