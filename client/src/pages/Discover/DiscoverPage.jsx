import React from "react";

// Styles 
import "./DiscoverPage.scss";

const DiscoverPage = () => {
  return (
    <div className="DiscoverPage page">
      <div className="container">

        <h1>Discover</h1>

        <div className="discover-content">

          {/* Discovering Search Section  */}
          <div className="discover-search-sect pallet">
            <h3>Explore</h3>

            {/* Search Tool  */}
            <div className="discover-search-tool">
             <input type="text" className="search-bar" />
              <button className="search-bar-btn"><i className="bi-alarm"></i></button>
            </div>

            {/* Search Results  */}
            <div className="discover-search-results">
              <div className="discover-result">
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>

          </div>

          {/* User's Friends  */}
          <div className="discover-user-friends pallet">
            <h3>Friends</h3>

            {/* List of friends  */}
            <ul className="friends-list">
              <li>
                <div className="friend-name">john</div>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DiscoverPage;