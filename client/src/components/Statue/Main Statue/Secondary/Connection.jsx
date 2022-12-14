import React from "react";

// Proptypes 
import PropTypes from "prop-types";

// Images/SVGs 
import { Planet } from "../../../../assets/imgs";

const Connection = () => {
  return (
    <div className="statue-connection">

      {/* Image */}
      <div className="statue-connection-img-wrapper">

        <img
          src={Planet}
          alt="Connection"
          title="Connection"
          className="statue-connection-avatar"
        />
        
      </div>

      {/* Name */}
      <div className="statue-connection-name-wrapper">

        <a
          href="#"
          target="_blank"
          className="statue-connection-name"
        >
          Luke McIlvenny
        </a>

      </div>

    </div>
  );
};

export default Connection;