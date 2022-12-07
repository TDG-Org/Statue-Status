import React, { useState } from "react";

// Components 
import Nav from "./Nav";
import User from "./User";

// Styles
import "../sass/components/Aside.scss";
import "../sass/utils/hamburger.scss";

// Images/SVGs 

const Aside = () => {

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
        <div className="nav-logo"><a href="#">SS</a></div>

        {/* User's Avatar and info Section  */}
        <User />

        {/* Navbar Section  */}
        <Nav isActive={isActive} handleToggle={handleToggle}  />

          {/* Hamburger  */}
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