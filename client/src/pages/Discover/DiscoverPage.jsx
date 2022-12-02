import React from "react";

// Styles 
import "./DiscoverPage.scss";

// Images/SVGs 
import { Planet } from "../../assets/imgs";
import Search from "../../assets/svgs/search.svg";

const DiscoverPage = () => {
  return (
    <div className="DiscoverPage page">

      <h1>Discover</h1>

      <hr />

      <div className="discover-content">

        {/* Discovering Search Section  */}
        <div className="discover-search-sect pallet">
          <h4>Explore</h4>

          {/* Search Tool  */}
          <div className="discover-search-tool">
          <input type="text" className="search-bar" placeholder="John Doe" />
            <button className="search-bar-btn"><i className="bi-search"></i></button>
          </div>

          {/* Search Results  */}
          <div className="discover-search-results">
            <div className="discover-result">
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>

          <img src={Search} alt="search" className="search-svg" />

        </div>

        {/* User's Friends  */}
        <div className="discover-user-friends pallet">
          <h4>Friends</h4>

          {/* List of friends  */}
          <ul className="friends-list">
            <li className="friend">
              <div className="friend-left">
                <img src={Planet} alt="" className="friend-avatar" />
                <p className="friend-username">Luke</p>
              </div>
              <button className="view-friend"><i className="bi bi-three-dots-vertical"></i></button>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default DiscoverPage;