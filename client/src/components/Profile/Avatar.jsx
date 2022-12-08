import React, { useState, useRef } from "react";

// Images/SVGs 
import { Pancake, Brilliance, Bravery, Male } from "../../assets/imgs";

const Avatar = () => {

  const [image, setImage] = useState(null);
  const inputProfileAvatarRef = useRef();
  const profileImgRef = useRef();

  const handleProfileImageChange = (event) => {
    setImage(event.target.files[0]);
    profileImgRef.current.src = URL.createObjectURL(event.target.files[0]);
  };

  const handleClick = () => {
    console.log("hello");
    inputProfileAvatarRef.current.click();
  };
  
  return (
    <div className="profile-sect-avatar">
      <div className="profile-sect-avatar-content" onClick={() => handleClick()}>
        <img
          alt=""
          src=""
          ref={profileImgRef}
          className="profile-avatar"
        />
        <div className="avatar-edit-overlay">Edit</div>
      </div>

      <input type="file" ref={inputProfileAvatarRef} onChange={handleProfileImageChange} hidden />

      {/* Change Avatar button  */}
      <button
        className="change-avatar"
        onClick={handleClick}
      >Change Avatar
      </button>
      
   </div>
  );
};

export default Avatar;