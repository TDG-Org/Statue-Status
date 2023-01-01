import React from "react";

// Proptypes 
import PropTypes from "prop-types";

// Images/SVGs 
import { NatePfp } from "../../../../assets/imgs";

const Picture = () => {
  return (
    <div className="statue-img-wrapper">

      <img
        src={NatePfp}
        alt="Statue Image"
        className="statue-img"
      />

    </div>
  );
};

export default Picture;