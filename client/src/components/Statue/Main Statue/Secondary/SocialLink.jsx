import React from "react";

// Proptypes 
import PropTypes from "prop-types";

const SocialLink = () => {
  return (
    <div className="statue-link">

      {/* Anchor  */}
      <a
        href="#"
        target="_blank"
        className="statue-link-anchor"
      >

        {/* Icon Platform */}
        <i className="bi bi-facebook"></i>

        {/* Platform */}
        Facebook/
      
        {/* Username */}
        <span className="statue-social-username">
          TDGNate
        </span>

      </a>

   </div>
  );
};

export default SocialLink;