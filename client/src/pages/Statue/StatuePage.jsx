import React, { useState, useEffect } from "react";

// Styles
import "./StatuePage.scss";

// Components 
import {
  Client,
  ClientDetails,
} from "../../components";

const StatuePage = () => {
  return (
    <div className="StatuePage page page-full">
      <h1>Statue</h1>

      <div className="container">
        <hr />

        <Client />

        <ClientDetails />

        <hr />
      </div>

    </div>
  );
};

export default StatuePage;