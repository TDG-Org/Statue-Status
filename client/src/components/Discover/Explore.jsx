import React, { useState, useEffect } from "react";

// Images/SVGs 
import { Planet, Pancake, Brilliance } from "../../assets/imgs";
import Search from "../../assets/svgs/search.svg";

// Components 
import { Result } from "./";

// Demo Data 
import { exploreResults } from "../../DemoData";

const Explore = () => {

  const [numDiscoverResults, setNumDiscoverResults] = useState(0);

  const numOfDiscoverResults = () => {
    return document.querySelectorAll(".discover-result").length;
  };

  // Function to update the state variable 
  function setNumOfDiscoverResults() {
    setNumDiscoverResults(numOfDiscoverResults());
  }

  // Function that checks Results to remove SVG 
  function checkResultsAndRemoveSVG() {
    if (numDiscoverResults > 0) {
      document.querySelector(".search-svg").classList.add("hide");
    } else document.querySelector(".search-svg").classList.remove("hide");
  }

  // UseEffects 
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
        <p></p>
        <p>Statue</p>
        <p>Reputation</p>
        </div>
        
      {/* All Results  */}
      <div className="discover-search-results">

        {/* result  */}

          <Result />
          <Result />
          <Result />
          <Result />
          <Result />
          <Result />
          <Result />
          <Result />

        {/* result  */}
          <div className="discover-result">

            {/* Left Result  */}
            <div className="discover-result-left">
              {/* Image  */}
              <div className="discover-result-img-wrapper">
               <img src={Brilliance} alt="" />
              </div>
              {/* Name  */}
              <div className="discover-result-name">
               Bob Ross
              </div>
            </div>

            <hr />

            {/* Right Result  */}
            <div className="discover-result-right">
              <a href="" className="discover-result-statue-link">
                Bobby
              </a>
              <div className="discover-result-reps">
                Reps:
                <br />
                <span className="discover-result-rep">1.25k</span>
              </div>
            </div>

        </div>

        {/* result  */}
          <div className="discover-result">

            {/* Left Result  */}
            <div className="discover-result-left">
              {/* Image  */}
              <div className="discover-result-img-wrapper">
               <img src={Pancake} alt="" />
              </div>
              {/* Name  */}
              <div className="discover-result-name">
                Michael
              </div>
            </div>

            <hr />

            {/* Right Result  */}
            <div className="discover-result-right">
              <a href="" className="discover-result-statue-link">
               Michael Scott
              </a>
              <div className="discover-result-reps">
                Reps:
                <br />
                <span className="discover-result-rep">1.15k</span>
              </div>
            </div>

        </div>

      </div>

      <img src={Search} alt="search" className="search-svg" />
    </div>
  </div>
  );
};

export default Explore;