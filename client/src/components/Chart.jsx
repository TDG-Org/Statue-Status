import React from "react";

// Victory 
import { VictoryBar, VictoryChart, VictoryAxis } from "victory";

// Styles
import "../sass/components/Chart.scss";

// Props 
import PropTypes from "prop-types";

const Chart = ({ richestData }) => {

  // Validate Prop 
  Chart.propTypes = {
    richestData: PropTypes.array.isRequired
  };

  // Function to Format the Money 
  function formatMoney(n) {
    if (n < 1e3) return n;
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
    if (n >= 1e12) return +(n / 1e12).toFixed(1);
  }

  return (
    <div className="chart">

      {/* The Chart  */}
      <VictoryChart
        domainPadding={30}
        animate={{
          duration: 1000,
          onLoad: { duration: 300 }
        }}
      >

        {/* Y Axis  */}
        <VictoryAxis
          dependentAxis
          style={{
            axis: {
              stroke: "#a8a8a8"
            },
            tickLabels: {
              fill: "#a8a8a8",
              fontSize: 10
            },
          }}
          tickFormat={(x) => (`${parseInt(x) / 1000000000}${x.toString().length > 9 ? "b" : "" }`)}
        />

        {/* X Axis  */}
        <VictoryAxis
          tickValues={[1, 2, 3, 4, 5]}
          style={{
            axis: {stroke: "#a8a8a8"},
            tickLabels: {
              fill: "#a8a8a8",
              fontSize: 10
            } 
          }}
        />

        {/* Bar  */}
        <VictoryBar
          data={richestData}
          style={{
            data: { fill: "#0084ff" },
            labels: {
              fontSize: 10,
              fill: "#fff"
            }
          }}
          alignment="middle" 
          barWidth={32} 
          x="name"
          y="money"
          labels={
            ({ datum }) => (formatMoney(datum.money))
          }
        />

      </VictoryChart>

    </div>
  );
};

export default Chart;