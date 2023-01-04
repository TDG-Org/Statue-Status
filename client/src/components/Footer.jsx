import React from "react";

// Styles
import "../sass/components/Footer.scss";

// Link 
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>

      <div className="container">

        {/* TDG */}

        <ul className="footer-sect">
          <li>
            <div className="logo">
              <h3>
                <a>
                  &#169; 2022 TDG
                </a>
              </h3>
            </div>  
          </li>
          <li>
            <Link to="devs">Dev Team</Link>
          </li>
          <li>
            <a target="blank" href="https://github.com/TDG-Org/Statue-Status/issues">Create Issue</a>
          </li>
        </ul>

        {/* Links */}

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

        {/* Credits */}

        <div className="footer-sect">

          <h4>Credits</h4>

          <ul className="footer-links">
            {/* Jesseokeya's API */}
            <li>
              <a target="blank"
                href="https://github.com/jesseokeya/Forbes400"
              >
                jesseokeya&apos;s API
              </a>
            </li>
            {/* Bootstrap Icons */}
            <li>
            <a target="blank"
                href="https://icons.getbootstrap.com/"
              >
                Bootstrap Icons
              </a>
            </li>
            {/* OpenAI */}
            <li>
              <a target="blank"
                href="https://openai.com/"
              >
                OpenAI
              </a>
            </li>
            {/* haikei */}
            <li>
              <a target="blank"
                href="https://haikei.app/"
              >
                haikei
              </a>
            </li>
            {/* IconScout */}
            <li>
              <a target="blank"
                href="https://iconscout.com/"
              >
                IconScout
              </a>
            </li>
          </ul>

        </div>
      </div>

    </footer>
  );
};

export default Footer;