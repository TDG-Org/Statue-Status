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
    image: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
  };

  return (
    <div className="top-user">

      {/* User Left side  */}
      <div className="top-user-left">
        <span className="top-user-rank">#<span className="top-user-rank-value">{rank}</span></span>
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