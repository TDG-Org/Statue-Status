import React, { useState } from "react";

// Components
import Chart from "../../components/Chart";

// Time 
import { format } from "date-fns";

// Styles
import "./HomePage.scss";

// temp 
const data = [
  {name: "Nate M", money: 629087000, image: "helo"},
  {name: "Luke M", money: 120243430, image: "fasd"},
  {name: "Cesar I", money: 111543864, image: "aaaa"},
  {name: "Gil E", money: 80735018, image: "heccddlo"},
  {name: "Tony Q", money: 79982135, image: "helaaaaao"},
];

// const data = [
//   {name: "Nate M", money: 2000},
//   {name: "Luke M", money: 1430},
//   {name: "Cesar I", money: 986},
//   {name: "Gil E", money: 918},
//   {name: "Tony Q", money: 1305}
// ];

const HomePage = () => {

  const [richestData, setRichestData] = useState(data);

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

          let newObj = {
            name: data[i].person.name,
            money: data[i].finalWorth * 1000000,
            image: data[i].person.squareImage
          };

          setRichestData(newObj);
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
        <Chart richestData={richestData} />
      </div>

      <div className="pallet">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, aut? Aut, quo deserunt dignissimos ipsa atque accusantium unde voluptas nulla. Mollitia ipsum quidem, deserunt numquam nesciunt nulla molestias non nihil?
      </div>

    </div>
  );
};

export default HomePage;