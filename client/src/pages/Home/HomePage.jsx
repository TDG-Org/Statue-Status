import React from "react";

// Components
import {
  Main,
  News,
} from "../../components";

// Time 
import { format } from "date-fns";

// Styles
import "./HomePage.scss";

// temp data 
import { data } from "../../DemoData";

// Function to sort array my money 
import { moneySorter } from "../../utils/MiniFunc";

// Sorts Data 
data.sort( moneySorter ).reverse();

const HomePage = () => {

  return (
    <div className="HomePage page">
      <h1 className="fade-title">
        {format(new Date(), "EEEE, d MMMM yyyy")}
      </h1>
      <div className="container">
      <hr />

        {/* Main Pallet  */}
        <h3>Top 5 Global</h3>
        <Main data={data} /> 

        {/* News Pallet  */}
        <h3>Global Headlines</h3>

        <News />
        
      <hr />
      </div>
    </div>
  );
};

export default HomePage;