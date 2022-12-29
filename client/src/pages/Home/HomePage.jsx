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

// Funtion that sorts Data my property (money) 
function compare( a, b ) {
  if ( a.money < b.money ){
    return -1;
  }
  if ( a.money > b.money ){
    return 1;
  }
  return 0;
}

// Sorts Data 
data.sort( compare ).reverse();

const HomePage = () => {

  const [allRichestData, setAllRichestData] = useState(data);

  // APIs 
  let forbesAPI = "https://forbes400.onrender.com/api/forbes400/";

  function retrieveAllRichest() {
    console.log("Getting All Richest");

    setTimeout(() => {
      fetch(forbesAPI, {
        // mode: "no-cors", 
      })
        .then(res => res.json())
        .then((data) => {
          console.log(data);
          let allRichPeople = [];

          for (let i = 0; i < data.length; i++) {
            let rank = data[i].rank;
            let name = data[i].person.name;
            let image = data[i].person.squareImage;
            let money = data[i].finalWorth * 1000000;
            let country = data[i].countryOfCitizenship;
  
            // Check if name is above 20 Characters 
            if (name.length > 16) {
              let fullName = name.split(" ");
  
              if (fullName.length >= 3) {
                let shortName = fullName.splice(0, 2).join(" ");
                name = `${shortName}`;
              } else {
                let lastInitials = fullName.pop().charAt(0);
                name = `${fullName[0]} ${lastInitials.toUpperCase()}`;
              }
            }
            
            // Creates Object 
            let newObj = {
              rank: rank,
              name: name,
              money: money,
              image: image,
              country: country,
            };
  
            // Push to Array 
            allRichPeople.push(newObj);
          }
          setAllRichestData(allRichPeople);  
        });
    }, 3000);

  }

  function setupInterval(func, interval) {
    setInterval(func, interval);
  }
  
  useEffect(() => {
    console.log("Calling function retrieveAllRichest");
    setupInterval(retrieveAllRichest, 14400000);
  }, []);

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