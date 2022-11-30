import React from "react";

// Victory 
import { VictoryBar, VictoryChart, VictoryAxis,
  VictoryTheme } from "victory";

// Styles
import "../sass/components/Chart.scss";

// temp 
const data = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 29000},
  {quarter: 5, earnings: 4000},
];

const Chart = () => {
  
  return (
    <div className="chart">

      {/* The Chart  */}
      <VictoryChart
        width="600" 
        domainPadding={30}
        animate={{
          duration: 1000,
          onLoad: { duration: 300 }
        }}
      >

        {/* X Axis  */}
        <VictoryAxis
          tickValues={[1, 2, 3, 4, 5]}  
          tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4", "Quarter 4"]} 
          style={{
            axis: {stroke: "#a8a8a8"},
            tickLabels: {fill: "#a8a8a8"} 
          }}
        />

        {/* Y Axis  */}
        <VictoryAxis
          dependentAxis
          style={{
            axis: { stroke: "#a8a8a8" },
            tickLabels: { fill: "#a8a8a8", fontSize: 11 },
          }}
          tickFormat={(x) => (`$${x / 1000}k`)}
        />

        {/* Bar  */}
        <VictoryBar
          data={data}
          style={{
            data: { fill: "#0084ff" },
            labels: {
              fontSize: 12,
              fill: "#fff"
            }
          }}
          alignment="middle"
          barWidth={35}
          x="quarter"
          y="earnings"
          labels={
            ({ datum }) => datum.earnings
          }
        />

      </VictoryChart>
      
    </div>
  );
};

export default Chart;