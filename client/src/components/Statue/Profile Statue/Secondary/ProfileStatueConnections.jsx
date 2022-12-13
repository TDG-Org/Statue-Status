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
          <img src={Pancake} alt="" />
        </div>
        {/* Name  */}
        <div className="statue-peer-name-wrapper">
          <a href="" className="statue-peer-name">
            Frank McIlvenny
          </a>
        </div>
          {/* The X button  */}
          <i className="bi bi-x-lg statue-peer-x"></i>
        </div>

        {/* peer  */}
       <div className="statue-peer">
        {/* Image  */}
        <div className="statue-peer-img-wrapper">
          <img src={Bravery} alt="" />
        </div>
        {/* Name  */}
        <div className="statue-peer-name-wrapper">
          <a href="" className="statue-peer-name">
            Rose McIlvenny
          </a>
        </div>
          {/* The X button  */}
          <i className="bi bi-x-lg statue-peer-x"></i>
      </div>
             
      {/* peer  */}
      <div className="statue-peer">
        {/* Image  */}
        <div className="statue-peer-img-wrapper">
          <img src={NatePfp} alt="" />
        </div>
        {/* Name  */}
        <div className="statue-peer-name-wrapper">
          <a href="" className="statue-peer-name">
            Christian Nathaniel McIlvenny
          </a>
        </div>
          {/* The X button  */}
          <i className="bi bi-x-lg statue-peer-x"></i>
        </div>
        
      </div>

      {/* The adding connection section  */}
      <div className="statue-add-connection-section">
        {/* peer's picture  */}
        <div className="peer-pic-sect">
          <p>Person&apos;s Image</p>
          <div className="peer-pic-sect-content">
            <img src="" alt="" className="peer-pic-display" />
            <button
              className="peer-pic-add-btn"
            >
              Choose Image
            </button>
          </div>
        </div>
        {/* peer's name  */}
        <div className="peer-name-sect">
          <p>Person&apos;s Name</p>
          <input
            required
            type="text"
            className="peer-name-input"
          />
        </div>
        {/* peer's link  */}
        <div className="peer-link-sect">
          <p>Person&apos;s social link (optional)</p>
          <input
            type="text"
            className="peer-link-input"
          />
        </div>
      </div>

      {/* The add connections button  */}
      <div className="statue-add-peer-button-wrapper">
        <button className="statue-add-peer-btn">
          Add Connections
        </button>
      </div>

    </div>
  );
};

export default ProfileStatueConnections;