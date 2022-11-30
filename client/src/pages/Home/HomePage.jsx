import React from "react";

// Components
import Chart from "../../components/Chart";

// Time 
import { format } from "date-fns";

// Styles
import "./HomePage.scss";

const HomePage = () => {

  setInterval(() => {
    // Will put here later 

  }, 21600000);

  let forbesAPI = "https://forbes400.herokuapp.com/api/forbes400?limit=5";

  // Retrieves Data for Richesting People  
  function retrieveRichest() {
    fetch(forbesAPI)
      .then(res => res.json())
      .then((data) => {
        // console.log(data); 
        for (let i = 0; i < data.length; i++) {
          console.log(data[i].person.name, data[i].finalWorth * 1000000, data[i].person.squareImage);
        }
      });
  }

  // retrieveRichest(); 

  let today = new Date();

  return (
    <div className="HomePage page">
      <h1 className="homepage-title">
        {format(new Date(), "EEEE, d MMMM yyyy")}
      </h1>

      <div className="pallet">
        <Chart />
      </div>

      <div className="pallet">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, aut? Aut, quo deserunt dignissimos ipsa atque accusantium unde voluptas nulla. Mollitia ipsum quidem, deserunt numquam nesciunt nulla molestias non nihil?
      </div>

    </div>
  );
};

export default HomePage;