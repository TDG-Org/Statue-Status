import React, { useState, useEffect } from "react";

// Components 
import {
  Nav,
  User
} from "./";

// Link 
import { Link } from "react-router-dom";

// Styles
import "../sass/components/Aside.scss";
import "../sass/utils/hamburger.scss";

// Images/SVGs 
import { Logo } from "../assets/imgs";

// Auth
import Auth from "../utils/auth";

const Aside = () => {

  // console.log(Auth.getProfile().data.username);

  const [ userLoggedIn, setUserLoggedIn ] = useState(false);
  const [ username, setUsername ] = useState("");
  // Function to check username 
  function checkName(name) {
    if (name) {
      setUsername(name);
    } else return "";
  }

  // Function to check if the user is logged in 
  function checkUserLogin() {
    if (Auth.loggedIn()) {
      setUserLoggedIn(true);
      checkName(Auth.getProfile().data.username);
    } else setUserLoggedIn(false);
  }

  useEffect(() => {
    checkUserLogin();
  }, []);

  // const userName = Auth.getProfile()?.data.username; 

  const [isActive, setActive] = useState(true);
  const handleToggle = (e) => {

    // if the screen size is mobile, then apply the active class 
    if (window.innerWidth < 950) {
      setActive(!isActive);
    };
  };

  return (
    <aside className={`aside-comp ${isActive ? "" : "active"}`}>

      <div className="container">

        {/* Logo */}
        <div className="nav-logo">
          <Link to="/">
            <img
              src={Logo}
              alt="Statue Status"
              className="nav-logo-img"
            />
          </Link>
        </div>

        <div className="wide-screen-display">

          {/* User's Avatar and info Section */}
          <User name={ username } />

          {/* Navbar Section */}
          <Nav
            isActive={isActive}
            userLoggedIn={userLoggedIn}
            handleToggle={handleToggle} />
          
        </div>

        {/* Hamburger */}
        <div className={`hamburger ${isActive ? "" : "active"}`} onClick={handleToggle}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

      </div>

    </aside>
  );
};

export default Aside;