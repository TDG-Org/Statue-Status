import React from "react";

// Components 
import {
  ProfileStatue,
  EditProfile
} from "../../components/";

// Styles
import "./ProfilePage.scss";

const ProfilePage = () => {
  return (
    <div className="ProfilePage page">
      <h1>My Profile</h1>

      <div className="container">
        <hr />

        {/* Profile Section  */}
        <EditProfile />

        {/* Profile Statue Section  */}
        <ProfileStatue />
          
      <hr />
      </div>

    </div>
  );
};

export default ProfilePage;