import React, { useState, useEffect } from "react";

// Styles
import "./StatuePage.scss";

// Components 
import {
  Client,
  ClientDetails,
} from "../../components";

const StatuePage = () => {
  return (
    <div className="StatuePage page page-full">
      <h1>Statue</h1>

      <div className="container">
        <hr />

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quam labore placeat atque qui quibusdam? Praesentium dolorem, eum, omnis iste pariatur soluta iure ex, voluptate numquam possimus necessitatibus commodi placeat.</p>

        <hr />
      </div>

    </div>
  );
};

export default StatuePage;