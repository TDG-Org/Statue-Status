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
    let matchFound = false;

    for (let i = 0; i < socialLinksArray.length; i++) {
      if (platform.toLowerCase() === socialLinksArray[i].name.toLowerCase()) {
        matchFound = true;
        return socialLinksArray[i].iconClass;
      }
    }
  
    if (!matchFound) {
      return "bi-link-45deg";
    }
  }
  

  function upperCaseFirstLetterOnPlatform() {
    let Platform = platform.charAt(0).toUpperCase() + platform.slice(1);
    return Platform;
  }

  function checkSocialLink() {
    if (platform === "email") {
      let email = `mailto:${link}`;
      return email;
    } else return link;
  }

  return (
    <li>
      {/* The social link  */}
      <a
        href={checkSocialLink()}
        target="blank"
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