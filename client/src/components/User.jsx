import React from "react";

// Styles
import "../sass/components/User.scss";

// Images/SVGs 
import { Bravery, Brilliance, Pancake } from "../assets/imgs";

const User = () => {
  return (
    <div className="user-avatar-section">

      {/* Top Section  */}
      <div className="user-avatar-sect-top">

      {/* badge section  */}
      <ul className="badge-sect">
        <li className="badge">
            <a href="#">
              <img src={Brilliance} alt="" />
          </a>
        </li>
        <li className="badge">
            <a href="#">
              <img src={Bravery} alt="" />
          </a>
        </li>
      </ul>

      {/* Avatar Section  */}
      <div className="avatar-sect">
          <img src={Pancake} alt="" />   
      </div>

      </div>

      {/* Bottom Section  */}
      <div className="user-avatar-sect-bottom">

        {/* Username  */}
        <h3 className="username"><span className="the-at">@</span><a href="#" id="username">Nate</a></h3>
        
        {/* User bio section  */}
        <p className="user-bio" id="userBio">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam saepe, dolor dolorem pariatur odit rem?
        </p>

        {/* User's Followers and Following Count  */}
        <div className="follow-count-wrapper">
          <p className="following-count"><span id="userFollowersCount">287m</span> Followers</p>
          <p className="following-count"><span id="userFollowingCount">1</span> Following</p>
        </div>

        {/* Links (Future)  */}

      </div>

    </div>
  );
};

export default User;