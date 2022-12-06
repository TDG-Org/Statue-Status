import React, { useState, useRef } from "react";

// Components 
import { ProfileNoStatue, ProfileStatueSecondary, ProfileStatueAccessory, ProfileStatueBages } from "./";

// Styles
import "../../../sass/components/ProfileStatue.scss";

// Images/SVGs 
import { Pancake, Brilliance, Bravery, NatePfp } from "../../../assets/imgs";

const ProfileStatue = () => {

  const statueNameRef = useRef(null);

  // editing statue name section
  const [editStatueNameActive, setEditStatueNameActive] = useState(false);
  
  // edit name 
  const [editStatueName, setEditStatueName] = useState("John Doe");

  // Current Statue Name input 
  const [statueNameCurrent, setStatueNameCurrent] = useState("hi");
  
  // Toggle function to activate and let users edit statue name 
  function handleToggleStatueName(e) {
    setEditStatueNameActive(!editStatueNameActive);
    setTimeout(() => {
      statueNameRef.current.focus();
    }, 50);
  } 

  // Update the input text 
  function updateStatueName(e) {
    console.log(statueNameCurrent);
    setEditStatueName(statueNameCurrent);
  }

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
     <div className="statue-sect">
     <h3>My Statue</h3>
     <div className="pallet">
       <div className="container">

         {/* if user does not have a statute  */}
         <ProfileNoStatue />
          
         {/* if the user has a statue  */}
         <div className="statue">
            <div className="primary-sect">
              
             {/* Picture */}
              <img src={NatePfp} alt="" className="statue-img" />
              
             {/* Statue Name */}
              <div className="statue-name-sect">
                <input
                  type="text"
                  className="statue-name"
                  defaultValue={editStatueName} 
                  disabled={editStatueNameActive ? false : true}
                  ref={statueNameRef}
                  onChange={handleStatueNameInputChange} 
                />
                {/* Edit button  */}
                <button
                  className={`statue-name-edit ${editStatueNameActive ? "hide" : ""}`}
                  onClick={handleToggleStatueName}
                >
                   <i className="bi bi-pen"></i>
                </button>
                <div className="statue-name-edit-btns">
                  {/* Save button  */}
                  <button
                    className={`statue-name-save ${editStatueNameActive ? "" : "hide"}`}
                    onClick={(e) => {
                      updateStatueName();
                      handleToggleStatueName(); 
                    }}
                  >
                    Save
                  </button>
                  {/* Cancel button  */}
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
              
              {/* About Statue Section  */}
              <div className="statue-about-sect">
                <p className="statue-sect-label">Who Am I?</p>
                <textarea className="statue-about" disabled value=" You can just call me Nate! My passion is building applications for clients, team collaboration, problem-solving, and designing.">
                 
                </textarea>
                <button className="statue-about-edit">
                  <i className="bi bi-pen"></i>
                </button>
              </div>

              <hr />

              {/* Accessory Section  */}
              <ProfileStatueAccessory />
              
              {/* Badge Section  */}
              <ProfileStatueBages /> 

            </div> 
            
            {/* Secondary Section  */}
            <ProfileStatueSecondary />
         </div>

       </div>
     </div>
   </div>
  );
};

export default ProfileStatue;