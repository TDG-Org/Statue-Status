import React from "react";

const Nav = () => {
  return (
    <nav>

      {/* Personal Section */}
      <ul className="nav-sect">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Profile</a>
        </li>
        <li>
          <a href="#">Discover</a>
        </li>
      </ul>

      <hr className="nav-divider" />

      {/* General Section  */}
      <ul className="nav-sect">
        <li>
          <a href="#">Settings</a>
        </li>
        <li>
          <a href="#">About Statue Status</a>
        </li>
        <li>
          <a href="#">Logout</a>
        </li>
      </ul>

    </nav>
  );
};

export default Nav;