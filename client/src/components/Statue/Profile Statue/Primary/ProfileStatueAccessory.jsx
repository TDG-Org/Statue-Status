import React, { useState, useRef, useEffect  } from "react";

// Datepicker 
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; 

// Moment 
import moment from "moment";

// Demo Data 
import { NateData } from "../../../../DemoData";

const ProfileStatueAccessory = () => {

  // Update Birthday on render 
  useEffect(() => {
    displayStatueAccessory();
  }, []);

  const statueAccessoryHeadlineRef = useRef(null);

  // Date 
  const [selectedDate, setSelectedDate] = useState(null);

  // Final Date 
  const [finalSelectedDate, setFinalSelectedDate] = useState(NateData.bday);

    // Check if Editing is active
    const [editStatueAccessoryActive, setEditStatueAccessoryActive] = useState(false);

  // Other Values 
  const [accessoriesValues, setAccessoriesValues] = useState(NateData);

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
    setFinalSelectedDate(selectedDate);
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
        let headline = elValue;
        setAccessoriesValuesCurrent(current => {
          return {
            ...current,
            headline,
          };
        });
        break;
      case "location":
        let location = elValue;
        setAccessoriesValuesCurrent(current => {
          return {
            ...current,
            location,
          };
        });
        break;
      case "company":
        let company = elValue;
        setAccessoriesValuesCurrent(current => {
          return {
            ...current,
            company,
          };
        });
        break;
        case "relationship":
          let relationship = elValue;
          setAccessoriesValuesCurrent(current => {
            return {
              ...current,
              relationship,
            };
          });

    }
  }

  // Update the display 
  function displayStatueAccessory() {

    const theDatePicker = document.getElementById("theDatePicker");
    theDatePicker.value = moment(finalSelectedDate).format("MMM D, YYYY");

    // Getting the elements to update their display value 
    const headlineEl = document.querySelector(".headline-input");
    const locationEl = document.querySelector(".location-input");
    const companyEl = document.querySelector(".company-input");
    const relationshipEl = document.querySelector(".relationship-input");
    
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
      companyEl.value = "";
    } else {
      companyEl.value = accessoriesValues?.company;
    }
    // Relationship company 
    if (accessoriesValues?.relationship === undefined) {
      relationshipEl.value = "";
    } else {
      relationshipEl.value = accessoriesValues?.relationship;
    }
    // Update bday 
    if (moment(finalSelectedDate).format("MMM D, YYYY") === "Invalid date") {
      setTimeout(() => {
        theDatePicker.value = "";
      }, 100);
    } else {
      setTimeout(() => {
        theDatePicker.value = moment(finalSelectedDate).format("MMM D, YYYY");
      }, 100);
    }
  }

  const [otherRelationshipValue, setOtherRelationshipValue] = useState("");

  function handleOtherRelationshipValueChange(event) {
    setOtherRelationshipValue(event.target.value);
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
        <i className="bi bi-calendar-event"></i>
        <DatePicker
          id="theDatePicker"
          selected={selectedDate} 
            onChange={(date) => {
              setSelectedDate(date);
            }}
          dateFormat="MMM d, yyyy"
          className="the-datepicker"
          placeholderText="Birthday"
          defaultValue={finalSelectedDate}
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
        
      {/* Relationship  */}
      <div className="accessories-relationship">
          <i className="bi bi-heart-fill"></i>
          <div className="accessories-relationship-content">
          <select
          name="relationship"
          defaultValue="Single"
          className="relationship-input"
          onChange={handleAccessoriesInputChange}
          value={accessoriesValues?.relationship} 
          disabled={editStatueAccessoryActive ? false : true} 
        >
          <option value="single">Single</option>
          <option value="taken">Taken</option>
          <option value="married">Married</option>
          <option value="other">Other</option>
        </select>
          {accessoriesValuesCurrent?.relationship === "other" && editStatueAccessoryActive == true && (
            <input
              className="relationship-input-other"
              type="text"
              placeholder="Enter relationship status"
              value={otherRelationshipValue}
                onChange={handleOtherRelationshipValueChange}
                disabled={editStatueAccessoryActive ? false : true} 
            />
          )}
          </div>
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

      {/* Edit Accessories button  */}
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