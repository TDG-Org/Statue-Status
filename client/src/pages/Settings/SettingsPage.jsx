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

      {/* Account Section  */}
      <div className="account-sect">
        <h3>My Account</h3>

        <div className="pallet">

          {/* Password  */}
          <div className="account-sect-pass">
           <h4>Password</h4>
          </div>

        </div>

      </div>

      {/* General Settings  */}
      <div className="settings-sect">
        <h3>General</h3>

        <div className="pallet">

          {/* Appearance  */}
          <div className="settings-sect-appear">
            <h4>Appearance</h4>
          </div>

          {/* logout  */}
          <div className="settings-sect-logout">
            
            <hr />

            <a href="#">logout</a>
          </div>

        </div>

      </div>

    </div>
  );
};

export default SettingsPage;