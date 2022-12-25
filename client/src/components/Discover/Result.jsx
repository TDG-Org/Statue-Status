import React from "react";


// Proptypes 
import PropTypes from "prop-types";

// Images/SVGs 
import { Planet } from "../../assets/imgs";

const Result = ({ avatar, name, statue, reps }) => {

  Result.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    statue: PropTypes.string,
    reps: PropTypes.number,
  };

  return (
    <div className="discover-result">

    {/* Left Result  */}
    <div className="discover-result-left">
      {/* Image  */}
      <div className="discover-result-img-wrapper">
       <img src={Planet} alt="" />
      </div>
      {/* Name  */}
      <div className="discover-result-name">
        Christian McIlvenny
      </div>
    </div>

    <hr />

    {/* Right Result  */}
    <div className="discover-result-right">
      <a href="" className="discover-result-statue-link">
        Christian NathanielMcIlvenny
      </a>
      <div className="discover-result-reps">
        Reps:
        <br />
        <span className="discover-result-rep">1.2k</span>
      </div>
    </div>

  </div>
  );
};

export default Result;