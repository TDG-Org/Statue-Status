import React, { useState } from "react";

// Components
import { Chart, RichList } from "../../components/Rich";

// Time 
import { format } from "date-fns";

// Styles
import "./HomePage.scss";

// temp 
const data = [
  {rank: 1, name: "Nate M", money: 43000, country: "United States", image: "https://natemci.com/static/media/Nate1.8cbd5164f1a9ecaea636.png"},
  {rank: 2, name: "Luke M", money: 58430, country: "United States", image: "https://natemci.com/static/media/insomnia.ce01d16f9e95615eacda.png"},
  {rank: 3, name: "Cesar I", money: 49864, country: "United States", image: "aaaa"},
  {rank: 4, name: "Gil E", money: 49718, country: "United States", image: "https://images.theconversation.com/files/393210/original/file-20210401-13-z6rl6z.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop"},
  {rank: 5, name: "Tony Q", money: 49135, country: "United States", image: "helaaaaao"},
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

  const [allRichestData, setAllRichestData] = useState(data);

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
          // console.log(data); 
          
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
        // console.log(richestData); 
      });
    }, 3000);
    
  }

  // retrieveRichest(); 

  function retrieveAllRichest() {

    setTimeout(() => {
      fetch(forbesAPI)
        .then(res => res.json())
        .then((data) => {
          let allRichPeople = [];

          // console.log(data); 
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
          // console.log(allRichestData);
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
        <h2>Top 5 Chart</h2>
        {/* Tabs  */}

        {/* Chart */}
        <Chart richestData={richestData} />

      </div>

      <div className="pallet">

        {/* The Richest People List  */}
        <RichList allRichestData={allRichestData} />

      </div>

    </div>
  );
};

export default HomePage;