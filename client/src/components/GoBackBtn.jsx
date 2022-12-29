import React from "react";

// Navigation 
import { useNavigate } from "react-router-dom";

const GoBackBtn = () => {

const navigate = useNavigate();

  // Function to go back previous page 
  function handleNavigateClick() {
   navigate(-1);
  }
  
  return (
    <p
      onClick={handleNavigateClick}
      className="go-back-btn"
    >
      <i className="bi bi-arrow-left"></i>
      Go Back
    </p>
  );
};

export default GoBackBtn;