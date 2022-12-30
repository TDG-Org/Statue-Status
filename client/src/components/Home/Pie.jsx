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
            fill: "#fff",
            wordWrap: "wrap"
          }
        }}
        text={(datum) => {
          const words = datum.name.split(" ");
          if (words.length > 1) {
            return `${words[0]} ${words[1][0]}.`;
          }
          return datum.name;
        }}
      />

    </div>
  );
};

export default Pie;