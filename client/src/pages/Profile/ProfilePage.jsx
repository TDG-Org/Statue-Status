import React from "react";

// Styles
import "./ProfilePage.scss";

// Components 
import { ProfileStatue, EditProfile } from "../../components/";

const ProfilePage = () => {
  return (
    <div className="ProfilePage page">
      <h1>My Profile</h1>

      <hr />

      {/* Profile Section  */}
      <EditProfile />

      {/* Profile Statue Section  */}
      <ProfileStatue />

    </div>
  );
};

export default ProfilePage;