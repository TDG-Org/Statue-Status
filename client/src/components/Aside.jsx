import React from "react";

// Components 
import Nav from "./Nav";
import User from "./User";

// Styles
import "../sass/components/Aside";

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