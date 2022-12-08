import React from "react";

// Proptypes 
import PropTypes from "prop-types";

const ProfileStatueSocialLink = ({ link, platform, username }) => {
  
  ProfileStatueSocialLink.propTypes = {
    link: PropTypes.string.isRequired,
    platform: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  };

  return (
    <li>
      <a
        href=""><i className="bi bi-github"></i> Github/
        <span className="social-username">TDGNate</span>
      </a>
      <i className="bi bi-x-lg statue-social-x"></i>
      
    </li>
  );
};

export default ProfileStatueSocialLink;