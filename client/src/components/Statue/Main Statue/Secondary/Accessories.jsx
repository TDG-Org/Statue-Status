import React from "react";

// Proptypes 
import PropTypes from "prop-types";

const Accessories = () => {
  return (
    <div className="statue-accessories-sect">

      {/* Headline */}
      <div className="statue-accessory statue-accessory-headline">
        <p>
          Software Engineer
        </p>
      </div>

      {/* Birthday */}
      <div className="statue-accessory statue-accessory-birthday">
        <p>
         Born <span> 04/08/2003 </span> - <span>19</span>
        </p>
      </div>

      {/* Location */}
      <div className="statue-accessory statue-accessory-location">
        <p>
         Perris, CA
        </p>
      </div>

      {/* Company */}
      <div className="statue-accessory statue-accessory-company">
        <p>
         @ TDG
        </p>
      </div>
      
      {/* Relationship */}
      <div className="statue-accessory statue-accessory-company">
        <p>
         Single
        </p>
      </div>
      
    </div>
  );
};

export default Accessories;