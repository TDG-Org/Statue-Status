import React from "react";

// Styles
import "./ProfilePage.scss";

// Link 
import { Link } from "react-router-dom";

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

          <div className="container">

            {/* Avatar  */}
            <div className="profile-sect-avatar">
              <div className="profile-sect-avatar-content">
                <img src={Pancake} alt="" />
                <div className="avatar-edit-overlay"></div>
              </div>
              <h4>Avatar</h4>
            </div>

            {/* Right Side  */}
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

      </div>

      {/* Statue Section  */}
      <div className="statue-sect">
        <h3>My Statue</h3>

        <div className="pallet">

          <div className="container">

            {/* if user does not have a statute  */}
            <div className="no-statue">
              <h4>It appears that you don&apos;t have a statue yet!</h4>
              <p>Let&apos;s create one</p>
              <br />
              <p>Click here to learn more about statues if you&apos;re unfamiliar.</p>
              <button className="create-statue-btn">Create Statue</button>
            </div>

            {/* if the user has a statue  */}
            <div className="statue">
              <div className="primary-sect">
                {/* Full picture of user  */}
                <img src="" alt="" className="statue-img" />
                <h3>Christian Nathaniel McIlvenny</h3>
                <div className="badges-sect">
                  <div className="badge">
                    
                  </div>
                </div>
              </div>        
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ProfilePage;