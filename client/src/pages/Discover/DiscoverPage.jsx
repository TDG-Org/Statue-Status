import React, { useState, useEffect } from "react";

// Styles 
import "./DiscoverPage.scss";

// Images/SVGs 
import { Planet } from "../../assets/imgs";
import Search from "../../assets/svgs/search.svg";

const DiscoverPage = () => {

  const [discoverResults, setDiscoverResults] = useState(0);

  const numOfDiscoverResults = () => {
    return document.querySelectorAll(".discover-result").length;
  };

  function setNumOfDiscoverResults() {
    setDiscoverResults(numOfDiscoverResults());
  }

  useEffect(() => {
    setNumOfDiscoverResults();
    console.log(discoverResults);
  }, [document.querySelectorAll(".discover-result").length]);

  return (
    <div className="DiscoverPage page">

      <h1>Discover</h1>

      <hr />

      <h3>Exploration And Connection</h3>
      <div className="discover-content">
        {/* Discovering Search Section  */}
        <div className="discover-search-sect pallet">
          <div className="container">
            <h4>Explore</h4>

            {/* Search Tool  */}
            <div className="discover-search-tool">
               <input type="text" className="search-bar" placeholder="John Doe" />
              <button className="search-bar-btn"><i className="bi-search"></i></button>
            </div>

            {/* Search Results  */}
            <div className="discover-search-results-label">
              
            </div>
            <div className="discover-search-results">

              {/* result  */}
              <div className="discover-result">
                <div className="discover-result-img-wrapper">
                  <img src={Planet} alt="" />
                </div>
                <div className="discover-result-name">
                  Christian McIlvenny
                </div>
                <a href="" className="discover-result-statue-link">
                  Christian NathanielMcIlvenny
                </a>
                <div className="discover-result-reps">
                  Reps: <span className="discover-result-rep">1.2k</span>
                </div>
              </div>

              {/* result  */}
              <div className="discover-result">
                <div className="discover-result-img-wrapper">
                  <img src={Planet} alt="" />
                </div>
                <div className="discover-result-name">
                  Christian McIlvenny
                </div>
                <a href="" className="discover-result-statue-link">
                  Christian NathanielMcIlvenny
                </a>
                <div className="discover-result-reps">
                  Reps: <span className="discover-result-rep">1.2k</span>
                </div>
              </div>

              {/* result  */}
              <div className="discover-result">
                <div className="discover-result-img-wrapper">
                  <img src={Planet} alt="" />
                </div>
                <div className="discover-result-name">
                  Christian McIlvenny
                </div>
                <a href="" className="discover-result-statue-link">
                  Christian NathanielMcIlvenny
                </a>
                <div className="discover-result-reps">
                  Reps: <span className="discover-result-rep">1.2k</span>
                </div>
              </div>

            </div>

            <img src={Search} alt="search" className="search-svg" />
          </div>
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