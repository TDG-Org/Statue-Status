import React from "react";

// Proptypes 
import PropTypes from "prop-types";

// social links array
import { socialLinksArray } from "./";

const ProfileStatueSocialLink = ({ link, platform, username }) => {
  
  ProfileStatueSocialLink.propTypes = {
    link: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    platform: PropTypes.string.isRequired,
  };

  // const socialIconTag = socialLinksArray.map(socialLink => {
  //   if (platform.toLowerCase().trim() === socialLink.name.toLowerCase().trim()) {
  //     return socialLink.iconClass;
  //   }
  // });

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

  console.log(upperCaseFirstLetterOnPlatform()); 

  return (
    <li>
      {/* The social link  */}
      <a
        // Link of user 
        href={link}>

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