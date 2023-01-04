import React from "react";

// Victory Graphs
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis
} from "victory";

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

  // Function to handle clicks on ranking numbers
  function handleRankBubbleClick(e) {
    console.log(`Clicked ranking number: ${e.target.value}`);
    console.log(e.target.value);
    // Add your code here to do something when a ranking number is clicked

    // Fetch data from data base to compare and send user to the mini statue 

  }

  return (
    <div className="chart">

      <h4 className="chart-title">Ranking</h4>

      {/* The Chart */}
      <VictoryChart
        domainPadding={23}
        animate={{
          duration: 1000,
          onLoad: { duration: 300 }
        }}
      >

        {/* Y Axis */}
        <VictoryAxis
          dependentAxis
          style={{
            axis: {
              stroke: "#a8a8a8"
            },
            tickLabels: {
              fill: "#a8a8a8",
              fontSize: 12.5
            },
          }}
          tickFormat={(x) => (`${parseInt(x) / 1000000000}${x.toString().length > 9 ? "B" : "" }`)}
        />

        {/* X Axis */}
        <VictoryAxis
          style={{
            axis: {stroke: "#a8a8a8"},
            tickLabels: {
              fill: "#fff",
              fontSize: 13.5,
              wordWrap: "wrap"
            } 
          }}
          tickFormat={(x) => {
            const words = x.split(" ");
            if (words.length > 1) {
              return `${words[0]} ${words[1][0]}.`;
            }
            return x;
          }}
        />

        {/* Bar */}
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

      {/* Ranking Bubbles */}
      <ul className="ranking-numbers">
        <li
          value="1"
          onClick={handleRankBubbleClick}
          className="rank-num rank-num-1"
        >
          #1
        </li>
        <li
          value="2"
          onClick={handleRankBubbleClick}
          className="rank-num rank-num-2"
        >
          #2
        </li>
        <li
          value="3"
          onClick={handleRankBubbleClick}
          className="rank-num rank-num-3"
        
        >
          #3
        </li>
        <li
          value="4"
          onClick={handleRankBubbleClick}
          className="rank-num"
        >
          #4
        </li>
        <li
          value="5"
          onClick={handleRankBubbleClick}
          className="rank-num"
        >
          #5
        </li>
      </ul>

    </div>
  );
};

export default Chart;