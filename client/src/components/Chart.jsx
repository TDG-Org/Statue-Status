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
      <VictoryChart
        style={{
          parent: {
            border: "1px solid transparent"
          },
          background: {
            fill: "transparent"
          }
        }}
        domainPadding={30}
        animate={{
          duration: 1000,
          onLoad: { duration: 300 }
        }}
      >

        {/* X Axis  */}
        <VictoryAxis
          // tickValues specifies both the number of ticks and where
          // they are placed on the axis
          tickValues={[1, 2, 3, 4, 5]}  
          tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4", "Quarter 4"]} 
          style={{
            axis: {stroke: "#fff"},
            // axisLabel: {fontSize: 20, padding: 30}, 
            // grid: {stroke: ({ tick }) => tick > 0.5 ? "red" : "grey"}, 
            // ticks: {stroke: "#fff", size: 5}, 
            tickLabels: {fill: "#a8a8a8"} 
          }}
        />

        {/* Y Axis  */}
        <VictoryAxis
          dependentAxis
          style={{
            axis: { stroke: "#fff" },
            tickLabels: { fill: "#a8a8a8", fontSize: 11 },
          }}
          // tickFormat specifies how ticks should be displayed
          tickFormat={(x) => (`$${x / 1000}k`)}
        />

        {/* Bar  */}
        <VictoryBar
          data={data}
          style={{
            data: { fill: "#0084ff" },
            labels: {
              fontSize: 12,
              fill: "#a8a8a8"
            }
          }}
          // barRatio={0.7} 
          alignment="middle"
          barWidth={35}
          // data accessor for x values
          x="quarter"
          // data accessor for y values
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