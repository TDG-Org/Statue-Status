import React, { useState, useEffect } from "react";

// Components
import {
  Pie,
  Chart,
  RichList,
} from "../../components";

// Link 
import { Link } from "react-router-dom";

// Time 
import { format } from "date-fns";

// Styles
import "./HomePage.scss";

// temp data 
import { data, allDemoRichestData } from "../../DemoData";

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

  const [richestData, setRichestData] = useState(data);

  const [allRichestData, setAllRichestData] = useState(data);

  // APIs 
  let forbesAPILimit = "https://forbes400.onrender.com/api/forbes400?limit=5";

  let forbesAPI = "https://forbes400.onrender.com/api/forbes400/";

  // Retrieves Data for Richesting People  
  function retrieveRichest() {
    console.log("Getting Top 5 Richest");

    setTimeout(() => {
      fetch(forbesAPILimit, {
        // mode: "no-cors", 
      })
      .then(res => res.json())
        .then((data) => {
          console.log(data);
          
        let richPeople = [];

        // loops through all the richest people, and creates objects for each one to store into array for the charts
        for (let i = 0; i < data.length; i++) {

          let name = data[i].person.name;
          let money = data[i].finalWorth * 1000000;
          let image = data[i].person.squareImage;

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
            name: name,
            money: money,
            image: image
          };

          // Push to Array 
          richPeople.push(newObj);
        }

        // Update State 
        setRichestData(richPeople);
      });
    }, 3000);
    
  }

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
  
    console.log("Calling function retrieveRichest");
    setupInterval(retrieveRichest, 14400000);
  }, []);

  return (
    <div className="HomePage page">
      <h1 className="homepage-title">
        {format(new Date(), "EEEE, d MMMM yyyy")}
      </h1>

      <hr />
      
      <h2>Top 5 Global</h2>

      <div className="container">

        <div className="pallet">

          {/* Tabs  */}

          <div className="homepage-pallet-chart-bottom">

            {/* Chart */}
            <Chart richestData={richestData} />

            <Pie richestData={allDemoRichestData} />
            
          </div>

          {/* View All Button  */}
          <div className="view-all-ppl-btn-wrapper">
            <Link
              to="/Richest"
              className="view-all-ppl-btn"
            >
              View All Richest
            </Link>
          </div>
          
        </div>

        <h2>All Individuals</h2>
        
        <div className="pallet">

          {/* The Richest People List  */}
          <RichList allRichestData={allRichestData} className="reveal"/>

        </div>
        
      </div>

    </div>
  );
};

export default HomePage;