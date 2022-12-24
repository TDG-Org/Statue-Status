import React, { useState, useEffect } from "react";

// Images/SVGs 
import { Planet, Male, Pancake, Bravery, Brilliance } from "../../assets/imgs";
import Search from "../../assets/svgs/search.svg";

const Explore = () => {

  const [numDiscoverResults, setNumDiscoverResults] = useState(0);

  const numOfDiscoverResults = () => {
    return document.querySelectorAll(".discover-result").length;
  };
  function setNumOfDiscoverResults() {
    setNumDiscoverResults(numOfDiscoverResults());
  }

  function checkResultsAndRemoveSVG() {
    if (numDiscoverResults > 0) {
      document.querySelector(".search-svg").classList.add("hide");
    } else document.querySelector(".search-svg").classList.remove("hide");
  }

  useEffect(() => {
    setNumOfDiscoverResults();
    console.log(numDiscoverResults);
  }, [document.querySelectorAll(".discover-result").length]);

  useEffect(() => {
    checkResultsAndRemoveSVG();
  });
  return (
    <div className="discover-search-sect pallet">
     <div className="container">
      <h4>Explore</h4>

      {/* Search Tool  */}
      <div className="discover-search-tool">
        <input
          type="text"
          className="search-bar"
          placeholder="John Doe"
        />
        <button
          className="search-bar-btn"
        >
          <i className="bi-search"></i>
        </button>
      </div>

      <hr />
      {/* Search Results  */}
      <div className="discover-search-results-label">
        <p>Avatar</p>
        <p>Username</p>
        <p></p>
        <p>Statue</p>
        <p></p>
        <p>Reputation</p>
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
            <img src={Brilliance} alt="" />
          </div>
          <div className="discover-result-name">
            Bob Ross
          </div>
          <a href="" className="discover-result-statue-link">
            Bobby
          </a>
          <div className="discover-result-reps">
            Reps: <span className="discover-result-rep">1.2k</span>
          </div>
        </div>

        {/* result  */}
        <div className="discover-result">
          <div className="discover-result-img-wrapper">
            <img src={Pancake} alt="" />
          </div>
          <div className="discover-result-name">
            Michael
          </div>
          <a href="" className="discover-result-statue-link">
           Michael Scott
          </a>
          <div className="discover-result-reps">
            Reps: <span className="discover-result-rep">1.2k</span>
          </div>
        </div>

      </div>

      <img src={Search} alt="search" className="search-svg" />
    </div>
  </div>
  );
};

export default Explore;