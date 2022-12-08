import React, { useState, useRef } from "react";

// Components 
import { ProfileNoStatue, ProfileStatueSecondary, ProfileStatueAccessory, ProfileStatueBages, ProfileStatueAbout } from "./";

// Styles
import "../../../sass/components/ProfileStatue.scss";

// Images/SVGs 
import { Pancake, Brilliance, Bravery, NatePfp } from "../../../assets/imgs";

// Sweet Alert 
import swal from "sweetalert";

const ProfileStatue = () => {

  const statueNameRef = useRef(null);

  // Check if Editing is active
  const [editStatueNameActive, setEditStatueNameActive] = useState(false);
  
  // Official Name 
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

  // Update the input text 
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

  // Swal Functions 
  function handleDeleteStatue() {
    swal({
      text: "deleting...",
      button: false
    });

    setTimeout(() => {
      swal.close();

      deleteStatue();
    }, 1200);
  }

  // Delete Statue 
  function deleteStatue() {
    swal({
      icon: "success",
      button: false
    });

    setTimeout(() => {
      swal.close();
    }, 1550);
  }

  return (
     <div className="statue-sect">
     <h3>My Statue</h3>
     <div className="pallet">
       <div className="container">

         {/* If No Statue  */}
         <ProfileNoStatue />
          
         {/* If they have a Statue  */}
         <div className="statue">
            <div className="primary-sect">
              
             {/* Statue Picture */}
              <img src={NatePfp} alt="" className="statue-img" />
              
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

                {/* Edit button  */}
                <button
                  className={`statue-name-edit ${editStatueNameActive ? "hide" : ""}`}
                  onClick={handleToggleStatueName}
                >
                   <i className="bi bi-pen"></i>
                </button>

                {/* The Save and Cancel Buttons  */}
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
              <ProfileStatueAbout />
              <hr />
              {/* Accessory Section  */}
              <ProfileStatueAccessory />
              {/* Badge Section  */}
              <ProfileStatueBages /> 

            </div> 

            <hr className="smaller-size-screen-display-divider"/> 
            
            {/* - Secondary Section - */}
            <ProfileStatueSecondary />

          </div>

          <hr />
          
          {/* Delete Statue Button  */}
          <div className="delete-statue-btn-wrapper">
            <button
              className="delete-statue-btn"
              onClick={handleDeleteStatue}
            >
              Delete Statue
            </button>
          </div>

       </div>
     </div>
   </div>
  );
};

export default ProfileStatue;