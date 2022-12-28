import React from "react";

// Components 
import RichUser from "./RichUser";

// Styles
import "../../../sass/components/RichList.scss";

// Props 
import PropTypes from "prop-types";

const RichList = ({ allRichestData }) => {
  
  // Validate Prop 
  RichList.propTypes = {
    allRichestData: PropTypes.array.isRequired
  };

  // Funtion that sorts Data my property (money) 
  function compare( a, b ) {
    if ( a.money < b.money ){
      return -1;
    }
    if ( a.money > b.money ){
      return 1;
    }
    return 0;
  }

  // Sorts Data 
  allRichestData.sort( compare ).reverse();
  
  return (
    <div className="rich-list">
      
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