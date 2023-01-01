import React from "react";

// Proptypes 
import PropTypes from "prop-types";

// Images/SVGs 
import { NatePfp } from "../../../../assets/imgs";

const Picture = () => {
  return (
    <div className="statue-img-wrapper">

      <img
        className="statue-img"
        src={NatePfp}
        alt="Statue Image"
      />

    </div>
  );
};

export default Picture;