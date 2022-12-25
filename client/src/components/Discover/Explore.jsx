import React, { useState, useEffect } from "react";

// Images/SVGs 
import Search from "../../assets/svgs/search.svg";

// Components 
import { Result } from "./";

// Demo Data 
import { exploreResults } from "../../DemoData";

const Explore = () => {

  // Slice / Show More button

  const [displayedExploreResultsCount, setDisplayedExploreResultsCount] = useState(25);

  // function to load more ExploreResults Links
  function loadMoreExploreResults() {
    setDisplayedExploreResultsCount(displayedExploreResultsCount + 25);
}

  // Checks if the limit has been reached to hide show more links button 
  function toggleShowMoreExploreResultsBtn() {
    let totalNumberOfExploreResults = exploreResults.length;
    if (totalNumberOfExploreResults <= displayedExploreResultsCount) {
      setHideMoreExploreResultsBtn(true);
    } else {
      setHideMoreExploreResultsBtn(false);
    }
  }

  // The Social Links that are going to show 
  const exploreResultsSliced = exploreResults.slice(0, displayedExploreResultsCount);

  // Check Number for SVG 

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
        
      {/* All Results List  */}
      <div className="discover-search-results">

        {/* results */}
        {exploreResultsSliced.map((item, index) => {
          return (
            <Result
              key={index}
              avatar={item.resultAvatar}
              name={item.resultName}
              statue={item.resultStatue}
              reps={item.resultsReps}
            />
         );
        })}

      </div>

      <img src={Search} alt="search" className="search-svg" />
    </div>
  </div>
  );
};

export default Explore;