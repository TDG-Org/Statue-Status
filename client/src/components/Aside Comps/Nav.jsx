import React from "react";

// Styles
import "../../sass/components/Nav.scss";

// Link 
import { Link } from "react-router-dom";

// Props 
import PropTypes from "prop-types";

import Auth from "../../utils/auth";

// Auth 
const Nav = ({ isActive, handleToggle }) => {

  // Validate Prop 
  Nav.propTypes = {
    isActive: PropTypes.bool.isRequired,
    handleToggle: PropTypes.func.isRequired
  };

  function logoutFunc(event) {
    event.preventDefault();
    Auth.logout();
  }

  return (
    <nav className={`nav-comp ${isActive ? "" : "active"}`}>

      {/* Personal Section */}

      {Auth.loggedIn() ? (
        <>
          <ul className="nav-sect">
            <li>
              <Link
                to="/"
                onClick={handleToggle}
                className="ss-nav-link ss-active"
              >
                Home
              </Link>
            </li>

            {/* Profile */}
            <li>
              <Link
                to="/profile"
                onClick={handleToggle}
                className="ss-nav-link"
              >
                Profile
              </Link>
            </li>

            {/* Discover */}
            <li>
              <Link
                to="/discover"
                onClick={handleToggle}
                className="ss-nav-link"
              >
                Discover
              </Link>
            </li>

          </ul>

          <hr className="aside-divider" />

          {/* General Section */}

          <ul className="ss-nav-sect">

            {/* Settings */}
            <li>
              <Link
                to="/settings"
                onClick={handleToggle}
                className="ss-nav-link"
              >
                Settings
              </Link>
            </li>

            {/* Learn More */}
            <li>
              <Link
                to="/about"
                onClick={handleToggle}
                className="ss-nav-link"

              >Learn More
              </Link>
            </li>

            {/* Logout */}
            <li>
              <a
                href="#"
                className="ss-nav-link"
                id="logoutBtn"
                onClick={logoutFunc}
              >
                Logout <i className="bi bi-box-arrow-in-right"></i>
              </a>
            </li>
          </ul>
        </>
      ) : (
        <>
          <ul className="nav-sect">
            <li>
              <Link
                to="/"
                onClick={handleToggle}
                className="ss-nav-link ss-active"
              >
                Home
              </Link>
            </li>

          </ul>

          <hr className="aside-divider" />

          {/* General Section */}

          <ul className="ss-nav-sect">

            {/* Learn More */}
            <li>
              <Link
                to="/about"
                onClick={handleToggle}
                className="ss-nav-link"

              >Learn More
              </Link>
            </li>

            <li>
              <Link
                to="/login"
                className="ss-nav-link login-button"
              >
                Login
              </Link>
            </li>

          </ul>
        </>
      )}

    </nav >
  );
};

export default Nav;