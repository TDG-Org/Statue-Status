import React from "react";

// Components 
import {
  Info,
  Picture,
} from "./Primary";

// Styles
import "../../../sass/components/Main Statue/Client.scss";

const Client = () => {
  return (
    <div className="statue-client-comp">

      {/* The User's Picture  */}
      <Picture />

      {/* The User's Name and Bio  */}
      <Info />

    </div>
  );
};

export default Client;