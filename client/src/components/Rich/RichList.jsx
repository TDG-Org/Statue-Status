import React from "react";

// Components 
import RichUser from "./RichUser";

// Styles
import "../../sass/components/RichList.scss";

const RichList = () => {
  return (
    <div className="rich-list">

      <h3>All Richest Individuals Globally</h3>
      
      {/* Person  */}
      <RichUser />

    </div>
  );
};

export default RichList;