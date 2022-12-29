import React, { useState, useEffect } from "react";

// Components
import {
  Main,
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
      <hr />
      <div className="container">

        {/* Main Pallet  */}
        <h2>Top 5 Global</h2>
        <Main data={data} /> 

        {/* News Pallet  */}
        <h2>Global Headlines</h2>
        <div className="pallet">

        </div>
        
      </div>
      <hr />
    </div>
  );
};

export default HomePage;