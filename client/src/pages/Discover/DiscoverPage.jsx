import React from "react";

// Styles 
import "./DiscoverPage.scss";

// Images/SVGs 

// Components 
import {
  Explore,
  Friends
} from "../../components";

const DiscoverPage = () => {

  return (
    <div className="DiscoverPage page">
      <h1>Discover</h1>

      <hr />

      <div className="container">
      
        <h3>Exploration And Connection</h3>
        <div className="discover-content">

          {/* Discovering Search Section  */}
          <Explore />

          {/* User's Friends  */}
          <Friends />

        </div>

        <hr />
        
      </div>
      
    </div>
  );
};

export default DiscoverPage;