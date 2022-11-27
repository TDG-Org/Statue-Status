import React from "react";

// Components 
import Nav from "./Nav";
import User from "./User";

// Styles
import "../sass/components/Aside.scss";

// Images/SVGs 
// import TempUserPfp from "../assets/imgs";

const Aside = () => {
  return (
    <aside className="aside-comp">

      {/* User's Avatar and info Section  */}
      <User />

      {/* Navbar Section  */}
      <Nav />

    </aside>
  );
};

export default Aside;