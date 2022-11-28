import React from "react";

// Styles
import "../sass/components/Nav.scss";

// Link 
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav-comp">

      {/* Personal Section */}
      <ul className="nav-sect">
        <li>
          <Link to="/" className="ss-nav-link ss-active">Home</Link>
        </li>
        <li>
          <Link to="/profile" className="ss-nav-link">Profile</Link>
        </li>
        <li>
          <Link to="/discover"
          className="ss-nav-link">Discover</Link>
        </li>
      </ul>

      <hr className="aside-divider" />

      {/* General Section  */}
      <ul className="ss-nav-sect">
        <li>
          <Link to="settings"
          className="ss-nav-link">Settings</Link>
        </li>
        <li>
          <Link to="about"
          className="ss-nav-link">About Statue Status</Link>
        </li>
        <li>
          <a href="#"
          className="ss-nav-link" id="logoutBtn">Logout</a>
        </li>
      </ul>

    </nav>
  );
};

export default Nav;