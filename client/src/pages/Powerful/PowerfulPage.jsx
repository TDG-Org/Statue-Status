import React from "react";

// Components
import { PowerUser } from "../../components";

const PowerfulPage = () => {
  return (
    <div className="PowerfulPage page">
      <h1>Richest People</h1>
      <hr />

      <PowerUser />

      <hr />
    </div>
  );
};

export default PowerfulPage;