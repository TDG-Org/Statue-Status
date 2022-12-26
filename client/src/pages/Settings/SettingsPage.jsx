import React from "react";

// Styles
import "./SettingsPage.scss";

// Components 
import { MyAccount, General } from "../../components";

const SettingsPage = () => {

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