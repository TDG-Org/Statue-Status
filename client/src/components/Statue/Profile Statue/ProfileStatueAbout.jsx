import React, { useState, useRef } from "react";

const ProfileStatueAbout = () => {
  return (
    <div className="statue-about-sect">
    <p className="statue-sect-label">Who Am I?</p>
    <textarea className="statue-about" disabled value=" You can just call me Nate! My passion is building applications for clients, team collaboration, problem-solving, and designing.">
     
    </textarea>
    <button className="statue-about-edit">
      <i className="bi bi-pen"></i>
    </button>
  </div>
  );
};

export default ProfileStatueAbout;