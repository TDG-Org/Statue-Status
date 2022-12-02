import React from "react";

// Styles
import "./SettingsPage.scss";

const SettingsPage = () => {
  return (
    <div className="SettingsPage page">
      <h1>Settings</h1>
      
      <hr />

      {/* Profile Section  */}
      <div className="profile-sect">
        <h3>Edit Profile</h3>

        <div className="pallet">

          {/* Avatar  */}
          <h4>Avatar</h4>
          <div className="profile-sect-avatar">

          </div>

          {/* Username  */}
          <h4>Username</h4>
          <div className="profile-sect-name">

          </div>

          {/* Bio  */}
          <h4>Bio</h4>
          <div className="profile-sect-bio">

          </div>

        </div>

      </div>

      {/* Account Section  */}
      <div className="account-sect">
        <h3>My Account</h3>

        <div className="pallet">

          {/* Appearance  */}
          <h4>Appearance</h4>

          {/* Password  */}
          <h4>Password</h4>

        </div>

      </div>

      {/* General Settings  */}
      <div className="settings-sect">
        <h3>General</h3>

        <div className="pallet">

          <h4>Test</h4>
          
          <h4>Test</h4>

        </div>

      </div>

    </div>
  );
};

export default SettingsPage;