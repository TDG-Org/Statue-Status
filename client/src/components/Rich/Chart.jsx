import React from "react";

// Victory 
import { VictoryBar, VictoryChart, VictoryAxis } from "victory";

// Styles
import "../../sass/components/Chart.scss";

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

      <h4 className="chart-title">Individuals</h4>

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
          style={{
            axis: {stroke: "#a8a8a8"},
            tickLabels: {
              fill: "#fff",
              fontSize: 11.5
            } 
          }}
        />

        {/* Bar  */}
        <VictoryBar
          data={richestData}
          style={{
            data: { fill: "#0084ff" },
            labels: {
              fontSize: 11,
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

      <ul className="ranking-numbers">
        <li className="rank-num rank-num-1">#1</li>
        <li className="rank-num rank-num-2">#2</li>
        <li className="rank-num rank-num-3">#3</li>
        <li className="rank-num ">#4</li>
        <li className="rank-num ">#5</li>
      </ul>

    </div>
  );
};

export default Chart;