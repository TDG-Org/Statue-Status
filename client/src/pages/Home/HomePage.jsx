import React, { useState } from "react";

// Components
import Chart from "../../components/Chart";

// Time 
import { format } from "date-fns";

// Styles
import "./HomePage.scss";

// temp 
const data = [
  {name: "Nate M", money: 43000, image: "helo"},
  {name: "Luke M", money: 58430, image: "fasd"},
  {name: "Cesar I", money: 49864, image: "aaaa"},
  {name: "Gil E", money: 49718, image: "heccddlo"},
  {name: "Tony Q", money: 49135, image: "helaaaaao"},
];

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
data.sort( compare );

const HomePage = () => {

  const [richestData, setRichestData] = useState(data);

  setInterval(() => {
    // Will put here later 
    retrieveRichest();  

  }, 21600000);

  // APIs 
  let forbesAPILimit = "https://forbes400.herokuapp.com/api/forbes400?limit=5";
  let forbesAPI = "https://forbes400.herokuapp.com/api/forbes400/";

  // Retrieves Data for Richesting People  
  function retrieveRichest() {

    setTimeout(() => {
      fetch(forbesAPILimit)
      .then(res => res.json())
      .then((data) => {
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
        setRichestData(richPeople.reverse());
        console.log(richestData);
      });
    }, 3000);
    
  }

  // retrieveRichest();

  function retrieveAllRichest() {

    setTimeout(() => {
      fetch(forbesAPILimit)
        .then(res => res.json())
        .then((data) => { 
          console.log(data);
        });
    }, 3000);

  }

  // retrieveAllRichest(); 


  return (
    <div className="HomePage page">
      <h1 className="homepage-title">
        {format(new Date(), "EEEE, d MMMM yyyy")}
      </h1>

      <div className="pallet">
        <Chart richestData={richestData} />

      </div>

      <div className="pallet">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, aut? Aut, quo deserunt dignissimos ipsa atque accusantium unde voluptas nulla. Mollitia ipsum quidem, deserunt numquam nesciunt nulla molestias non nihil?
      </div>

    </div>
  );
};

export default HomePage;