import React from "react";

// Styles
import "./SettingsPage.scss";

// Emailjs 
import emailjs from "@emailjs/browser";

// Sweet Alert 
import swal from "sweetalert";

// Components 
import { MyAccount, General } from "../../components";

const SettingsPage = () => {

  // Support Function 
  const support = () => {
    swal("Here's the title!", "...and here's the text!");
  };

  return (
    <div className="SettingsPage page">
      <h1>Settings</h1>
      
      <hr />

      {/* Account Section  */}
      <MyAccount />

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