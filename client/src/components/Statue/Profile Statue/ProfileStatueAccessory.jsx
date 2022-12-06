import React, { useState } from "react";

// Datepicker 
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; 

const ProfileStatueAccessory = () => {

  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="bottom-editable-sect hide">
    <p className="statue-sect-label">Accessory</p>

    {/* The Editable  */}
    <div className="bottom-editable-sect-content">
      {/* Headline  */}
      <div className="accessories-headline">
        <i className="bi bi-card-heading"></i>
        <input type="text" className="headline-input" placeholder="Headline"/>
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
        <input type="text" className="location-input" placeholder="Location"/>
      </div>
      {/* Company  */}
      <div className="accessories-company">
        <i className="bi bi-building"></i>
        <input type="text" className="company-input" placeholder="Company"/>
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