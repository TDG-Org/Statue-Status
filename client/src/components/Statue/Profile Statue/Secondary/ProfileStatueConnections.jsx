import React, { useState, useRef } from "react";

// Proptypes 
import PropTypes from "prop-types";

const ProfileStatueConnections = () => {
  return (
    <div className="secondary-sect-connections">
      <h4>Connections</h4>

      <div className="statue-peer">
        {/* Image  */}
        <div className="statue-peer-img-wrapper">
          <img src="" alt="" />
        </div>
        {/* Name  */}
        <div className="statue-peer-name-wrapper">
          <p className="statue-peer-name">
            Luke McIlvenny
          </p>
        </div>
        {/* The X button  */}
      </div>


    </div>
  );
};

export default ProfileStatueConnections;