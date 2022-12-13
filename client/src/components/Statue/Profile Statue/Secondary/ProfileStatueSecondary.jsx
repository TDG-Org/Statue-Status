import React, { useState, useRef, useEffect } from "react";

// Components 
import { ProfileStatueSocial, ProfileStatueConnections } from "./";

const ProfileStatueSecondary = () => {

  return (
    <div className="secondary-sect">
      {/* Socials  */}
      <ProfileStatueSocial />
      
      {/* Connections  */}

      <div className="connections"></div>
  </div>
  );
};

export default ProfileStatueSecondary;