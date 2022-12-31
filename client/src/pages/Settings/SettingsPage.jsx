import React from "react";

// Styles
import "./SettingsPage.scss";

// Components 
import {
  MyAccount,
  General
} from "../../components";

const SettingsPage = () => {

  return (
    <div className="SettingsPage page">
      <h1>Settings</h1>
      
      <div className="container">
        <hr />

        {/* Account Section  */}
        <MyAccount />

        {/* General Settings  */}
        <General />
          
        <hr />
      </div>
      
    </div>
  );
};

export default SettingsPage;