import React from "react";

// Components 
import Nav from "./Nav";
import User from "./User";

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