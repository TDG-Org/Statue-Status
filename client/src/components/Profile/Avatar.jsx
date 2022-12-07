import React from "react";

// Images/SVGs 
import { Pancake, Brilliance, Bravery } from "../../assets/imgs";

const Avatar = () => {
  return (
    <div className="profile-sect-avatar">
      <div className="profile-sect-avatar-content">
        <img src={Pancake} alt="" />
        <div className="avatar-edit-overlay">Edit</div>
      </div>

      {/* Change Avatar button  */}
      <button className="change-avatar">Change Avatar</button>
   </div>
  );
};

export default Avatar;