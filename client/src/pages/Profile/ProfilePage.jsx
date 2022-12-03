import React from "react";

// Styles
import "./ProfilePage.scss";

// Images/SVGs 
import { Pancake } from "../../assets/imgs/";

const ProfilePage = () => {
  return (
    <div className="ProfilePage page">

      <h1>My Profile</h1>
      
      <hr />

        {/* Profile Section  */}
        <div className="profile-sect">
        <h3>Edit Profile</h3>

        <div className="pallet">

          {/* Avatar  */}
          <div className="profile-sect-avatar">
            <div className="profile-sect-avatar-content">
              <img src={Pancake} alt="" />
              <div className="avatar-edit-overlay"></div>
            </div>
            <h4>Edit Avatar</h4>
          </div>

          <div className="text-edit-side">
            {/* Username  */}
            <div className="profile-sect-name">
              <h4>Username</h4>
            </div>

            {/* Bio  */}
            <div className="profile-sect-bio">
              <h4>Bio</h4>
            </div>
          </div>

        </div>

      </div>

      {/* Statue Section  */}
      <div className="statue-sect">

      </div>

    </div>
  );
};

export default ProfilePage;