import React from "react";

// Proptypes 
import PropTypes from "prop-types";

// Images/SVGs 
import { Planet } from "../../../../assets/imgs";

const Connections = () => {
  return (
    <div className="statue-connections-sect">

      <div className="statue-connection">

        {/* Image */}
        <div className="statue-connection-img-wrapper">

          <img
            src={Planet}
            alt=""
            title=""
            className="statue-connection-avatar"
          />
          
        </div>

        {/* Name  */}
        <div className="statue-connection-name-wrapper">

          <a
            href="#"
            target="_blank"
            className="statue-connection-name"
          >
            Luke M
          </a>

        </div>

      </div>
      
    </div>
  );
};

export default Connections;