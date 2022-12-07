import React from "react";

// Components 
import { ProfileStatue, EditProfile } from "../../components/";

// Styles
import "./ProfilePage.scss";

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