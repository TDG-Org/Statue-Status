import React from "react";

// Styles 
import "./DiscoverPage.scss";

// Images/SVGs 
import { Planet, Male, Pancake, Bravery, Brilliance } from "../../assets/imgs";

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