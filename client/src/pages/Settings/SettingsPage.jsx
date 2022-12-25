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
      <General />

    </div>
  );
};

export default SettingsPage;