import React from "react";

// Link 
import { Link } from "react-router-dom";

// Images/SVGs 
import { Pancake, Brilliance, Bravery } from "../assets/imgs";

const EditProfile = () => {
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
              <textarea type="text" className="bio-input" value="This is some test values" disabled></textarea>
              <button className="edit-bio-btn"><i className="bi bi-pen"></i></button>
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