import React, { useState, useEffect } from "react";

// Styles 
import "./DiscoverPage.scss";

// Images/SVGs 
import { Planet, Male, Pancake, Bravery, Brilliance } from "../../assets/imgs";
import Search from "../../assets/svgs/search.svg";

// Components 
import { Explore, Friends } from "../../components";

const DiscoverPage = () => {

  return (
    <div className="DiscoverPage page">

      <h1>Discover</h1>

      <hr />

      <h3>Exploration And Connection</h3>
      <div className="discover-content">
        {/* Discovering Search Section  */}

        <Explore />

        {/* User's Friends  */}

        <Friends />

      </div>
    </div>
  );
};

export default DiscoverPage;