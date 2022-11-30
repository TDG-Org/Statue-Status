import React from "react";

// Props 
import PropTypes from "prop-types";

const RichUser = ({rank, name, money, country, image}) => {

  // Validate Prop 
  RichUser.propTypes = {
    rank: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    money: PropTypes.number.isRequired,
    country: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  };

  // User Properties

  // - Rank 
  // - Image 
  // - Name 
  // - Country 
  // - Money 

  return (
    <div className="top-user">

      {/* User Left side  */}
      <div className="top-user-left">
        <span className="top-user-rank">#<span className="top-user-rank-value">{rank}</span></span>
        <img src={image} alt="top user" className="top-user-avatar" />
        <span className="top-user-name">{name}</span>
      </div>

      {/* User Right side  */}
      <div className="top-user-right">
        <span className="top-user-country">{country}</span>
        <span className="top-user-money"> $<span>{money}</span></span>
      </div>

  </div>
  );
};

export default RichUser;