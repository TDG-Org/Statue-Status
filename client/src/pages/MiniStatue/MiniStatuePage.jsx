import React from "react";

// Styles
import "./MiniStatuePage.scss";

// Navigation 
import { useNavigate } from "react-router-dom";

const MiniStatuePage = () => {

  const navigate = useNavigate();

  function handleNavigateClick() {
    navigate(-1);
  }

  return (
    <div className="MiniStatuePage page">
      <h1 className="fade-title">Mini Statue</h1>

      <hr />
      <p onClick={handleNavigateClick} className="go-back-btn"><i className="bi bi-arrow-left"></i> Home</p>

      <h2>Elon Musk</h2>

      <div className="container">

        <div className="pallet">

          <div className="mini-statue-card">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat adipisci, aperiam deserunt ipsam ad voluptatibus. Eos saepe sequi officia possimus aliquam in ipsam corrupti delectus maiores placeat neque, omnis vitae.</p>
            <br />

            <img className="mini-statue-img" src="https://static.foxbusiness.com/foxbusiness.com/content/uploads/2022/04/thumbnail_elon-musk-twitter-.jpg" alt="" />
          </div>

        </div>

        <div className="hello"></div>

      </div>

      <hr />

    </div>
  );
};

export default MiniStatuePage;