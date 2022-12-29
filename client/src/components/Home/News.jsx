import React, { useState, useEffect } from "react";

// Link 
import { Link } from "react-router-dom";

// Proptypes 
import PropTypes from "prop-types";

const News = () => {

  // Validate Component's Props 
  News.propTypes = {
    data: PropTypes.object,
};
  
  return (
    <div className="pallet">
      <p>Will Update Later...</p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet debitis quae, dolorem enim culpa maiores libero temporibus iure laborum tenetur assumenda, ullam quod, labore fugiat ipsum. Minima libero dolores amet.
    </div>
  );
};

export default News;