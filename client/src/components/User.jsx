import React from "react";

// Styles
import "../sass/components/User.scss";

const User = () => {
  return (
    <div className="user-avatar-section">

      {/* Top Section  */}
      <div className="user-avatar-sect-top">

      {/* badge section  */}
      <ul className="badge-sect">
        <li className="badge">

        </li>
      </ul>

      {/* Avatar Section  */}
      <div className="avatar-sect">
        <img src="" alt="" />   
      </div>

      </div>

      {/* Bottom Section  */}
      <div className="user-avatar-sect-bottom">

        {/* Username  */}
        <h3 className="username" id="username">Nate</h3>
        
        {/* User bio section  */}
        <p className="user-bio" id="userBio">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam saepe, dolor dolorem pariatur odit rem?
        </p>

        {/* User's Followers and Following Count  */}
        <div className="follow-count-wrapper">
          <p className="following-count"><span id="userFollowersCount">10k</span> Followers</p>
          <p className="following-count"><span id="userFollowingCount">15k</span> Following</p>
        </div>

        {/* Link  */}

      </div>


    </div>
  );
};

export default User;