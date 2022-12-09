import React from "react";

// Proptypes 
import PropTypes from "prop-types";

// social links array
import { socialLinksArray } from "./";

const ProfileStatueSocialLink = ({ link, platform, username }) => {
  
  // Validate Component's Props 
  ProfileStatueSocialLink.propTypes = {
    link: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    platform: PropTypes.string.isRequired,
  };

  function socialIconTag() {
    for (let i = 0; i < socialLinksArray.length; i++) {
      if (platform.toLowerCase() === socialLinksArray[i].name.toLowerCase()) {
        return socialLinksArray[i].iconClass;
      }
    }
  }

  function upperCaseFirstLetterOnPlatform() {
    let Platform = platform.charAt(0).toUpperCase() + platform.slice(1);
    return Platform;
  }

  return (
    <li>
      {/* The social link  */}
      <a
        href={link}
      >

        {/* platform icon  */}
        <i className={`b ${socialIconTag()}`}></i>

        {/* The Platform, uppercased first letter  */}
        {upperCaseFirstLetterOnPlatform()}/

        {/* the user name  */}
        <span className="social-username">
          {username}
        </span>
      </a>

      {/* The Delete social link button  */}
      <i className="bi bi-x-lg statue-social-x"></i>
      
    </li>
  );
};

export default ProfileStatueSocialLink;