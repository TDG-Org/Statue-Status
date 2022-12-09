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
      console.log(platform.toLowerCase(), socialLinksArray[i].name.toLowerCase());
      if (platform.toLowerCase() === socialLinksArray[i].name.toLowerCase()) {
        return socialLinksArray[i].iconClass;
      }
    }
  }

  // console.log(socialIconTag()); 

  return (
    <li>

      {/* The social link  */}
      <a
        href={link}>

        <i className={`b ${socialIconTag()}`}></i>
        {platform}/
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