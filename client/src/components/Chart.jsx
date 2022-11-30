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
        theme={VictoryTheme.grayscale}
        domainPadding={20}
      >
        
        <VictoryAxis
          // tickValues specifies both the number of ticks and where
          // they are placed on the axis
          tickValues={[1, 2, 3, 4, 5]}  
          tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4", "Quarter 4"]}  
        />
        <VictoryAxis
          dependentAxis
          // tickFormat specifies how ticks should be displayed
          tickFormat={(x) => (`$${x / 1000}k`)}
        />

        {/* Bar  */}
        <VictoryBar
          data={data}
          // data accessor for x values
          x="quarter"
          // data accessor for y values
          y="earnings"
        />

      </VictoryChart>
    </div>
  );
};

export default Chart;