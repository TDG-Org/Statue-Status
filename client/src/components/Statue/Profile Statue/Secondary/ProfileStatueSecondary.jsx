import React, { useState, useRef, useEffect } from "react";

// Components 
import { ProfileStatueSocial, ProfileStatueConnections } from "./";

// Styles
import "../../../../sass/components/Profile Statue/ConnectionsComp.scss";

const ProfileStatueSecondary = () => {

  return (
    <div className="secondary-sect">
      {/* Socials  */}
      <ProfileStatueSocial />
      
      {/* Connections  */}
      <ProfileStatueConnections />
  </div>
  );
};

export default ProfileStatueSecondary;