import React, { useState, useEffect } from "react";

// Components
import {
  Pie,
  Chart,
} from "./";

// Link 
import { Link } from "react-router-dom";

// Proptypes 
import PropTypes from "prop-types";

const Main = ({ data }) => {

  // Validate Component's Props 
  Main.propTypes = {
    data: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object
    ]),
  };

  const [richestData, setRichestData] = useState(data);

  // APIs 
  let forbesAPILimit = "https://forbes400.onrender.com/api/forbes400?limit=5";
  
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

  // retrieveRichest(); 

  function setupInterval(func, interval) {
    setInterval(func, interval);
  }
  
  useEffect(() => {
    console.log("Calling function retrieveAllRichest");
    setupInterval(retrieveRichest, 14400000);
  }, []);

  return (
    <div className="pallet">

    {/* Tabs  */}

    <div className="homepage-pallet-chart-bottom">

      {/* Visuals */}
      <Chart richestData={richestData} />
      <Pie richestData={richestData} />
      
    </div>

    {/* Temporary Page Buttons  */}
    <div className="view-all-ppl-btn-wrapper">
      <Link
        to="/richest"
        className="view-all-ppl-btn"
      >
        View All Richest
      </Link>
      </div>
      
    <div className="view-all-ppl-btn-wrapper">
      <Link
        to="/mini-statue"
        className="view-all-ppl-btn"
      >
        View Person
      </Link>
    </div>
      
    <div className="view-all-ppl-btn-wrapper">
      <Link
        to="/login"
        className="view-all-ppl-btn"
      >
        Login
      </Link>
    </div>
      
    <div className="view-all-ppl-btn-wrapper">
      <Link
        to="/sign-up"
        className="view-all-ppl-btn"
      >
        Sign Up
      </Link>
    </div>
    
  </div>
  );
};

export default Main;