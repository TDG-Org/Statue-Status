import React from "react";

// Styles
import "../sass/components/Footer.scss";

const Footer = () => {
  return (
    <footer>

      {/* Logo  */}
      <div className="logo">
        <h3><a href="#">Statue Status</a></h3>
      </div>

      {/* Links  */}
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