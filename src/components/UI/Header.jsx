import React from 'react'
import { NavLink } from 'react-router';
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
const Header = () => {
    const [show, setShow] = useState(false);

    const handleButtonToggle = () => {
      return setShow(!show);
    };
  return (
    <header>
      <div className="container">
        <div className="grid navbar-grid">
          <div className="Logo">
            <NavLink to="/">
              <h1>WorldAtlas</h1>
            </NavLink>
          </div>
          <nav className={show ? "menu-mobile" : "menu-web"}>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/countries">Countries</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </nav>
          <div className="ham-menu">
            <button onClick={handleButtonToggle}>
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
        </div>
    </header>
  );
}

export default Header