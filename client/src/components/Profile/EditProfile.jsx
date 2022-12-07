import React, { useState, useRef } from "react";

// Link 
import { Link } from "react-router-dom";

// Images/SVGs 
import { Pancake, Brilliance, Bravery } from "../../assets/imgs";

const EditProfile = () => {

  const ProfileAboutRef = useRef(null);

  // Check if Editing is active
  const [editProfileAboutActive, setEditProfileAboutActive] = useState(false);

  // OffProfileAbout 
  const [editProfileAbout, setEditProfileAbout] = useState("");

  // Current About input 
  const [ProfileAboutCurrent, setProfileAboutCurrent] = useState(editProfileAbout);
  
  // Toggle function to activate profile about edit
  function handleToggleProfileAbout(e) {
    setEditProfileAboutActive(!editProfileAboutActive);
    setTimeout(() => {
      ProfileAboutRef.current.focus();
    }, 50);
  } 

    // Update the input text 
    function updateProfileAbout(e) {
      setEditProfileAbout(ProfileAboutCurrent);
    }
  
    // Function that always listens for input changes 
    function handleProfileAboutInputChange(e) {
      const target = e.target;
      let value = target.value;
      setProfileAboutCurrent(value);
    }
  
    // Update the display 
    function displayProfileAbout() {
      document.querySelector(".bio-input").value = editProfileAbout;
    }

  return (
    <div className="profile-sect">
    <h3>Edit Profile</h3>

    <div className="pallet">

      <div className="container">

        {/* User can edit  */}
        <div className="user-edit">

          {/* Avatar  */}
          <div className="profile-sect-avatar">
            <div className="profile-sect-avatar-content">
              <img src={Pancake} alt="" />
              <div className="avatar-edit-overlay">Edit</div>
            </div>
            <button className="change-avatar">Change Avatar</button>
          </div>

          {/* Right Side  */}
          <div className="text-edit-side">

            {/* Username  */}
            <div className="profile-sect-name">
              <h4 id="profileUsername">TDGNate</h4>
            </div>

            {/* Bio  */}
            <div className="profile-sect-bio">
              <h4 id="bioTitle">Bio</h4>
                <textarea
                  placeholder="What interests you? Please tell us more about yourself!"
                  type="text"
                  className="bio-input"
                  defaultValue={editProfileAbout} 
                  disabled={editProfileAboutActive ? false : true}
                  ref={ProfileAboutRef}
                  onChange={handleProfileAboutInputChange} 
                ></textarea>

              {/* Edit button  */}
                <button
                  className={`edit-bio-btn ${editProfileAboutActive ? "hide" : ""}`}
                  onClick={handleToggleProfileAbout}
                ><i className="bi bi-pen"></i>
                </button>

                {/* The Save and Cancel Buttons  */}
                <div className={`profile-bio-about-btns ${editProfileAboutActive ? "" : "hide"}`}>

                  {/* Save button  */}
                  <button
                    className="profile-bio-save"
                    onClick={(e) => {
                      updateProfileAbout();
                      handleToggleProfileAbout(); 
                    }}
                  >
                    Save
                  </button>

                  {/* Cancel button  */}
                  <button
                    className="profile-bio-cancel"
                    onClick={() => {
                      handleToggleProfileAbout();
                      displayProfileAbout();
                    }}
                  >
                    Cancel
                  </button>

                </div>
                
            </div>
          </div>
        </div>

        <div className="profile-sect-divider"></div>

        {/* User info  */}
        <div className="other-user-info">

          {/* Badges  */}
          <div className="profile-sect-badges">
            <div className="profile-sect-badge">
              <img src={Bravery} alt="" />
            </div>
            <div className="profile-sect-badge">
              <img src={Brilliance} alt="" />
            </div>
            <div className="profile-sect-badge">
              <img src={Pancake} alt="" />
            </div>
            <div className="profile-sect-badge">
              <img src={Brilliance} alt="" />
            </div>
          </div>

          {/* Reputations  */}
          <div className="profile-sect-reps" id="profileSectReps">
            <h4>Reputations</h4>
            <div className="rep">
              <span>+</span>
              <p id="repCount">1,583</p>
              <i className="bi bi-fire"></i>
            </div>
          </div>

          {/* Reputations  */}
          <div className="profile-sect-statue">
            <h4>Statue</h4>
            <Link>Christian McIlvenny</Link>

            {/* If user does not have a statue  */}
            {/* <p className="no-statue">NA</p>  */}
          </div>
        </div>

      </div>
    </div>

  </div>
  );
};

export default EditProfile;