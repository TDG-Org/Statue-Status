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
      <div className="statue-detail statue-detail-accessory">
        <h5>Christian</h5>
        <Accessories />
      </div>

      {/* The User's Socials Links  */}
      <div className="statue-detail statue-detail-social">
        <h5>Socials</h5>
        <Socials />
      </div>

      {/* The User's Connections  */}
      <div className="statue-detail statue-detail-connection">
        <h5>Connections</h5>
        <Connections />
      </div>

    </div>
  );
};

export default ClientDetails;