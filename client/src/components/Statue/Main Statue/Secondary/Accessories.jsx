import React from "react";

// Proptypes 
import PropTypes from "prop-types";

const Accessories = () => {
  return (
    <div className="statue-accessories-sect">

      {/* Headline */}
      <div className="statue-accessory statue-accessory-headline">
        <i className="bi bi-card-heading"></i>
        <p>
          Software Engineer
        </p>
      </div>

      {/* Birthday */}
      <div className="statue-accessory statue-accessory-birthday">
        <i className="bi bi-calendar-event"></i>
        <p>
         Born <span> 04/08/2003 </span> - <span>19</span>
        </p>
      </div>

      {/* Location */}
      <div className="statue-accessory statue-accessory-location">
        <i className="bi bi-geo-alt"></i>
        <p>
         Perris, CA
        </p>
      </div>

      {/* Company */}
      <div className="statue-accessory statue-accessory-company">
        <i className="bi bi-building"></i>
        <p>
         @ TDG
        </p>
      </div>
      
      {/* Relationship */}
      <div className="statue-accessory statue-accessory-company">
        <i className="bi bi-heart-fill"></i>
        <p>
         Single
        </p>
      </div>
      
    </div>
  );
};

export default Accessories;