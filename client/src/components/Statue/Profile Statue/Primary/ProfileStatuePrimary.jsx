import React, { useState, useRef } from "react";

import {
  ProfileStatueAccessory,
  ProfileStatueBages,
  ProfileStatueAbout
} from "./";

// Images/SVGs 
import { Male } from "../../../../assets/imgs";

const ProfileStatuePrimary = () => {

  // Statue Image 

  const [statueImage, setStatueImage] = useState(null);
  const inputStatueImageRef = useRef();
  const StatueImageRef = useRef();
  // Listen For input change 
  const handleStatueImageChange = (event) => {
    setStatueImage(event.target.files[0]);
    StatueImageRef.current.src = URL.createObjectURL(event.target.files[0]);
  };
  const handleStatueImageInputClick = () => {
    inputStatueImageRef.current.click();
  };

  // Statue Name 

  const statueNameRef = useRef(null);
  // Editing is active
  const [editStatueNameActive, setEditStatueNameActive] = useState(false);
  const [editStatueName, setEditStatueName] = useState("Christian McIlvenny");
  // Current Name input 
  const [statueNameCurrent, setStatueNameCurrent] = useState(editStatueName);
  // Toggle function to activate Statue Name edit
  function handleToggleStatueName(e) {
    setEditStatueNameActive(!editStatueNameActive);
    setTimeout(() => {
      statueNameRef.current.focus();
    }, 50);
  } 
  function updateStatueName(e) {
    setEditStatueName(statueNameCurrent);
  }
  // Function that always listens for input changes 
  function handleStatueNameInputChange(e) {
    const target = e.target;
    let value = target.value;
    setStatueNameCurrent(value);
  }
  // Update the display 
  function displayStatueName() {
    document.querySelector(".statue-name").value = editStatueName;
  }

  return (
    <div className="primary-sect">
              
      {/* Statue Picture */}
      <div
        onClick={handleStatueImageInputClick}
        className="statue-img"
      >
        {/* Overlay */}
        <div className="statue-img-overlay">
          Edit
        </div>
        {/* Image */}
        <img
          src={Male}
          ref={StatueImageRef}
          alt="Statue Picture"
        />
        {/* Hidden Input */}
        <input
          hidden
          type="file"
          ref={inputStatueImageRef}
          onChange={handleStatueImageChange}
        />
      </div>

     
    {/* Statue Name */}
     <div className="statue-name-sect">
       <input
         type="text"
         placeholder="Your Name"
         className="statue-name"
         defaultValue={editStatueName} 
         disabled={editStatueNameActive ? false : true}
         ref={statueNameRef}
         onChange={handleStatueNameInputChange} 
       />

       {/* Edit button */}
       <button
         className={`statue-name-edit ${editStatueNameActive ? "hide" : ""}`}
         onClick={handleToggleStatueName}
       >
          <i className="bi bi-pen"></i>
       </button>

       {/* The Save and Cancel Buttons */}
       <div className="statue-name-edit-btns">

         {/* Save button */}
         <button
           className={`statue-name-save ${editStatueNameActive ? "" : "hide"}`}
           onClick={(e) => {
             updateStatueName();
             handleToggleStatueName(); 
           }}
         >
           Save
         </button>

         {/* Cancel button */}
         <button
           className={`statue-name-save ${editStatueNameActive ? "" : "hide"}`}
           onClick={() => {
             handleToggleStatueName();
             displayStatueName();
             }
           }
         >
           Cancel
         </button>

       </div>
     </div>

     <hr />
     {/* About Statue Section */}
     <ProfileStatueAbout />
     <hr />
     {/* Accessory Section */}
     <ProfileStatueAccessory />
     {/* Badge Section */}
     <ProfileStatueBages /> 

   </div> 
  );
};

export default ProfileStatuePrimary;