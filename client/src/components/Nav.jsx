import React from "react";

// Styles
import "../sass/components/Nav.scss";

// Link 
import { Link } from "react-router-dom";

// Props 
import PropTypes from "prop-types";

const Nav = ({ isActive, handleToggle }) => {

  // Validate Prop 
  Nav.propTypes = {
    isActive: PropTypes.bool.isRequired,
    handleToggle: PropTypes.func.isRequired
  };
  
  return (
    <nav className={`nav-comp ${isActive ? "" : "active"}`}>

      {/* Personal Section */}
      <ul className="nav-sect">
        <li>
          <Link
            to="/"
            className="ss-nav-link ss-active"
            onClick={handleToggle}>Home
          </Link>
        </li>
        <li>
          <Link
            to="/profile"
            className="ss-nav-link"
            onClick={handleToggle}>Profile
          </Link>
        </li>
        <li>
          <Link
            to="/discover"
            className="ss-nav-link"
            onClick={handleToggle}>Discover
          </Link>
        </li>
      </ul>

      <hr className="aside-divider" />

      {/* General Section  */}
      <ul className="ss-nav-sect">
        <li>
          <Link
            to="settings"
            className="ss-nav-link"
            onClick={handleToggle}>Settings
          </Link>
        </li>
        <li>
          <Link
            to="about"
            className="ss-nav-link"
            onClick={handleToggle}>About Statue Status
          </Link>
        </li>
        <li>
          <a
            href="#"
            className="ss-nav-link"
            id="logoutBtn">Logout
          </a>
        </li>
      </ul>

    </nav>
  );
};

export default Nav;