import React from "react";

// Proptypes 
import PropTypes from "prop-types";

// Components 
import {
  Socials,
  Accessories,
  Connections,
} from "./Secondary";

// Styles
import "../../../sass/components/Main Statue/ClientDetails.scss";

const ClientDetails = () => {
  return (
    <div className="statue-details-comp">

      {/* The User's Accossories  */}
      <Accessories />

      {/* The User's Socials Links  */}
      <Socials />

      {/* The User's Connections  */}
      <Connections />

    </div>
  );
};

export default ClientDetails;