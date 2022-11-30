import React, { useState } from "react";

// Components
import Chart from "../../components/Chart";

// import _debounce from "lodash/debounce"; 
var debounce = require("lodash.debounce");

// Time 
import { format } from "date-fns";

// Styles
import "./HomePage.scss";

// temp 
const data = [
  {name: "Nate M", money: 687000, image: "helo"},
  {name: "Luke M", money: 120430, image: "fasd"},
  {name: "Cesar I", money: 111864, image: "aaaa"},
  {name: "Gil E", money: 80718, image: "heccddlo"},
  {name: "Tony Q", money: 79135, image: "helaaaaao"},
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

  // setInterval(() => {
  //   // Will put here later 
  //   retrieveRichest();  

  // }, 21600000);

  let forbesAPI = "https://forbes400.herokuapp.com/api/forbes400?limit=5";

  // Retrieves Data for Richesting People  
  // function retrieveRichest() {

  //     fetch(forbesAPI)
  //     .then(res => res.json())
  //     .then((data) => {
  //       // console.log(data); 
  //       let richPeople = [];
  //       for (let i = 0; i < data.length; i++) {
  //         let newObj = {
  //           name: data[i].person.name,
  //           money: data[i].finalWorth * 1000000,
  //           image: data[i].person.squareImage
  //         };

  //         richPeople.push(newObj);
  //       }
  //       setRichestData(richPeople);

  //       console.log(richestData);
  //     });
    
  // }

  const retrieveRichest = React.useRef(
    debounce(async () => {
      const response = await fetch(forbesAPI);
      const body = await response.json();
      const data = body;

      let richPeople = [];
      for (let i = 0; i < data.length; i++) {
        let newObj = {
          name: data[i].person.name,
          money: data[i].finalWorth * 1000000,
          image: data[i].person.squareImage
        };

        richPeople.push(newObj);
      }
      setRichestData(richPeople);
      console.log(richestData);
    }, 300)
  ).current;

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