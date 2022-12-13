import React, { useState, useRef } from "react";

// Proptypes 
import PropTypes from "prop-types";

import { Pancake, Brilliance, Bravery, NatePfp } from "../../../../assets/imgs";

const ProfileStatueConnections = () => {
  return (
    <div className="secondary-sect-connections">
      <h4>Connections</h4>

      <div className="statue-peer-wrapper">
        
      {/* peer  */}
      <div className="statue-peer">
        {/* Image  */}
        <div className="statue-peer-img-wrapper">
          <img src={Brilliance} alt="" />
        </div>
        {/* Name  */}
        <div className="statue-peer-name-wrapper">
          <a href="" className="statue-peer-name">
            Luke McIlvenny
          </a>
        </div>
          {/* The X button  */}
          <i className="bi bi-x-lg statue-peer-x"></i>
        </div>
        
                
      {/* peer  */}
      <div className="statue-peer">
        {/* Image  */}
        <div className="statue-peer-img-wrapper">
          <img src={Brilliance} alt="" />
        </div>
        {/* Name  */}
        <div className="statue-peer-name-wrapper">
          <a href="" className="statue-peer-name">
            Luke McIlvenny
          </a>
        </div>
          {/* The X button  */}
          <i className="bi bi-x-lg statue-peer-x"></i>
        </div>
        
                
      {/* peer  */}
      <div className="statue-peer">
        {/* Image  */}
        <div className="statue-peer-img-wrapper">
          <img src={Brilliance} alt="" />
        </div>
        {/* Name  */}
        <div className="statue-peer-name-wrapper">
          <a href="" className="statue-peer-name">
            Luke McIlvenny
          </a>
        </div>
          {/* The X button  */}
          <i className="bi bi-x-lg statue-peer-x"></i>
        </div>
        
                
      {/* peer  */}
      <div className="statue-peer">
        {/* Image  */}
        <div className="statue-peer-img-wrapper">
          <img src={Brilliance} alt="" />
        </div>
        {/* Name  */}
        <div className="statue-peer-name-wrapper">
          <a href="" className="statue-peer-name">
            Luke McIlvenny
          </a>
        </div>
          {/* The X button  */}
          <i className="bi bi-x-lg statue-peer-x"></i>
        </div>
        
      </div>

    </div>
  );
};

export default ProfileStatueConnections;