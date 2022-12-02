import React from "react";

// Styles
import "./SettingsPage.scss";

const SettingsPage = () => {
  return (
    <div className="SettingsPage page">
      <h1>Settings</h1>
      
      <hr />

      {/* Account Section  */}
      <div className="account-sect">
        <h3>My Account</h3>

        <div className="pallet">

          <div className="container">

          {/* Username  */}
          <div className="account-sect-username">
            <h4>Username <i className="bi bi-pen"></i></h4>
            
              <div className="edit-username-sect">
                <p className="display-username">TDGNate</p>
                <button className="edit-username-btn"></button>
            </div>
          </div>

          {/* Password  */}
          <div className="account-sect-pass">
            <h4>Password <i className="bi bi-person-fill-lock"></i></h4>
            
            <button className="change-password-btn">Change Password</button>
          </div>

          </div>
        </div>

      </div>

      {/* General Settings  */}
      <div className="settings-sect">
        <h3>General</h3>

        <div className="pallet">

          <div className="container">

          {/* Appearance  */}
          <div className="settings-sect-appear">
            <h4>Appearance <i className="bi bi-cloud-moon"></i></h4>
          </div>

          {/* logout  */}
          <div className="settings-sect-logout">
            
            <hr />

            <a href="#">Log Out <i className="bi bi-box-arrow-in-right"></i></a>
          </div>

          </div>
        </div>

      </div>

    </div>
  );
};

export default SettingsPage;