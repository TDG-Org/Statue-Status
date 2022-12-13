import React, { useState, useRef } from "react";

// Proptypes 
import PropTypes from "prop-types";

import { Pancake, Brilliance, Bravery, NatePfp, Male } from "../../../../assets/imgs";

const ProfileStatueConnections = () => {

  const [connectionsImage, setConnectionsImage] = useState(Male);
  const inputConnectionsAvatarRef = useRef();
  const connectionsImgRef = useRef();

  const handleConnectionsImageChange = (event) => {
    setConnectionsImage(event.target.files[0]);
    connectionsImgRef.current.src = URL.createObjectURL(event.target.files[0]);
  };

  const handleConnectionsAvatarInputClick = () => {
    inputConnectionsAvatarRef.current.click();
  };

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
          <p>Person&apos;s Image:</p>
          <div className="peer-pic-sect-content">
            <img
              src={Male}
              ref={connectionsImgRef}
              className="peer-pic-display"
              alt="choosen connection image"
            />
            <input type="file" ref={inputConnectionsAvatarRef} onChange={handleConnectionsImageChange} hidden />
            <button
              className="peer-pic-add-btn"
              onClick={() => handleConnectionsAvatarInputClick()}
            >
              Choose Image
            </button>
          </div>
        </div>
        {/* peer's name  */}
        <div className="peer-name-sect">
          <p>Person&apos;s Name:</p>
          <input
            required
            type="text"
            placeholder="John Doe"
            className="peer-name-input"
          />
        </div>
        {/* peer's link  */}
        <div className="peer-link-sect">
          <p>Person&apos;s Social Link (optional):</p>
          <input
            type="text"
            placeholder="https://..."
            className="peer-link-input"
          />
        </div>

        {/* The cancel and add buttons  */}
        <div className="peer-btns">
          {/* add  */}
          <button
            className="add-peer-btn">
            Add
          </button>
          {/* cancel  */}
          <button
            className="cancel-peer-btn">
            Cancel
          </button>
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