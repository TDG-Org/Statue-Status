import React, { useState, useEffect } from "react";

// Styles 
import "./RichestPage.scss";

// Images/SVGs

// Demo Data 
import { allDemoRichestData } from "../../DemoData";

// Components 
import { RichList, GoBackBtn } from "../../components";

const RichestPage = () => {

  const [allRichestData, setAllRichestData] = useState(allDemoRichestData);

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

  // retrieveAllRichest(); 

  function setupInterval(func, interval) {
    setInterval(func, interval);
  }
  
  useEffect(() => {
    console.log("Calling function retrieveAllRichest");
    setupInterval(retrieveAllRichest, 14400000);
  }, []);

  return (
    <div className="RichestPage page">
      <h1>Richest People</h1>
      <hr />
      <GoBackBtn />

      {/* List Container  */}
      <RichList allRichestData={allRichestData} className="reveal"/>

      <hr />

    </div>
  );
};

export default RichestPage;