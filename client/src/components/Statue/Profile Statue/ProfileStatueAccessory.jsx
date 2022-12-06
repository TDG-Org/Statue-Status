import React, { useState, useRef } from "react";

// Datepicker 
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; 

const ProfileStatueAccessory = () => {

  const statueAccessoryHeadlineRef = useRef(null);

  // Date 
  const [selectedDate, setSelectedDate] = useState(null);

    // Check if Editing is active
    const [editStatueAccessoryActive, setEditStatueAccessoryActive] = useState(false);

  // Other Values 
  const [accessoriesValues, setAccessoriesValues] = useState({
    headline: "Software Engineer",
    location: "Perris, CA",
    company: "TDG"
  });

  // Toggle function to activate Statue Accessory edit
  function handleToggleStatueAccessory(e) {
    setEditStatueAccessoryActive(!editStatueAccessoryActive);
    setTimeout(() => {
      statueAccessoryHeadlineRef.current.focus();
    }, 50);
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
          className="the-datepicker"
          dateFormat="MMM d, yyyy"
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
            disabled={editStatueAccessoryActive ? false : true}
          />
      </div>

        <div className={`bottom-editable-sect-content-btns ${editStatueAccessoryActive ? "" : "hide"}`}>
          {/* Save Button  */}
          <button
            className="save-accessories"
            onClick={handleToggleStatueAccessory}
          >
          Save
          </button>
          {/* Cancel Button  */}
          <button
            className="cancel-accessories"
            onClick={handleToggleStatueAccessory}
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