import React, { useState } from "react";

// Victory 
import { VictoryBar, VictoryChart, VictoryAxis } from "victory";

// Styles
import "../sass/components/Chart.scss";

import PropTypes from "prop-types";
// temp 
// const data = [
//   {quarter: 1, earnings: 13000},
//   {quarter: 2, earnings: 16500},
//   {quarter: 3, earnings: 14250},
//   {quarter: 4, earnings: 29000},
//   {quarter: 5, earnings: 4000},
// ];

const Chart = ({richestData}) => {

  Chart.propTypes = {
    richestData: PropTypes.array.isRequired
  };


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
            axis: { stroke: "#a8a8a8" },
            tickLabels: { fill: "#a8a8a8", fontSize: 11 },
          }}
          tickFormat={(x) => (`${parseInt(x)}k`)}
        />

        {/* X Axis  */}
        <VictoryAxis
          tickValues={[1, 2, 3, 4, 5]}   
          tickFormat={["Nate", "Luke", "Tony", "Gil", "Cesar"]} 
          style={{
            axis: {stroke: "#a8a8a8"},
            tickLabels: {fill: "#a8a8a8"} 
          }}
        />

        {/* Bar  */}
        <VictoryBar
          data={richestData}
          style={{
            data: { fill: "#0084ff" },
            labels: {
              fontSize: 12,
              fill: "#fff"
            }
          }}
          alignment="middle" 
          barWidth={35} 
          x="name"
          y="money"
          labels={
            ({ datum }) => datum.name
          }
        />

      </VictoryChart>

    </div>
  );
};

export default Chart;