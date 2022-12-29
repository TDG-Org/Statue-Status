import React from "react";

// Link 
import { Link } from "react-router-dom";

// Components 
import { UserInfo, Avatar, Middle } from "./";

// Images/SVGs 

const EditProfile = () => {

  return (
    <div className="profile-sect">
      <h3>Edit Profile</h3>
      <div className="pallet">
        <div className="container">
          <div className="user-edit">
            {/* Avatar  */}
            <Avatar />
            {/* Right Side  */}
            <Middle />
          </div>
          <div className="profile-sect-divider"></div>
          {/* User info  */}
          <UserInfo />
        </div>
      </div>
  </div>
  );
};

export default EditProfile;