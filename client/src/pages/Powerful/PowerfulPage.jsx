import React from "react";

// Styles 
import "./PowerfulPage.scss";

// Components
import { PowerUser } from "../../components";

const PowerfulPage = () => {
  return (
    <div className="PowerfulPage page">
      <h1>Powerful People</h1>

      <hr />

      <PowerUser />

      <hr />

    </div>
  );
};

export default PowerfulPage;