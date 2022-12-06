import React, { useState, useRef } from "react";

// Datepicker 
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; 

// Demo Data 
const NateData = {
  headline: "Software Engineer",
  location: "Perris, CA",
  company: "TDG"
};

const ProfileStatueAccessory = () => {

  const statueAccessoryHeadlineRef = useRef(null);

  // Date 
  const [selectedDate, setSelectedDate] = useState(null);

    // Check if Editing is active
    const [editStatueAccessoryActive, setEditStatueAccessoryActive] = useState(false);

  // Other Values 
  const [accessoriesValues, setAccessoriesValues] = useState();

  // Current Accessory Values input 
  const [accessoriesValuesCurrent, setAccessoriesValuesCurrent] = useState(accessoriesValues);

  // Toggle function to activate Statue Accessory edit
  function handleToggleStatueAccessory(e) {
    setEditStatueAccessoryActive(!editStatueAccessoryActive);
    setTimeout(() => {
      statueAccessoryHeadlineRef.current.focus();
    }, 50);
  } 

  // Check which elements wants update 
  function updateAccessory(e) {
    setAccessoriesValues(accessoriesValuesCurrent);
  }

    // Function that always listens for input changes 
  function handleAccessoriesInputChange(e) {

    // Get Name of Element and the user input 
    const elName = e.target.name;
    let elValue = e.target.value;

    // Check which key value we need to update 
    switch(elName) {
      case "headline":
        // code block
        let headline = elValue;
        setAccessoriesValuesCurrent(current => {
          return {
            ...current,
            headline,
          };
        });
        break;
      case "location":
        // code block
        let location = elValue;
        setAccessoriesValuesCurrent(current => {
          return {
            ...current,
            location,
          };
        });
        break;
      case "company":
        // code block
        let company = elValue;
        setAccessoriesValuesCurrent(current => {
          return {
            ...current,
            company,
          };
        });
    }
  }

  // Update the display 
  function displayStatueAccessory() {

    // Getting the elements to update their display value 
    const headlineEl = document.querySelector(".headline-input");
    const locationEl = document.querySelector(".location-input");
    const companyEl = document.querySelector(".company-input");
    
    // Update headline 
    if (accessoriesValues?.headline === undefined) {
      headlineEl.value = "";
    } else {
      headlineEl.value = accessoriesValues?.headline;
    }
    // Update location 
    if (accessoriesValues?.location === undefined) {
      locationEl.value = "";
    } else {
      locationEl.value = accessoriesValues?.location;
    }
    // Update company 
    if (accessoriesValues?.company === undefined) {
      locationEl.value = "";
    } else {
      companyEl.value = accessoriesValues?.company;
    }
  }

  return (
    <div className="bottom-editable-sect">
    <p className="statue-sect-label">Accessory</p>

    {/* The Editable  */}
    <div className="bottom-editable-sect-content">
        
      {/* Headline  */}
      <div className="accessories-headline">
        <i className="bi bi-card-heading"></i>
          <input
            type="text"
            name="headline"
            placeholder="Headline"
            className="headline-input"
            ref={statueAccessoryHeadlineRef}
            onChange={handleAccessoriesInputChange}
            defaultValue={accessoriesValues?.headline}
            disabled={editStatueAccessoryActive ? false : true}
          />
        </div>
        
      {/* Birthday  */}
      <div className="accessories-birthday">
        <i className="bi bi-balloon-heart-fill"></i>
        <DatePicker
          selected={selectedDate}
          onChange={
            (date) => setSelectedDate(date)
          }
          dateFormat="MMM d, yyyy"
          className="the-datepicker"
          placeholderText="Birthday"
          disabled={editStatueAccessoryActive ? false : true}
        />
        </div>
        
      {/* Location  */}
      <div className="accessories-location">
        <i className="bi bi-geo-alt"></i>
          <input
            type="text"
            name="location"
            placeholder="Location"
            className="location-input"
            onChange={handleAccessoriesInputChange}
            defaultValue={accessoriesValues?.location}
            disabled={editStatueAccessoryActive ? false : true}
          />
        </div>
        
      {/* Company  */}
      <div className="accessories-company">
        <i className="bi bi-building"></i>
          <input
            type="text"
            name="company"
            placeholder="Company"
            className="company-input"
            onChange={handleAccessoriesInputChange}
            defaultValue={accessoriesValues?.company}
            disabled={editStatueAccessoryActive ? false : true}
          />
      </div>

        <div className={`bottom-editable-sect-content-btns ${editStatueAccessoryActive ? "" : "hide"}`}>
          {/* Save Button  */}
          <button
            className="save-accessories"
            onClick={() => {
              updateAccessory();
              handleToggleStatueAccessory();
            }
            }
          >
          Save
          </button>
          {/* Cancel Button  */}
          <button
            className="cancel-accessories"
            onClick={() => {
              handleToggleStatueAccessory();
              displayStatueAccessory();
            }
            }
          >
          Cancel 
        </button>
      </div>
      
    </div>

      <button
        className={`edit-accessories ${editStatueAccessoryActive ? "hide" : ""}`}
        onClick={handleToggleStatueAccessory}
      >
        Edit Accessories
      </button>
  </div>
  );
};

export default ProfileStatueAccessory;