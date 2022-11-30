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

  const { rank, name, money, country, image } = allRichestData[0];
  
  console.log(rank, name);
  
  return (
    <div className="rich-list">

      <h3>All Richest Individuals Globally</h3>
      
      {/* Person  */}
      <RichUser
        rank={rank}
        name={name}
        money={money}
        country={country}
        image={image}
      />

    </div>
  );
};

export default RichList;