import React from "react";

// Components 
import RichUser from "./RichUser";

// Styles
import "../../sass/components/RichList.scss";

// Props 
import PropTypes from "prop-types";

const RichList = ({ allRichestData }) => {
  
  // Validate Prop 
  RichList.propTypes = {
    allRichestData: PropTypes.array.isRequired
  };
  
  return (
    <div className="rich-list">

      <h3>All Richest Individuals Globally</h3>
      
      {allRichestData.map((item, index) => {
        {/* Person  */}
        return (
          <RichUser
          key={index}
          rank={item.rank}
          name={item.name}
          money={item.money}
          country={item.country}
          image={item.image}
          />
        );
      })}

    </div>
  );
};

export default RichList;