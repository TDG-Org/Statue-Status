import React, { useState } from "react";

// Datepicker 
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; 

const ProfileStatueAccessory = () => {

  // Date 
  const [selectedDate, setSelectedDate] = useState(null);

  // Other Values 
  const [accessoriesValues, setAccessoriesValues] = useState({
    headline: "Software Engineer",
    location: "Perris, CA",
    company: "TDG"
  });

  return (
    <div className="bottom-editable-sect hide">
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
          />
      </div>

      <div className="bottom-editable-sect-content-btns">
        <button className="save-accessories">
          Save
        </button>
        <button className="cancel-accessories">
          Cancel 
        </button>
      </div>
      
    </div>

    <button className="edit-accessories">Edit Accessories</button>
  </div>
  );
};

export default ProfileStatueAccessory;