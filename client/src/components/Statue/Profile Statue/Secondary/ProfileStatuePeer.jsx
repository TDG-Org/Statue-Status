import React from "react";

// Proptypes 
import PropTypes from "prop-types";

const ProfileStatuePeer = ({ peerImg, peerName, peerLink, onRemovePeer }) => {

  // Validate Component's Props 
  ProfileStatuePeer.propTypes = {
    peerImg: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    peerName: PropTypes.string.isRequired,
    peerLink: PropTypes.string.isRequired,
    onRemovePeer: PropTypes.func.isRequired,
  };
  
  return (
    <div className="statue-peer">

    {/* Image  */}
      <div className="statue-peer-img-wrapper">
        
        <img src={peerImg} alt={`${peerName}`} title={`${peerName}`} />
        
      </div>
      
    {/* Name  */}
      <div className="statue-peer-name-wrapper">
        
        <a
          target="blank"
          href={peerLink}
          className="statue-peer-name">
        {peerName}
        </a>
        
      </div>
      
      {/* The X button  */}
      <i
        className="bi bi-x-lg statue-peer-x"
        onClick={() => {
          onRemovePeer(peerName);
        }}
      > 
      </i>

    </div>
  );
};

export default ProfileStatuePeer;