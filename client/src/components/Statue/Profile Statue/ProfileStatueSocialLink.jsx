import React, { useState, useRef } from "react";

// Proptypes 
import PropTypes from "prop-types";

// social links array
import { socialLinksArray } from "./";

const ProfileStatueSocialLink = ({ link, platform, username, onRemoveSocialLink }) => {
  
  // Validate Component's Props 
  ProfileStatueSocialLink.propTypes = {
    link: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    platform: PropTypes.string.isRequired,
    onRemoveSocialLink: PropTypes.func.isRequired,
  };

  const oneSocialLinkRef = useRef();

  // Returns an Icon that matches the current passed in platform 
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
  
  // Function to uppercase the first letter of the passed in platform 
  function upperCaseFirstLetterOnPlatform() {
    let Platform = platform.charAt(0).toUpperCase() + platform.slice(1);
    return Platform;
  }

  // this checks the social links and filters the email to return a specific value 
  function checkSocialLink() {
    if (platform === "email") {
      let email = `mailto:${link}`;
      return email;
    } else return link;
  }

  return (
    <li
      ref={oneSocialLinkRef}
    >
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
      <i
        className="bi bi-x-lg statue-social-x"
        onClick={() => {
          onRemoveSocialLink(username);
        }}
      >

      </i>
      
    </li>
  );
};

export default ProfileStatueSocialLink;