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

  // Support Function 
  const support = () => {
    swal("Here's the title!", "...and here's the text!");
  };

  // Changing username function 
  function updateUsername() {
    let newUsername = {
      name: "",
      password: ""
    };

    swal({
      title: ["New Username"],
      text: "Type in your new username below!",
      content: "input",
      buttons: ["Cancel", "Ok"]
    })
      .then((name) => {

        // check if value is null, then close model 
        if (name == null) {
          swal.close();
          return;
        }

        // Update Object with Values 
        newUsername.name = name;

        // Ask for Password 
        swal({
          text: "Type in your password below to update your username.",
          content: "input",
          buttons: ["Cancel", "Update"]
        })
          .then((password) => {

            if (password == null) {
              swal.close();
              return;
            }

            // Update Object with Values 
            newUsername.password = password;
          })
          .then(() => {
            swal({
              title: newUsername.name + ", you're updated!",
              icon: "success",
              button: false
            });

            setTimeout(() => {
              swal.close();
            }, 1750);

             console.log(newUsername);
        });
      });    
  }

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
              <button className="edit-username-btn" onClick={updateUsername}>
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

                {/* default Themes  */}
                
                <div className="default-themes">

                  {/* Light  */}
                  <div className="light-theme-btn theme-btn">
                    <input type="radio" id="lightTheme" name="theme" value="light"/>
                    <label htmlFor="lightTheme">Light</label>
                  </div>

                  {/* Dark  */}
                  <div className="dark-theme-btn theme-btn">
                    <input type="radio" id="darkTheme" name="theme" value="dark" defaultChecked />
                    <label htmlFor="darkTheme">Dark</label>
                  </div>

                </div>

                <hr />

                {/* Special Theme  */}

                <div className="special-themes">

                  {/* Red Wine  */}
                  <div className="red-theme-btn theme-btn">
                    <input type="radio" id="redTheme" name="theme" value="red" disabled />
                    <label htmlFor="redTheme">Red Wine</label>
                  </div>

                  {/* Earth Tone  */}
                  <div className="earth-theme-btn theme-btn">
                    <input type="radio" id="earthTheme" name="theme" value="earth" disabled />
                    <label htmlFor="earthTheme">Earth Tone</label>
                  </div>

                  {/* Blue Ocean  */}
                  <div className="blue-theme-btn theme-btn">
                    <input type="radio" id="blueTheme" name="theme" value="blue" disabled />
                    <label htmlFor="blueTheme">Blue Ocean</label>
                  </div>

                </div>

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