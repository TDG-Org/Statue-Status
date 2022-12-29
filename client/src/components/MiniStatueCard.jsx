import React from "react";

// Proptypes 
import PropTypes from "prop-types";

const MiniStatueCard = ({ data }) => {

  // Validate Component's Props 
  MiniStatueCard.propTypes = {
    data: PropTypes.object,
  };
  
  return (
    <div className="mini-statue-card">

      {/* Left Side | Content */}
      <div className="mini-statue-card-content">
        
      {/* Title  */}
      <header className="mini-statue-title">
        {/* Name  */}
        <h2>Elon Musk</h2>
          <i className="bi bi-dash"></i>
        {/* Country  */}
        <span>United States</span>
      </header>
      
      {/* Intro  */}
      <div className="mini-statue-intro">
          <p>
            Elon Musk cofounded six companies including electric car maker Tesla, rocket producer SpaceX and tunneling startup Boring Company.
          </p>
          <p>
            He owns about 25% of Tesla between stock and options, but has pledged more than half his stock as collateral for loans.
          </p>
          <p>
            SpaceX, founded in 2002, is worth $127 billion after a funding round in May 2022; it quadrupled its value in three years.
          </p>
          <p></p>
          <p></p>
      </div>

      <hr />
        
      <div className="mini-statue-about">
        <h4>Details</h4>
        <p>
          Musk, who says he&apos;s worried about population collapse, has nine children with three women including triplets and two sets of twins.
        </p>
        <p>
          As a kid in South Africa, Musk taught himself to code; he sold his first game, Blastar, for about $500.
        </p>
        <p></p>
        <p></p>
        <p></p>
        {/* See More  */}
          <a
            className="mini-statue-about-more-btn"
            href="#"
          >View More
          </a>
      </div>  

    </div>

    {/* Right Side | Showcase */}
      <div className="mini-statue-card-showcase">
      {/* Image  */}
      <img className="mini-statue-img" src="https://static.foxbusiness.com/foxbusiness.com/content/uploads/2022/04/thumbnail_elon-musk-twitter-.jpg" alt="" />
      {/* Data  */}
      <ul className="mini-statue-data">
        <li className="mini-statue-money">
         Net Worth: <span>$139867.256</span> 
          </li>
          <li>
            Richest Rank: <span className="mini-statue-rich-rank">1</span>
          </li>
        <li>
          Tesla, SpaceX
        </li>
        <li>
          Austin, TX
        </li>
      </ul>

    </div>

  </div>
  );
};

export default MiniStatueCard;