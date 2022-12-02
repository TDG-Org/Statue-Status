import React from "react";

// Styles
import "./ProfilePage.scss";

const ProfilePage = () => {
  return (
    <div className="ProfilePage page">

      <h1>My Profile</h1>
      
      <hr />

        {/* Profile Section  */}
        <div className="profile-sect">
        <h3>Edit Profile</h3>

        <div className="pallet">

          {/* Avatar  */}
          <div className="profile-sect-avatar">
            <h4>Avatar</h4>
          </div>

          {/* Username  */}
          <div className="profile-sect-name">
            <h4>Username</h4>
          </div>

          {/* Bio  */}
          <div className="profile-sect-bio">
            <h4>Bio</h4>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ProfilePage;