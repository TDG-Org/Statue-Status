import React from "react";

// Props 
import PropTypes from "prop-types";

// Images/SVGs 
import { Brilliance } from "../../assets/imgs";

const RichUser = ({rank, name, money, image, country}) => {

  function numberFormatter(num) {
    return String(num).replace(/(.)(?=(\d{3})+$)/g,"$1,");
  }

  // Validate Prop 
  RichUser.propTypes = {
    rank: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    money: PropTypes.number.isRequired,
    image: PropTypes.string,
    country: PropTypes.string.isRequired,
  };

  // Function to check the rank and return the right color 
  const checkRank = (rank) => {
    if (rank == 1) {
      return "top-user-rank-1";
    } else if (rank == 2) {
      return "top-user-rank-2";
    } else if (rank == 3) {
      return "top-user-rank-3";
    } else {
      return;
    }
  };

  return (
    <div className="top-user">

      {/* User Left side  */}
      <div className="top-user-left">
        <span className={`top-user-rank ${checkRank(rank)}`}>#<span className="top-user-rank-value">{rank}</span></span>
        <div className="top-user-avatar-wrapper">
          <img src={image} alt="" className="top-user-avatar" />
        </div>
        <span className="top-user-name">{name}</span>
      </div>

      {/* User Right side  */}
      <div className="top-user-right">
        <span className="top-user-country">{country}</span>
        <span className="top-user-money"> $<span>{numberFormatter(money)}</span></span>
      </div>

  </div>
  );
};

export default RichUser;