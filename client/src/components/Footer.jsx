import React from "react";

// Styles
import "../sass/components/Footer.scss";

const Footer = () => {
  return (
    <footer>

      <div className="logo">
        <h3><a href="#">&#169; 2022 TDG</a></h3>
      </div>

      {/* Links  */}
      <ul className="footer-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Discover</a>
        </li>
      </ul>

      <ul className="footer-links">
        <li>
          <a href="#">Extra</a>
        </li>
        <li>
          <a href="#">Extra</a>
        </li>
        <li>
          <a href="#">Extra</a>
        </li>
      </ul>

    </footer>
  );
};

export default Footer;