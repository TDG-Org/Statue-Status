import React from "react";

// Styles
import "./SettingsPage.scss";

// Link 
import { Link } from "react-router-dom";

// Emailjs 
import emailjs from "@emailjs/browser";

// Sweet Alert 
import swal from "sweetalert";

const SettingsPage = () => {

  const support = () => {
    swal("Here's the title!", "...and here's the text!");
  };

  return (
    <div className="SettingsPage page">
      <h1>Settings</h1>
      
      <hr />

      {/* Account Section  */}
      <div className="account-sect settings-sect">

        <h3><i className="bi bi-person-fill"></i> My Account</h3>

        <div className="pallet">

          <div className="container">

          {/* Username  */}
          <div className="account-sect-username">
            <h4>Username</h4>
            
            <div className="edit-username-sect">
              <p className="display-username">TDGNate</p>
              <button className="edit-username-btn">
                <i className="bi bi-pen"></i>
              </button>
            </div>
              
            <Link
              to="/profile"
              className="edit-profile-link"
              >Edit Profile
            </Link>
          </div>
            
            <hr />

          {/* Password  */}
          <div className="account-sect-pass">
              <h4>Password</h4>
              
              <p className="settings-p">
                Make sure your password contains <span className="pass-fff">uppercase</span>, <span className="pass-fff">lowercase</span>, <span className="pass-fff">digits</span>, and <span className="pass-fff">special characters</span> to keep your account <span className="pass-fff">safe</span> and <span className="pass-fff">secure</span>.
              </p>
            
            <button className="change-password-btn">Change Password</button>
          </div>

          </div>
        </div>

      </div>

      {/* General Settings  */}
      <div className="general-sect settings-sect">

        <h3><i className="bi bi-tools"></i> General</h3>

        <div className="pallet">

          <div className="container">

          {/* Appearance  */}
          <div className="general-sect-appear">
              <h4>Appearance</h4>
              
              <div className="appearance-btns">

              </div>
            </div>

            <hr />

            {/* Bugs Section  */}
            <div className="report-bug-sect">
              <h4>Report Bug</h4>

              <p className="settings-p">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores natus illo dignissimos, debitis nesciunt vitae.</p>

              <div className="report-bug-btns">
              <button className="report-bug-btn">Report Bug</button>
              <button className="support-btn" onClick={support}>Support</button>
              </div>

            </div>

          {/* logout  */}
          <div className="general-sect-logout">
            
            <hr />

            <a href="#" className="settings-loggout-btn">Log Out <i className="bi bi-box-arrow-in-right"></i></a>
          </div>

          </div>
        </div>

      </div>

    </div>
  );
};

export default SettingsPage;