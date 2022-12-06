import React, { useState, useRef } from "react";

const ProfileStatueAbout = () => {

  const statueAboutRef = useRef(null);

  // Check if Editing is active
  const [editStatueAboutActive, setEditStatueAboutActive] = useState(false);

  // Official About 
  const [editStatueAbout, setEditStatueAbout] = useState(" You can just call me Nate! My passion is building applications for clients, team collaboration, problem-solving, and designing.");
  
    // Current About input 
  const [statueAboutCurrent, setStatueAboutCurrent] = useState(editStatueAbout);
  
  // Toggle function to activate Statue About edit
  function handleToggleStatueAbout(e) {
    setEditStatueAboutActive(!editStatueAboutActive);
    setTimeout(() => {
      statueAboutRef.current.focus();
    }, 50);
  } 

  // Update the input text 
  function updateStatueAbout(e) {
    console.log(statueAboutCurrent);
    setEditStatueAbout(statueAboutCurrent);
  }

  // Function that always listens for input changes 
  function handleStatueAboutInputChange(e) {
    const target = e.target;
    let value = target.value;
    setStatueAboutCurrent(value);
  }

  // Update the display 
  function displayStatueAbout() {
    document.querySelector(".statue-About").value = editStatueAbout;
  }

  return (
    <div className="statue-about-sect">
    <p className="statue-sect-label">Who Am I?</p>
      <textarea
        className="statue-about"
        defaultValue={editStatueAbout} 
        disabled={editStatueAboutActive ? false : true}
        ref={statueAboutRef}
        onChange={handleStatueAboutInputChange} 
      >
    </textarea>
    <button className="statue-about-edit">
      <i className="bi bi-pen"></i>
    </button>
  </div>
  );
};

export default ProfileStatueAbout;