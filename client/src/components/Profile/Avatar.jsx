import React, { useState, useRef } from "react";

// Images/SVGs 
import { Pancake, Brilliance, Bravery, Male } from "../../assets/imgs";

const Avatar = () => {

  const [image, setImage] = useState(Male);
  const inputRef = useRef();
  const imgRef = useRef();

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
    imgRef.current.src = URL.createObjectURL(event.target.files[0]);
  };

  const handleClick = () => {
    inputRef.current.click();
    console.log(image);
  };
  
  return (
    <div className="profile-sect-avatar">
      <div className="profile-sect-avatar-content">
        <img
          alt=""
          src=""
          ref={imgRef} 
          onClick={handleClick}
          className="profile-avatar"
        />
        <div className="avatar-edit-overlay">Edit</div>
      </div>

      <input type="file" ref={inputRef} onChange={handleImageChange} hidden />

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