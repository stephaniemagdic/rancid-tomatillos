import './Header.css';
import { Link, NavLink } from 'react-router-dom';
import React from 'react'
import ReactPlayer from 'react-player'

const Header = ({hasMovieBanner}) => {
  return (
    <header className='Header'>
      <div className='nav-container'>
        {/* this is not working the link to but navlink is working fine. */}
        <Link exact to="/rancid-tomatillos">
          <h1>
            MOVIE BUFFER
          </h1>
        </Link>
        <div id="linkContainer">
          <NavLink 
            exact to="/rancid-tomatillos"
            activeStyle={{
              fontWeight: "bolder",
              textDecoration: "underline",
              textDecorationColor: "#AB2300",
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
      </div>
      { hasMovieBanner && 
      (<div className="banner">
          <ReactPlayer 
              url='https://www.youtube.com/watch?v=aETz_dRDEys'
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
        </div>)}
    </header>
  )
}

export default Header;
