import React, { useState, useRef } from "react";

// Images/SVGs 
import { Male } from "../../assets/imgs";

const Avatar = () => {

  const [profileImage, setProfileImage] = useState(null);
  const inputProfileAvatarRef = useRef();
  const profileImgRef = useRef();

  const handleProfileImageChange = (event) => {
    setProfileImage(event.target.files[0]);
    profileImgRef.current.src = URL.createObjectURL(event.target.files[0]);
  };

  const handleProfileAvatarInputClick = () => {
    inputProfileAvatarRef.current.click();
  };
  
  return (
    <div className="profile-sect-avatar">
      <div className="profile-sect-avatar-content" onClick={() => handleProfileAvatarInputClick()}>
        <img
          src={Male}
          alt="User Avatar"
          ref={profileImgRef}
          className="profile-avatar"
        />
        <div className="avatar-edit-overlay">Edit</div>
      </div>

      <input type="file" ref={inputProfileAvatarRef} onChange={handleProfileImageChange} hidden />

      {/* Change Avatar button */}
      <button
        className="change-avatar"
        onClick={handleProfileAvatarInputClick}
      >Change Avatar
      </button>
      
   </div>
  );
};

export default Avatar;