import React from "react";

// Proptypes 
import PropTypes from "prop-types";

const Friend = () => {
  return (
    <li className="friend">
      
      {/* Left Side  */}
      <div className="friend-left">
        
        {/* Image  */}
        <img src={Planet} alt="" className="friend-avatar" />

        {/* Name  */}
        <p className="friend-username">Luke</p>
      
        {/* Is Fav?  */}
        <i className="bi bi-bookmark-fill" title="bookmark"></i>
      </div>
      
      {/* More Info Button  */}
      <button
        className="view-friend"
      >
        <i className="bi bi-three-dots-vertical"></i>
      </button>
      
  </li>
  );
};

export default Friend;