import React from "react";

// Styles
import "../sass/components/Nav.scss";

const Nav = () => {
  return (
    <nav className="nav-comp">

      {/* Personal Section */}
      <ul className="nav-sect">
        <li>
          <a href="#" className="ss-nav-link">Home</a>
        </li>
        <li>
          <a href="#" className="ss-nav-link">Profile</a>
        </li>
        <li>
          <a href="#"
          className="ss-nav-link">Discover</a>
        </li>
      </ul>

      <hr className="nav-divider" />

      {/* General Section  */}
      <ul className="ss-nav-sect">
        <li>
          <a href="#"
          className="ss-nav-link">Settings</a>
        </li>
        <li>
          <a href="#"
          className="ss-nav-link">About Statue Status</a>
        </li>
        <li>
          <a href="#"
          className="ss-nav-link">Logout</a>
        </li>
      </ul>

    </nav>
  );
};

export default Nav;