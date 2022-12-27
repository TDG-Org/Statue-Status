import React from "react";

// Victory 
import { VictoryPie } from "victory";

// Props 
import PropTypes from "prop-types";

const Pie = ({ richestData }) => {

  // Validate Prop 
  Pie.propTypes = {
    richestData: PropTypes.array.isRequired
  };

  return (
    <div className="victory-pie">

      <VictoryPie
        colorScale={["#00274b", "#003a70", "#0054a3", "#006acd", "#0084ff" ]}
        animate={{
          duration: 2000
        }}
        x="name"
        y="money"
        data={richestData}
        style={{
          labels: {
            fontSize: 16,
            fill: "#fff"
          }
        }}
        // categories={{ x: "money", y: "name" }} 
      />

    </div>
  );
};

export default Pie;