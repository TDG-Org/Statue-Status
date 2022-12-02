import React from "react";

// Styles
import "../sass/components/Footer.scss";

// Link 
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>

      <div className="container">

        <div className='logo'>
          <h3><a href="#">&#169; 2022 TDG</a></h3>
        </div>

        {/* Links  */}

        <div className="footer-sect">
          <h4>Page</h4>
          <ul className="footer-links">
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/discover">Discover</Link>
            </li>
            <li>
            <Link to="about">Learn More</Link>
            </li>
          </ul>
        </div>

        {/* Extra  */}

        <div className="footer-sect">
          <h4>Extra</h4>
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
          </div>
        </div>

    </footer>
  );
};

export default Footer;